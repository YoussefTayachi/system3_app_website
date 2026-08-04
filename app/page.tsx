"use client";
import Image from "next/image";
import { Logo, CTAButton, CTAGroup, NavDropdown, SectionHeading, FactBox, StatTile, GlossaryText, BOOKING_URL } from "./_ui";
import { AgencyMockup, PostSendMockup, LocalReachMockup, QualifiedLeadAnimation, SuppressionMockup, DeliverabilityMockup, CampaignMockup } from "./_mockups";
import { DashboardMockup, UnifiedSearchMockup, TechFilterMockup, CallListMockup, LeadsTableMockup, MailboxesMockup, VerificationReportMockup } from "./_app-mockups";
import { GateMockup, ChainMockup, EffectMockup } from "./_guard-mockups";
import { LeadCardStack } from "./_illustration";
import { SavingsCalculator } from "./_calculator";
import { Reveal } from "./reveal";
import { trustIcons, postSendIcons, agencyIcons, workflowIcons, featureIcons, integrationIcons, CheckIcon, CrossIcon } from "./_icons";
import { useT, LanguageToggle } from "./language-provider";

/** Anbieter-Farben der drei Suchwege, deckungsgleich mit lib/search-source.ts
 *  in der App. Wird hier oben gehalten, damit die Zuordnung an einer Stelle
 *  steht und nicht in der JSX-Schleife versteckt ist. */
const MODE_BADGE: Record<string, string> = {
  local: "border-sky-500/40 bg-sky-500/10 text-sky-800",
  corporate: "border-orange-500/40 bg-orange-500/10 text-orange-800",
  apollo: "border-yellow-500/50 bg-yellow-500/10 text-yellow-800",
};

export default function Home() {
  const { t, lang } = useT();
  // Zwischen 768px und 1024px passen Logo, volle Navigation und CTA nicht
  // nebeneinander (die Leiste lief ~30px ueber und erzeugte horizontales
  // Scrollen). Statt die Navigation dort ganz auszublenden, erscheinen die
  // sekundaeren Links erst ab lg; Preise und Kontakt bleiben immer sichtbar.
  // Agenturen, Preise und der Vergleich haben eigene Seiten bekommen. Die
  // Anker auf der Startseite bleiben bestehen, damit alte Links weiter
  // funktionieren, die Navigation zeigt aber auf die vollstaendigen Seiten.
  const navLinks = [
    { href: "/fuer-agenturen", label: t.nav.agenturen, secondary: true },
    { href: "/preise", label: t.nav.preise, secondary: false },
    { href: "/kontakt", label: t.nav.kontakt, secondary: false },
  ];

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-5 md:flex lg:gap-6">
            <NavDropdown label={t.nav.produkt} items={t.nav.produktItems} />
            <NavDropdown label={t.featuresPage.eyebrow} items={t.nav.funktionenItems} />
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={
                  "text-sm text-soft transition-colors hover:text-ink " +
                  (l.secondary ? "hidden lg:inline" : "")
                }
              >
                {l.label}
              </a>
            ))}
            {/* Zweites Angebot (Individualentwicklung). Wie die uebrigen
                sekundaeren Links erst ab lg sichtbar, damit die Leiste
                zwischen 768 und 1024px nicht wieder ueberlaeuft. */}
            <a
              href="/eigene-software"
              className="hidden text-sm text-soft transition-colors hover:text-ink lg:inline"
            >
              {t.nav.custom}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <CTAButton />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-wash border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="fade-up">
              {/* sky-700 statt sky-600: bei 12px Grossbuchstaben reicht
                  sky-600 (3.9:1) nicht fuer WCAG AA. */}
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">
                {t.hero.eyebrow}
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {t.hero.h1Pre}
                <span className="italic text-sky-600">{t.hero.h1Accent}</span>
                {t.hero.h1Post}
              </h1>
              <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-soft sm:text-lg">{t.hero.body}</p>
              {/* Der Sekundaer-CTA war optisch fast so stark wie der primaere;
                  als reiner Textlink mit Pfeil bleibt er verfuegbar, ohne den
                  Hauptweg zu verwaessern. */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CTAButton href="#rechner" label={t.calculator.title} />
                <a
                  href={BOOKING_URL}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-ink"
                >
                  {t.cta.secondary}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>
              <p className="mt-3.5 text-xs text-mute">{t.cta.trialNote}</p>
            </div>

            <div className="fade-up">
              <LeadCardStack />
            </div>
          </div>

          <div className="fade-up mt-14 grid gap-x-10 gap-y-6 border-t border-edge2/70 pt-8 sm:grid-cols-3">
            {t.heroStats.map((s) => (
              <StatTile key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <div className="fade-up mt-6 flex flex-wrap items-center gap-2 rounded-full border border-sky-200 bg-sky-50/70 px-4 py-2">
            <span className="rounded bg-sky-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              {lang === "de" ? "Fakt" : "Fact"}
            </span>
            <span className="text-sm font-medium text-sky-950">{t.hero.factBadge}</span>
            <span className="text-xs text-sky-900/55">{t.hero.factSource}</span>
          </div>
        </div>

        {/* Echter Screenshot aus der App, angeschnitten. Lag vorher hinter einem
            zugeklappten <details> -- der staerkste Beleg dafuer, dass hinter der
            Seite ein fertiges Produkt steht, war einen Klick weit weggeraeumt.
            Bewusst das Dashboard statt der Leads-Tabelle: dort sind die Zeilen
            anonymisiert und wirken gross dargestellt wie ein Ladeplatzhalter,
            waehrend das Dashboard echte Zahlen und die Zeitersparnis zeigt. */}
        {/* Nachbildung statt echtem Screenshot: im Original steht die Zahl der
            verbrauchten Credits samt Anbietername im Bild, und das laesst sich
            nicht herausretuschieren, ohne dass es auffaellt. Die Nachbildung
            zeigt dieselben Kennzahlen, bleibt in jeder Groesse scharf und
            passt sich dem Farbschema an. */}
        <div className="mx-auto mt-2 max-w-5xl px-4 sm:px-6">
          <DashboardMockup />
        </div>
      </section>

      {/* Kostenbeweis direkt nach dem Hero: "BYOK, volle
          Kostentransparenz" war bisher eine Eigenschaft ohne Zahl. Die Zahl
          ist das Argument, deshalb steht sie vor dem Rechner. */}
      <section id="kosten" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.costProof.eyebrow} title={t.costProof.title} />
        <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">
          {t.costProof.body}
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {t.costProof.columns.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <div
                className={
                  "flex h-full flex-col rounded-2xl p-6 " +
                  (c.highlight
                    ? "border border-sky-300/70 bg-sky-50/50"
                    : "border border-edge/60 bg-panel")
                }
              >
                <p
                  className={
                    "text-[11px] font-medium uppercase tracking-[0.14em] " +
                    (c.highlight ? "text-sky-700" : "text-faint")
                  }
                >
                  {c.label}
                </p>
                <p className="font-display mt-4 text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-ink">
                  {c.value}
                </p>
                <p className={"mt-2 text-sm " + (c.highlight ? "text-sky-900/80" : "text-soft")}>
                  {c.unit}
                </p>
                <p
                  className={
                    "mt-4 border-t pt-4 text-xs leading-relaxed " +
                    (c.highlight ? "border-sky-200/70 text-sky-900/60" : "border-edge/70 text-mute")
                  }
                >
                  {c.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-[70ch] text-xs leading-relaxed text-mute">{t.costProof.footnote}</p>
      </section>

      {/* Zwei Suchmodi. Die Seite argumentierte bisher nur gegen klassische
          Datenbanken, obwohl die App den Corporate-Modus mitbringt -- wer
          Unternehmen ab einer bestimmten Groesse sucht, fuehlte sich nicht
          angesprochen. */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.searchModes.eyebrow} title={t.searchModes.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.searchModes.body}</p>

          {/* Beide Wege bekommen dieselbe Flaeche und dieselbe Rahmung. Vorher
              war "lokal" hervorgehoben und "corporate" die blasse Alternative
              -- seit die Firmensuche ohne Abfragekosten pro Firma auskommt, ist
              sie das nicht mehr.

              Statt zweier Standbilder steht darunter eine einzige, bedienbare
              Maske: das ist genau die Aussage der Sektion (ein Bildschirm, zwei
              Quellen) und spart die Haelfte der Hoehe. */}
          {/* Drei statt zwei Karten seit der Apollo-Quelle. Auf lg bekommen sie
              je ein Drittel; darunter untereinander, weil drei Karten
              nebeneinander auf Tablet-Breite unlesbar schmal wuerden. */}
          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.searchModes.modes.map((mode, i) => (
              <Reveal key={mode.id} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-6">
                  {/* Farbe je Anbieter, angelehnt an dessen Markenfarbe (Hunter
                      orange, Apollo gelb, Maps blau) und identisch zu den
                      Quellen-Chips in der App -- wer sich hier informiert und
                      sich danach anmeldet, erkennt dieselbe Zuordnung wieder.
                      Getoente Flaeche mit dunklem Text derselben Farbe statt
                      farbiger Flaeche mit weissem Text: Apollos Markengelb
                      traegt weisse Schrift nicht (rund 1,3:1). */}
                  <span
                    className={
                      "inline-flex self-start rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide " +
                      (MODE_BADGE[mode.id] ?? "border-edge2 bg-chip text-soft")
                    }
                  >
                    {mode.label}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.015em] text-ink">
                    {mode.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-soft">{mode.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-edge/70 pt-5">
                    {mode.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-soft">
                        <CheckIcon />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <UnifiedSearchMockup />
          </Reveal>
        </div>
      </section>

      {/* Steht bewusst DIREKT hinter den drei Suchwegen: sobald dort "Hunter"
          und "Apollo" stehen, denkt jeder Fachkundige sofort "dann nehme ich
          die doch gleich selbst". Diesen Einwand erst in der FAQ zu
          beantworten, hiesse ihn die halbe Seite lang mitlaufen zu lassen. */}
      {/* Der Einwand "ich habe Apollo und Instantly doch schon" laesst sich
          nicht mit einer Feature-Liste beantworten, sondern nur damit, wie ein
          Monat wirklich aussieht. Deshalb zwei Ablaeufe nebeneinander: die
          Laenge der linken Spalte und die vier Handarbeits-Marker SIND das
          Argument, nicht der Text darueber. Die Zahlen oben nehmen das Ergebnis
          vorweg, fuer alle, die nur scrollen. */}
      <section id="alltag" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.dailyDiff.eyebrow} title={t.dailyDiff.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.dailyDiff.body}</p>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            {/* Vorher */}
            <Reveal>
              <div className="h-full rounded-2xl border border-amber-300/60 bg-panel p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-edge/70 pb-4">
                  <p className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">
                    {t.dailyDiff.before.label}
                  </p>
                  <p className="text-xs text-mute">
                    <span className="font-display text-xl font-semibold text-ink">{t.dailyDiff.before.count}</span>{" "}
                    {t.dailyDiff.before.countLabel}
                    {", "}
                    <span className="font-semibold text-amber-700">{t.dailyDiff.before.manualCount}</span>{" "}
                    {t.dailyDiff.before.manualLabel}
                  </p>
                </div>
                <ol className="mt-4 space-y-3">
                  {t.dailyDiff.before.steps.map((s, i) => (
                    <li key={s.text} className="flex gap-3 text-sm leading-relaxed text-soft">
                      <span
                        className={
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold " +
                          (s.manual ? "bg-amber-100 text-amber-800" : "bg-chip text-faint")
                        }
                      >
                        {i + 1}
                      </span>
                      <span>
                        {s.text}
                        {s.manual && (
                          <span className="ml-1.5 whitespace-nowrap rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                            {t.dailyDiff.manualBadge}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* Nachher */}
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-sky-300/70 bg-sky-50/40 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-sky-200/70 pb-4">
                  <p className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">
                    {t.dailyDiff.after.label}
                  </p>
                  <p className="text-xs text-sky-900/70">
                    <span className="font-display text-xl font-semibold text-ink">{t.dailyDiff.after.count}</span>{" "}
                    {t.dailyDiff.after.countLabel}
                    {", "}
                    <span className="font-semibold text-sky-800">{t.dailyDiff.after.manualCount}</span>{" "}
                    {t.dailyDiff.after.manualLabel}
                  </p>
                </div>
                <ol className="mt-4 space-y-3">
                  {t.dailyDiff.after.steps.map((s, i) => (
                    <li key={s} className="flex gap-3 text-sm leading-relaxed text-sky-950">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-600 text-[11px] font-semibold text-white">
                        {i + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-mute">{t.dailyDiff.note}</p>
        </div>
      </section>

      <section id="ergaenzt" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.worksWith.eyebrow} title={t.worksWith.title} />
        <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.worksWith.body}</p>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Pro Werkzeug erst die Staerke, dann die Luecke. Wer seine eigenen
              Tools schlechtgeredet bekommt, glaubt dem Rest der Seite nicht. */}
          <div className="space-y-4">
            {t.worksWith.rows.map((row, i) => (
              <Reveal key={row.tool} delay={i * 80}>
                <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                  <p className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{row.tool}</p>
                  <div className="mt-3 space-y-2.5">
                    <p className="flex gap-2.5 text-sm leading-relaxed text-soft">
                      <CheckIcon />
                      {row.good}
                    </p>
                    <p className="flex gap-2.5 text-sm leading-relaxed text-soft">
                      <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {row.gap}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-sky-300/70 bg-sky-50/50 p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-sky-700/80">
                {t.worksWith.bridgeLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {t.worksWith.bridge.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-sky-950">
                    <CheckIcon />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-sky-200/70 pt-4 text-xs leading-relaxed text-sky-900/70">
                {t.worksWith.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technologie-Filter. Eigene Sektion, weil er fuer Interessenten mit
          klarer Nische (Shopify-Agentur, Shopware-Dienstleister) der eigentliche
          Kaufgrund ist -- als Stichpunkt in der Modus-Karte darueber wuerde er
          untergehen. Bewusst auf dem hellen Grund zwischen zwei panel2-Bloecken,
          damit die Sektion optisch als eigenes Kapitel liest. */}
      <section id="technologie" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.techFilter.eyebrow} title={t.techFilter.title} />
        <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.techFilter.body}</p>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="space-y-4">
            {t.techFilter.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <TechFilterMockup />
          </Reveal>
        </div>

        {/* Zwei Belege statt Superlative: der Katalogumfang und die Tatsache,
            dass auch die DACH-Shopsysteme drin sind. Letzteres entscheidet fuer
            deutschsprachige Interessenten, ob das Werkzeug ihren Markt kennt. */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-edge/60 bg-panel p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{t.techFilter.scaleLabel}</p>
            <p className="font-display mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-ink">
              {t.techFilter.scaleValue}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-soft">{t.techFilter.scaleNote}</p>
          </div>
          <div className="rounded-2xl border border-edge/60 bg-panel p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{t.techFilter.dachLabel}</p>
            <p className="font-display mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-ink">
              {t.techFilter.dachValue}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-soft">{t.techFilter.dachNote}</p>
          </div>
        </div>
      </section>

      {/* Warum die Lead-Quelle den Unterschied macht */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.leadSource.eyebrow} title={t.leadSource.title} />
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p className="text-sm leading-relaxed text-soft sm:text-base">{t.leadSource.body1}</p>
              <p className="mt-4 text-sm leading-relaxed text-soft sm:text-base">{t.leadSource.body2}</p>
            </div>
            <div className="lg:col-span-3">
              <LocalReachMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifizierte Leads: Kernclaim, echte Ansprechpartner statt info@.
          Statt zweier gestapelter Standbilder laeuft der Filtervorgang jetzt
          als Animation ab -- das ist die Aussage selbst und spart eine ganze
          Karte an Seitenhoehe. */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.qualifiedLeads.eyebrow} title={t.qualifiedLeads.title} />
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p className="text-sm leading-relaxed text-soft sm:text-base">{t.qualifiedLeads.body1}</p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-ink sm:text-base">{t.qualifiedLeads.body2}</p>
            </div>
            <div className="lg:col-span-3">
              <QualifiedLeadAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Verifizierung als eigene Sektion statt eines Bullets unter sieben in
          "Warum Frostbreaker": ein Sales-Kontakt fand das Feature stark, aber
          erst live in der App, nicht beim Lesen der Website. Direkt danach
          platziert, weil das Publikum hier schon im Thema Kontaktqualitaet
          ist -- der naechste Schritt ist "und die Adresse geht auch wirklich
          zu", nicht vier Sektionen weiter unten. */}
      <section id="verifizierung" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.verification.eyebrow} title={t.verification.title} />
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-soft sm:text-base">{t.verification.body}</p>
            <FactBox fact={t.verification.fact} sub={t.verification.factSub} source={t.verification.factSource} />
          </div>
          <div className="lg:col-span-3">
            <VerificationReportMockup />
          </div>
        </div>
      </section>

      {/* Sparpotenzial-Rechner steht bewusst hier und nicht mehr direkt nach
          dem Hero: wer rechnen soll, muss vorher wissen, was er ausrechnet.
          Kostenbeweis, beide Suchwege, Lead-Qualitaet und Verifizierung sind
          zu diesem Punkt gelesen. */}
      <SavingsCalculator />

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title={t.painPoints.title} />
        <p className="-mt-6 mb-12 max-w-[60ch] text-base leading-relaxed text-soft">{t.painPoints.subtitle}</p>
        {/* Bewusst ohne Karten: die Problem-Sektion soll sich rauer und
            unaufgeraeumter lesen als die Loesungs-Sektionen danach, die
            Karten benutzen. Hairline-Regeln statt Boxen. */}
        <div className="grid gap-x-14 gap-y-0 sm:grid-cols-2">
          {t.painPoints.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="group border-t border-edge2/70 py-7">
                <h3 className="flex items-start gap-3 text-base font-semibold leading-snug text-ink">
                  <span aria-hidden className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {p.title}
                </h3>
                <p className="mt-2.5 pl-[1.125rem] text-sm leading-relaxed text-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section id="produkt" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-[1267px] px-4 py-20 sm:px-6">
          <SectionHeading title={t.workflow.title} />
          <p className="-mt-6 mb-8 max-w-2xl text-sm leading-relaxed text-soft sm:text-base">{t.workflow.subtitle}</p>

          <div className="relative grid gap-6 lg:grid-cols-4">
            {/* Verbindende Linie hinter den Nummern-Badges, nur Desktop --
                unterstreicht den Fluss zwischen den Schritten staerker als
                die vorherigen einzelnen Pfeile zwischen gleichfarbigen Karten. */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[48px] hidden h-px bg-gradient-to-r from-sky-300 via-amber-300 to-coral lg:block" />
            {t.workflow.steps.map((s, i) => {
              const accentBg = ["bg-sky-500/10", "bg-emerald-500/10", "bg-amber-500/10", "bg-coral-soft"][i];
              const accentText = ["text-sky-600", "text-emerald-600", "text-amber-600", "text-coral"][i];
              return (
                <Reveal key={s.n} delay={i * 80} className="h-full">
                  <div className="relative flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-5 hover-lift">
                    {/* Icon im Badge statt der Nummer, Titel direkt daneben:
                        spart eine Zeile pro Karte und macht den Schritt auf
                        einen Blick erkennbar. Die Nummer bleibt als kleiner
                        Kicker ueber dem Titel, damit die Reihenfolge lesbar
                        bleibt. */}
                    <div className="flex items-center gap-3.5">
                      <div className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl [&_svg]:h-6 [&_svg]:w-6 ${accentBg} ${accentText}`}>
                        {workflowIcons[s.n]}
                      </div>
                      <div className="min-w-0">
                        <p className={`font-display text-[11px] font-semibold uppercase tracking-[0.12em] ${accentText}`}>
                          {t.workflow.stepLabel} {s.n}
                        </p>
                        <h3 className="mt-0.5 text-sm font-semibold leading-snug text-ink">{s.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-soft">
                      <GlossaryText text={s.body} />
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <FactBox fact={t.workflow.fact.fact} sub={t.workflow.fact.sub} source={t.workflow.fact.source} />
        </div>
      </section>

      {/* Agency / white-label */}
      <section id="agenturen" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.agency.eyebrow} title={t.agency.title} />
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p className="text-sm leading-relaxed text-soft sm:text-base">{t.agency.body}</p>
              <div className="mt-6 space-y-4">
                {t.agency.features.map((f) => (
                  <div key={f.id} className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
                      {agencyIcons[f.id]}
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
          {/* Die Details -- Kosten pro Kunde, Report aus Endkundensicht,
              Abgrenzung zu Versand-Tools -- stehen auf /fuer-agenturen. Hier
              nur der Verweis, damit die Startseite nicht zwei Zielgruppen
              gleichzeitig bedienen muss. */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-edge/60 bg-panel p-5">
            <p className="max-w-[58ch] text-sm leading-relaxed text-soft">{t.agency.note}</p>
            <a
              href="/fuer-agenturen"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-sky-700 transition-colors hover:text-sky-800"
            >
              {t.nav.agenturen}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Post-send loop */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow={t.postSend.eyebrow} title={t.postSend.title} />
            <p className="max-w-md text-sm leading-relaxed text-soft sm:text-base">{t.postSend.body}</p>
          </div>
          <div className="lg:col-span-3">
            <PostSendMockup />
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.postSend.features.map((f) => (
            <div key={f.id} className="rounded-2xl border border-edge/60 bg-panel p-6 hover-lift">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel2 text-ink">
                {postSendIcons[f.id]}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Telefon-Akquise. Der zweite Kanal fehlte auf der Seite komplett,
          obwohl er das Argument gegen reine Versand-Tools ist: wer schon eines
          hat, kauft kein zweites, aber er kauft den Kanal, den seines nicht
          kann. Mockup links, Argumente rechts -- umgekehrt zur
          Technologie-Sektion, damit die Seite beim Scrollen nicht in ein
          Muster verfaellt. */}

      {/* ---------------------------------------------------------------
          Die drei Abschnitte, die Frostbreaker von einem Versandwerkzeug
          trennen. Sie stehen bewusst NACH der Lead-Beschaffung und VOR den
          Preisen: wer bis hierher gelesen hat, glaubt schon, dass die Leads
          kommen. Die offene Frage ist ab hier, ob daraus etwas wird.
          --------------------------------------------------------------- */}
      <section id="torwart" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.guard.eyebrow} title={t.guard.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.guard.body}</p>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <GateMockup />
            </Reveal>
            <div className="space-y-4">
              {t.guard.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kette" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.chain.eyebrow} title={t.chain.title} />
        <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.chain.body}</p>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-4 lg:order-2">
            {t.chain.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="lg:order-1">
            <ChainMockup />
          </Reveal>
        </div>
      </section>

      <section id="ehrlich" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.honesty.eyebrow} title={t.honesty.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.honesty.body}</p>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <EffectMockup />
            </Reveal>
            <div className="space-y-4">
              {t.honesty.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="telefon" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.phone.eyebrow} title={t.phone.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.phone.body}</p>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <Reveal>
              <CallListMockup />
            </Reveal>
            <div className="space-y-4">
              {t.phone.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
              {/* Klarstellung, damit niemand eine Telefonanlage erwartet. */}
              <p className="text-xs leading-relaxed text-mute">{t.phone.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Die zwei Gruende, aus denen ein Interessent NICHT kauft: "zu
          kompliziert fuer mich" und "rechtlich zu heikel". Beide sind in der
          App laengst beantwortet, standen hier aber nur als Nebensatz. */}
      <section id="startklar" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.safeStart.eyebrow} title={t.safeStart.title} />
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {t.safeStart.cards.map((card, i) => (
            <Reveal key={card.id} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-6">
                <span className="inline-flex self-start rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-surface">
                  {card.label}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-[-0.015em] text-ink">{card.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-soft">{card.body}</p>
                <ul className="mt-5 space-y-2 border-t border-edge/70 pt-5">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-soft">
                      <CheckIcon />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI Agent deep-dive */}
      <section id="personalisierung" className="scroll-mt-20 mx-auto max-w-[1267px] px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.personalization.eyebrow} title={t.personalization.title} />
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="max-w-2xl lg:col-span-2">
            <p className="text-sm leading-relaxed text-soft sm:text-base">{t.personalization.body}</p>
            <ul className="mt-6 grid gap-4 text-sm text-soft">
              {t.personalization.bullets.map((b) => (
                <li key={b.label} className="flex gap-3">
                  <span className="mt-0.5 text-ink">•</span>
                  <span><span className="font-medium text-ink">{b.label}</span> {b.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-faint">{t.personalization.dataSourceLabel}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {t.personalization.sourceOptions.map((o, i) => (
                  <span
                    key={o}
                    className={
                      i === 0
                        ? "rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700"
                        : "rounded-full border border-edge2 px-3 py-1 text-xs text-faint"
                    }
                  >
                    {o}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{t.personalization.promptLabel}</p>
              <div className="mt-2 space-y-1.5 rounded-lg bg-panel2 p-4 font-mono text-[12px] leading-relaxed text-soft">
                {t.personalization.promptLines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{t.personalization.forbiddenLabel}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {t.personalization.forbiddenWords.map((w) => (
                  <span key={w} className="rounded bg-panel2 px-2 py-1 text-[11px] text-faint">{w}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrationen" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.integrations.eyebrow} title={t.integrations.title} />

          {/* Die Quellen standen hier bisher gar nicht, obwohl sie die Haelfte
              der Aussage sind: Frostbreaker liest aus Diensten, die dem Kunden
              gehoeren, und schreibt in Werkzeuge, die er schon nutzt. Ohne die
              linke Haelfte fehlte Apollo auf der Seite komplett. */}
          <div className="mb-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">
              {t.integrations.sourcesLabel}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-0 sm:grid-cols-3 lg:grid-cols-5">
              {t.integrations.sources.map((s) => (
                <li key={s.name} className="border-t border-edge2/70 py-4">
                  <p className="text-sm font-semibold text-ink">{s.name}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-mute">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.1em] text-faint">
            {t.integrations.targetsLabel}
          </p>
          {/* Vorher acht gleiche Kacheln, sechsmal mit demselben Text
              "CSV-Import" -- die native Instantly-Anbindung, der eigentliche
              Vorteil, ging darin unter. Jetzt fuehrt sie, der Rest steht als
              ruhige Liste daneben. */}
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {(() => {
              const [featured, ...rest] = t.integrations.items;
              return (
                <>
                  <div className="flex flex-col justify-between rounded-2xl border border-sky-300/70 bg-sky-50/50 p-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        {lang === "de" ? "Nativ" : "Native"}
                      </span>
                      <p className="font-display mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink">
                        {featured.name}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-sky-900/80">{featured.note}</p>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-8 gap-y-0 lg:col-span-2 sm:grid-cols-3">
                    {rest.map((i) => (
                      <li key={i.name} className="flex items-center gap-3 border-t border-edge2/70 py-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chip text-soft">
                          {integrationIcons[i.id]}
                        </span>
                        <span className="min-w-0">
                          <p className="text-sm font-semibold text-ink">{i.name}</p>
                          <p className="mt-0.5 text-xs text-mute">{i.note}</p>
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Weitere Features: Sperrliste, Zustellbarkeit, Kampagnen */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} />
          <div className="grid gap-8 sm:grid-cols-3">
            {t.features.items.map((f, i) => (
              <Reveal key={f.id} delay={i * 80}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
                  {featureIcons[f.id]}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{f.body}</p>
                <div className="mt-5">
                  {f.id === "suppression" && <SuppressionMockup />}
                  {f.id === "deliverability" && <DeliverabilityMockup />}
                  {f.id === "campaigns" && <CampaignMockup />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wo die Grenze liegt: die einzige Aussage dieser Sektion, die nicht
          schon weiter oben steht. Die Kacheln daneben wiederholten die
          Hero-Zahlen und den Rechner und sind deshalb raus. */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.scaling.eyebrow} title={t.scaling.title} />
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-soft">{t.scaling.body}</p>
          <p className="mt-4 text-sm leading-relaxed text-mute">{t.scaling.bottleneckNote}</p>
        </div>
      </section>

      {/* Preis-Anriss. Die vollstaendigen Plaene, die Aufschluesselung beider
          Rechnungsposten und der Vergleich stehen auf /preise -- hier bleibt
          nur, was fuer die Entscheidung "weiterlesen oder nicht" reicht. Der
          Anker #preise bleibt bestehen, damit bestehende Links funktionieren. */}
      <section id="preise" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} />
          <div className="grid gap-5 sm:grid-cols-2">
            {t.pricing.plans.map((plan) => (
              <a
                key={plan.id}
                href="/preise"
                className={
                  "hover-lift flex items-baseline justify-between gap-4 rounded-2xl border bg-panel p-6 transition-colors " +
                  (plan.highlighted ? "border-sky-500/50 hover:border-sky-500" : "border-edge/60 hover:border-edge2")
                }
              >
                <span>
                  <span className="block text-sm font-semibold text-ink">{plan.label}</span>
                  <span className="font-display mt-1 block text-3xl font-semibold tracking-[-0.03em] text-ink">
                    {plan.price}
                  </span>
                  <span className="mt-0.5 block text-xs text-faint">{plan.priceNote}</span>
                </span>
                <span aria-hidden className="shrink-0 text-lg text-mute">→</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-soft">
            <a href="/preise" className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-800">
              {t.pricingPage.title} →
            </a>
          </p>
          <p className="mt-2 text-center text-xs text-mute">{t.pricing.note}</p>
        </div>
      </section>


      {/* Trust / DSGVO */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading title={t.trust.title} />
          <div className="grid gap-5 sm:grid-cols-2">
            {t.trustBadges.map((b) => (
              <div key={b.id} className="rounded-2xl border border-edge/60 bg-panel p-6 hover-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-panel2 text-ink">
                  {trustIcons[b.id]}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="tap-row mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-faint">
            <a href="/datenschutz" className="hover:text-ink">{t.trust.links.datenschutz}</a>
            <span>·</span>
            <a href="/agb" className="hover:text-ink">{t.trust.links.agb}</a>
            <span>·</span>
            <a href="/avv" className="hover:text-ink">{t.trust.links.avv}</a>
          </div>
        </div>
      </section>

      {/* Why Frostbreaker exists + founder */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title={t.why.title} />
        <p className="max-w-3xl text-sm leading-relaxed text-soft sm:text-base">{t.why.body}</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-edge/60 bg-panel p-6 hover-lift">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M12 3v3m6.4 1.6-2.1 2.1M21 12h-3M6.7 9.7 4.6 7.6M3 12h3m1.7 4.3-2.1 2.1M12 18v3m4.3-1.7 2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-ink">{t.why.earlyAccess.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-soft">{t.why.earlyAccess.body}</p>
          </div>

          <a href="/kontakt" className="hover-lift block rounded-2xl border border-edge/60 bg-panel p-6 transition-colors hover:border-edge2">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">{t.why.founderLabel}</p>
            <p className="font-display mt-3 text-base italic leading-[1.5] text-ink">{t.why.founderQuote}</p>
            <div className="mt-4 flex items-center gap-2.5">
              <Image
                src="/team/youssef-tayachi.png"
                alt={t.why.founderName}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-medium text-ink">{t.why.founderName}</p>
                <p className="text-xs text-mute">{t.why.founderRole}</p>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-edge/60 bg-panel p-6 hover-lift">
            <h3 className="text-sm font-semibold text-ink">{t.why.poweredBy.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-soft">{t.why.poweredBy.body}</p>
            {/* Vorher standen hier die Namen der Dienste im Hintergrund. Das
                las sich wie eine Zutatenliste und legte die Frage nahe, warum
                man nicht gleich dorthin geht. Wer es wissen will, findet die
                Antwort im FAQ -- inklusive der Begruendung, warum die Summe
                mehr ist als ihre Teile. */}
            <div className="mt-4 flex flex-wrap gap-2">
              {t.why.poweredBy.chips.map((name) => (
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
          <SectionHeading title={t.faq.title} />
          <div className="divide-y divide-edge/60 rounded-2xl border border-edge/60 bg-panel">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group px-6 py-4">
                {/* Ohne Chevron war den 12 Fragen nicht anzusehen, dass sie
                    aufklappbar sind -- 943px Seite ohne einen Hinweis darauf. */}
                <summary className="flex min-h-6 cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink marker:content-none">
                  {f.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-open:-rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-ink text-balance sm:text-[2.75rem]">
          {t.finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-soft">{t.finalCta.body}</p>
        <CTAGroup className="mt-9" />
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Frostbreaker · {t.footer.location}</span>
          <div className="tap-row flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="/impressum" className="hover:text-ink">{t.footer.impressum}</a>
            <a href="/datenschutz" className="hover:text-ink">{t.footer.datenschutz}</a>
            <a href="/agb" className="hover:text-ink">{t.footer.agb}</a>
            <a href="/kontakt" className="hover:text-ink">{t.footer.kontakt}</a>
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
