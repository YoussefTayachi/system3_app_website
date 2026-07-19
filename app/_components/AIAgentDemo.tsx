"use client";

import { useState, type FormEvent } from "react";

export function AIAgentDemo() {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!companyName.trim() || !email.trim() || !consent) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/icebreaker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyName, companyUrl, companyDescription, email, consent, hp }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Etwas ist schiefgelaufen. Versuch's gleich nochmal.");
        setStatus("error");
        return;
      }
      setResult(data.icebreaker);
      setStatus("done");
    } catch {
      setErrorMsg("Etwas ist schiefgelaufen. Versuch's gleich nochmal.");
      setStatus("error");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-lg border border-edge2 bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sky-400";

  if (status === "done") {
    return (
      <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
            {companyName.trim().slice(0, 2).toUpperCase() || "T"}
          </div>
          <div>
            <p className="text-sm font-medium text-ink">{companyName}</p>
            <p className="text-xs text-mute">Euer automatisch generierter Icebreaker</p>
          </div>
        </div>
        <p className="mt-4 rounded-lg bg-panel2 p-4 text-sm leading-relaxed text-ink">„{result}“</p>
        <p className="mt-4 text-xs text-mute">
          Danke, das war's schon. Wir melden uns bald bei dir per E-Mail und zeigen dir, wie das für eure ganze
          Zielgruppe automatisch läuft.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-soft">Firmenname *</label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="z. B. Muster Agentur GmbH"
              className={fieldClass}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-soft">Eure Website (optional)</label>
            <input
              type="text"
              value={companyUrl}
              onChange={(e) => setCompanyUrl(e.target.value)}
              placeholder="www.eure-firma.at"
              className={fieldClass}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-soft">Kurzbeschreibung (falls keine Website)</label>
            <textarea
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              placeholder="Was macht eure Firma, für wen?"
              rows={2}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          <div>
            <label className="text-xs font-medium text-soft">E-Mail *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="du@eure-firma.at"
              className={fieldClass}
            />
            {/* Honeypot-Feld, für echte Nutzer unsichtbar */}
            <input
              type="text"
              value={hp}
              onChange={(e) => setHp(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <label className="mt-4 flex items-start gap-2.5 text-xs leading-relaxed text-soft">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-edge3"
              />
              <span>
                Ich stimme zu, dass Thaw mich per E-Mail zum Produkt kontaktieren darf. Jederzeit widerrufbar, siehe{" "}
                <a href="/datenschutz" className="underline hover:text-ink">Datenschutzerklärung</a>.
              </span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              disabled={status === "loading" || !companyName.trim() || !email.trim() || !consent}
              className="w-full rounded-lg bg-ink px-5 py-3 text-sm font-medium text-surface shadow-sm transition-all hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              {status === "loading" ? "Wird generiert..." : "Kostenlosen Icebreaker generieren"}
            </button>
            {status === "error" && <p className="mt-2 text-xs text-red-600">{errorMsg}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
