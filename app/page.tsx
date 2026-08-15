"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CTAButton,
  CTAGroup,
  SectionHeading,
  SiteHeader,
  SiteFooter,
  BOOKING_URL,
  h1Cls,
  h2Cls,
  h3Cls,
  cardTitleCls,
  leadCls,
  sectionPad,
  subSectionPad,
  heroPad,
} from "./_ui";
// SuppressionMockup, DeliverabilityMockup und CampaignMockup lagen im
// Abschnitt "Mehr als nur Leads finden", der am 2026-08-06 von der
// Startseite verschwunden ist. Die Komponenten bleiben fuer /funktionen.
// AgencyMockup ist am 2026-08-15 mit dem Agentur-Band von der Startseite
// verschwunden; es steht weiter auf /fuer-agenturen und /start.
import { PostSendMockup } from "./_mockups";
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
// LeadCardStack ist am 2026-08-15 aus dem Helden gefallen (Begruendung an der
// Fundstelle). _illustration.tsx wird seither von niemandem mehr importiert.
import { SystemMap } from "./_system-map";
// StepWalkthrough ist am 2026-08-15 aus dem Rundgang gefallen (Begruendung an
// der Fundstelle). _walkthrough.tsx wird seither von niemandem mehr
// importiert und bleibt fuer den Tag liegen, an dem es eine Seite gibt, auf
// die ein ausfuehrlicher Rundgang gehoert.
import { CustomerStrip, CustomerSection } from "./_customers";
import { Reveal } from "./reveal";
import { postSendIcons, CheckIcon } from "./_icons";
import { useT } from "./language-provider";

// OfferPoint stand hier: Nummernscheibe, Ueberschrift, Fliesstext. Mit der
// Kurzfassung des Angebot-Abschnitts am 2026-08-15 sind die drei Fliesstexte
// entfallen, und was uebrig blieb -- Scheibe plus Titel -- ist eine Zeile
// Markup in der Liste dort. Ein Bauteil fuer eine Zeile lohnt nicht.

// Wohin die drei Tueren aus dem Abschnitt "Fuer wen" fuehren. Bewusst hier und
// nicht im Woerterbuch: das Woerterbuch haelt Text, keine Wege. Und bewusst
// nach id statt nach Reihenfolge -- wer die drei Karten umsortiert, soll nicht
// aus Versehen die Ziele mitdrehen.
const WOHIN: Record<string, string> = {
  self: "/fuer-saas",
  clients: "/fuer-agenturen",
  new: "/funktionen",
};

export default function Home() {
  const { t } = useT();

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

      {/* Hero */}
      <section className="hero-wash border-b border-edge/60">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + heroPad}>
          {/* ═══════════════════════════════════════════════════════════════
              EINSPALTIG UND MITTIG SEIT DEM 2026-08-15 (KONZENTRATION.md).

              Hier stand rechts LeadCardStack, die Posteingang-Nachbildung.
              Der Coach des Betreibers hat sie herausgenommen, mit dem
              richtigen Grund: sie zeigt genau EIN Produkt, und es gibt zwei
              Angebote (das Werkzeug und die Auftragsentwicklung). Ein Held,
              der eines davon abbildet, legt die Seite auf die Haelfte fest.
              An seine Stelle tritt der Verlauf aus .hero-wash, der dafuer
              sichtbar gemacht werden musste -- siehe globals.css.

              WAS DAMIT VERLOREN GEHT, und wohin es kommt: die Nachbildung
              war das einzige auf der Startseite, das ZEIGTE, dass es die
              Software gibt. Der erste Produktbeweis liegt jetzt in der
              Systemkarte direkt darunter. Faellt die je weg, hat die
              Startseite kein Bild mehr, das etwas belegt.

              Alle sechs Heros der Website stehen damit mittig. Der
              Unterschied "hier faengt die Seite an, dort ein Kapitel" wird
              jetzt von der Groesse getragen, nicht mehr von der Bauform:
              h1Cls geht bis 72px, die Unterseiten bleiben bei ihren
              zweizeiligen Titeln.
              ═══════════════════════════════════════════════════════════ */}
          <div className="fade-up mx-auto max-w-3xl text-center">
            {/* sky-700 statt sky-600: bei 12px Grossbuchstaben reicht
                sky-600 (3.9:1) nicht fuer WCAG AA. */}
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">
              {t.hero.eyebrow}
            </p>
            <h1 className={"mx-auto max-w-[19ch] " + h1Cls}>
              {t.hero.h1Pre}
              <span className="italic text-sky-600">{t.hero.h1Accent}</span>
              {t.hero.h1Post}
            </h1>
            <p className="mx-auto mt-6 max-w-[54ch] text-base leading-relaxed text-soft sm:text-lg">
              {t.hero.body}
            </p>
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <CTAButton />
              <a
                href={BOOKING_URL}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-ink"
              >
                {t.cta.secondary}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            <p className="mx-auto mt-3.5 max-w-[52ch] text-sm text-mute">{t.cta.trialNote}</p>

            {/* Der einzige fremde Name ueber der Falz. Er steht bewusst NACH
                dem Knopf: wer schon klickt, soll nicht aufgehalten werden,
                wer zoegert, findet hier den ersten Beleg, der nicht von uns
                selbst kommt. */}
            <CustomerStrip className="mt-7 justify-center" />
          </div>

          {/* HIER STANDEN DIE DREI VERSPRECHEN, gefallen am 2026-08-15
              (KLARTEXT.md, Stufe 2).

              Drei Ueberschriften mit je einem Satz, direkt unter dem Helden
              und direkt ueber der Systemkarte. Sie sagten dasselbe wie deren
              vier Karten, nur allgemeiner -- zwei Zusammenfassungen
              hintereinander, bevor der Leser ueberhaupt etwas gesehen hat,
              von dem sie eine Zusammenfassung sein koennten.

              Die Systemkarte bleibt: sie ist die konkretere von beiden und
              hat Bilder. `heroPromises` bleibt vorerst im Woerterbuch
              stehen, wird aber von niemandem mehr gelesen. */}
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
      <section id="system" className="scroll-mt-20 border-b border-edge/60 bg-band">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <SectionHeading
            eyebrow={t.systemMap.eyebrow}
            title={t.systemMap.title}
            lead={t.systemMap.body}
          />
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
      <section id="rundgang" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <SectionHeading
          eyebrow={t.walkthrough.eyebrow}
          title={t.walkthrough.title}
          lead={t.walkthrough.body}
        />
        {/* ═══════════════════════════════════════════════════════════════
            KURZFASSUNG SEIT DEM 2026-08-15 (KONZENTRATION.md, Stufe 2).

            Hier stand StepWalkthrough: sechs Schritte mit je einem Absatz,
            einer Detailzeile, einem eigenen Knopf und einer Nachbildung.
            4.335 Pixel und 1.071 Woerter -- 22 Prozent der Seite und 41
            Prozent aller Woerter, zusammen mit dem Angebot-Abschnitt.

            Die Rueckmeldung des Coaches war, dass genau solche Tiefe den
            Besucher verwirrt statt ihn zu ueberzeugen. Der Abschnitt
            beantwortet die Frage "wie laeuft das ab" -- und die sechs
            TITEL beantworten sie vollstaendig. Sie sind der einzige Teil,
            der als Liste gelesen einen Ablauf ergibt; die Absaetze darunter
            sind die Antwort auf eine Frage, die hier noch niemand stellt.

            Kein Wort ist dafuer neu geschrieben worden. Die sechs Titel
            stehen unveraendert im Woerterbuch, in beiden Sprachen, und
            werden dort auch weiter von /funktionen gebraucht.

            Was wegfaellt, faellt nicht aus der Website: fuenf der sechs
            Schritte stehen ausfuehrlich auf /funktionen. Der sechste
            ("Und jetzt weisst du, was funktioniert hat") steht dort nicht
            -- sein Titel bleibt hier, und das Argument dahinter steht in
            der Vergleichstabelle auf /funktionen#vergleich.

            StepWalkthrough bleibt in _walkthrough.tsx liegen. Die Datei
            wird von niemandem mehr importiert; sie steht dort fuer den Tag,
            an dem es eine Seite gibt, auf die ein ausfuehrlicher Rundgang
            gehoert.
            ═══════════════════════════════════════════════════════════ */}
        <ol className="mt-2 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {t.walkthrough.steps.map((s, i) => (
            <li key={s.title} className="flex items-baseline gap-4 border-t border-edge/70 pt-4">
              {/* Die Ziffer traegt die Reihenfolge, nicht die Aussage --
                  deshalb tabellarische Ziffern und zurueckgenommene Farbe.
                  Ohne tabular-nums stehen die zweistelligen nicht auf der
                  Kante der einstelligen. */}
              <span className="shrink-0 text-sm font-semibold tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] font-medium leading-snug text-ink sm:text-base">{s.title}</span>
            </li>
          ))}
        </ol>

        <Link
          href="/funktionen"
          className="mt-8 inline-flex items-center gap-1.5 text-sm text-soft underline decoration-edge3 underline-offset-4 transition-colors hover:text-ink"
        >
          {t.nav.funktionenItems[0].label}
          <span aria-hidden>→</span>
        </Link>

        {/* Der Haupt-CTA steht erst NACH den sechs Schritten. Die Mini-CTAs
            an den einzelnen Schritten sind mit dem ausfuehrlichen Rundgang
            entfallen; dieser hier ist jetzt der einzige. */}
        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-edge2/70 pt-10">
          <CTAButton />
          <p className="max-w-[52ch] text-sm text-mute">{t.cta.trialNote}</p>
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
        className={"scroll-mt-20 mx-auto max-w-6xl border-t border-edge/60 px-4 sm:px-6 " + sectionPad}
      >
        <SectionHeading
          eyebrow={t.offerSection.eyebrow}
          title={t.offerSection.title}
          lead={t.offerSection.body}
        />

        {/* Jede Aussage steht UEBER ihrem Beleg, nicht daneben. Zwei Gruende:
            die Angebotskarte legt sich erst ab 52rem Kartenbreite ueber Kreuz
            (darunter ist sie eine Spalte), und der Coach-Befund ist der
            staerkste Einzelbeleg der Seite -- in einer halben Spalte waere er
            ein drittes Kaertchen. Die dritte Aussage hat bewusst kein Bild;
            sie leitet zu den Grenzen ueber. */}
        {/* ═══════════════════════════════════════════════════════════════
            KURZFASSUNG SEIT DEM 2026-08-15 (KONZENTRATION.md, Stufe 3).

            Hier standen die drei Aussagen mit je einem Absatz darunter, in
            Summe 1.539 Pixel und 494 Woerter. Wie beim Rundgang tragen die
            drei TITEL die Aussage vollstaendig:

              1  Zwoelf Fragen, einmal beantwortet
              2  Der Coach liest gegen und schreibt einen besseren Satz daneben
              3  Daraus entstehen acht Texte

            Das ist der ganze Vorgang. Die Absaetze darunter nannten Tage,
            Wortzahlen und Feldnamen -- Angaben, die derselbe Leser erst
            braucht, wenn er wissen will, WIE es geht, und die auf
            /funktionen#write ("Acht Mails, geschrieben aus zwoelf Feldern")
            Wort fuer Wort stehen.

            Kein Wort ist neu geschrieben. Die drei Titel stehen unveraendert
            im Woerterbuch, in beiden Sprachen.

            Die Nummernscheiben bleiben: sie tragen dieselbe Form und Farbe
            wie die vier Eckennummern in der Angebotskarte darunter, und diese
            Paarung ist der Grund, warum man Text und Bild als ein Gefuege
            liest statt als zwei Listen.
            ═══════════════════════════════════════════════════════════ */}
        <div className="mt-16">
          <ol className="grid gap-x-10 gap-y-5 sm:grid-cols-3">
            {t.offerSection.points.map((pt, i) => (
              <li key={pt.title} className="flex items-baseline gap-3 border-t border-edge/70 pt-4">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-500/12 text-xs font-bold text-sky-700">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium leading-snug text-ink sm:text-base">{pt.title}</span>
              </li>
            ))}
          </ol>

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
        </div>

        {/* HIER STAND "WAS SIE DIR NICHT ABNIMMT", gefallen am 2026-08-15
            (KORREKTUR.md Punkt 5). Drei Absaetze mit je fuenf bis sechs
            Zeilen, rund 620 Pixel, tief im Angebot-Abschnitt.

            Der Betreiber: "wuerde ich ganz weglassen -- das ist soviel Text
            und bringt keinem was." Er hat recht: zwei der drei Punkte
            beschreiben, was die App NICHT tut (fuenf nicht vorgeschlagene
            Felder, leeres Belegfeld), und das interessiert erst jemanden,
            der sie schon benutzt.

            DER DRITTE PUNKT DURFTE NICHT VERSCHWINDEN. "Ein Mensch liest die
            acht Texte, bevor sie an tausend Adressen gehen" ist die Antwort
            auf die haeufigste Sorge bei KI-Texten und stand von Anfang an auf
            der Liste dessen, was nicht verloren gehen darf.

            Er steht zwar wortgleich in der FAQ-Antwort "Kann ich den Text
            noch aendern?" -- aber die FAQ besteht aus details-Elementen, also
            liegt er dort hinter einem Klick. Nachgemessen: im DOM vorhanden,
            ohne Aufklappen nicht sichtbar. Fuer die groesste Sorge bei
            KI-Texten ist das zu tief, und zwar ausgerechnet an der Stelle,
            an der sie entsteht.

            Deshalb steht er hier als EINE Zeile. Das ist nicht der
            zurueckgeholte Block -- der war drei Absaetze und rund 620 Pixel;
            das hier sind vierzig. Der Satz ist woertlich aus der FAQ kopiert,
            nicht neu erfunden.

            offerSection.limitsTitle und offerSection.limits bleiben vorerst
            im Woerterbuch stehen. */}
        <p className="mt-12 max-w-[62ch] border-l-2 border-edge2 pl-4 text-base leading-relaxed text-ink">
          {t.offerSection.humanCheck}
        </p>

        {/* HIER STAND DER SCHLUSSSATZ, gefallen am 2026-08-15 (KLARTEXT.md,
            Stufe 2): "Das ist die Arbeit, fuer die man sonst jemanden im
            Vertrieb einstellt und ein halbes Jahr einarbeitet."

            Der alte Kommentar an dieser Stelle behauptete, der Satz ordne
            ein und verkaufe nicht. Er tut das Gegenteil: er rechnet dem
            Leser vor, was ihm das wert sein sollte -- das ist ein
            Verkaufsargument ueber den WERT, kein Feature, kein Painpoint und
            kein Nutzen. Genau die Sorte Satz, die der Betreiber mit "weniger
            sales maessig" meint.

            `offerSection.closing` bleibt vorerst im Woerterbuch stehen. */}
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
      {/* ═══════════════════════════════════════════════════════════════
          FUER WEN, neu am 2026-08-15 (KONZENTRATION.md Stufe 4).

          Hier stand #agenturen: ein Band, das ausschliesslich Agenturen
          ansprach, mit AgencyMockup daneben. Es beantwortete die Frage
          "fuer wen ist das" mit EINER von drei Tueren und widersprach damit
          der eigenen Navigation, in der drei stehen.

          Der Betreiber hat die Zielgruppe geoeffnet: jedes Unternehmen, das
          Kunden per E-Mail gewinnen will. Das breite Versprechen steht in
          der Augenbraue des Helden, die konkreten Wege stehen hier. Eine
          breite Zeile ohne konkrete Tueren darunter waere eine
          Verschlechterung gewesen, keine Oeffnung.

          Drei LAGEN, keine Branchen. Wer sich in einer Lage wiedererkennt,
          liest weiter; wer in einer Branchenliste seine Branche nicht
          findet, geht.

          AgencyMockup ist damit von der Startseite verschwunden, steht aber
          weiter auf /fuer-agenturen und /start.

          OFFEN: die Karte "self" fuehrt auf /fuer-saas, und diese Seite
          heisst "Fuer SaaS-Anbieter" -- enger als die Karte verspricht. Ihr
          linkLabel behauptet SaaS deshalb bewusst nicht. Der Titel der
          Zielseite gehoert in einem eigenen Schritt geweitet.
          ═══════════════════════════════════════════════════════════════ */}
      <section id="fuer-wen" className="scroll-mt-20 border-y border-edge/60 bg-band">
        {/* Der alte Anker bleibt: auf /#agenturen zeigen vorhandene Verweise. */}
        <span id="agenturen" className="block scroll-mt-20" aria-hidden />
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <SectionHeading eyebrow={t.whoFor.eyebrow} title={t.whoFor.title} />

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {t.whoFor.cards.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-6">
                  <h3 className={cardTitleCls}>{c.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-soft">{c.body}</p>
                  <Link
                    href={WOHIN[c.id]}
                    className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-soft transition-colors hover:text-ink"
                  >
                    {c.linkLabel}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
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

      {/* ═══════════════════════════════════════════════════════════════
          WAS ES KOSTET, neu am 2026-08-15 (KONZENTRATION.md Stufe 4).

          Der eigentliche Kern der Rueckmeldung des Coaches. Die Frage "was
          kostet es" wurde vorher bei 93 PROZENT Scrolltiefe beantwortet,
          zugeklappt in einem details-Element -- und sie stand ZWEIMAL in der
          FAQ ("Was brauche ich, und was kostet es?" neben "Was kostet
          das?"), beide beginnend mit derselben Aussage. Dass eine Frage
          zweimal dasteht, ist fuer den Leser ein Signal, dass es kompliziert
          ist.

          Der Betreiber hat entschieden: OHNE ZAHL. Kein Betrag, keine
          Spanne, kein Ab-Preis. Was sich aendert, ist die STELLE und die
          KLARHEIT.

          Damit das traegt, leistet der Abschnitt zwei Dinge, die die alte
          FAQ-Antwort nicht leistete: er sagt, WOVON der Betrag abhaengt
          (Kundenzahl, nicht Leads, nicht Workspaces -- danach kann der Leser
          sich selbst einordnen), und er sagt, WANN die Zahl faellt (im
          ersten Gespraech). "Preis auf Anfrage" ist eine Verweigerung;
          beides zusammen ist eine Auskunft.

          Die Stelle: unmittelbar VOR der FAQ und nach dem Beleg. Wer bis
          hierher gelesen hat, hat verstanden, was es tut und dass es
          funktioniert -- die Preisfrage ist dann die naechste, die er
          stellt. In der FAQ steht jetzt nur noch, WAS man mitbringen muss
          (eigene Zugaenge bei den sieben Diensten); der Betrag steht hier.
          ═══════════════════════════════════════════════════════════════ */}
      <section id="kosten" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <SectionHeading eyebrow={t.costs.eyebrow} title={t.costs.title} lead={t.costs.body} />

        {/* Die vier Karten sind am 2026-08-15 gefallen (KORREKTUR.md Punkt
            6). Was sie sagten, steht jetzt in den drei Saetzen der
            Einleitung darueber. Ein Abschnitt, der eine einzige Auskunft
            gibt, braucht kein Raster aus vier Spalten.

            Der Satz darunter bleibt: in Ink und ohne Kasten, weil er eine
            Zusage ist und keine Fussnote. */}
        <p className="mt-2 max-w-[62ch] border-l-2 border-coral pl-4 text-base leading-relaxed text-ink">
          {t.costs.note}
        </p>
      </section>

      {/* Die drei Kanaele, neu am 2026-08-06 (POSITIONIERUNG.md Abschnitt 5).
          Zieht den frueheren Abschnitt #telefon hier herein -- der stand als
          eigener Abschnitt weit unten, und LinkedIn kam ueberhaupt nur als
          eine Zeile in der Kette vor. Wenn der Hauptpunkt der App ist, dass
          man Entscheider ueber drei Kanaele erreicht, muessen die drei
          nebeneinander und gleich breit stehen.
          Der Anker telefon bleibt erhalten, damit alte Links funktionieren. */}
      <section id="kanaele" className="scroll-mt-20 border-y border-edge/60 bg-band">
        <span id="telefon" className="block scroll-mt-20" aria-hidden />
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <SectionHeading
            eyebrow={t.channels.eyebrow}
            title={t.channels.title}
            lead={t.channels.body}
          />

          {/* Drei gleich breite Spalten, items-stretch: unterschiedlich hohe
              Karten wuerden als Rangfolge gelesen, und der ganze Punkt ist,
              dass die Kanaele gleichwertig sind. */}
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {t.channels.cards.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-6">
                  <span className="inline-flex self-start rounded-full bg-ink px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-surface">
                    {c.label}
                  </span>
                  <h3 className={"mt-3 " + cardTitleCls}>{c.title}</h3>

                  {/* Die Liste "Was die App tut" stand hier: drei bis vier
                      Aufzaehlungspunkte je Karte (KONZENTRATION.md Stufe 3,
                      2026-08-15). Sie ist gefallen, weil dieser Abschnitt EINE
                      Frage beantwortet -- "auf welchen Kanaelen?" -- und die
                      Antwort in den drei Beschriftungen und drei Titeln
                      vollstaendig steht. Wie die Kanaele im Einzelnen
                      funktionieren, ist die naechste Frage, und die stellt
                      sich auf /funktionen.

                      Der Woerterbuch-Eintrag `app` bleibt bestehen: er wird
                      hier nur nicht mehr gerendert. Wer den Abschnitt spaeter
                      wieder ausbaut, findet den Text unveraendert vor. */}

                  {/* "Was du tust" steht bewusst am Fuss jeder Karte und in der
                      Akzentfarbe. Bei E-Mail ist die Zeile leer ("nichts"),
                      und genau dieser Unterschied zwischen den drei Karten ist
                      die Aussage -- er waere weg, wenn man die Zeile bei den
                      automatischen Kanaelen einfach weglaesst. */}
                  <div className="mt-auto border-t border-edge/70 pt-5">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-faint">
                      {t.channels.youLabel}
                    </p>
                    <p className="mt-2 border-l-2 border-coral pl-3 text-[15px] leading-relaxed text-ink">{c.you}</p>
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
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink">
                {t.channels.protectionLabel}
              </p>
              <p className="mt-2.5 max-w-[80ch] text-[15px] leading-relaxed text-soft">{t.channels.protectionBody}</p>
              <p className="mt-3 max-w-[80ch] text-sm leading-relaxed text-mute">{t.channels.phoneNote}</p>
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
      <section id="crm" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <SectionHeading
          eyebrow={t.postSend.eyebrow}
          title={t.postSend.title}
          lead={t.postSend.body}
        />
        {/* min-w-0, gleiche Ursache wie im Hero: die beiden Nachbildungen
            haben eine grosse Mindestbreite und zogen die Spur unter lg mit
            auf. */}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <PostSendMockup />
          </Reveal>
          <Reveal className="min-w-0" delay={80}>
            <CallListMockup />
          </Reveal>
        </div>
        {/* Die vier Karten trugen bis zum 2026-08-15 je einen Absatz unter
            dem Titel (KONZENTRATION.md Stufe 3). Die Absaetze sind gefallen,
            die TITEL nicht: sie sind die vier Aussagen, und jede steht fuer
            sich.

            Anders als bei #rundgang und #angebot gibt es hier KEINE Seite,
            auf die der Text ausweichen koennte -- /funktionen#pipeline zeigt
            das Kanban-Board, aber weder den gemeinsamen Posteingang noch den
            Umsatz-Forecast (nachgesehen am 2026-08-15). Deshalb bleiben die
            Titel und das Symbol stehen, statt dass der ganze Block zieht:
            vier Aussagen in vier Zeilen sind das Mindeste, das die Website
            von diesen Funktionen behalten muss. Der Fliesstext steht
            unveraendert im Woerterbuch, falls die Funktionsseite spaeter eine
            Gruppe dafuer bekommt. */}
        <div className="mt-10 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.postSend.features.map((f) => (
            <div key={f.id} className="flex items-center gap-3 border-t border-edge/70 pt-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-panel2 text-ink [&_svg]:h-4 [&_svg]:w-4">
                {postSendIcons[f.id]}
              </span>
              <h3 className={cardTitleCls}>{f.title}</h3>
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
      <section id="torwart" className="scroll-mt-20 border-y border-edge/60 bg-band">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <SectionHeading eyebrow={t.guard.eyebrow} title={t.guard.title} lead={t.guard.body} />
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
            <Reveal className="min-w-0">
              <GateMockup />
            </Reveal>
            {/* ═══════════════════════════════════════════════════════════
                HIER WURDE GEKUERZT UND ZURUECKGENOMMEN, 2026-08-15.

                Vier andere Abschnitte der Startseite sind an diesem Tag nach
                demselben Muster geschrumpft: Titel behalten, Fliesstexte
                streichen. Bei #rundgang, #angebot, #kanaele und #crm hat das
                getragen. Hier NICHT, und der Grund zeigte sich erst am
                gemessenen Ergebnis:

                Die Hoehe dieses Abschnitts haengt an den beiden
                Nachbildungen, nicht am Text. Die Textspalte steht in einem
                Raster mit items-center NEBEN GateMockup bzw. EffectMockup;
                wird sie kuerzer, bleibt die Zeilenhoehe stehen. Gemessen:
                1.772 -> 1.748 Pixel. Vierundzwanzig Pixel fuer sechs
                gestrichene Absaetze, und dafuer zwei Titel, die mitten in
                einer halbleeren Spalte schwebten.

                Inhalt entfernt, nichts gewonnen. Zurueckgenommen.

                Wer diesen Abschnitt wirklich kuerzen will, muss an die
                Nachbildungen -- und die sind hier der Beleg: "elf
                Pruefungen, vier davon koennen den Start aufhalten" ist eine
                Behauptung, das Bild daneben ist der Beweis.

                Der Abschnitt bleibt ausserdem auf der Startseite und zieht
                nicht um: seine beiden Aussagen ("das einzige Werkzeug, das
                dir Nein sagt" und "eine Zahl, die nichts bedeutet, zeigen
                wir nicht") stehen auf keiner anderen Seite. /funktionen
                kennt weder die elf Pruefungen noch die Sperre bei zu
                duenner Datenlage, nachgesehen am 2026-08-15.
                ═══════════════════════════════════════════════════════ */}
            <div className="min-w-0 space-y-4">
              {t.guard.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                    <h3 className={cardTitleCls}>{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-soft">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Die zweite Haelfte: was nach dem Senden passiert. Trennlinie und
              Abstand statt eines zweiten Flaechentons -- der Abschnitt liegt
              ohnehin schon auf bg-panel2. */}
          <span id="ehrlich" className="block scroll-mt-20" aria-hidden />
          {/* Unterabschnitt innerhalb des Kapitels, und h3 statt h2 -- genau
              der Fall, fuer den es die dritte Stufe gibt. Die Zahlen stehen
              hier ausgeschrieben und nicht als subSectionPad: der Abstand
              wirkt nur nach OBEN (die Trennlinie), unten schliesst der
              Abschnitt selbst ab. Tailwind v4 liest Klassennamen als Text
              aus der Quelle -- ein zusammengerechneter Name existierte im
              fertigen CSS nicht. */}
          <div className="mt-16 border-t border-edge2/70 pt-14 sm:pt-16">
            <h3 className={"max-w-[26ch] " + h3Cls}>{t.honesty.title}</h3>
            <p className={"mt-5 mb-10 " + leadCls}>{t.honesty.body}</p>
            {/* Gespiegelt zur ersten Haelfte: das Bild steht rechts und
                bekommt dieselben 1,25 Anteile. */}
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
              <div className="min-w-0 space-y-4 lg:order-1">
                {t.honesty.points.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <div className="rounded-2xl border border-edge/60 bg-panel p-5">
                      <h4 className={cardTitleCls}>{p.title}</h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-soft">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal className="min-w-0 lg:order-2">
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
      {/* Die Vergleichstabelle ist am 2026-08-15 nach /funktionen#vergleich
          gezogen (KONZENTRATION.md, Stufe 2). Sie war 1.607 von 20.016 Pixeln
          und beantwortete eine Frage, die sich erst stellt, wenn jemand schon
          verstanden hat, was das Werkzeug tut -- also nicht die Frage eines
          Besuchers der Startseite, sondern die des Lesers der Funktionsseite.

          Der Anker bleibt als leerer Marker: auf ihn zeigen vorhandene
          Verweise, und ein Sprung ins Leere ist schlechter als ein Sprung an
          die Stelle, an der der Inhalt jetzt steht. Wer /#ergaenzt aufruft,
          landet hier und findet den Verweis direkt darunter. */}
      <span id="ergaenzt" className="block scroll-mt-20" aria-hidden />

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
      <section className={"mx-auto max-w-6xl border-t border-edge/60 px-4 sm:px-6 " + sectionPad}>
        {/* Die Ueberschrift war bis zum 2026-08-15 "Warum es Frostbreaker
            gibt" (KLARTEXT.md). Sie bestand die Deckprobe nicht: deckt man
            sie ab, fehlt dem Abschnitt nichts, und sie liesse sich auf jede
            Seite jedes Anbieters setzen. Der Satz aus der linken Karte -- "Ihr
            redet mit dem, der es baut" -- war die ganze Zeit die bessere
            Ueberschrift: er benennt, was der Leser davon HAT, dass wir noch
            klein sind. Er steht jetzt oben, und die Karte darunter traegt nur
            noch die Erklaerung. Der Woerterbuch-Eintrag `why.title` bleibt
            vorerst stehen; er wird von hier nicht mehr gelesen. */}
        <SectionHeading title={t.why.earlyAccess.title} />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-edge/60 bg-panel p-6 hover-lift">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M12 3v3m6.4 1.6-2.1 2.1M21 12h-3M6.7 9.7 4.6 7.6M3 12h3m1.7 4.3-2.1 2.1M12 18v3m4.3-1.7 2.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            {/* Kein h3 mehr: der Titel steht seit dem 2026-08-15 als
                Abschnittsueberschrift oben. Zweimal derselbe Satz auf einer
                Bildschirmhoehe waere eine Wiederholung, kein Aufbau. */}
            <p className="mt-4 text-[15px] leading-relaxed text-soft">{t.why.earlyAccess.body}</p>
          </div>

          <a href="/kontakt" className="hover-lift block rounded-2xl border border-edge/60 bg-panel p-6 transition-colors hover:border-edge2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-faint">{t.why.founderLabel}</p>
            {/* Fraunces, aber kein Kapitel: das Zitat stand auf 16px und war
                damit der klarste Fall der alten Regelverletzung -- eine
                Display-Serife in Lesegroesse liest sich als Fussnote in einem
                Fachbuch. Auf 24px erfuellt es die Grenze und wird zu dem, was
                es ist: die einzige Stelle der Seite, an der ein Mensch
                spricht. Kursiv bleibt, weil es woertliche Rede ist. */}
            <p className="font-display mt-3 text-2xl italic leading-[1.35] tracking-[-0.01em] text-ink">
              {t.why.founderQuote}
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <Image
                src="/team/youssef-tayachi.png"
                alt={t.why.founderName}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-ink">{t.why.founderName}</p>
                <p className="text-sm text-mute">{t.why.founderRole}</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* FAQ */}

      <section id="faq" className="scroll-mt-20 border-t border-edge/60 bg-band">
        <div className={"mx-auto max-w-3xl px-4 sm:px-6 " + sectionPad}>
          <SectionHeading title={t.faq.title} />
          <div className="divide-y divide-edge/60 rounded-2xl border border-edge/60 bg-panel">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                {/* Ohne Chevron war den 12 Fragen nicht anzusehen, dass sie
                    aufklappbar sind -- 943px Seite ohne einen Hinweis darauf. */}
                <summary className="flex min-h-6 cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink marker:content-none">
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
                {/* `fb-faq-answer`: die Antwort blendet ein statt aufzu-
                    springen -- nur Deckkraft und 4px, ausdruecklich KEINE
                    Hoehenanimation (zwoelf Zeilen untereinander, und eine
                    wachsende Hoehe schiebt beim Aufklappen alles darunter
                    weg). Begruendung und Browser-Vorbehalt in globals.css. */}
                <p className="fb-faq-answer mt-2.5 max-w-[68ch] text-[15px] leading-relaxed text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DIE EINE DUNKLE FLAECHE.

          Die Startseite ist 18.292 Pixel hoch und trug vom ersten bis zum
          letzten davon Tinte auf Papier: sieben Flaechenwechsel, alle
          zwischen #fbfbfa und #f1f0ed, dazu Weiss in den Karten. Das ist die
          richtige Entscheidung fuer 18.000 Pixel Erklaerung -- und die
          falsche fuer die letzten 400, an denen genau eine Handlung gefragt
          ist.

          GENAU EINE, UND ZWAR DIESE. Zwei dunkle Flaechen waeren eine Optik;
          eine ist eine Aussage. Deshalb steht das Markup hier ausgeschrieben
          und nicht als Bauteil in _ui.tsx -- ein Bauteil laedt dazu ein, es
          ein zweites Mal zu benutzen, und beim zweiten Mal ist das Argument
          weg. Wer einen zweiten dunklen Abschnitt will, muss diesen Kommentar
          zuerst widerlegen.

          Der primaere Knopf ist invertiert (bg-surface auf bg-ink). CTAGroup
          setzt seine Farben selbst, deshalb steht der Knopf hier einzeln --
          der zweite Weg (Fragen stellen) haengt als Textlink daneben, wie
          ueberall sonst auf der Seite, nur in text-surface/75 statt in
          text-soft. text-surface/75 auf #1c1b19 misst 9,9:1 (nachgemessen
          2026-08-15 im Browser, gemischte Farbe #c3c3c2).
          ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center text-surface sm:px-6 lg:py-32">
          <h2 className={"mx-auto " + h2Cls}>{t.finalCta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-surface/75">
            {t.finalCta.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href={BOOKING_URL}
              // Umgedrehte Fassung des Primaerknopfes (heller Knopf auf der
              // dunklen Flaeche) und deshalb Zeichen fuer Zeichen dieselben
              // Bewegungsklassen wie in CTAButton -- die Begruendung steht
              // dort.
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-surface px-4 py-2.5 text-sm font-medium text-ink shadow-sm transition-[opacity,scale] duration-[140ms] ease-out hover:opacity-85 hoverfine:scale-[1.02] active:scale-[0.98] sm:px-6 sm:py-3"
            >
              {t.cta.primary}
            </a>
            <a
              href={BOOKING_URL}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-surface/75 transition-colors hover:text-surface"
            >
              {t.cta.secondary}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
