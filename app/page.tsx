import { Logo, CTAButton, Screenshot, SectionHeading, FactBox, StatTile } from "./_ui";
import { AgencyMockup, PostSendMockup } from "./_mockups";
import {
  navLinks,
  painPoints,
  steps,
  usps,
  integrations,
  trustBadges,
  postSendFeatures,
  agencyFeatures,
  heroStatTiles,
  comparisonRows,
  faqs,
} from "./_copy";

export default function Home() {
  return (
    <div className="min-h-screen pb-16 sm:pb-0">
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
              Lead-Gen und Cold Outreach für alle eure Kunden, aus einem Tool, unter eurem eigenen Namen.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-soft sm:text-lg">
              Thaw sucht Unternehmen, findet die richtigen Ansprechpartner, verifiziert die
              E-Mail-Adressen und schreibt für jeden Lead eine individuelle Icebreaker-Zeile,
              für jeden Kunden im eigenen Workspace, alles in einer App.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <CTAButton />
              <span className="text-xs text-mute">15 Minuten, wir zeigen es live an eurer eigenen Nische.</span>
            </div>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2">
              <span className="rounded bg-sky-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Fakt</span>
              <span className="text-sm font-medium text-ink">
                Agenturen bekommen im Schnitt 42&nbsp;€ zurück für jeden Euro, den sie in E-Mails stecken.
              </span>
            </div>
            <p className="mt-1.5 text-xs text-mute">Quelle: Litmus, State of Email 2025</p>
          </div>
          <div className="fade-up mt-10">
            <Screenshot src="/screenshots/alle-leads.png" alt="Thaw Leads-Tabelle mit Firmen-Logos, Kontaktanzahl und E-Mail-Status" />
          </div>
          {/* Kompakte Stat-Kachel-Reihe, dieselbe belegte Zahl wie weiter unten im
              "Proof stat"-Abschnitt, hier bewusst früher und kompakter wiederholt
              (chatarmin-Prinzip: eine belegte Zahl öfter zeigen statt nur einmal). */}
          <div className="fade-up mt-8 grid gap-3 sm:grid-cols-3">
            {heroStatTiles.map((s) => (
              <StatTile key={s.label} value={s.value} label={s.label} />
            ))}
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

          <FactBox
            fact="Kleine, gezielte Listen bekommen fast dreimal mehr Antworten als riesige Listen."
            sub="Lieber wenige, gut ausgewählte Unternehmen anschreiben als tausende wahllos."
            source="Woodpecker, mit Verweis auf Belkins-Analyse von 16,5 Mio. E-Mails, 2026"
          />

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
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
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

      {/* Agency / white-label, direkt nach dem Kern-Workflow, weil es jetzt die
          zentrale Differenzierung für die Zielgruppe ist */}
      <section id="agenturen" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Für Agenturen"
            title="Mehrere Kunden verwalten, ohne für jeden ein neues Abo aufzumachen"
          />
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p className="text-sm leading-relaxed text-soft sm:text-base">
                Betreut ihr Lead-Gen oder Cold Outreach für eure eigenen Kunden? Dann läuft jeder
                Kunde in einem eigenen, sauber getrennten Workspace, im Look dieses Kunden, unter
                einem einzigen Login für euer Team.
              </p>
              <div className="mt-6 space-y-4">
                {agencyFeatures.map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-soft">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <AgencyMockup />
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-edge/60 bg-panel p-5">
            <p className="text-sm leading-relaxed text-soft">
              <span className="font-medium text-ink">Bei reinen Versand-Tools ist eine Multi-Kunden-Verwaltung meist ein
              separat bepreistes Zusatzmodul,</span> oft mit einem eigenen Preis pro angelegtem
              Kunden-Workspace, obendrauf auf ein Tool, das nur den Versand übernimmt. Bei Thaw
              ist das von Anfang an Teil des Produkts.
            </p>
          </div>
        </div>
      </section>

      {/* Post-send loop: reply classification, revenue dashboard, CRM-lite status, deliverability */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Mehr als Lead-Suche"
              title="Die meisten Tools hören auf, sobald die Mail raus ist. Thaw nicht."
            />
            <p className="max-w-md text-sm leading-relaxed text-soft sm:text-base">
              Über eine Verbindung zu eurem Versandtool fließen Antworten, Bounces und
              Meeting-Ergebnisse zurück in dasselbe Dashboard, in dem die Leads gefunden wurden.
            </p>
          </div>
          <div className="lg:col-span-3">
            <PostSendMockup />
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {postSendFeatures.map((f) => (
            <div key={f.title} className="rounded-xl border border-edge/60 bg-panel p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel2 text-ink">
                {f.icon}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Agent deep-dive: illustriertes Mockup statt echtem Screenshot */}
      <section className="mx-auto max-w-[1267px] px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Personalisierung"
          title="Der KI-Agent ist keine Blackbox"
        />
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="max-w-2xl lg:col-span-2">
            <p className="text-sm leading-relaxed text-soft sm:text-base">
              Die meisten Tools spucken einen Icebreaker aus, ohne dass ihr wisst, worauf er sich
              stützt oder wie er klingt. Bei Thaw stellt ihr das selbst ein: pro Nische, pro
              Kampagne, so oft ihr wollt.
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-soft">
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

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-faint">Datenquelle</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700 dark:text-sky-300">
                  Firmenbeschreibung
                </span>
                <span className="rounded-full border border-edge2 px-3 py-1 text-xs text-faint">Website-Text</span>
                <span className="rounded-full border border-edge2 px-3 py-1 text-xs text-faint">Beides kombiniert</span>
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">System-Prompt</p>
              <div className="mt-2 space-y-1.5 rounded-lg bg-panel2 p-4 font-mono text-[12px] leading-relaxed text-soft">
                <p>- Nutze ausschließlich überprüfbare Fakten aus der Recherche.</p>
                <p>- Kein Name, keine Begrüßung, keine Floskeln.</p>
                <p>- Direkt, konkret, wie eine Beobachtung vor einer Vertriebsfrage.</p>
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">Verbotene Wörter</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Respekt", "bewundern", "stolz", "Lob", "begeistert"].map((w) => (
                  <span key={w} className="rounded bg-panel2 px-2 py-1 text-[11px] text-faint">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
              {u.fact && <FactBox fact={u.fact} sub={u.sub} source={u.source!} />}
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
          <p className="font-medium text-soft">So kommen die Zahlen zustande, keine Garantie:</p>
          <p className="mt-1.5">
            Wir rechnen mit 125.000 verschickten E-Mails im Monat (möglich wären sogar bis zu
            500.000). Neue Unternehmen zu finden ist praktisch unbegrenzt, der Versand ist der
            eigentliche Engpass. Für die Zeitersparnis rechnen wir mit rund 8 Minuten Handarbeit
            pro Kontakt, für die Kostenersparnis mit 45&nbsp;€ Stundenlohn. Für die Meetings rechnen
            wir mit 5% Antwortquote, davon ein Viertel positiv, davon die Hälfte führt zu einem
            Termin, branchenübliche Werte, keine Garantie. Fast die Hälfte aller Antworten kommt
            übrigens erst von der zweiten Mail, nicht von der ersten, deshalb zählt ein sauberer
            Export in euer Versandtool mit dazu. Euer echtes Ergebnis hängt von eurer Nische und
            eurem Angebot ab.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section id="vergleich" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title="Im Vergleich" />
        {/* Desktop/tablet: table */}
        <div className="hidden overflow-x-auto rounded-xl border border-edge/60 sm:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-edge/60 bg-panel2 text-left">
                <th className="px-5 py-3 font-medium text-faint"> </th>
                <th className="px-5 py-3 font-medium text-ink">Thaw</th>
                <th className="px-5 py-3 font-medium text-faint">Typischer Alternativ-Stack einer Agentur</th>
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

        {/* Mobile: stacked cards */}
        <div className="grid gap-4 sm:hidden">
          {comparisonRows.map(([label, s3, other]) => (
            <div key={label} className="rounded-xl border border-edge/60 bg-panel p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-faint">{label}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-mute">Thaw</p>
                  <p className="mt-1 text-sm text-ink">{s3}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-mute">Alternativ-Stack</p>
                  <p className="mt-1 text-sm text-faint">{other}</p>
                </div>
              </div>
            </div>
          ))}
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

      {/* Why Thaw exists + honest trust building (early access, founder statement, powered by) */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title="Warum es Thaw gibt" />
        <p className="max-w-3xl text-sm leading-relaxed text-soft sm:text-base">
          Outbound-Teams kombinieren heute meist vier bis fünf einzelne Tools, um vom ersten
          Suchbegriff bis zur personalisierten, verifizierten E-Mail zu kommen. Thaw reduziert
          diesen Workflow auf ein einziges Tool, mit voller Kostentransparenz statt
          Pauschal-Abos und ohne CSV-Hin-und-Her zwischen Anbietern.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M12 3v3m6.4 1.6-2.1 2.1M21 12h-3M6.7 9.7 4.6 7.6M3 12h3m1.7 4.3-2.1 2.1M12 18v3m4.3-1.7 2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-ink">Früher Zugang statt großer Kundenliste</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-soft">
              Thaw ist aktuell in aktiver Erprobung mit den ersten Partneragenturen. Bewusst eine
              kleine, eng begleitete Gruppe statt eines anonymen Massenprodukts, jede Anpassung
              geht direkt in den nächsten Sprint.
            </p>
          </div>

          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-faint">Vom Gründerteam</p>
            <p className="mt-3 text-sm italic leading-relaxed text-ink">
              „Die 33 Stunden gesparte Recherchezeit weiter oben auf dieser Seite sind aus unserer
              eigenen Akquise, nicht aus einer Fallstudie. Wir bauen Thaw für das Problem, das wir
              selbst jeden Tag lösen mussten."
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                T
              </div>
              <p className="text-xs text-mute">Gründerteam, Thaw</p>
            </div>
          </div>

          <div className="rounded-xl border border-edge/60 bg-panel p-6">
            <h3 className="text-sm font-semibold text-ink">Läuft mit etablierten Diensten</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-soft">
              Keine Blackbox, sondern bekannte, geprüfte Anbieter im Hintergrund.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["OpenAI", "Google", "Hunter.io", "NeverBounce"].map((name) => (
                <span key={name} className="rounded-full border border-edge2 bg-panel2 px-3 py-1 text-xs font-medium text-soft">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
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

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
