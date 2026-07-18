const BOOKING_URL = "#book-a-demo"; // TODO: Cal.com/Calendly-Link einsetzen, sobald eingerichtet

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
        3
      </div>
      <span className="text-base font-semibold tracking-tight text-ink">System3</span>
    </div>
  );
}

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      className={
        "inline-flex items-center justify-center rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-surface shadow-sm transition-all hover:opacity-85 active:scale-[0.99] " +
        className
      }
    >
      Demo buchen
    </a>
  );
}

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-edge2 bg-panel2 text-center">
      <div>
        <p className="text-sm font-medium text-faint">Screenshot: {label}</p>
        <p className="mt-1 text-xs text-mute">wird eingesetzt, sobald verfügbar</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="mb-2 text-xs font-medium uppercase tracking-wide text-faint">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
    </div>
  );
}

const painPoints = [
  {
    title: "Stunden im Research versenkt",
    body: "Google, LinkedIn, Impressum-Suche, E-Mail raten — bevor die erste Mail überhaupt raus ist, ist schon der halbe Tag weg.",
  },
  {
    title: "Vier Abos für einen Workflow",
    body: "Ein Tool für Kontakte, eins für Verifizierung, eins für Personalisierung, eins für den Versand — dazwischen CSV-Dateien von Hand exportiert.",
  },
  {
    title: "Bounce-Raten, die die Domain ruinieren",
    body: "Ungeprüfte Adressen killen die Zustellrate — oft merkt man's erst, wenn die Antwortquote plötzlich einbricht.",
  },
  {
    title: "Generische Mails, die jeder erkennt",
    body: "„Hi {{Firstname}}, ich hab gesehen dass {{Company}}...“ mit Textbaustein-Personalisierung performt schlechter als gar keine.",
  },
];

const steps = [
  { n: "1", title: "Suchen", body: "Nische + Ort eingeben — System3 findet passende Unternehmen automatisch (lokal über Google Maps oder breit über eine Firmendatenbank)." },
  { n: "2", title: "Finden", body: "Entscheider:innen und E-Mail-Adressen werden automatisch ermittelt." },
  { n: "3", title: "Verifizieren", body: "Jede Adresse wird geprüft, bevor sie in eine Kampagne geht." },
  { n: "4", title: "Personalisieren & Exportieren", body: "Eine KI schreibt pro Lead eine individuelle Icebreaker-Zeile — danach direkt exportierbar, auch im Instantly-fertigen Format." },
];

const usps = [
  { title: "Alles in einem Tool", body: "Suche, Anreicherung, Verifizierung, Personalisierung und Export laufen in einem einzigen Workflow. Kein CSV-Hin-und-Her zwischen vier Abos mehr." },
  { title: "Individuelle KI-Zusammenfassung pro Lead", body: "Für jedes Unternehmen wird automatisch eine faktenbasierte Zusammenfassung erstellt — Grundlage für einen Icebreaker, der wirklich nach Recherche klingt. Ton, Regeln und verbotene Wörter sind vollständig einstellbar." },
  { title: "E-Mail-Verifizierung eingebaut", body: "Jede gefundene Adresse wird geprüft, bevor sie in eine Kampagne geht — schützt eure Sender-Reputation, ohne ein zusätzliches Tool." },
  { title: "Bring Your Own Key: volle Kostentransparenz", body: "Ihr zahlt die tatsächlichen API-Kosten, keine versteckten Aufschläge. Im Dashboard seht ihr live, was eine Suche tatsächlich gekostet hat." },
  { title: "DSGVO-bewusst gebaut", body: "EU-Hosting, verschlüsselte Speicherung von Zugangsdaten, Datensparsamkeit von Grund auf mitgedacht." },
  { title: "Direkter Draht zum Team", body: "Kein Ticket-System. Ihr sprecht direkt mit den Leuten, die das Tool gebaut haben — inklusive echter Anpassungen auf Wunsch." },
];

const comparisonRows: [string, string, string][] = [
  ["Preismodell", "Nur tatsächliche API-Kosten (BYOK)", "Mehrere Pauschal-Abos gleichzeitig"],
  ["Alles in einem Workflow", "Ja", "Nein — manueller Export/Import zwischen Tools"],
  ["KI-Personalisierung pro Lead", "Ja, mit einstellbaren Regeln", "Teilweise, oft separates Tool nötig"],
  ["E-Mail-Verifizierung eingebaut", "Ja", "Separates Tool nötig"],
  ["EU-Hosting", "Ja", "Unterschiedlich, meist US-Anbieter"],
  ["Support", "Direkter Draht zum Gründerteam", "Ticket-System"],
];

const faqs = [
  {
    q: "Ist das DSGVO-konform?",
    a: "Die App selbst ist datenschutzbewusst gebaut (EU-Hosting, Verschlüsselung, Datensparsamkeit). Wie ihr die gefundenen Kontakte anschreibt, unterliegt weiterhin den für euch geltenden Regeln zur Direktwerbung — dazu beraten wir euch im Gespräch gerne konkret für eure Situation.",
  },
  {
    q: "Was kostet das wirklich?",
    a: "Ihr zahlt eure eigenen API-Kosten, transparent im Dashboard sichtbar, plus eine feste Nutzungsgebühr, die wir im Gespräch für eure Größe festlegen. Keine versteckten Aufschläge auf die API-Nutzung.",
  },
  {
    q: "Brauche ich eigene API-Keys? Ist das kompliziert?",
    a: "Einmal in den Einstellungen hinterlegt, läuft alles automatisch. Wir zeigen es euch in der Demo in unter 5 Minuten.",
  },
  {
    q: "Wie unterscheidet sich das von Apollo/Hunter/Instantly?",
    a: "Die machen jeweils einen Teil des Workflows gut — System3 verbindet Suche, Anreicherung, Verifizierung und Personalisierung, damit ihr nicht zwischen mehreren Tools hin- und herexportiert.",
  },
  {
    q: "Wie schnell bin ich startklar?",
    a: "API-Keys eintragen, erste Suche starten — beides gemeinsam in einer Demo machbar.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="border-b border-edge/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <CTAButton />
        </div>
      </header>

      {/* Hero */}
      <section className="dot-grid border-b border-edge/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="fade-up">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Finde und kontaktiere neue Kunden, ohne dafür vier Tools zu bezahlen.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-soft sm:text-lg">
              System3 sucht Unternehmen, findet die richtigen Ansprechpartner, verifiziert die
              E-Mail-Adressen und schreibt für jeden Lead eine individuelle Icebreaker-Zeile —
              alles in einem Workflow, alles in einer App.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <CTAButton />
              <span className="text-xs text-mute">15 Minuten, wir zeigen es live an eurer eigenen Nische.</span>
            </div>
          </div>
          <div className="fade-up">
            <ScreenshotPlaceholder label="Leads-Tabelle" />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title="Kommt dir bekannt vor?" />
        <div className="grid gap-5 sm:grid-cols-2">
          {painPoints.map((p) => (
            <div key={p.title} className="rounded-xl border border-edge/60 bg-panel p-6">
              <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading title="Ein Workflow. Vier Schritte. Keine Zwischenexporte." />
          <div className="grid gap-8 lg:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-surface">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <ScreenshotPlaceholder label="Suchmaske (Google Maps / Firmendatenbank)" />
            <ScreenshotPlaceholder label="AI-Agent-Konfiguration" />
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Warum System3" title="Warum System3 und nicht vier einzelne Tools" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((u) => (
            <div key={u.title} className="rounded-xl border border-edge/60 bg-panel p-6">
              <h3 className="text-sm font-semibold text-ink">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof stat */}
      <section className="border-y border-edge/60 bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-medium uppercase tracking-wide text-mute">Kein Testimonial — echte Zahl aus dem eigenen Account</p>
          <p className="mt-4 text-2xl font-semibold leading-snug text-surface sm:text-3xl">
            ≈ 33 Stunden manuelle Recherche gespart — rund 1.500&nbsp;€ Arbeitskosten — bei $2,75 tatsächlichen API-Kosten.
          </p>
          <p className="mt-4 text-sm text-mute">So sieht das für eine einzelne Suche im eigenen Dashboard aus — live, nicht nachgerechnet.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title="Im Vergleich" />
        <div className="overflow-x-auto rounded-xl border border-edge/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-edge/60 bg-panel2 text-left">
                <th className="px-5 py-3 font-medium text-faint"> </th>
                <th className="px-5 py-3 font-medium text-ink">System3</th>
                <th className="px-5 py-3 font-medium text-faint">Hunter + Apollo + Instantly einzeln</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([label, s3, other], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-panel" : "bg-panel/60"}>
                  <td className="border-t border-edge/60 px-5 py-3 font-medium text-soft">{label}</td>
                  <td className="border-t border-edge/60 px-5 py-3 text-ink">{s3}</td>
                  <td className="border-t border-edge/60 px-5 py-3 text-faint">{other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust / DSGVO */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <SectionHeading title="Datenschutz ist keine Checkbox, sondern Teil der Architektur" />
          <p className="text-left text-sm leading-relaxed text-soft sm:text-base">
            System3 läuft vollständig auf EU-Servern (Frankfurt). Zugangsdaten zu euren eigenen
            API-Keys werden verschlüsselt gespeichert, nicht im Klartext. Ihr behaltet die volle
            Kontrolle über eure eigenen Zugänge — System3 speichert nur, was für den Betrieb
            tatsächlich nötig ist.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-faint">
            <a href="/datenschutz" className="hover:text-ink">Datenschutzerklärung</a>
            <span>·</span>
            <a href="/agb" className="hover:text-ink">AGB</a>
            <span>·</span>
            <a href="/avv" className="hover:text-ink">AVV</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <SectionHeading title="Warum wir das gebaut haben" />
        <p className="text-sm leading-relaxed text-soft sm:text-base">
          Wir sind drei aus Wien, Anfang 20. System3 haben wir zuerst für uns selbst gebaut, weil
          wir für unsere eigene Kundenakquise genau das gesucht haben, was es so nicht gab: ein
          Tool statt vier. Wir suchen jetzt die ersten Partneragenturen, die es mit uns gemeinsam
          scharf machen.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-edge/60 bg-panel2">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <SectionHeading title="Häufige Fragen" />
          <div className="divide-y divide-edge/60 rounded-xl border border-edge/60 bg-panel">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-4">
                <summary className="cursor-pointer list-none text-sm font-medium text-ink marker:content-none">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Bereit für die ersten Leads ohne manuelles Research?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">
          15 Minuten, wir zeigen euch live, wie System3 für eure Nische aussieht — kein
          Verkaufsgespräch von der Stange, sondern eine echte Suche mit euren eigenen Kriterien.
        </p>
        <CTAButton className="mt-8" />
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} System3 · Wien, Österreich</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/impressum" className="hover:text-ink">Impressum</a>
            <a href="/datenschutz" className="hover:text-ink">Datenschutzerklärung</a>
            <a href="/agb" className="hover:text-ink">AGB</a>
            <a href="mailto:youtaybusiness@gmail.com" className="hover:text-ink">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
