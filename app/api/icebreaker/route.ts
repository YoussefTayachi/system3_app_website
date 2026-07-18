import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SUPABASE_URL = "https://bjfksqgbnwzdfygipont.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZmtzcWdibnd6ZGZ5Z2lwb250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4ODE2MjEsImV4cCI6MjA5OTQ1NzYyMX0.fQqRG_WtTpJrqN535sqRKg1WLTTS3KAFEo7nNOn9wBw";

function isSafeUrl(raw: string): string | null {
  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    const host = url.hostname.toLowerCase();
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "0.0.0.0" ||
      host === "169.254.169.254" ||
      host.startsWith("10.") ||
      host.startsWith("192.168.") ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(host) ||
      host.endsWith(".local")
    ) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const companyName = String(body.companyName || "").trim().slice(0, 200);
    const companyUrlRaw = String(body.companyUrl || "").trim().slice(0, 300);
    const companyDescription = String(body.companyDescription || "").trim().slice(0, 2000);
    const email = String(body.email || "").trim().slice(0, 300);
    const consent = body.consent === true;
    const honeypot = String(body.hp || "");

    // Bot caught the hidden field, pretend success without doing any real work.
    if (honeypot) {
      return NextResponse.json({ icebreaker: "Danke! Wir melden uns bald bei dir." });
    }

    if (!companyName || !email || !consent) {
      return NextResponse.json(
        { error: "Bitte Firmenname und E-Mail angeben und der Kontaktaufnahme zustimmen." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
    }

    // Rate limit: max 3 Anfragen pro E-Mail in 24h, über eine RPC-Funktion,
    // die nur eine Anzahl zurückgibt, keine Zeilen (kein SELECT-Zugriff für anon nötig).
    try {
      const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/count_recent_website_leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ p_email: email }),
      });
      if (rpcRes.ok) {
        const count = await rpcRes.json();
        if (typeof count === "number" && count >= 3) {
          return NextResponse.json(
            { error: "Zu viele Anfragen mit dieser E-Mail-Adresse. Versuch's morgen nochmal." },
            { status: 429 }
          );
        }
      }
    } catch {
      // Rate-limit check failed, lieber trotzdem weitermachen als den Nutzer blockieren.
    }

    const companyUrl = companyUrlRaw ? isSafeUrl(companyUrlRaw) : null;

    let context = companyDescription;
    if (companyUrl) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const pageRes = await fetch(companyUrl, { signal: controller.signal });
        clearTimeout(timeout);
        if (pageRes.ok) {
          const html = await pageRes.text();
          const text = stripHtml(html).slice(0, 3000);
          context = context ? `${context} ${text}` : text;
        }
      } catch {
        // Website nicht erreichbar, wir arbeiten einfach mit dem, was wir sonst haben.
      }
    }
    if (!context) context = `Firma namens ${companyName}.`;

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Die Live-Demo ist gerade nicht verfügbar. Bucht gerne direkt eine Demo." },
        { status: 503 }
      );
    }

    const systemPrompt =
      "Du schreibst genau einen kurzen Icebreaker-Satz (Deutsch, maximal 30 Wörter) für eine Cold-E-Mail. " +
      "Nutze ausschließlich Informationen aus dem gegebenen Firmentext, erfinde keine Fakten. " +
      "Kein Smalltalk, keine Anrede, keine Grußformel, kein Hype. Direkt, konkret, klingt nach echter Recherche. " +
      "Antworte nur mit dem einen Satz, ohne Anführungszeichen.";

    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Firmenname: ${companyName}\nInformationen zur Firma:\n${context}` },
        ],
        max_tokens: 120,
        temperature: 0.6,
      }),
    });

    if (!aiRes.ok) {
      return NextResponse.json(
        { error: "Der Icebreaker konnte gerade nicht erstellt werden. Versuch's gleich nochmal." },
        { status: 502 }
      );
    }

    const aiJson = await aiRes.json();
    const icebreaker: string = aiJson?.choices?.[0]?.message?.content?.trim() || "";

    // Lead speichern, best effort. Schlägt das fehl, bekommt der Nutzer trotzdem sein Ergebnis.
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/website_leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          company_name: companyName,
          company_url: companyUrl,
          company_description: companyDescription || null,
          email,
          consent: true,
          icebreaker,
        }),
      });
    } catch {
      // ignore, Icebreaker wurde trotzdem generiert
    }

    return NextResponse.json({ icebreaker });
  } catch {
    return NextResponse.json({ error: "Etwas ist schiefgelaufen. Versuch's gleich nochmal." }, { status: 500 });
  }
}
