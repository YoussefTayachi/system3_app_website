"use client";
import Image from "next/image";
import { CTAButton, CTAGroup, SectionHeading, SiteHeader, SiteFooter, BOOKING_URL } from "./_ui";
// SuppressionMockup, DeliverabilityMockup und CampaignMockup lagen im
// Abschnitt "Mehr als nur Leads finden", der am 2026-08-06 von der
// Startseite verschwunden ist. Die Komponenten bleiben fuer /funktionen.
import { AgencyMockup, PostSendMockup } from "./_mockups";
// DashboardMockup ist seit dem 2026-08-06 nicht mehr auf der Startseite: das
// erste Bild ist jetzt die Ansicht "Nach Text". Die Komponente bleibt in
// _app-mockups.tsx, /funktionen ist der naheliegende neue Ort dafuer.
// UnifiedSearchMockup ist am 2026-08-14 mit dem Suchwege-Abschnitt frei
// geworden und steht seither nur noch auf /funktionen#find, wo sie schon
// vorher stand. LeadsTableMockup wurde hier seit dem Umbau des Rundgangs
// gar nicht mehr gerendert, nur noch importiert.
import { CallListMockup } from "./_app-mockups";
import { GateMockup, EffectMockup } from "./_guard-mockups";
// CoachFindingMockup ist am 2026-08-14 aus #angebot gefallen und steht nur
// noch auf /kunden/retaiyn -- dort, wo der Fall erzaehlt wird. Begruendung
// unten an der Fundstelle.
import { OfferMapMockup, type OfferMapMockupProps } from "./_offer-mockups";
import { LeadCardStack } from "./_illustration";
import { SystemMap } from "./_system-map";
import { AllInOneCompare } from "./_compare";
import { StepWalkthrough } from "./_walkthrough";
import { CustomerStrip, CustomerSection } from "./_customers";
import { Reveal } from "./reveal";
import { postSendIcons, CheckIcon } from "./_icons";
import { useT } from "./language-provider";

/**
 * Eine der drei Aussagen im Angebot-Abschnitt: Nummer, Ueberschrift,
 * Fliesstext.
 *
 * Die Nummernscheibe traegt dieselbe Form und dieselbe Farbe wie die vier
 * Eckennummern in der Angebotskarte darunter (_offer-mockups.tsx). Damit
 * liest man Text und Bild als ein Gefuege statt als zwei getrennte Listen.
 * Nur drei Vorkommen, deshalb ein Bauteil hier oben statt dreimal dasselbe
 * Markup im Abschnitt.
 */
function OfferPoint({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="max-w-[64ch]">
      <div className="flex items-baseline gap-3">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-500/12 text-[11px] font-bold text-sky-700">
          {n}
        </span>
        <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-[1.375rem]">
          {title}
        </h3>
      </div>
      {/* Eingerueckt auf die Textkante der Ueberschrift (24px Scheibe + 12px
          Abstand = 36px): der Fliesstext haengt dadurch an der Ueberschrift
          und nicht an der Nummer. */}
      <p className="mt-3 pl-9 text-base leading-relaxed text-soft">{body}</p>
    </div>
  );
}

export default function Home() {
  const { t } = useT();

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

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

              {/* Der einzige fremde Name ueber der Falz. Er steht bewusst
                  NACH dem Knopf: wer schon klickt, soll nicht aufgehalten
                  werden, wer zoegert, findet hier den ersten Beleg, der
                  nicht von uns selbst kommt. */}
              <CustomerStrip className="mt-7" />
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
        </div>

        {/* Der Hero trug bis zum 2026-08-14 zwei Elemente mehr: ein
            Fakten-Abzeichen ("42 Euro zurueck fuer jeden Euro", Litmus) und
            darunter CopyOutcomesHighlight, eine zweite Fassung der Ansicht
            "Nach Text". Beides ist gefallen (VEREINFACHUNG.md 1.2): die Zahl
            ist geliehen und auf einer Seite, die keine unbelegte Zahl zeigt,
            ein Fremdkoerper -- und das Bild war eine Vorschau auf ein Bild,
            das vier Bildschirme tiefer in Rundgang Schritt 6 noch einmal
            kommt. Der Hero traegt jetzt: Ueberschrift, Fliesstext, zwei CTAs,
            Kundenstreifen, ein Bild, drei Versprechen. */}
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
          DER ANGEBOT-ABSCHNITT (ANGEBOT-VERMARKTUNG.md, Stufe 2a).

          WARUM AN DIESER STELLE
          Der Rundgang darueber endet bei "jetzt weisst du, was funktioniert
          hat". Die naechste Frage des Lesers ist "und wer schreibt das
          alles?" -- die beantwortet dieser Abschnitt. Vor dem Rundgang
          stuende er als Vorbedingung und hielte die Erzaehlung auf.
          `walkthrough.steps[1].detail` verweist woertlich auf "gleich im
          Abschnitt darunter": wer den Abschnitt verschiebt, macht den Satz
          falsch.

          KEIN EIGENER FLAECHENTON
          Der Abschnitt liegt auf dem Seitengrund wie #rundgang darueber.
          bg-panel2 waere hier ein zweites graues Band unmittelbar vor dem
          Agentur-Band -- genau der Fall, den der Kommentar vor
          CustomerSection weiter unten schon einmal beschreibt. Getrennt wird
          ueber Abstand, nicht ueber Farbe oder eine Linie.

          WO REVEAL LIEGT UND WO NICHT
          Nur um die beiden Bilder, wie in #system und #ergaenzt. Der
          Observer prueft 15 % der Flaeche DES ZIELS (reveal.tsx,
          threshold 0.15) -- ein Ziel, das hoeher ist als das 6,67-fache des
          Fensters, erreicht diesen Anteil nie und bleibt dauerhaft auf
          opacity 0. Gemessen am 2026-08-13: der Abschnitt ist auf 375 Pixeln
          rund 5390 Pixel hoch, bei 812 Pixeln Fensterhoehe das 6,6-fache --
          ein Reveal um das Ganze waere genau dort gescheitert, wo es niemand
          nachsieht. Ueberschrift und Fliesstext bleiben aus einem zweiten
          Grund ausserhalb: wer ueber /#angebot hereinspringt (Menuepunkt in
          nav.produktItems), stuende bis zur Hydration sonst vor einem
          unsichtbaren Abschnitt. Und id und scroll-mt traegt das
          section-Element selbst, ausserhalb jedes Reveal: .reveal startet mit
          translateY(18px) (globals.css), das verschoebe waehrend der
          Animation das Sprungziel.
          ═══════════════════════════════════════════════════════════════ */}
      {/* Haarlinie statt Flaechenwechsel. Der Rundgang davor ist 4214 Pixel
          hoch, dieser Abschnitt 3469 -- fast 8000 Pixel derselben Flaeche ohne
          Orientierungspunkt (gemessen 14.08.2026, 1440px). Eine eigene Flaeche
          scheidet aus: der naechste Abschnitt (#agenturen) ist bereits grau,
          zwei graue Bloecke hintereinander waeren dieselbe Wand in anderer
          Farbe. Die Hausregel gibt hier die Reihenfolge vor -- erst Abstand,
          dann Trennlinie; der Abstand steht mit py-20 auf beiden Seiten schon,
          getragen hat er bei dieser Laenge nicht. */}
      <section
        id="angebot"
        className="scroll-mt-20 mx-auto max-w-6xl border-t border-edge/60 px-4 py-20 sm:px-6"
      >
        <SectionHeading eyebrow={t.offerSection.eyebrow} title={t.offerSection.title} />
        <p className="-mt-6 max-w-[62ch] text-base leading-relaxed text-soft">{t.offerSection.body}</p>

        {/* Jede Aussage steht UEBER ihrem Beleg, nicht daneben. Zwei Gruende:
            die Angebotskarte legt sich erst ab 52rem Kartenbreite ueber Kreuz
            (darunter ist sie eine Spalte), und der Coach-Befund ist der
            staerkste Einzelbeleg der Seite -- in einer halben Spalte waere er
            ein drittes Kaertchen. Die dritte Aussage hat bewusst kein Bild;
            sie leitet zu den Grenzen ueber. */}
        <div className="mt-16">
          <OfferPoint n={1} title={t.offerSection.points[0].title} body={t.offerSection.points[0].body} />
          {/* Die Einordnung steht UEBER dem Bild, nicht darunter. Sie stand
              bis zum 14.08.2026 in offerMap.note, also unter der Karte -- und
              damit hinter den Prozentzahlen im Ergebnisfeld. Wer von oben
              liest, hatte "bis zu 70 %" da laengst als unsere Zahl gelesen.
              Es sind retaiyns eigene Angaben ueber ihr eigenes Angebot, und
              das muss dastehen, bevor die Zahl auftaucht. Kein eigener
              OfferPoint: die Nummerierung gehoert den drei Aussagen. */}
          <p className="mt-6 max-w-[62ch] border-l-2 border-edge2 pl-4 text-sm leading-relaxed text-soft">
            {t.offerSection.caseIntro}
          </p>
          {/* Die Zusicherung ist noetig, nicht kosmetisch: `corners` ist im
              Bauteil ein 4-Tupel und `nodes` ein 3-Tupel (genau vier Ecken,
              genau drei Felder -- das sind die zwoelf Fragen, von denen der
              Text daneben spricht). `type Dictionary = typeof de` leitet aus
              den Literalen in dict.ts aber gewoehnliche Arrays ab, und ein
              Array ist einem Tupel nicht zuweisbar. Ohne das `as` bricht
              `npx tsc --noEmit` an dieser Zeile ab (nachgemessen am
              2026-08-13): TS2322, "Target requires 4 element(s) but source
              may have fewer". */}
          <Reveal className="mt-8">
            <OfferMapMockup {...(t.offerSection.offerMap as OfferMapMockupProps)} />
          </Reveal>

          {/* Aussage 2 ("Der Coach liest gegen") steht hier ohne Bild.
              CoachFindingMockup hing bis zum 2026-08-14 darunter -- mit
              denselben Props (t.offerSection.coachFinding) wie auf
              /kunden/retaiyn, Feld fuer Feld dasselbe Bild auf zwei Seiten.
              VEREINFACHUNG.md hatte geplant, dass es WANDERT; gebaut wurde
              die Kundenseite, ohne dass die Startseite etwas abgegeben hat.
              Nachgeholt (EINHEITLICH.md S4/D1): der Beleg steht dort, wo der
              Fall erzaehlt wird. OfferMapMockup bleibt auf beiden Seiten --
              hier ist sie der Beleg fuer die Kernaussage des Abschnitts,
              dort retaiyns Profil.

              OFFEN: der Textlink auf /kunden/retaiyn, der laut Plan (D1/D2)
              an diese Stelle gehoert, fehlt noch -- er braucht eine
              formulierte Zeile in de und en. */}
          <div className="mt-16">
            <OfferPoint n={2} title={t.offerSection.points[1].title} body={t.offerSection.points[1].body} />
          </div>

          <div className="mt-16">
            <OfferPoint n={3} title={t.offerSection.points[2].title} body={t.offerSection.points[2].body} />
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            DIE GRENZEN. Ausdruecklich nicht das Kleingedruckte.

            Anders gesetzt als die drei Aussagen (weisse Flaeche statt
            Seitengrund, Ueberschrift eine Stufe unter der Abschnitts-
            ueberschrift, Zeilen mit fester Beschriftungsspalte), aber an
            keiner Stelle leiser: der Fliesstext hat dieselbe Groesse wie
            oben (text-base -- die uebrigen Kartenraster dieser Seite stehen
            auf text-sm), und der Block ist die groesste zusammenhaengende
            Flaeche des Abschnitts.

            Weiss statt bg-panel2: ein grauer Kasten am Fuss eines Abschnitts
            liest sich als Anhang. Weiss auf dem Seitengrund hebt ihn an.
            ───────────────────────────────────────────────────────────── */}
        <div className="mt-20 rounded-3xl border border-edge2/70 bg-panel px-5 py-8 sm:px-10 sm:py-10">
          <h3 className="font-display max-w-[26ch] text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            {t.offerSection.limitsTitle}
          </h3>
          {/* Zwei Spalten erst ab lg. Darunter blieben von den 17rem
              Beschriftungsspalte fuer den Fliesstext rund 30 Zeichen je
              Zeile uebrig -- gestapelt liest er sich in voller Breite. */}
          <div className="mt-7 divide-y divide-edge/80 border-t border-edge/80">
            {t.offerSection.limits.map((l) => (
              <div
                key={l.title}
                className="grid gap-x-10 gap-y-2 py-7 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]"
              >
                <h4 className="font-display text-xl font-semibold leading-snug tracking-[-0.015em] text-ink">
                  {l.title}
                </h4>
                <p className="max-w-[70ch] text-base leading-relaxed text-soft">{l.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Der Schlusssatz: eine Stufe groesser als Fliesstext und in Ink,
            aber ohne Kasten und ohne Knopf. Er ordnet ein, er verkauft
            nicht -- ein CTA an dieser Stelle waere der dritte auf einer
            Bildschirmhoehe (Rundgang darueber, Agentur-Band darunter). */}
        <p className="mt-14 max-w-[68ch] text-base leading-relaxed text-ink sm:text-[17px] sm:leading-[1.7]">
          {t.offerSection.closing}
        </p>
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

      {/* Der Kundenbeleg steht direkt hinter dem Agentur-Band. Dort hat die
          Seite gerade erklaert, was sie fuer Agenturen kann -- und die
          naechste Frage eines Agenturinhabers ist immer dieselbe: macht das
          ausser euch jemand? Der Abschnitt beantwortet sie mit einem Namen
          und dreht sie im Spiegel-Block sofort auf den Leser zurueck.

          Ohne Flaechenton zwischen zwei Baendern mit bg-panel2: das hebt die
          Karte heraus, statt sie im dritten grauen Block hintereinander
          verschwinden zu lassen. */}
      <CustomerSection className="border-b border-edge/60" />

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

      {/* Der Abschnitt #kette stand bis zum 2026-08-14 hier. Er ist gefallen,
          weil Rundgang Schritt 4 dasselbe sagt und zwei seiner drei Karten
          dort woertlich stehen ("Immer genau ein naechster Schritt", "Wer
          antwortet, faellt sofort raus"). ChainMockup ist dorthin gewandert
          und hat LinkedInMockup abgeloest -- der Schritt beschreibt die ganze
          Kette, nicht nur die LinkedIn-Nachricht, und das Bild soll sagen,
          was der Text sagt.

          BEWUSST OHNE leeren Marker, anders als bei #telefon weiter oben.
          Der Telefon-Abschnitt ist UMGEZOGEN -- sein Marker sitzt in
          #kanaele, also dort, wo sein Inhalt heute steht, und ein Sprung
          darauf landet beim Richtigen. Die Kette ist nicht umgezogen: was
          von ihr uebrig ist, steckt mitten im Rundgang, und ein Marker an
          dieser Stelle wuerde zwischen #kanaele und #crm landen, wo nichts
          mehr ueber die Kette steht. Ein Anker, der irgendwohin fuehrt, ist
          schlechter als keiner. Dasselbe gilt fuer #alltag weiter unten. */}

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

      {/* ═══════════════════════════════════════════════════════════════
          EIN ABSCHNITT AUS ZWEIEN, seit dem 2026-08-14.

          Hier standen #torwart ("die App sagt Nein, BEVOR du sendest") und
          #ehrlich ("die App beschoenigt keine Zahl, NACHDEM du gesendet
          hast") als zwei volle Abschnitte hintereinander, beide auf bg-panel2,
          beide mit Augenbraue, Ueberschrift, Einleitung, einem Bild und drei
          Karten. Sie sind zwei Haelften derselben Haltung; getrennt kostete
          sie zweimal die volle Hoehe und war beim Scrollen nicht als zwei
          Abschnitte erkennbar.

          Jetzt ein Abschnitt mit zwei Bildern und vier Karten. Die zweite
          Haelfte behaelt ihre eigene Ueberschrift (h3, eine Stufe unter der
          Abschnittsueberschrift) -- ohne sie waere "Zwoelf Mails und eine
          Antwort sind nicht 8,3 %" nur ein weiterer Absatz, und es ist der
          schaerfste Satz von beiden.

          Bild abwechselnd links/rechts, wie im Rundgang: zwei gleich gebaute
          Haelften untereinander lesen sich sonst als dieselbe Aussage zweimal.
          Der Anker #ehrlich steht in keinem Menuepunkt, bleibt aber als
          leerer Marker an der Stelle stehen, an der sein Abschnitt begann.
          ═══════════════════════════════════════════════════════════════ */}
      <section id="torwart" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.guard.eyebrow} title={t.guard.title} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.guard.body}</p>
          {/* SPALTENVERHAELTNIS UND SENKRECHTE AUSRICHTUNG, 2026-08-14.
              Beide Haelften hatten zwei gleich breite Spalten und
              items-start. Seit der Verschmelzung tragen sie je zwei Karten
              statt drei, und in der ersten Haelfte stand das Bild damit
              allein: nachgemessen bei 1440px in Deutsch GateMockup 540px
              gegen 331px Kartenspalte -- 209px sichtbares Loch rechts unten,
              das sich wie eine fehlende dritte Karte liest.

              Zwei Aenderungen, beide gemessen (1440px, Deutsch):
              1. Das Bild bekommt 1,25 von 2 Anteilen. Die Nachbildungen sind
                 dichte App-Ansichten und werden bei 670 statt 536 Pixeln
                 spuerbar lesbarer; die Karten stehen mit 402px immer noch
                 breiter als die drei Kanalkarten weiter oben (368px bei
                 derselben Fensterbreite). Nebenwirkung: das Bild wird
                 flacher (540 -> 522), die schmaleren Karten werden hoeher
                 (331 -> 400) -- der Rest des Lochs schrumpft auf 122px.
              2. items-center statt items-start verteilt diesen Rest auf
                 oben und unten. Ein halbierter Abstand ueber und unter der
                 Kartenspalte liest sich als Paarung, ein ganzer darunter als
                 Fehlstelle.
              Die zweite Haelfte bekommt dasselbe gespiegelt (0,75 / 1,25),
              damit die beiden Haelften nicht unterschiedlich gebaut wirken.
              Unter lg ist beides wirkungslos: dort ist das Raster einspaltig. */}
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
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

          {/* Die zweite Haelfte: was nach dem Senden passiert. Trennlinie und
              Abstand statt eines zweiten Flaechentons -- der Abschnitt liegt
              ohnehin schon auf bg-panel2. */}
          <span id="ehrlich" className="block scroll-mt-20" aria-hidden />
          <div className="mt-16 border-t border-edge2/70 pt-14">
            <h3 className="font-display max-w-[26ch] text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[1.75rem]">
              {t.honesty.title}
            </h3>
            <p className="mt-4 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{t.honesty.body}</p>
            {/* Gespiegelt zur ersten Haelfte: das Bild steht rechts und
                bekommt dieselben 1,25 Anteile. */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
              <div className="space-y-4 lg:order-1">
                {t.honesty.points.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                      <h4 className="font-display text-lg font-semibold tracking-[-0.015em] text-ink">{p.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-soft">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal className="lg:order-2">
                <EffectMockup />
              </Reveal>
            </div>
          </div>
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

      {/* Der Abschnitt "Woher die Leads kommen" samt "Was mit jeder Suche
          mitlaeuft" stand bis zum 2026-08-14 hier: acht Karten, zwanzig
          Aufzaehlungspunkte und eine bedienbare Suchmaske, der textlastigste
          Block der Startseite. Er ist gefallen, weil /funktionen ihn
          vollstaendig abbildet -- die Gruppe find ist der Suchwege-Block in
          kurz, tech und enrich sind zwei der vier Zusatzkarten, send und
          protect decken die uebrigen ab. UnifiedSearchMockup steht dort
          ohnehin schon.

          Vier Anbieternamen als farbige Kacheln beantworteten hier
          ausserdem eine Frage, die niemand gestellt hat ("woher kommen die
          Daten?"), und legten die nahe, die man nicht hoeren will: warum
          gehe ich dann nicht gleich dorthin? Die Antwort darauf steht in
          der Vergleichstabelle darueber und in der FAQ -- dort ist sie
          Argument statt Auslage. */}

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


      {/* Der Streifen #integrationen stand bis zum 2026-08-14 hier: zwei
          Zeilen Anbieternamen, Quellen und Ziele. Er ist gefallen
          (VEREINFACHUNG.md 1.2). Sein eigentliches Argument -- eure
          Zugaenge, eure Konditionen, kein Aufschlag -- steht als
          `ledgerKeep` in der Vergleichstabelle darueber, und zwar als
          Rechnung statt als Behauptung. Die Namensliste selbst war
          Wiedererkennung ohne Aussage; wer sie sucht, findet sie auf
          /funktionen und in der FAQ. Der Menuepunkt in nav.produktItems ist
          mitgefallen. Ein leerer Marker bleibt, weil der Anker in fremden
          Links stehen kann. */}
      <span id="integrationen" className="block scroll-mt-20" aria-hidden />

      {/* Hier stand bis zum 2026-08-06 der eigene Telefon-Abschnitt. Sein
          Inhalt steckt jetzt in der dritten Spalte von #kanaele, samt der
          Klarstellung, dass Frostbreaker keine Telefonanlage ist. Ein Kanal,
          der als eigener Abschnitt zwischen zwei anderen Themen steht, wirkt
          wie ein Nachtrag; nebeneinander wirken die drei gleichwertig.
          Die CallListMockup ist damit auf der Startseite frei und uebernimmt
          im CRM-Abschnitt die Aufgaben-Ansicht. */}

      {/* Der Abschnitt #startklar ("Ohne Vorwissen starten") stand bis zum
          2026-08-14 hier: zwei Karten, zehn Haken, 682 Pixel hoch. Er ist
          gefallen (EINHEITLICH.md S1), weil beide Haelften anderswo stehen --
          "die Anleitung sitzt im Werkzeug" sagt why.earlyAccess eine
          Bildschirmhoehe weiter unten ("die Einrichtung machen wir
          gemeinsam"), und der Abmeldelink steht als
          featuresPage.groups.protect. Dazu beantwortete er eine Frage, die
          NACH dem Termin kommt ("schaffe ich das?"), nicht davor. Der
          Schluessel safeStart ist aus beiden Woerterbuchhaelften mit
          entfernt. Kein leerer Marker: #startklar steht in keinem Menuepunkt
          und in keinem Fliesstext.

          ACHTUNG FLAECHENFOLGE: dieser Abschnitt war der graue Streifen
          zwischen #ergaenzt und "Warum es Frostbreaker gibt". Ohne ihn laeuft
          die Seite hier wieder ueber ZWEI helle Abschnitte am Stueck -- genau
          der Zustand, den der Wechsel am 14.08.2026 behoben hat. Gemeldet an
          den ui-designer; die Flaechenfolge wird nicht nebenbei umgefaerbt. */}

      {/* Der Vertrauens-Abschnitt ("Datenschutz ist keine Checkbox") stand bis
          zum 2026-08-14 hier: zwei Kacheln und drei Rechtslinks. Beide Kacheln
          waren BYOK-Wiederholung -- verschluesselte Schluessel und
          Kostenkontrolle stehen als `ledgerKeep` in der Vergleichstabelle und
          als Antwort in der FAQ. Von den drei Links fehlte dem Fuss nur der
          AVV; der steht dort jetzt (dict `footer.avv`). */}

      {/* Warum es Frostbreaker gibt. Bis zum 2026-08-14 drei Karten und ein
          Fliesstext darueber; `why.body` und die Karte `poweredBy` sagten
          beide "ein Werkzeug statt vier" und sind gefallen. Geblieben sind
          die zwei Karten, die es sonst nirgends auf der Seite gibt: der frueh
          begleitete Zugang und der Gruender.

          Haarlinie oben, seit #startklar dazwischen weggefallen ist: sonst
          laeuft die Seite hier ueber zwei helle Abschnitte am Stueck
          (#ergaenzt 1457px, dieser 496px). Eine graue Flaeche scheidet aus --
          die FAQ direkt darunter ist bereits grau, zwei graue Bloecke
          hintereinander waeren dieselbe Wand in anderer Farbe. Dieselbe
          Abwaegung wie bei #angebot: erst Abstand, dann Trennlinie, dann
          Flaeche; der Abstand steht mit py-20 auf beiden Seiten schon. */}
      <section className="mx-auto max-w-6xl border-t border-edge/60 px-4 py-20 sm:px-6">
        <SectionHeading title={t.why.title} />

        <div className="grid gap-5 lg:grid-cols-2">
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

      <SiteFooter />

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
