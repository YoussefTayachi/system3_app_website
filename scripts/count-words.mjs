/* Zaehlt die sichtbaren Woerter einer ausgelieferten Seite.
 *
 * Existiert, weil "weniger Text" sonst Gefuehlssache bleibt. Die Lehre aus
 * dem CTS-Fall (Lehren/cts-cement/erster-wurf.md): gezaehlt wird, nicht
 * geschaetzt, und zwar auf der ausgelieferten Seite, nicht in der
 * Woerterbuchdatei -- dort steht auch, was gerade auf keiner Seite steht.
 *
 * Nicht gezaehlt wird, was ein Leser nicht liest: Skript, Stil, SVG,
 * aria-hidden, und der zugeklappte Inhalt eines details-Elements (die
 * summary-Zeile zaehlt, die Antwort dahinter nicht).
 *
 *   node scripts/count-words.mjs [http://localhost:3100] [pfad ...]
 */

const args = process.argv.slice(2);
const base = args[0]?.startsWith("http") ? args.shift() : "http://localhost:3100";
const pfade = args.length ? args : ["/"];

// Bloecke, deren Inhalt komplett wegfaellt.
const STUMM = /<(script|style|noscript|svg|template)\b[^>]*>[\s\S]*?<\/\1>/gi;

function sichtbarerText(html) {
  let s = html;

  // Nur der body. Der Kopf enthaelt title und meta, beides liest niemand auf
  // der Seite.
  const body = s.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (body) s = body[1];

  s = s.replace(STUMM, " ");

  // Zugeklappte FAQ: summary bleibt, der Rest des details faellt weg.
  s = s.replace(/<details\b[^>]*>([\s\S]*?)<\/details>/gi, (_, inner) => {
    const sum = inner.match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i);
    return sum ? sum[1] : " ";
  });

  // aria-hidden Elemente. Ein Durchgang je Verschachtelungsebene, weil
  // Regex nicht zaehlen kann; drei reichen fuer diese Seite.
  for (let i = 0; i < 3; i++) {
    s = s.replace(
      /<(\w+)\b[^>]*aria-hidden=["']?true["']?[^>]*>(?:(?!<\1[\s>])[\s\S])*?<\/\1>/gi,
      " ",
    );
  }
  s = s.replace(/<(\w+)\b[^>]*aria-hidden=["']?true["']?[^>]*\/?>/gi, " ");

  // sr-only ist fuer Vorleseprogramme da, nicht fuer das Auge.
  s = s.replace(
    /<(\w+)\b[^>]*class=["'][^"']*\bsr-only\b[^"']*["'][^>]*>(?:(?!<\1[\s>])[\s\S])*?<\/\1>/gi,
    " ",
  );

  // Gemessen wird bei 1440 px -- so steht es in der Pruefliste
  // (Website_Business/Lehren/checkliste.md), und so hat der Mentor die
  // 662 Woerter des CTS-Entwurfs gezaehlt. Was `lg:hidden` traegt, steht bei
  // 1440 px nicht auf der Seite: die Vergleichstabelle auf /funktionen gibt
  // ihre dreizehn Zeilen zweimal aus, einmal als Tabelle und einmal als
  // Kartenliste fuer schmale Geraete. Beide zu zaehlen haette den Abschnitt
  // um 150 Woerter zu teuer gemacht und zu einer Kuerzung gefuehrt, die dem
  // Leser nichts bringt.
  s = s.replace(
    /<(\w+)\b[^>]*class=["'][^"']*\blg:hidden\b[^"']*["'][^>]*>(?:(?!<\1[\s>])[\s\S])*?<\/\1>/gi,
    " ",
  );

  s = s.replace(/<[^>]+>/g, " ");
  s = s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&[a-z]+;|&#\d+;/gi, " ");

  return s.replace(/\s+/g, " ").trim();
}

// Ein Wort ist, was mindestens einen Buchstaben oder eine Ziffer hat. Pfeile,
// Aufzaehlungszeichen und einzelne Satzzeichen zaehlen nicht mit.
const zaehle = (text) =>
  text.split(" ").filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

let summe = 0;
const zeilen = [];
for (const pfad of pfade) {
  const res = await fetch(base + pfad, { headers: { "user-agent": "count-words" } });
  if (!res.ok) {
    zeilen.push([pfad, `HTTP ${res.status}`]);
    continue;
  }
  const n = zaehle(sichtbarerText(await res.text()));
  summe += n;
  zeilen.push([pfad, String(n)]);
}

const breite = Math.max(...zeilen.map(([p]) => p.length));
for (const [pfad, n] of zeilen) console.log(pfad.padEnd(breite + 2) + n.padStart(6));
if (zeilen.length > 1) console.log("-".repeat(breite + 8) + "\n" + "Summe".padEnd(breite + 2) + String(summe).padStart(6));
