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
import { ClaudeStage, StrikeList } from "./_stage";
import { Journey } from "./_journey";
import { CustomerStrip, CustomerProof } from "./_customers";
import { Reveal } from "./reveal";
import { whoForIcons, noteIcons } from "./_icons";
import { useT } from "./language-provider";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE STARTSEITE. Zweiter Umbau am 2026-08-31.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Der erste Umbau desselben Tages hat die Seite von 2.331 auf 640 sichtbare
 * Woerter gebracht und Zahlen durch Bilder ersetzt. Youssef hat sie danach
 * gelesen, und seine Rueckmeldung dreht die AUSRICHTUNG, nicht die Laenge:
 *
 *   "bei landing page musst du auf motivationsebene denken und nicht auf
 *    feature ebene."
 *   "generell bei der landing page wuerde ich keine features nennen sondern
 *    nur, was das produkt macht."
 *   "du hast zwar visuals eingebaut aber es ist eig nur text in kaestchen --
 *    mach lieber eine animation die zeigt was passiert anstatt es zu
 *    schreiben."
 *   "die claude mcp integration ist ein viel besserer verkaufsargument."
 *
 * ═══ WAS DARAUFHIN GEFALLEN IST ═══
 *
 * Fuenf Abschnitte, alle vom selben Tag, alle auf Funktionsebene:
 *
 *   Kennzahlenband  3 Kanaele, 6 Beruehrungen, 8 Mails, 12 Pruefungen ...
 *   Systemkarte     drei Karten mit je einer Dreipunktliste
 *   Sequenzdiagramm 90/70/50/35 Woerter an Tag 0/3/5/7
 *   Angebot         zwoelf Felder hinein, acht Mails hinaus
 *   Startpruefung   zwoelf Kacheln, vier davon Blocker
 *
 * Jede dieser Zahlen stimmt und jede ist im App-Repo nachzaehlbar. Genau das
 * war das Problem: sie beschreiben, WIE DAS WERKZEUG GEBAUT IST. Wer auf
 * dieser Seite landet, hat es noch nie benutzt und fragt sich, was ihm das
 * bringt. Alle fuenf stehen weiter auf /funktionen, wo diese Frage gestellt
 * wird.
 *
 * ═══ WAS AN IHRE STELLE GETRETEN IST ═══
 *
 *   1  Held         das Ergebnis, nicht die Faehigkeit
 *   2  Handgriffe   vier Dinge, die der Leser heute selbst macht, durch-
 *                   gestrichen waehrend er hinsieht
 *   3  Ablauf       der ganze Weg als Buehne, die ihn vorfuehrt
 *   4  Claude       die Anbindung, der neue Hauptgrund
 *   5  Fuer wen     bin ich gemeint
 *   6  Kunde        macht das ausser euch jemand
 *   7  Kosten       was es kostet
 *   8  Fragen       der Rest
 *   9  Schluss      die eine Handlung
 *
 * Zwei der neun Abschnitte fuehren etwas VOR statt es zu beschreiben. Die
 * Regeln dafuer stehen im Kopf von _stage.tsx; die wichtigste ist, dass beide
 * Buehnen additiv sind, also am Ende das ganze Bild zeigen und nicht den
 * letzten Takt.
 *
 * ═══ DIE EINE STELLE, AN DER ICH VON YOUSSEFS WORTEN ABGEWICHEN BIN ═══
 *
 * Er schrieb, man koenne ueber Claude "automatisiert leads suchen ... und
 * abschicken". Beides kann die Anbindung nicht, und zwar mit Absicht: kein
 * Werkzeug im Protokoll startet eine Suche oder sendet eine Mail
 * (apps/web/lib/mcp/tool-descriptions.ts, wortwoertlich "that boundary is
 * deliberate"). Die Suche legt er in seinen eigenen Ablaeufen per SQL an, was
 * ein Kunde nicht kann. Der Abschnitt sagt deshalb, was stimmt, und benennt
 * die Grenze selbst -- auf einer Seite, die sonst keine Zahl zeigt, die sie
 * nicht nachrechnen kann, ist das keine Schwaeche, sondern der Grund, warum
 * ihr der Rest geglaubt wird.
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
          1 · DER HELD.

          Ohne Kennzahlenband darunter, seit dem zweiten Umbau. Was dort
          stand, waren sechs Zahlen ueber die Mechanik; was jetzt folgt, sind
          vier Handgriffe, die wegfallen. Der Unterschied ist die ganze
          Rueckmeldung.
          ═══════════════════════════════════════════════════════════ */}
      <section className="hero-wash border-b border-edge/60">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + heroPad}>
          <div className="fade-up mx-auto max-w-3xl text-center">
            <h1 className={"mx-auto max-w-[17ch] " + h1Cls}>
              {t.hero.h1Pre}
              {/* NUR FARBE, KEINE KURSIVE. Fraunces hatte eine echte
                  Kanzleikursive und der Akzent stand darin; Wix Madefor
                  Display hat ueberhaupt keinen kursiven Schnitt
                  (metadata.json: styles ["normal"]), und eine vom Browser
                  schraeggestellte Grotesk ist keine Kursive, sondern ein
                  gekippter Buchstabe. Auf marketing.frostbreaker.app traegt
                  der Akzent ebenfalls nur Farbe: "before they call" steht
                  dort blau und aufrecht. */}
              <span className="text-sky-600">{t.hero.h1Accent}</span>
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
            <p className="mx-auto mt-4 text-[15px] text-mute">{t.cta.trialShort}</p>

            {/* Der einzige fremde Name ueber der Falz. Er steht bewusst NACH
                dem Knopf: wer schon klickt, soll nicht aufgehalten werden,
                wer zoegert, findet hier den ersten Beleg, der nicht von uns
                selbst kommt. */}
            <CustomerStrip className="mt-8 justify-center" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2 · WAS WEGFAELLT.

          Der erste Abschnitt nach dem Helden nennt kein einziges Produktwort.
          Er nennt vier Dinge, die der Leser HEUTE macht, und streicht sie
          durch, waehrend er hinsieht. Wer sich in dreien davon wiedererkennt,
          liest den Rest.

          Der Strich ist die Aussage und deshalb animiert: ein Haken sagt
          "erledigt", ein Strich sagt "faellt weg". Technik in _stage.tsx.
          ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-edge/60 bg-band">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <h2 className={h2Cls}>{t.strikeList.title}</h2>
            <StrikeList items={t.strikeList.items} note={t.strikeList.note} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3 · DER WEG. Das Kernstueck der Seite.

          Youssef: "lass das das kernstueck der landing page sein denn darum
          gehts in der app."

          Hier stand zuerst die Systemkarte (drei Karten mit Stichpunkten),
          dann eine erste Buehne mit fuenf Takten. Jetzt laufen sechs Akte:
          der Entscheider wird gefunden, seine Website angesehen, die Mail
          geschrieben, die Antwort kommt, das Gespraech laeuft, aus dem Lead
          wird ein Kunde.

          DER BESUCHER WAEHLT DIE NISCHE. Das ist die einzige Handlung, die
          er hat, und sie ist genau die Handlung, um die es im Produkt geht:
          eine Eingabe, der Rest laeuft. Die Wahl zieht bis zum letzten Akt
          durch -- Rolle, Befunde, Mailtext, Antwort und Notizen sind je
          Nische andere Saetze.

          KEIN ANKER MEHR AUF EINEN ABSCHNITT, DEN ES NICHT GIBT: die drei
          alten Marken bleiben stehen, weil aus Navigation und von aussen
          Verweise darauf zeigen.
          ═══════════════════════════════════════════════════════════ */}
      <section id="ablauf" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <span id="system" className="block scroll-mt-20" aria-hidden />
        <span id="kanaele" className="block scroll-mt-20" aria-hidden />
        <span id="rundgang" className="block scroll-mt-20" aria-hidden />
        <div className="mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <div className="max-w-[34ch]">
            <h2 className={h2Cls}>{t.journey.title}</h2>
            <p className="mt-5 text-[19px] leading-relaxed text-soft">{t.journey.body}</p>
          </div>
          {/* Dieselbe Kennzeichnung wie an jeder Nachbildung dieser Seite.
              Die Buehne zeigt Rollen und Segmente, keine Firmennamen -- aber
              sie zeigt Saetze, die wie eine echte Mail aussehen, und dann
              muss danebenstehen, dass es ein Beispiel ist. */}
          <p className="text-[15px] text-mute">{t.journey.sampleNote}</p>
        </div>
        <Journey
          frage={t.journey.frage}
          hinweis={t.journey.hinweis}
          nischen={t.journey.nischen}
          akte={t.journey.akte}
          firmenLabel={t.journey.firmenLabel}
          gefundenLabel={t.journey.gefundenLabel}
          geprueft={t.journey.geprueft}
          scanLabel={t.journey.scanLabel}
          anLabel={t.journey.anLabel}
          betreffLabel={t.journey.betreffLabel}
          schreibtLabel={t.journey.schreibtLabel}
          antwortLabel={t.journey.antwortLabel}
          statusVorher={t.journey.statusVorher}
          statusNachher={t.journey.statusNachher}
          notizenLabel={t.journey.notizenLabel}
          spalten={t.journey.spalten}
          wiederholen={t.journey.wiederholen}
          neuWaehlen={t.journey.neuWaehlen}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4 · DIE ANBINDUNG AN CLAUDE, der neue Hauptgrund.

          Youssef: "die claude mcp integration ist ein viel besserer
          verkaufsargument denn der kunde kann alle seine agent skills und
          automations dazu integrieren."

          Der Abschnitt steht NACH dem Ablauf und nicht davor. Wer nicht
          gesehen hat, was das Werkzeug tut, kann mit "du kannst es von Claude
          bedienen lassen" nichts anfangen -- die Anbindung ist eine Aussage
          UEBER den Ablauf, also braucht sie den Ablauf davor.

          Eigene Flaeche: es ist das staerkste Argument der Seite, und es ist
          das einzige, das sonst kein Anbieter in dieser Kategorie hat.
          ═══════════════════════════════════════════════════════════ */}
      <section id="claude" className="scroll-mt-20 border-y border-edge/60 bg-band">
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <div className="mb-12 max-w-[52ch]">
            <h2 className={h2Cls}>{t.claudeStage.title}</h2>
            <p className="mt-6 text-[19px] leading-relaxed text-soft">{t.claudeStage.body}</p>
          </div>
          <ClaudeStage
            auftrag={t.claudeStage.auftrag}
            schritte={t.claudeStage.schritte}
            ergebnis={t.claudeStage.ergebnis}
            grenze={t.claudeStage.grenze}
            wiederholen={t.claudeStage.wiederholen}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5 · FUER WEN. Drei Lagen, keine Branchen: wer sich in einer Lage
          wiedererkennt, liest weiter; wer in einer Branchenliste seine
          Branche nicht findet, geht.
          ═══════════════════════════════════════════════════════════ */}
      <section id="fuer-wen" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        {/* Der alte Anker bleibt: auf /#agenturen zeigen vorhandene Verweise. */}
        <span id="agenturen" className="block scroll-mt-20" aria-hidden />
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
      </section>

      {/* 6 · Der Kundenbeleg, kurz. Der ganze Fall steht auf /kunden/retaiyn. */}
      <CustomerProof className="border-y border-edge/60 bg-band" />

      {/* ═══════════════════════════════════════════════════════════════
          7 · WAS ES KOSTET. Ohne Zahl, und das bleibt so -- was der Abschnitt
          leistet, ist zu sagen, WOVON der Betrag abhaengt (Kundenzahl) und
          WANN er faellt (im ersten Gespraech). "Preis auf Anfrage" ist eine
          Verweigerung, beides zusammen ist eine Auskunft.
          ═══════════════════════════════════════════════════════════ */}
      <section id="kosten" className={"scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <h2 className={h2Cls}>{t.costs.title}</h2>
        <p className="mt-6 max-w-[56ch] text-[19px] leading-relaxed text-soft">{t.costs.body}</p>
        <p className="mt-8 flex max-w-[56ch] items-start gap-3.5 text-[19px] leading-relaxed text-ink">
          <span className="mt-0.5 shrink-0 text-sky-600">{noteIcons.price}</span>
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
