"use client";
import Image from "next/image";
import { Logo, CTAButton, CTAGroup, NavDropdown, SectionHeading, FactBox, StatTile, BOOKING_URL } from "./_ui";
import { AgencyMockup, PostSendMockup, LocalReachMockup, QualifiedLeadMockup, SuppressionMockup, DeliverabilityMockup, CampaignMockup } from "./_mockups";
import { LeadCardStack } from "./_illustration";
import { SavingsCalculator } from "./_calculator";
import { Reveal } from "./reveal";
import { pillarIcons, trustIcons, postSendIcons, agencyIcons, workflowIcons, featureIcons, CheckIcon, CrossIcon } from "./_icons";
import { useT, LanguageToggle } from "./language-provider";

export default function Home() {
  const { t, lang } = useT();
  // Zwischen 768px und 1024px passen Logo, volle Navigation und CTA nicht
  // nebeneinander (die Leiste lief ~30px ueber und erzeugte horizontales
  // Scrollen). Statt die Navigation dort ganz auszublenden, erscheinen die
  // sekundaeren Links erst ab lg; Preise und Kontakt bleiben immer sichtbar.
  const navLinks = [
    { href: "#agenturen", label: t.nav.agenturen, secondary: true },
    { href: "#preise", label: t.nav.preise, secondary: false },
    { href: "#vergleich", label: t.nav.vergleich, secondary: true },
    { href: "#faq", label: t.nav.faq, secondary: true },
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
        {/* Breiter als der Textcontainer: bei 1104px Breite schrumpft der
            1689px-Screenshot auf 65% und die Zahlen werden unlesbar -- genau
            die Zahlen sind aber der Beleg. */}
        <div className="mx-auto mt-2 max-w-[1560px] px-4 sm:px-6">
          <div className="screenshot-bleed relative overflow-hidden rounded-t-xl border-x border-t border-edge2/70 bg-panel shadow-2xl shadow-ink/10">
            <Image
              src="/screenshots/dashboard.png"
              alt={t.hero.dashboardAlt}
              width={1689}
              height={957}
              priority
              sizes="100vw"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-edge/60 bg-panel2 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
            {t.trustBar.heading}
          </p>
          {/* Zwei identische Durchlaeufe nebeneinander ergeben den nahtlosen
              Loop; der zweite ist rein dekorativ und fuer Screenreader aus. */}
          <div className="marquee-viewport marquee-mask overflow-hidden">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 items-center gap-x-14 pr-14"
                >
                  {t.trustBar.partners.map((p) => (
                    <li key={p} className="whitespace-nowrap text-sm font-medium text-faint">
                      {p}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sparpotenzial-Rechner: wichtigster Conversion-Baustein, bewusst
          direkt nach dem Hero, nicht erst am Seitenende */}
      <SavingsCalculator />

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

      {/* Qualifizierte Leads: Kernclaim, echte Ansprechpartner statt info@ */}
      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.qualifiedLeads.eyebrow} title={t.qualifiedLeads.title} />
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <p className="text-sm leading-relaxed text-soft sm:text-base">{t.qualifiedLeads.body1}</p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-ink sm:text-base">{t.qualifiedLeads.body2}</p>
            </div>
            <div className="lg:col-span-3">
              <QualifiedLeadMockup />
            </div>
          </div>
        </div>
      </section>

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

      {/* Vier Saeulen */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.pillars.eyebrow} title={t.pillars.title} />
        {/* Stat-fuehrende Leiste statt vier weiterer Karten: die Zahl ist hier
            das Argument, nicht die Box drumherum. Vertikale Hairlines trennen,
            kein Kartenrahmen. */}
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.items.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div className="h-full lg:border-l lg:border-edge2/70 lg:pl-7">
                <div className="flex items-center gap-2.5 text-sky-600">
                  <span className="[&>svg]:h-[18px] [&>svg]:w-[18px]">{pillarIcons[p.id]}</span>
                  <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-faint">{p.title}</h3>
                </div>
                <p className="font-display mt-5 text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-ink">
                  {p.stat}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-mute">{p.statLabel}</p>
                <p className="mt-4 border-t border-edge/70 pt-4 text-sm leading-relaxed text-soft">{p.body}</p>
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
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[34px] hidden h-px bg-gradient-to-r from-sky-300 via-amber-300 to-coral lg:block" />
            {t.workflow.steps.map((s, i) => {
              const accentBg = ["bg-sky-500/10", "bg-emerald-500/10", "bg-amber-500/10", "bg-coral-soft"][i];
              const accentText = ["text-sky-600", "text-emerald-600", "text-amber-600", "text-coral"][i];
              return (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="relative rounded-2xl border border-edge/60 bg-panel p-5 hover-lift">
                    <div className={`font-display relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-semibold ${accentBg} ${accentText}`}>
                      {s.n}
                    </div>
                    <div className={`mt-4 flex items-center gap-2 ${accentText}`}>
                      {workflowIcons[s.n]}
                      <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.body}</p>
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
          <div className="mt-8 rounded-2xl border border-edge/60 bg-panel p-5">
            <p className="text-sm leading-relaxed text-soft">{t.agency.note}</p>
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
                      <li key={i.name} className="flex flex-col justify-center border-t border-edge2/70 py-4">
                        <p className="text-sm font-semibold text-ink">{i.name}</p>
                        <p className="mt-0.5 text-xs text-mute">{i.note}</p>
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.usps.eyebrow} title={t.usps.title} />
        {/* CSS-Spalten statt Raster: im Grid bekommen alle Zellen einer Zeile
            die Hoehe der hoechsten -- Eintraege mit Fakten-Box sind gut doppelt
            so hoch wie die ohne, wodurch bis zu 189px Leerraum in den kuerzeren
            Nachbarn stehenblieb. Als Spalten fliessen die Eintraege nach ihrer
            echten Hoehe, break-inside haelt sie zusammen. */}
        <div className="sm:columns-2 sm:gap-x-14">
          {t.usps.items.map((u, i) => (
            <Reveal key={u.title} delay={i * 50} className="break-inside-avoid">
              <div className="border-t border-edge2/70 py-7">
                <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-ink">
                  {u.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-soft">{u.body}</p>
                {u.fact && <FactBox fact={u.fact} sub={u.sub} source={u.source!} />}
              </div>
            </Reveal>
          ))}
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

      {/* Proof stat (real) */}
      <section className="border-y border-edge/60 bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">{t.proofStat.label}</p>
          <p className="font-display mt-5 text-[1.75rem] font-semibold leading-[1.25] tracking-[-0.02em] text-surface text-balance sm:text-4xl">
            {t.proofStat.body}
          </p>
          <p className="mt-5 text-sm text-mute">{t.proofStat.sub}</p>
        </div>
      </section>

      {/* Scaling potential */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.scaling.eyebrow} title={t.scaling.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.scaling.tiles.map((tile) => (
            <div key={tile.label} className="rounded-2xl border border-edge/60 bg-panel p-6 hover-lift">
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink">{tile.value}</p>
              <p className="mt-1.5 text-sm text-soft">{tile.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-edge/60 bg-panel2 p-5 text-xs leading-relaxed text-faint">
          <p className="font-medium text-soft">{t.scaling.methodologyLabel}</p>
          <p className="mt-1.5">{t.scaling.methodologyBody}</p>
          <p className="mt-3 font-medium text-soft">
            {t.scaling.agencyOnlyNote}{" "}
            <a href="#rechner" className="text-sky-600 underline underline-offset-2 hover:text-sky-700">
              {t.calculator.title} →
            </a>
          </p>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} />
          <div className="grid gap-6 sm:grid-cols-2">
            {t.pricing.plans.map((plan) => (
              <div
                key={plan.id}
                className={
                  "relative flex flex-col rounded-2xl border bg-panel p-6 hover-lift " +
                  (plan.highlighted ? "border-sky-500/50" : "border-edge/60")
                }
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 right-6 rounded-full bg-sky-500 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                    {t.pricing.agencyBadge}
                  </span>
                )}
                <h3 className="text-sm font-semibold text-ink">{plan.label}</h3>
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink">{plan.price}</span>
                  <span className="text-sm text-faint">{plan.priceNote}</span>
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-soft">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  className="mt-6 w-full"
                  label={plan.ctaLabel}
                  variant={plan.id === "starter" ? "primary" : "secondary"}
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-mute">{t.pricing.note}</p>
        </div>
      </section>

      {/* Comparison */}
      <section id="vergleich" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading title={t.comparison.title} />
        {/* Haken und Kreuz vor den Zellen: die Tabelle war reiner Fliesstext
            und musste gelesen statt ueberflogen werden. Die Frostbreaker-Spalte
            liegt zusaetzlich auf einem leichten Akzentgrund. */}
        <div className="hidden overflow-x-auto rounded-2xl border border-edge/60 sm:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-edge/60 bg-panel2 text-left">
                <th className="px-5 py-3 font-medium text-faint"> </th>
                <th className="bg-sky-50/60 px-5 py-3 font-semibold text-ink">{t.comparison.headerFrostbreaker}</th>
                <th className="px-5 py-3 font-medium text-faint">{t.comparison.headerOther}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map(([label, s3, other], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-panel" : "bg-panel/60"}>
                  <td className="border-t border-edge/60 px-5 py-3 font-medium text-soft">{label}</td>
                  <td className="border-t border-edge/60 bg-sky-50/60 px-5 py-3 text-ink">
                    <span className="flex items-start gap-2.5">
                      <CheckIcon />
                      {s3}
                    </span>
                  </td>
                  <td className="border-t border-edge/60 px-5 py-3 text-faint">
                    <span className="flex items-start gap-2.5">
                      <CrossIcon />
                      {other}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 sm:hidden">
          {t.comparison.rows.map(([label, s3, other]) => (
            <div key={label} className="rounded-2xl border border-edge/60 bg-panel p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-faint">{label}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-mute">{t.comparison.headerFrostbreaker}</p>
                  <p className="mt-1 text-sm text-ink">{s3}</p>
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wide text-mute">{t.comparison.headerOther}</p>
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
          <SectionHeading title={t.trust.title} />
          <div className="grid gap-5 sm:grid-cols-3">
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
