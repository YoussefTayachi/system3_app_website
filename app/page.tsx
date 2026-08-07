"use client";
import Image from "next/image";
import { Logo, CTAButton, CTAGroup, NavDropdown, SectionHeading, FactBox, BOOKING_URL } from "./_ui";
// SuppressionMockup, DeliverabilityMockup und CampaignMockup lagen im
// Abschnitt "Mehr als nur Leads finden", der am 2026-08-06 von der
// Startseite verschwunden ist. Die Komponenten bleiben fuer /funktionen.
import { AgencyMockup, PostSendMockup } from "./_mockups";
// DashboardMockup ist seit dem 2026-08-06 nicht mehr auf der Startseite: das
// erste Bild ist jetzt die Ansicht "Nach Text". Die Komponente bleibt in
// _app-mockups.tsx, /funktionen ist der naheliegende neue Ort dafuer.
import { UnifiedSearchMockup, CallListMockup, LeadsTableMockup } from "./_app-mockups";
import { GateMockup, ChainMockup, EffectMockup, CopyOutcomesHighlight } from "./_guard-mockups";
import { LeadCardStack } from "./_illustration";
import { SystemMap } from "./_system-map";
import { AllInOneCompare } from "./_compare";
import { StepWalkthrough } from "./_walkthrough";
import { Reveal } from "./reveal";
import { trustIcons, postSendIcons, CheckIcon } from "./_icons";
import { useT, LanguageToggle } from "./language-provider";

/** Anbieter-Farben der vier Suchwege, deckungsgleich mit lib/search-source.ts
 *  in der App. Wird hier oben gehalten, damit die Zuordnung an einer Stelle
 *  steht und nicht in der JSX-Schleife versteckt ist. */
const MODE_BADGE: Record<string, string> = {
  local: "border-sky-500/40 bg-sky-500/10 text-sky-800",
  corporate: "border-orange-500/40 bg-orange-500/10 text-orange-800",
  apollo: "border-yellow-500/50 bg-yellow-500/10 text-yellow-800",
  // Prospeos Markenfarbe ist ein kraeftiges Rot. Wie bei den anderen dreien
  // dieselbe Zuordnung wie die Quellen-Chips in der App (search-source.ts),
  // damit sie jemand nach der Anmeldung wiedererkennt. Rot-800 als Textstufe,
  // weil das Markenrot selbst als Schrift auf hellem Grund nicht traegt.
  prospeo: "border-red-500/40 bg-red-500/10 text-red-800",
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
                  Hauptweg zu verwaessern.

                  Der Haupt-CTA zeigte bis zum 2026-08-06 auf den Rechner
                  ("Berechne dein Sparpotenzial"). Das war als niedrigere
                  Huerde gedacht und hat als Kostenargument gewirkt: der
                  wichtigste Knopf der Seite fuehrte auf eine Ersparnis,
                  waehrend die Ueberschrift darueber von Kundengewinnung
                  handelt. Seit der Rechner mit dem Kosten-Abschnitt nach
                  unten gerueckt ist, waere der Anker ohnehin der falsche
                  Einstieg. Jetzt die Testphase. */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CTAButton />
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

          {/* Die drei Versprechen. Hier standen bis zum 2026-08-06 drei
              Kennzahlen: "4 Suchwege / 3 Kanaele / 1 Login". Alles
              nachzaehlbar, alles Mechanik -- und niemand kauft vier Suchwege.
              Auf der wichtigsten Flaeche der wichtigsten Seite muss stehen,
              was man davon hat.

              Kein grosses Zahlenelement mehr (StatTile), sondern Ueberschrift
              plus Satz: ein Versprechen braucht einen Nebensatz, eine Zahl
              nicht. Jedes der drei ist weiter unten mit einem Bild belegt --
              Rundgang, Kette, "Nach Text". */}
          <div className="fade-up mt-14 grid gap-x-10 gap-y-8 border-t border-edge2/70 pt-8 sm:grid-cols-3">
            {t.heroPromises.map((p) => (
              <div key={p.title}>
                <p className="font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
                  {p.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{p.body}</p>
              </div>
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

        {/* Das erste Bild der Seite. Bis zum 2026-08-06 stand hier das
            Dashboard mit Lead-Zahlen -- also genau das Bild, das jeder
            Wettbewerber auch zeigen kann: gefundene Firmen, Kontakte,
            gesparte Stunden.

            Jetzt die Ansicht "Nach Text". Sie zeigt, was uns unterscheidet:
            welche Textfassung Termine gebracht hat. Instantly sieht die
            Antwort, hat den Text aber nicht geschrieben; Apollo schreibt
            weder Text noch sieht es die Antwort. Wer nur den oberen
            Bildschirm sieht, hat damit schon verstanden, dass hier etwas
            gemessen wird, das andere nicht messen koennen.

            Nachbildung statt echtem Screenshot -- im Original stehen Namen
            realer Personen mit Rolle und Arbeitgeber im Bild. */}
        {/* max-w-4xl statt -3xl: als Tabellenzeilen war das Bild hier eine
            Briefmarke. Die Vergleichskarten brauchen die Breite, damit sie ab
            sm nebeneinander stehen -- untereinander waere es zwar lesbar,
            aber der Vergleich ist der ganze Punkt. */}
        <div className="mx-auto mt-4 max-w-4xl px-4 sm:px-6">
          <CopyOutcomesHighlight />
        </div>
      </section>

      {/* Die Systemkarte, neu am 2026-08-06 (POSITIONIERUNG.md Abschnitt 3).
          Steht bewusst an Position 2, direkt hinter dem Hero: sie beantwortet
          "wie gross ist das hier?" in einem Bild. Der Rundgang weiter unten
          erklaert dasselbe genauer, aber ueber sechs Bildschirme -- und wer
          den Umfang nicht in den ersten Sekunden erfasst, kommt dort nie an.
          Ersetzt an dieser Stelle den Kostenbeweis (#kosten), der bis heute
          der zweite Abschnitt der Seite war. */}
      <section id="system" className="scroll-mt-20 border-b border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.systemMap.eyebrow} title={t.systemMap.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.systemMap.body}</p>
          <Reveal>
            <SystemMap />
          </Reveal>
        </div>
      </section>

      {/* Der Rundgang, Position 3 (POSITIONIERUNG.md Abschnitt 4). Die
          Systemkarte darueber sagt, WIE GROSS es ist; hier steht, WAS jeweils
          passiert. Sechs Schritte, sechs Bildschirme, die auf dieser Seite
          sonst nicht vorkommen. Gestaltungsregeln im Kopf von
          _walkthrough.tsx. */}
      <section id="rundgang" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.walkthrough.eyebrow} title={t.walkthrough.title} />
        <p className="-mt-6 mb-14 max-w-[62ch] text-base leading-relaxed text-soft">{t.walkthrough.body}</p>
        <StepWalkthrough />
        {/* Der Haupt-CTA steht erst NACH Schritt 6, nicht dazwischen: die
            Mini-CTAs an den Schritten sind die kleinen Ausstiege, dieser
            hier ist der eigentliche. */}
        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-edge2/70 pt-10">
          <CTAButton />
          <p className="text-xs text-mute">{t.cta.trialNote}</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DER AGENTUR-BLOCK, am 2026-08-06 von einem vollen Abschnitt auf ein
          Band gekuerzt.

          Agenturen sind die Hauptzielgruppe -- der Hero sagt das inzwischen
          in der ersten Zeile. Genau deshalb ist ein eigener Abschnitt "Fuer
          Agenturen" mitten in der Seite falsch: er liest sich wie ein Segment
          unter mehreren und wiederholt, was oben schon steht.

          Was hier bleibt, ist der eine Beleg, dass die Mehrkunden-Sache echt
          ist -- ein Bild und drei Zeilen. Der Alltag (Montagmorgen, neuer
          Kunde, Monatsende, was ihr ueber alle Kunden lernt) steht auf
          /fuer-agenturen, und dorthin fuehrt hier ein deutlicher Weg statt
          eines Textlinks am Rand. ═══════════════════════════════════════ */}
      <section id="agenturen" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                {t.agency.eyebrow}
              </p>
              <h2 className="font-display mt-2 max-w-[20ch] text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                {t.agency.title}
              </h2>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-soft">{t.agency.body}</p>

              {/* Nur die Ueberschriften der drei Punkte, ohne Fliesstext und
                  ohne Icons: das Band soll belegen, nicht erklaeren. */}
              <ul className="mt-6 space-y-2.5">
                {t.agency.features.map((f) => (
                  <li key={f.id} className="flex items-start gap-2.5 text-sm leading-relaxed text-soft">
                    <CheckIcon />
                    {f.title}
                  </li>
                ))}
              </ul>

              {/* Ein Knopf statt eines Textlinks: fuer die Hauptzielgruppe ist
                  das der zweitwichtigste Weg der Seite, gleich nach dem
                  Gespraech. */}
              <a
                href="/fuer-agenturen"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-edge2 bg-panel px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                {t.agency.pageLink}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            <Reveal>
              <AgencyMockup />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Die drei Kanaele, neu am 2026-08-06 (POSITIONIERUNG.md Abschnitt 5).
          Zieht den frueheren Abschnitt #telefon hier herein -- der stand als
          eigener Abschnitt weit unten, und LinkedIn kam ueberhaupt nur als
          eine Zeile in der Kette vor. Wenn der Hauptpunkt der App ist, dass
          man Entscheider ueber drei Kanaele erreicht, muessen die drei
          nebeneinander und gleich breit stehen.
          Der Anker telefon bleibt erhalten, damit alte Links funktionieren. */}
      <section id="kanaele" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <span id="telefon" className="block scroll-mt-20" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.channels.eyebrow} title={t.channels.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.channels.body}</p>

          {/* Drei gleich breite Spalten, items-stretch: unterschiedlich hohe
              Karten wuerden als Rangfolge gelesen, und der ganze Punkt ist,
              dass die Kanaele gleichwertig sind. */}
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {t.channels.cards.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-6">
                  <span className="inline-flex self-start rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-surface">
                    {c.label}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold leading-snug tracking-[-0.015em] text-ink">
                    {c.title}
                  </h3>

                  <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                    {t.channels.appLabel}
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {c.app.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed text-soft">
                        <CheckIcon />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* "Was du tust" steht bewusst am Fuss jeder Karte und in der
                      Akzentfarbe. Bei E-Mail ist die Zeile leer ("nichts"),
                      und genau dieser Unterschied zwischen den drei Karten ist
                      die Aussage -- er waere weg, wenn man die Zeile bei den
                      automatischen Kanaelen einfach weglaesst. */}
                  <div className="mt-auto border-t border-edge/70 pt-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                      {t.channels.youLabel}
                    </p>
                    <p className="mt-2 border-l-2 border-coral pl-3 text-sm leading-relaxed text-ink">{c.you}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Der Satz, der die Handarbeit zum Verkaufsargument macht. Steht
              unter den Karten und nicht in der LinkedIn-Karte: er gilt fuer
              zwei der drei Kanaele, und als Fussnote in einer Spalte wuerde
              ihn niemand lesen. */}
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-edge2/70 bg-panel p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
                {t.channels.protectionLabel}
              </p>
              <p className="mt-2.5 max-w-[80ch] text-sm leading-relaxed text-soft">{t.channels.protectionBody}</p>
              <p className="mt-3 text-xs leading-relaxed text-mute">{t.channels.phoneNote}</p>
            </div>
          </Reveal>
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

      {/* Das CRM. Hiess bis zum 2026-08-06 "Mehr als Lead-Suche" und war damit
          gegen die Wettbewerber formuliert statt fuer die eigene Sache. Der
          Abschnitt traegt jetzt die vierte Saeule: was aus einer Antwort wird.

          Zwei Bilder nebeneinander statt eines, weil das GENAU die Aussage
          ist: links kommt eine Antwort herein und wird eingeordnet, rechts
          steht, was daraus zu tun ist. Ein Bild allein zeigt nur die Haelfte
          des Vorgangs. Die Anrufliste ist hier frei geworden, seit der
          Telefon-Abschnitt in #kanaele aufgegangen ist. */}
      <section id="crm" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.postSend.eyebrow} title={t.postSend.title} />
        <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.postSend.body}</p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <PostSendMockup />
          </Reveal>
          <Reveal delay={80}>
            <CallListMockup />
          </Reveal>
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

      {/* Steht bewusst DIREKT hinter den vier Suchwegen: sobald dort "Hunter"
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

      {/* Hier stand bis zum 2026-08-06 der Abschnitt "Ihr nutzt Apollo schon?
          Dann ist das hier kein Ersatz" -- als Einwandbehandlung gemeint, als
          Selbsteinordnung wirksam: wir sind Zubehoer zu dem, was ihr schon
          habt. Zubehoer wird bei der ersten Budgetkuerzung gestrichen.

          Der Einwand ist real und bleibt beantwortet, aber in der
          Gegenrichtung. Der Anker #ergaenzt bleibt bestehen, damit vorhandene
          Links weiter funktionieren. Begruendung im Kopf von _compare.tsx. */}
      <section id="ergaenzt" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={t.compare.eyebrow} title={t.compare.title} />
        <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.compare.body}</p>
        <Reveal>
          <AllInOneCompare />
        </Reveal>
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
          {/* Vier Karten seit Prospeo (2026-08-05). Bewusst 2x2 statt vier
              nebeneinander: bei vier Spalten auf 1280px bleiben je ~270px, und
              die Punktlisten brechen dann auf drei Zeilen je Punkt um. Und
              bewusst nicht lg:grid-cols-3 wie vorher -- das ergaebe 3+1 mit
              einer Luecke, die sich als fehlende Karte liest. */}
          <div className="grid items-stretch gap-8 md:grid-cols-2">
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

          {/* Die vier Beschaffungs-Themen, die am 2026-08-06 ihre eigenen
              Abschnitte verloren haben. Sie standen als vier volle Abschnitte
              zwischen Hero und Produkt -- zusammen mit den Suchwegen waren das
              fuenf Abschnitte ueber Beschaffung, also vier zu viel. Als kurze
              Karten bleiben sie belegbar, ohne die Gewichtung zu kippen; die
              Bilder dazu (TechFilterMockup, LocalReachMockup,
              QualifiedLeadAnimation, VerificationReportMockup) sind fuer
              /funktionen frei geworden. */}
          <div className="mt-14 border-t border-edge2/70 pt-10">
            <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">
              {t.sourcesExtra.title}
            </h3>
            <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2">
              {t.sourcesExtra.items.map((it, i) => (
                <Reveal key={it.id} delay={i * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">{it.label}</p>
                    <h4 className="font-display mt-2 text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
                      {it.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-soft">{it.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <a
              href="/funktionen"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-ink"
            >
              {t.sourcesExtra.linkLabel}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>

        </div>
      </section>
      {/* Kostenbeweis und Sparpotenzial-Rechner standen bis zum 2026-08-06
          hier -- der Kostenbeweis sogar als zweiter Abschnitt der ganzen
          Seite. Beides gibt es auf /preise bereits, Wort fuer Wort und mit
          demselben Rechner. Ein Preisargument gehoert zur Preisfrage, nicht
          vor das Produkt; und dieselbe Sache zweimal auf der Seite zu haben
          heisst, sie zweimal pflegen zu muessen. Der Weg dorthin fuehrt ueber
          den Preis-Abschnitt weiter unten und ueber die Navigation. */}

      {/* Preis-Anriss. Die vollstaendigen Plaene, die Aufschluesselung beider
          Rechnungsposten und der Vergleich stehen auf /preise -- hier bleibt
          nur, was fuer die Entscheidung "weiterlesen oder nicht" reicht. Der
          Anker #preise bleibt bestehen, damit bestehende Links funktionieren. */}
      {/* Hier stand bis zum 2026-08-06 ein Preis-Anriss mit drei Plaenen und
          ein Link auf /preise. Beides ist ersatzlos entfallen: der Preis wird
          individuell im Gespraech festgelegt, und eine Seite, die drei Zahlen
          zeigt und danach doch verhandelt, ist schlechter als eine, die gar
          keine zeigt. /preise ist geloescht und leitet auf /kontakt um, damit
          bestehende Links nicht ins Leere laufen. */}


      {/* Integrations */}
      {/* BYOK und die Integrationsliste, seit dem 2026-08-06 als schmaler
          Streifen statt als voller Abschnitt (POSITIONIERUNG.md Abschnitt 7).

          Der Abschnitt stand an Position 20 und war ueber sechzig Zeilen lang:
          zehn Quellen mit Beschreibung, acht Ziele mit Icons, eine
          hervorgehobene Instantly-Karte. BYOK ist ein gutes Argument, aber es
          ist ein NEBENSATZ -- die Vergleichstabelle sagt inzwischen "deine
          Schluessel, dein Konto, kein Aufschlag", und das reicht auf der
          Startseite. Wer die Liste im Einzelnen sucht, findet sie auf
          /funktionen und in der FAQ.

          Bewusst zwei Zeilen Namen ohne Icons und ohne Beschreibung: es geht
          hier nur um Wiedererkennung ("meine Werkzeuge sind dabei"), nicht um
          Erklaerung. Instantly bleibt hervorgehoben, weil die native Anbindung
          der einzige Eintrag ist, der etwas anderes bedeutet als die uebrigen. */}
      <section id="integrationen" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
            <div className="lg:w-[34%]">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                {t.integrations.eyebrow}
              </p>
              <h2 className="font-display mt-2 text-xl font-semibold leading-snug tracking-[-0.015em] text-ink">
                {t.integrations.title}
              </h2>
            </div>

            <div className="lg:flex-1">
              <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                {t.integrations.sourcesLabel}
              </p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                {t.integrations.sources.map((s) => (
                  <li key={s.name} className="text-sm font-medium text-soft">
                    {s.name}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                {t.integrations.targetsLabel}
              </p>
              <ul className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5">
                {t.integrations.items.map((i, n) => (
                  <li
                    key={i.name}
                    className={
                      n === 0
                        ? "rounded-full border border-sky-300/70 bg-sky-50/60 px-3 py-1 text-sm font-semibold text-sky-900"
                        : "text-sm font-medium text-soft"
                    }
                  >
                    {i.name}
                    {n === 0 && (
                      <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wide text-sky-700">
                        {lang === "de" ? "nativ" : "native"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hier stand bis zum 2026-08-06 der eigene Telefon-Abschnitt. Sein
          Inhalt steckt jetzt in der dritten Spalte von #kanaele, samt der
          Klarstellung, dass Frostbreaker keine Telefonanlage ist. Ein Kanal,
          der als eigener Abschnitt zwischen zwei anderen Themen steht, wirkt
          wie ein Nachtrag; nebeneinander wirken die drei gleichwertig.
          Die CallListMockup ist damit auf der Startseite frei und uebernimmt
          im CRM-Abschnitt die Aufgaben-Ansicht. */}

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
