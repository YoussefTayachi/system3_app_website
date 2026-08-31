"use client";
import Link from "next/link";
import {
  CTAButton,
  SiteHeader,
  SiteFooter,
  BOOKING_URL,
  h1Cls,
  h2Cls,
  cardTitleCls,
  sectionPad,
  heroPad,
} from "./_ui";
import { SystemMap } from "./_system-map";
// OfferMapMockup ist am 2026-08-31 von der Startseite gefallen und steht
// weiter auf /funktionen#write. Begruendung im Kopf von OfferFlow.
import { FactStrip, SequenceChart, ReadinessGrid, OfferFlow } from "./_charts";
import { CustomerStrip, CustomerProof } from "./_customers";
import { Reveal } from "./reveal";
import { factIcons, channelIcons, whoForIcons, noteIcons } from "./_icons";
import { useT } from "./language-provider";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE STARTSEITE, neu gefasst am 2026-08-31.
 * ══════════════════════════════════════════════════════════════════════
 *
 * ANLASS. Youssefs Mentor hat den CTS-Entwurf in drei Runden gelesen; was
 * dabei herauskam, liegt als Pruefliste in Website_Business/Lehren. Diese
 * Seite ist danach umgebaut worden. Die vier Punkte, die hier alles
 * entschieden haben:
 *
 *   "650 Woerter, nicht 1.250. Beim Schreiben streichen, nicht danach."
 *   "Gekuerzt wurden ganze Elemente, nicht Saetze."
 *   "Piktogramme fuer Kennzahlen und Kartenueberschriften."
 *   "Das Diagramm antwortet, mit Zeiger und mit Tastatur."
 *
 * GEMESSEN, NICHT GESCHAETZT. Vor dem Umbau, mit scripts/count-words.mjs auf
 * der ausgelieferten Seite:
 *
 *   Startseite gesamt        2.331 sichtbare Woerter
 *   davon #torwart             425
 *   davon #angebot             369
 *   davon #kunde               259
 *   davon #system              253
 *   davon #kanaele             221
 *   davon #crm                 175
 *
 * WAS GANZ WEGGEFALLEN IST, und wohin es gegangen ist. Kein Satz ist
 * umgeschrieben worden, um ihn kuerzer zu machen -- gestrichen wurden
 * Elemente, und jedes steht ausfuehrlich auf einer Unterseite:
 *
 *   #rundgang       sechs Schritttitel   -> /funktionen, ganz
 *   #crm            drei Karten + Bild   -> /funktionen#pipeline
 *   #ehrlich        A/B-Ehrlichkeit      -> /funktionen#vergleich
 *   #ergaenzt       Ergaenzungsband      -> /funktionen
 *   #integrationen  Integrationsliste    -> /funktionen
 *   "Warum es Frostbreaker gibt"         -> /kontakt, dort mit Gesicht
 *   #kunde          voller Fall          -> /kunden/retaiyn
 *
 * Der Rundgang war der teuerste Einzelfall: er beantwortete "wie laeuft das
 * ab" ein zweites Mal, direkt unter der Systemkarte, die dieselbe Frage als
 * BILD beantwortet. Zwei Zusammenfassungen desselben Ablaufs hintereinander
 * sind eine zu viel, und die mit dem Bild gewinnt.
 *
 * DIE AUGENBRAUEN SIND WEG. Auf jedem Abschnitt stand ueber der Ueberschrift
 * eine Zeile in Grossbuchstaben, die die Ueberschrift ankuendigte ("Der
 * Ablauf" ueber "Vier Stufen, eine Datenbasis"). Die Ueberschrift traegt sich
 * selbst; die Augenbraue kostete nur Wortbudget und eine Zeile Hoehe. Die
 * Schluessel bleiben im Woerterbuch -- die Unterseiten benutzen sie weiter.
 *
 * DIE REIHENFOLGE, und warum sie so und nicht anders ist:
 *
 *   1  Held           was es ist
 *   2  Kennzahlen     wie gross es ist, in sechs Zahlen mit Zeichen
 *   3  Systemkarte    wie es zusammenhaengt, als Bild
 *   4  Sequenz        was der Empfaenger davon merkt, als Diagramm
 *   5  Angebot        wer den Text schreibt
 *   6  Startpruefung  was schiefgehen kann und was das aufhaelt
 *   7  Fuer wen       bin ich gemeint
 *   8  Kunde          macht das ausser euch jemand
 *   9  Kosten         was es kostet
 *  10  Fragen         der Rest
 *  11  Schluss        die eine Handlung
 *
 * Vier der elf Abschnitte tragen ein Bild, das etwas belegt, und zwischen
 * zwei Bildern liegt nie mehr als ein Abschnitt Text.
 * ══════════════════════════════════════════════════════════════════════ */

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

      {/* ═══════════════════════════════════════════════════════════════
          1 · DER HELD, und direkt darunter das Kennzahlenband.

          Beide liegen im SELBEN Abschnitt und auf derselben Flaeche, nur
          durch eine Haarlinie getrennt. Das ist der Punkt: die sechs Zahlen
          sind die Beweisfuehrung der Ueberschrift, nicht der naechste
          Abschnitt. Ein eigener Flaechenton oder sechs Karten haetten daraus
          ein zweites Kapitel gemacht.
          ═══════════════════════════════════════════════════════════ */}
      <section className="hero-wash border-b border-edge/60">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + heroPad}>
          <div className="fade-up mx-auto max-w-3xl text-center">
            {/* HIER STAND DIE AUGENBRAUE ("Fuer alle, die Kunden per E-Mail
                gewinnen wollen"). Sie sagte in acht Woertern, was die
                Ueberschrift darunter in neun sagt, nur allgemeiner.
                `hero.eyebrow` bleibt im Woerterbuch: /start liest es. */}
            <h1 className={"mx-auto max-w-[19ch] " + h1Cls}>
              {t.hero.h1Pre}
              <span className="italic text-sky-600">{t.hero.h1Accent}</span>
              {t.hero.h1Post}
            </h1>
            <p className="mx-auto mt-7 max-w-[46ch] text-lg leading-relaxed text-soft sm:text-xl">
              {t.hero.short}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <CTAButton />
              <a
                href={BOOKING_URL}
                className="tap-link group gap-1.5 text-[15px] font-medium text-soft transition-colors hover:text-ink"
              >
                {t.cta.secondary}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            {/* Die Kurzfassung. Die lange Zeile stand mit 24 Woertern unter
                dem wichtigsten Knopf der Seite und beantwortete dort eine
                Frage, die erst im Gespraech kommt. */}
            <p className="mx-auto mt-4 text-[15px] text-mute">{t.cta.trialShort}</p>

            {/* Der einzige fremde Name ueber der Falz. Er steht bewusst NACH
                dem Knopf: wer schon klickt, soll nicht aufgehalten werden,
                wer zoegert, findet hier den ersten Beleg, der nicht von uns
                selbst kommt. */}
            <CustomerStrip className="mt-8 justify-center" />
          </div>
        </div>

        <div className="border-t border-edge/60">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
            <FactStrip items={t.facts.items} icons={factIcons} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2 · DIE SYSTEMKARTE. Beantwortet "wie gross ist das hier?" in einem
          Bild, bevor irgendetwas im Einzelnen erklaert wird. Seit heute ohne
          Einleitungssatz: die Karte darunter ist die Einleitung.
          ═══════════════════════════════════════════════════════════ */}
      <section id="system" className="scroll-mt-20 border-b border-edge/60 bg-band">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <h2 className={"mb-12 " + h2Cls}>{t.systemMap.title}</h2>
          <Reveal>
            <SystemMap />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3 · DIE SEQUENZ ALS DIAGRAMM.

          Hier stand ein Abschnitt aus drei Karten mit je einer
          Dreipunktliste "Was die App tut" und einer Zeile "Was du tust" --
          221 Woerter, die beschrieben, was ein Diagramm zeigt.

          Das Diagramm zeigt zwei Dinge auf einmal, die vorher zwei Absaetze
          brauchten: dass die Mails KUERZER WERDEN (90/70/50/35 Woerter), und
          dass nach Tag 7 zwei Beruehrungen kommen, die die App NICHT sendet.
          Beide Aussagen stehen jetzt in der Form des Bildes selbst -- die
          gestrichelten Felder sind keine Zierde, sie sind der Unterschied
          zwischen automatisch und von Hand.

          Die drei Kanalkarten darunter behalten Zeichen und Titel und
          verlieren ihre Listen. `channels.cards[].app` und `.you` bleiben im
          Woerterbuch: /funktionen zeigt sie vollstaendig.
          ═══════════════════════════════════════════════════════════ */}
      <section id="kanaele" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        {/* Der alte Anker bleibt: auf /#telefon zeigen vorhandene Verweise. */}
        <span id="telefon" className="block scroll-mt-20" aria-hidden />
        <h2 className={"mb-12 " + h2Cls}>{t.channels.title}</h2>

        <Reveal>
          <SequenceChart {...t.sequenceChart} />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {t.channels.cards.map((c) => (
            <li key={c.id} className="rounded-2xl border border-edge/60 bg-panel p-6">
              <p className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-faint">
                <span className="text-sky-600">{channelIcons[c.id]}</span>
                {c.label}
              </p>
              <h3 className={"mt-3.5 " + cardTitleCls}>{c.title}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4 · DAS ANGEBOT. Die Antwort auf "und wer schreibt das alles?", die
          der Leser nach dem Sequenzdiagramm stellt.

          Gefallen sind: der Einleitungsabsatz (55 Woerter), die vier
          nummerierten Punkttitel (30), die Einordnung ueber retaiyns eigene
          Zahlen (33) und der Schlusssatz.

          UND DIE NACHBILDUNG DES ANGEBOTSBILDSCHIRMS. Sie allein trug 268
          sichtbare Woerter -- zwoelf Feldfragen, vier Eckentitel, eine Tafel
          fuer den Listen-Zuschnitt, ein Befundpfeil. Das ist kein schlechtes
          Bild, es ist am falschen Ort: es zeigt, WIE MAN DAS BEDIENT, und
          diese Seite beantwortet, WAS DA PASSIERT. An ihrer Stelle steht
          jetzt das Ablaufbild -- zwoelf Felder hinein, eine Pruefung, acht
          Mails hinaus. Der Bildschirm steht unveraendert auf
          /funktionen#write.

          GEBLIEBEN IST DER EINE SATZ UEBER DEN MENSCHEN VOR DEM VERSAND. Er
          ist die Antwort auf die haeufigste Sorge bei KI-Texten und steht
          sonst nur in der FAQ, also hinter einem Klick. Seit heute mit
          Piktogramm: er ist kein Nachsatz, er ist eine Zusage.
          ═══════════════════════════════════════════════════════════ */}
      <section id="angebot" className="scroll-mt-20 border-y border-edge/60 bg-band">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <h2 className={"mb-12 " + h2Cls}>{t.offerSection.title}</h2>

          <Reveal>
            <OfferFlow {...t.offerFlow} />
          </Reveal>

          <p className="mt-12 flex max-w-[62ch] items-start gap-3.5 text-[19px] leading-relaxed text-ink">
            <span className="mt-0.5 shrink-0 text-sky-600">{noteIcons.human}</span>
            {t.offerSection.humanCheck}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5 · DIE STARTPRUEFUNG, mit 425 Woertern bisher der teuerste
          Abschnitt der Seite.

          Er bestand aus einem Absatz ueber verbrannte Domains, zwei Karten
          mit je einem Absatz und zwei Nachbildungen. Was davon uebrig bleibt,
          ist die Zahl: zwoelf Pruefungen, vier davon halten den Start auf.
          Als Raster aus zwoelf Kacheln sagt das dasselbe in zwanzig Woertern,
          und die vier korallenen Kacheln sagen es, bevor eine gelesen ist.

          GateMockup und EffectMockup sind damit von der Startseite weg und
          stehen weiter auf /funktionen#protect. `guard.body` und
          `guard.points` bleiben im Woerterbuch, dieselbe Seite liest sie.
          ═══════════════════════════════════════════════════════════ */}
      <section id="torwart" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        {/* Der alte Anker bleibt: auf /#ehrlich zeigen vorhandene Verweise.
            Der Ehrlichkeits-Abschnitt selbst steht auf /funktionen. */}
        <span id="ehrlich" className="block scroll-mt-20" aria-hidden />
        <h2 className={"mb-12 " + h2Cls}>{t.guard.title}</h2>
        <Reveal>
          <ReadinessGrid
            blockerLabel={t.readiness.blockerLabel}
            warnLabel={t.readiness.warnLabel}
            items={t.readiness.items}
          />
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6 · FUER WEN. Drei Lagen, keine Branchen: wer sich in einer Lage
          wiedererkennt, liest weiter; wer in einer Branchenliste seine
          Branche nicht findet, geht.

          Die drei Beschreibungssaetze sind gefallen (74 Woerter). Titel und
          Weg reichen -- die Zielseite dahinter erklaert es ohnehin, und sie
          hat dafuer eine ganze Seite. `whoFor.cards[].body` bleibt im
          Woerterbuch fuer den Fall, dass eine Unterseite es aufgreift.
          ═══════════════════════════════════════════════════════════ */}
      <section id="fuer-wen" className="scroll-mt-20 border-y border-edge/60 bg-band">
        {/* Der alte Anker bleibt: auf /#agenturen zeigen vorhandene Verweise. */}
        <span id="agenturen" className="block scroll-mt-20" aria-hidden />
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <h2 className={"mb-12 " + h2Cls}>{t.whoFor.title}</h2>

          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {t.whoFor.cards.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className="h-full">
                <Link
                  href={WOHIN[c.id]}
                  // Die ganze Karte ist der Weg, nicht nur die Zeile unten.
                  // Ohne Beschreibungstext ist eine Karte mit einem einzigen
                  // Textlink am Fuss eine Karte, deren obere zwei Drittel
                  // nichts tun.
                  className="group flex h-full flex-col rounded-2xl border border-edge/60 bg-panel p-7 transition-[border-color,transform] duration-200 ease-out hover:border-edge3 hoverfine:-translate-y-0.5"
                >
                  <span className="text-sky-600">{whoForIcons[c.id]}</span>
                  <h3 className={"mt-5 " + cardTitleCls}>{c.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[15px] font-medium text-soft transition-colors group-hover:text-ink">
                    {c.linkLabel}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Der Kundenbeleg, kurz. Der ganze Fall steht auf /kunden/retaiyn. */}
      <CustomerProof className="border-b border-edge/60" />

      {/* ═══════════════════════════════════════════════════════════════
          8 · WAS ES KOSTET. Ohne Zahl, und das bleibt so -- was sich
          geaendert hat, ist die Stelle und die Klarheit: der Abschnitt sagt,
          WOVON der Betrag abhaengt (Kundenzahl) und WANN er faellt (im ersten
          Gespraech). "Preis auf Anfrage" ist eine Verweigerung, beides
          zusammen ist eine Auskunft.
          ═══════════════════════════════════════════════════════════ */}
      <section id="kosten" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <h2 className={h2Cls}>{t.costs.title}</h2>
        <p className="mt-6 max-w-[56ch] text-[19px] leading-relaxed text-soft">{t.costs.body}</p>
        <p className="mt-8 flex max-w-[56ch] items-start gap-3.5 text-[19px] leading-relaxed text-ink">
          <span className="mt-0.5 shrink-0 text-coral">{noteIcons.price}</span>
          {t.costs.note}
        </p>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-edge/60 bg-band">
        <div className={"mx-auto max-w-3xl px-4 sm:px-6 " + sectionPad}>
          <h2 className={"mb-10 " + h2Cls}>{t.faq.title}</h2>
          <div className="divide-y divide-edge/60 rounded-2xl border border-edge/60 bg-panel">
            {/* DIE POLSTERUNG SITZT AN summary, NICHT AN details.
                Gemessen am 2026-08-31 bei 390 px: die Zeile war 66 px hoch,
                aufklappbar war aber nur die summary darin, und die mass 26 px.
                Wer die oberen oder unteren 20 px einer FAQ-Zeile antippt,
                trifft nichts -- und genau dorthin faellt der Daumen. Jetzt
                traegt summary die Polsterung und ist so hoch wie die Zeile;
                die Antwort bringt ihre eigene mit. */}
            {t.faq.items.map((f) => (
              <details key={f.q} className="group">
                {/* Ohne Chevron war den Fragen nicht anzusehen, dass sie
                    aufklappbar sind. */}
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[17px] font-medium text-ink marker:content-none">
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
                    Hoehenanimation. Begruendung in globals.css. */}
                <p className="fb-faq-answer -mt-1 max-w-[68ch] px-6 pb-5 text-[17px] leading-relaxed text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DIE EINE DUNKLE FLAECHE.

          Die Seite traegt vom ersten bis zum letzten Pixel Tinte auf Papier:
          Flaechenwechsel nur zwischen #fbfbfa und #f1f0ed, dazu Weiss in den
          Karten. Das ist die richtige Entscheidung fuer die Erklaerung -- und
          die falsche fuer die letzten 400 Pixel, an denen genau eine Handlung
          gefragt ist.

          GENAU EINE, UND ZWAR DIESE. Zwei dunkle Flaechen waeren eine Optik;
          eine ist eine Aussage. Deshalb steht das Markup hier ausgeschrieben
          und nicht als Bauteil in _ui.tsx -- ein Bauteil laedt dazu ein, es
          ein zweites Mal zu benutzen, und beim zweiten Mal ist das Argument
          weg. Wer einen zweiten dunklen Abschnitt will, muss diesen Kommentar
          zuerst widerlegen.

          text-surface/75 auf #1c1b19 misst 9,9:1.
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center text-surface sm:px-6 lg:py-32">
          <h2 className={"mx-auto " + h2Cls}>{t.finalCta.title}</h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a
              href={BOOKING_URL}
              // Umgedrehte Fassung des Primaerknopfes (heller Knopf auf der
              // dunklen Flaeche) und deshalb Zeichen fuer Zeichen dieselben
              // Bewegungsklassen wie in CTAButton -- die Begruendung steht
              // dort.
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-surface px-4 py-3 text-sm font-medium text-ink shadow-sm transition-[opacity,scale] duration-[140ms] ease-out hover:opacity-85 hoverfine:scale-[1.02] active:scale-[0.98] sm:px-6"
            >
              {t.cta.primary}
            </a>
            <a
              href={BOOKING_URL}
              className="tap-link group gap-1.5 text-[15px] font-medium text-surface/75 transition-colors hover:text-surface"
            >
              {t.cta.secondary}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
          {/* HIER STAND `finalCta.body`, 34 Woerter darueber, was in den
              dreissig Minuten passiert. Es steht wortgleich in
              `cta.trialNote` unter dem Helden und noch einmal auf /start.
              Dreimal dieselbe Auskunft auf einem Weg von elf Abschnitten. */}
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
