const BOOKING_URL = "#book-a-demo"; // TODO: Cal.com/Calendly-Link einsetzen, sobald eingerichtet

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
        T
      </div>
      <span className="text-base font-semibold tracking-tight text-ink">Thaw</span>
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

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-edge/60 shadow-sm transition-shadow hover:shadow-md"
      title="Zum Vergrößern klicken"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full transition-transform duration-300 group-hover:scale-[1.02]" />
    </a>
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

function StatNote({ text, source }: { text: string; source: string }) {
  return (
    <div className="mt-4 rounded-lg bg-panel2 p-4">
      <p className="text-sm leading-relaxed text-ink">{text}</p>
      <p className="mt-1.5 text-xs text-mute">Quelle: {source}</p>
    </div>
  );
}

const navLinks = [
  { href: "#produkt", label: "Produkt" },
  { href: "#integrationen", label: "Integrationen" },
  { href: "#vergleich", label: "Vergleich" },
  { href: "#faq", label: "FAQ" },
];

const painPoints = [
  {
    title: "Stunden im Research versenkt",
    body: "Google, LinkedIn, Impressum-Suche, E-Mail raten: Bevor die erste Mail überhaupt raus ist, ist schon der halbe Tag weg.",
  },
  {
    title: "Vier Abos für einen Workflow",
    body: "Ein Tool für Kontakte, eins für Verifizierung, eins für Personalisierung, eins für den Versand, dazwischen CSV-Dateien von Hand exportiert.",
  },
  {
    title: "Bounce-Raten, die die Domain ruinieren",
    body: "Ungeprüfte Adressen killen die Zustellrate. Oft merkt man's erst, wenn die Antwortquote plötzlich einbricht.",
  },
  {
    title: "Generische Mails, die jeder erkennt",
    body: "„Hi {{Firstname}}, ich hab gesehen dass {{Company}}...“ mit Textbaustein-Personalisierung performt schlechter als gar keine.",
  },
];

const steps = [
  { n: "1", title: "Suchen", body: "Nische und Ort eingeben: Thaw findet passende Unternehmen automatisch, lokal über Google Maps oder breit über eine Firmendatenbank." },
  { n: "2", title: "Finden", body: "Entscheider:innen und E-Mail-Adressen werden automatisch ermittelt." },
  { n: "3", title: "Verifizieren", body: "Jede Adresse wird geprüft, bevor sie in eine Kampagne geht." },
  { n: "4", title: "Personalisieren & Exportieren", body: "Eine KI schreibt pro Lead eine individuelle Icebreaker-Zeile, danach direkt exportierbar, auch im Instantly-fertigen Format." },
];

const usps = [
  {
    title: "Alles in einem Tool",
    body: "Suche, Anreicherung, Verifizierung, Personalisierung und Export laufen in einem einzigen Workflow. Kein CSV-Hin-und-Her zwischen vier Abos mehr.",
  },
  {
    title: "Individuelle KI-Zusammenfassung pro Lead",
    body: "Für jedes Unternehmen wird automatisch eine faktenbasierte Zusammenfassung erstellt, Grundlage für einen Icebreaker, der wirklich nach Recherche klingt. Ton, Regeln und verbotene Wörter sind vollständig einstellbar.",
    stat: "Tief personalisierte E-Mails erreichen 17 bis 18% Antwortquote, gegenüber 7 bis 9% bei einfacher oder keiner Personalisierung. Nur 5% der Versender personalisieren überhaupt jede einzelne E-Mail, genau diesen Aufwand automatisiert Thaw.",
    source: "Woodpecker, Auswertung von über 20 Mio. E-Mails, 2026",
  },
  {
    title: "E-Mail-Verifizierung eingebaut",
    body: "Jede gefundene Adresse wird geprüft, bevor sie in eine Kampagne geht. Das schützt eure Sender-Reputation, ohne ein zusätzliches Tool.",
    stat: "Verifizierte Listen erreichen etwa die doppelte Antwortquote unverifizierter Listen. Ab rund 5% Bounce-Rate drosseln E-Mail-Provider aktiv die Zustellung.",
    source: "Branchen-Benchmarks E-Mail-Deliverability, 2026",
  },
  {
    title: "Bring Your Own Key: volle Kostentransparenz",
    body: "Ihr zahlt die tatsächlichen API-Kosten, keine versteckten Aufschläge. Im Dashboard seht ihr live, was eine Suche tatsächlich gekostet hat.",
  },
  {
    title: "DSGVO-bewusst gebaut",
    body: "EU-Hosting, verschlüsselte Speicherung von Zugangsdaten, Datensparsamkeit von Grund auf mitgedacht.",
  },
  {
    title: "Direkter Draht zum Team",
    body: "Kein Ticket-System. Ihr sprecht direkt mit den Leuten, die das Tool gebaut haben, inklusive echter Anpassungen auf Wunsch.",
  },
];

const integrations = [
  { name: "Instantly", note: "CSV-Import, Auto-Mapping" },
  { name: "Smartlead", note: "CSV-Import" },
  { name: "Lemlist", note: "CSV-Import" },
  { name: "HubSpot", note: "CSV-Import" },
  { name: "Pipedrive", note: "CSV-Import" },
  { name: "Salesforce", note: "CSV-Import" },
  { name: "Excel / Sheets", note: "Excel-CSV" },
  { name: "Zapier", note: "geplant" },
];

const trustBadges = [
  {
    title: "EU-Hosting",
    body: "Server in Frankfurt, keine Datenübertragung außerhalb der EU.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Verschlüsselte API-Keys",
    body: "Eure Zugangsdaten werden verschlüsselt gespeichert, nie im Klartext.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "BYOK-Kostenkontrolle",
    body: "Volle Transparenz über eure tatsächlichen API-Kosten, live im Dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 9.2c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6v1.4M12 16.6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const comparisonRows: [string, string, string][] = [
  ["Preismodell", "Nur tatsächliche API-Kosten (BYOK)", "Mehrere Pauschal-Abos gleichzeitig"],
  ["Alles in einem Workflow", "Ja", "Nein, manueller Export/Import zwischen Tools"],
  ["KI-Personalisierung pro Lead", "Ja, mit einstellbaren Regeln", "Teilweise, oft separates Tool nötig"],
  ["E-Mail-Verifizierung eingebaut", "Ja", "Separates Tool nötig"],
  ["EU-Hosting", "Ja", "Unterschiedlich, meist US-Anbieter"],
  ["Support", "Direkter Draht zum Gründerteam", "Ticket-System"],
];

const faqs = [
  {
    q: "Ist das DSGVO-konform?",
    a: "Die App selbst ist datenschutzbewusst gebaut (EU-Hosting, Verschlüsselung, Datensparsamkeit). Wie ihr die gefundenen Kontakte anschreibt, unterliegt weiterhin den für euch geltenden Regeln zur Direktwerbung. Dazu beraten wir euch im Gespräch gerne konkret für eure Situation.",
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
    a: "Die machen jeweils einen Teil des Workflows gut. Thaw verbindet Suche, Anreicherung, Verifizierung und Personalisierung, damit ihr nicht zwischen mehreren Tools hin- und herexportiert.",
  },
  {
    q: "Wie schnell bin ich startklar?",
    a: "API-Keys eintragen, erste Suche starten, beides gemeinsam in einer Demo machbar.",
  },
  {
    q: "Woher kommen die Zahlen zum Skalierungspotenzial?",
    a: "Aus einer offen gelegten Beispielrechnung, nicht aus einer Zusicherung: Versandkapazität nach Instantly-Hypergrowth-Plan, Recherchezeit und Antwortquote nach branchenüblichen Annahmen. Die Rechnung samt Annahmen steht direkt neben den Zahlen.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-soft md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink">{l.label}</a>
            ))}
          </nav>
          <CTAButton />
        </div>
      </header>

      {/* Hero */}
      <section className="dot-grid border-b border-edge/60">
        <div className="mx-auto max-w-[1267px] px-4 py-20 sm:px-6 lg:py-24">
          <div className="fade-up mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Finde und kontaktiere neue Kunden, ohne dafür vier Tools zu bezahlen.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-soft sm:text-lg">
              Thaw sucht Unternehmen, findet die richtigen Ansprechpartner, verifiziert die
              E-Mail-Adressen und schreibt für jeden Lead eine individuelle Icebreaker-Zeile,
              alles in einem Workflow, alles in einer App.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <CTAButton />
              <span className="text-xs text-mute">15 Minuten, wir zeigen es live an eurer eigenen Nische.</span>
            </div>
            <p className="mt-6 text-xs text-mute">
              Marketing- und Werbeagenturen erzielen im Schnitt 42&nbsp;€ Rückfluss pro investiertem Euro in
              E-Mail-Marketing. Quelle: Litmus, State of Email 2025.
            </p>
          </div>
          <div className="fade-up mt-10">
            <Screenshot src="/screenshots/alle-leads.png" alt="Thaw Leads-Tabelle mit Firmen-Logos, Kontaktanzahl und E-Mail-Status" />
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
      <section id="produkt" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-[1267px] px-4 py-20 sm:px-6">
          <SectionHeading title="Ein Workflow. Vier Schritte. Keine Zwischenexporte." />

          {/* Illustrated flow instead of a dense screenshot */}
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-xl border border-edge/60 bg-panel p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-surface">
                  {s.n}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.body}</p>
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-edge3 lg:block">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <StatNote
            text="Kampagnen mit unter 50 gezielt ausgewählten Kontakten erzielen im Schnitt 5,8% Antwortquote, gegenüber 2,1% bei Listen mit über 1.000 Kontakten. Nischen- und Ort-Suche statt Massenliste zahlt sich rechnerisch aus."
            source="Woodpecker, mit Verweis auf Belkins-Analyse von 16,5 Mio. E-Mails, 2026"
          />

          {/* Standalone illustrated icebreaker mockup */}
          <div className="mt-10 grid gap-6 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-ink">Beispiel: automatisch generierter Icebreaker</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soft">
                Fiktives Beispiel zur Veranschaulichung. Jede echte Zeile basiert auf recherchierten
                Fakten zum jeweiligen Unternehmen, nicht auf einem Textbaustein.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-edge/60 bg-panel p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">
                    MA
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">Muster Agentur GmbH</p>
                    <p className="text-xs text-mute">Website-Text und Firmenbeschreibung analysiert</p>
                  </div>
                </div>
                <p className="mt-4 rounded-lg bg-panel2 p-4 text-sm leading-relaxed text-ink">
                  „Ihr habt euer Leistungsangebot letztes Jahr um Performance-Marketing erweitert.
                  Bei zehn neuen Kampagnen pro Monat wird die Lead-Recherche für neue Kund:innen
                  schnell zum Flaschenhals.“
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent deep-dive */}
      <section className="mx-auto max-w-[1267px] px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Personalisierung"
          title="Der KI-Agent ist keine Blackbox"
        />
        <div className="max-w-2xl">
          <p className="text-sm leading-relaxed text-soft sm:text-base">
            Die meisten Tools spucken einen Icebreaker aus, ohne dass ihr wisst, worauf er sich
            stützt oder wie er klingt. Bei Thaw stellt ihr das selbst ein: pro Nische, pro
            Kampagne, so oft ihr wollt.
          </p>
          <ul className="mt-6 grid gap-4 text-sm text-soft sm:grid-cols-2">
            <li className="flex gap-3">
              <span className="mt-0.5 text-ink">•</span>
              <span><span className="font-medium text-ink">Datenquelle wählen:</span> Firmenbeschreibung, Website-Text oder beides kombiniert.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-ink">•</span>
              <span><span className="font-medium text-ink">System-Prompt vollständig editierbar:</span> ihr bestimmt Ton, Regeln und Struktur, kein starres Template.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-ink">•</span>
              <span><span className="font-medium text-ink">Verbotene Wörter definieren:</span> damit kein Icebreaker nach generischer KI klingt.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-ink">•</span>
              <span><span className="font-medium text-ink">Live-Test an einer echten, recherchierten Firma:</span> bevor irgendetwas gespeichert oder verschickt wird.</span>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <Screenshot src="/screenshots/ai-agent.png" alt="Thaw AI-Agent-Konfiguration: Datenquelle, System-Prompt, Live-Test" />
        </div>
      </section>

      {/* Integrations */}
      <section id="integrationen" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Passt in euren Stack" title="Exportiert direkt in die Tools, die ihr schon nutzt" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {integrations.map((i) => (
              <div key={i.name} className="rounded-xl border border-edge/60 bg-panel p-5 text-center">
                <p className="text-sm font-semibold text-ink">{i.name}</p>
                <p className="mt-1 text-xs text-mute">{i.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Warum Thaw" title="Warum Thaw und nicht vier einzelne Tools" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((u) => (
            <div key={u.title} className="rounded-xl border border-edge/60 bg-panel p-6">
              <h3 className="text-sm font-semibold text-ink">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{u.body}</p>
              {u.stat && (
                <div className="mt-4 border-t border-edge/60 pt-4">
                  <p className="text-xs leading-relaxed text-soft">{u.stat}</p>
                  <p className="mt-1.5 text-xs text-mute">Quelle: {u.source}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Proof stat (real) */}
      <section className="border-y border-edge/60 bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-medium uppercase tracking-wide text-mute">Kein Testimonial, echte Zahl aus dem eigenen Account</p>
          <p className="mt-4 text-2xl font-semibold leading-snug text-surface sm:text-3xl">
            ≈ 33 Stunden manuelle Recherche gespart, rund 1.500&nbsp;€ Arbeitskosten, bei $2,75 tatsächlichen API-Kosten.
          </p>
          <p className="mt-4 text-sm text-mute">So sieht das für eine einzelne Suche im eigenen Dashboard aus: live, nicht nachgerechnet.</p>
        </div>
      </section>

      {/* Scaling potential (calculated, clearly labeled) */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Skalierungspotenzial" title="Was rechnerisch möglich ist, wenn ihr Vollgas gebt" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <p className="text-2xl font-semibold text-ink">125.000</p>
            <p className="mt-1 text-sm text-soft">personalisierte E-Mails pro Monat versendbar</p>
          </div>
          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <p className="text-2xl font-semibold text-ink">bis 125.000</p>
            <p className="mt-1 text-sm text-soft">erreichbare Unternehmen pro Monat</p>
          </div>
          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <p className="text-2xl font-semibold text-ink">≈ 16.700 Std.</p>
            <p className="mt-1 text-sm text-soft">manuelle Recherche gespart, rund 100 Vollzeitstellen/Monat</p>
          </div>
          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <p className="text-2xl font-semibold text-ink">≈ 780</p>
            <p className="mt-1 text-sm text-soft">qualifizierte Meetings pro Monat rechnerisch möglich</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl border border-edge/60 bg-panel2 p-5 text-xs leading-relaxed text-faint">
          <p className="font-medium text-soft">So ist das gerechnet, keine Zusicherung:</p>
          <p className="mt-1.5">
            Basis ist eine Versandkapazität von 125.000 E-Mails/Monat (Instantly-Hypergrowth-Plan,
            das technische Maximum liegt bei bis zu 500.000/Monat). Lead-Beschaffung über Google
            Maps und Hunter ist praktisch unlimitiert, daher ist der Versand der eigentliche
            Flaschenhals, nicht die Anzahl verfügbarer Leads. Zeitersparnis auf Basis von rund 8
            Minuten angenommener manueller Recherchezeit pro Kontakt. Kostenersparnis auf Basis von
            45&nbsp;€/Std. (abgeleitet aus 1.500&nbsp;€ bei rund 33,3 Std. oben). Meetings auf Basis von 5%
            Antwortquote, davon 25% positiv, davon 50% zu einem Termin führend, branchenübliche
            Richtwerte, keine Garantie. Rund 42% aller Antworten in einer Kampagne kommen laut
            Woodpecker-Auswertung erst aus Follow-up-Mails, deshalb zählt der direkte, saubere
            Export in Instantly und Co. mit zur Rechnung. Euer tatsächliches Ergebnis hängt von
            Nische, Liste und Angebot ab.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section id="vergleich" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title="Im Vergleich" />
        <div className="overflow-x-auto rounded-xl border border-edge/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-edge/60 bg-panel2 text-left">
                <th className="px-5 py-3 font-medium text-faint"> </th>
                <th className="px-5 py-3 font-medium text-ink">Thaw</th>
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
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading title="Datenschutz ist keine Checkbox, sondern Teil der Architektur" />
          <div className="grid gap-5 sm:grid-cols-3">
            {trustBadges.map((b) => (
              <div key={b.title} className="rounded-xl border border-edge/60 bg-panel p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel2 text-ink">
                  {b.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-faint">
            <a href="/datenschutz" className="hover:text-ink">Datenschutzerklärung</a>
            <span>·</span>
            <a href="/agb" className="hover:text-ink">AGB</a>
            <span>·</span>
            <a href="/avv" className="hover:text-ink">AVV</a>
          </div>
        </div>
      </section>

      {/* Why Thaw exists (professional, no personal/age framing) */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <SectionHeading title="Warum es Thaw gibt" />
        <p className="text-sm leading-relaxed text-soft sm:text-base">
          Outbound-Teams kombinieren heute meist vier bis fünf einzelne Tools, um vom ersten
          Suchbegriff bis zur personalisierten, verifizierten E-Mail zu kommen. Thaw reduziert
          diesen Workflow auf ein einziges Tool, mit voller Kostentransparenz statt
          Pauschal-Abos und ohne CSV-Hin-und-Her zwischen Anbietern.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-edge/60 bg-panel2">
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
          15 Minuten, wir zeigen euch live, wie Thaw für eure Nische aussieht. Kein
          Verkaufsgespräch von der Stange, sondern eine echte Suche mit euren eigenen Kriterien.
        </p>
        <CTAButton className="mt-8" />
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Thaw · Wien, Österreich</span>
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
