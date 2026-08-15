"use client";
import { useT } from "./language-provider";

/**
 * Die Systemkarte: der ganze Umfang der App auf einen Blick, direkt unter dem
 * Hero.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM ES DIESEN ABSCHNITT GIBT
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Der Auftrag lautet: leicht verstaendlich machen, dass dies ein All-in-one-
 * Werkzeug ist. Ein Rundgang ueber sechs Bildschirme erklaert das gut, aber
 * langsam -- und wer nach dem Hero in fuenf Sekunden nicht weiss, wie gross
 * der Umfang ist, scrollt gar nicht erst bis Schritt 6. Deshalb steht der
 * Umfang hier als EIN Bild, bevor irgendetwas im Einzelnen erklaert wird.
 *
 * Die Rueckkopplungsschleife nach unten ist die eigentliche Aussage: der
 * Prozess laeuft nicht nur, er lernt. Apollo verkauft Daten, Instantly
 * verkauft Zustellung -- beide sehen jeweils nur eine Haelfte. Frostbreaker
 * erzeugt den Text UND sieht die Antwort darauf. Das ist der einzige Kasten
 * auf dieser Karte, den ein Wettbewerber nicht zeichnen kann.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * ZWEI ENTWURFSENTSCHEIDUNGEN
 * ═══════════════════════════════════════════════════════════════════════
 *
 * 1. DOM STATT EINER SVG-ZEICHNUNG
 *
 * Der Plan sah ein Inline-SVG vor. Gebaut ist es aus Elementen mit
 * Tailwind-Klassen, nur die Pfeile sind SVG. Grund: ein SVG mit festem
 * viewBox skaliert die SCHRIFT mit -- auf 375px waeren die Beschriftungen
 * unter 10px, und ein horizontal scrollendes Diagramm ist auf dem Telefon
 * wertlos. Als DOM klappt die Karte unter lg sauber auf eine Spalte um, und
 * die Schrift bleibt in jeder Breite lesbar. Dieselbe Entscheidung wie bei
 * allen Mockups der Seite.
 *
 * 2. DIE PFEILE WECHSELN DIE RICHTUNG, NICHT NUR DIE LAGE
 *
 * Ab lg zeigen sie nach rechts, darunter nach unten. Ein nach rechts
 * zeigender Pfeil ueber einer gestapelten Spalte behauptet einen Ablauf, den
 * das Auge nicht nachvollziehen kann.
 */

/** Pfeil zwischen zwei Stufen. Ab lg waagerecht, darunter senkrecht --
 *  deshalb zwei Varianten statt einer gedrehten: eine Rotation wuerde die
 *  Strichstaerke mitdrehen und auf schmalen Geraeten ausfransen.
 *
 *  FARBE: `text-faint`, nicht `text-edge3`. Die beiden Pfeile tragen die
 *  eigentliche Aussage dieser Karte -- dass die drei Stufen eine KETTE sind
 *  und nicht drei Angebote nebeneinander. In edge3 (#a9a8a2) waren sie die
 *  schwaechsten Elemente im ganzen Bild und verschwanden neben ihrer eigenen
 *  Beschriftung.
 *
 *  `lg:self-center`: die Karten sind seit dem 2026-08-15 ungleich hoch
 *  (items-start, siehe unten). Ohne self-center saesse der Pfeil ab lg oben
 *  am Rand der Zeile statt zwischen den Karten. */
function StageArrow({ label, delay }: { label: string; delay: number }) {
  return (
    <div
      className="fb-anim fb-arrow flex shrink-0 flex-col items-center justify-center gap-1.5 py-3 lg:self-center lg:px-3 lg:py-0"
      style={{ animationDelay: delay + "ms" }}
      aria-hidden
    >
      {/* senkrecht, unter lg */}
      <svg viewBox="0 0 16 34" className="h-8 w-4 text-faint lg:hidden" fill="none">
        <path d="M8 0v26" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 21 8 28l5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* waagerecht, ab lg */}
      <svg viewBox="0 0 34 16" className="hidden h-4 w-8 text-faint lg:block" fill="none">
        <path d="M0 8h26" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 2.5 28 8l-7 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="max-w-[9rem] text-center text-[11px] leading-tight text-mute">{label}</span>
    </div>
  );
}

/**
 * Eine Stufe traegt ENTWEDER `items` (mehrere gleichrangige Dinge)
 * ODER `body` (ein Fliesstext). Beide Felder optional, weil
 * `type Dictionary = typeof de` aus dem Stufen-Array eine Vereinigung der
 * drei Objektformen ableitet -- eine Pflichtangabe hier wuerde `stages[0]`
 * unzuweisbar machen, sobald sich die Formen unterscheiden.
 *
 * Erwartet wird `systemMap.stages[0].body` (de und en) vom `copywriter`.
 * Solange der Schluessel fehlt, faellt Stufe 1 auf `items` zurueck und
 * zeigt ihre vier Anbieternamen weiter -- dann aber schon in der neuen,
 * kachellosen Form. Der Rueckfall darf verschwinden, sobald `body` steht.
 */
type Stage = {
  id: string;
  label: string;
  title: string;
  note: string;
  items?: string[];
  body?: string;
};

function StageCard({ stage, accent, delay }: { stage: Stage; accent: boolean; delay: number }) {
  return (
    <div
      style={{ animationDelay: delay + "ms" }}
      // Bewusst OHNE h-full: die Karte ist Flex-Kind einer Zeile, und
      // "height: 100%" gegen ein Elternteil mit automatischer Hoehe faellt
      // auf auto zurueck. Seit dem 2026-08-15 sollen die Karten ohnehin
      // ungleich hoch sein (siehe SystemMap unten).
      //
      // Die neutrale Karte traegt `shadow-card` und KEINEN border: die erste
      // Schicht des Schattens ist die Haarlinie (globals.css). Die
      // Akzentfassung behaelt ihren coral-Rahmen -- er ist eine Aussage ueber
      // die Farbe, keine Kante, und daneben waere die graue Ringschicht des
      // Schattens ein zweiter, widersprechender Strich.
      className={
        "fb-anim fb-rise-8 flex flex-1 flex-col rounded-2xl p-5 " +
        (accent ? "border border-coral/40 bg-coral-soft" : "bg-panel shadow-card")
      }
    >
      <p
        className={
          "text-[11px] font-bold uppercase tracking-[0.14em] " +
          (accent ? "text-ink" : "text-faint")
        }
      >
        {stage.label}
      </p>
      {/* Kartentitel in Space Grotesk, nicht in Fraunces: die Display-Serife
          traegt erst ab 24px. Darunter liest sie sich als Fachtext -- genau
          das war hier bei 18px der Fall. */}
      <h3 className="mt-2 text-[1.0625rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
        {stage.title}
      </h3>
      {/* ═══════════════════════════════════════════════════════════════
          KEINE KACHELN MEHR, seit dem 2026-08-14.

          Bis dahin stand jede Zeile in einem eigenen Kasten: Rahmen,
          Eckenrundung und ein zweiter Flaechenton auf einer Karte, die
          selbst schon Rahmen und Flaeche hat. Drei Ebenen Kasten
          uebereinander -- das ist die staerkste Auszeichnung, die diese
          Seite kennt, und sie lag ausgerechnet auf den vier Anbieternamen
          in Stufe 1. Die Karte behauptete damit, die Quelle sei das
          Merkmal des Systems; gemeint ist das Gegenteil.

          Jetzt Trennlinien statt Kaesten -- eine Stufe leiser, dieselbe
          Ordnung. Dasselbe Mittel wie in den Grenzen unter #angebot und in
          der FAQ, also nichts Neues auf dieser Seite.

          WARUM ALLE DREI STUFEN, obwohl nur Stufe 1 beanstandet war:
          verschwindet der Kasten nur dort, sieht die Karte aus, als fehle
          Stufe 1 etwas. Der Unterschied zwischen den Stufen soll im INHALT
          liegen (Stufe 1 ein Satz, Stufe 2 und 3 je drei Dinge), nicht in
          zwei verschiedenen Auszeichnungen nebeneinander.

          WARUM STUFE 2 UND 3 IHRE LISTE BEHALTEN: dort stehen drei
          tatsaechlich gleichrangige Dinge -- drei Kanaele, drei Arten von
          CRM-Eintrag. Eine Liste ist dafuer die ehrliche Form. Nur Stufe 1
          zaehlte austauschbare Anbieter auf, und genau das ist eine
          Zutatenliste und keine Stufe eines Ablaufs.
          ═══════════════════════════════════════════════════════════════ */}
      {/* 15px, nicht 13px. Das hier ist SEITENTEXT und keine Nachbildung: in
          den Mockups bildet 10-13px einen Bildschirm im Massstab ab, hier
          stand Fliesstext einer Verkaufsseite in Fussnotengroesse. Gemessen
          bei 1440px: die Zeile lief vorher auf 13px/1.625, jetzt 15px/1.625 --
          derselbe Rhythmus, lesbare Groesse. */}
      {stage.body ? (
        <p className="mt-4 text-[15px] leading-relaxed text-soft">{stage.body}</p>
      ) : (
        // Linien NUR ZWISCHEN den Punkten, nicht darum herum: eine Liste
        // braucht keine Aussenkante, sie hat die Karte. Reiner Abstand
        // reicht hier nicht -- mehrere Punkte laufen ueber zwei Zeilen, und
        // dann ist der Abstand zwischen zwei Punkten kaum groesser als der
        // zwischen zwei Zeilen desselben Punktes (gemessen bei 1440px in
        // Deutsch, Stufe 2: 18px Zeilenabstand gegen 21px bei space-y-4).
        // Genau deshalb standen dort urspruenglich Kaesten; die Trennlinie
        // loest dasselbe eine Stufe leiser.
        <ul className="mt-4 divide-y divide-edge/70">
          {stage.items?.map((item) => (
            <li key={item} className="py-2.5 text-[15px] leading-relaxed text-soft">
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* mt-6 statt mt-auto, seit dem 2026-08-15.
          Die Notiz sass am Kartenfuss, damit die drei Notizen auf einer Hoehe
          enden. Der Preis dafuer stand ueber ihr: gemessen bei 1440px in
          Deutsch klaffte zwischen der letzten Listenzeile und der Trennlinie
          in Karte 2 rund 90px und in Karte 3 rund 100px leere Flaeche. Ein
          leerer Streifen mitten in einer Karte liest sich als Fehlstelle, und
          die Trennlinie erklaert ihn nicht, sie markiert ihn nur.
          Ungleich hohe Karten sind ehrlicher als gleich hohe Karten mit
          Loechern -- die Zeile darueber setzt dafuer items-start. */}
      <p className="mt-6 border-t border-edge/70 pt-5 text-xs leading-relaxed text-mute">
        {stage.note}
      </p>
    </div>
  );
}

/**
 * DIE LESEREIHENFOLGE ALS ABLAUF.
 *
 * Bis zum 2026-08-15 kam die ganze Karte als EIN Block herein: ein `Reveal`,
 * und drei Stufen, zwei Pfeile und die Rueckkopplung standen gleichzeitig
 * da. Das Bild behauptet eine Kette und zeigte einen Zustand.
 *
 * Jetzt faehrt es seine eigene Leserichtung nach: Stufe 1, Pfeil 1,
 * Stufe 2, Pfeil 2, Stufe 3. 90ms Versatz -- gross genug, dass die Kette als
 * Folge lesbar ist, klein genug, dass die drei Stufen nicht zu drei
 * Ereignissen werden. Nach der letzten Stufe 260ms PAUSE, und erst dann
 * kommt die Rueckkopplung. Die Pause ist die Aussage dieses Bildes: der
 * Kreis schliesst sich, NACHDEM der Ablauf steht. Kaeme der Kasten im selben
 * Takt, waere er die vierte Stufe -- und genau das ist er nicht.
 *
 * Gesamt rund 1,2s. Laenger als jede Bedien-Animation dieser Seite und hier
 * richtig: das ist keine Rueckmeldung auf eine Handlung, sondern eine
 * Erklaerung, und sie laeuft genau einmal.
 */
const STUFEN_VERSATZ = 90;
const SCHLEIFEN_PAUSE = 260;

export function SystemMap() {
  const m = useT().t.systemMap;
  // Fuenf Glieder (Stufe, Pfeil, Stufe, Pfeil, Stufe), danach die Pause.
  // Ausgerechnet und nicht ausgeschrieben, damit die Zahlen nicht
  // auseinanderlaufen, wenn jemand am Versatz dreht.
  const schleifeVerzoegerung = 4 * STUFEN_VERSATZ + 300 + SCHLEIFEN_PAUSE;

  return (
    <div>
      {/* Die drei Stufen. Ab lg `items-start`: die Karten duerfen ungleich
          hoch sein. Vorher zog `items-stretch` alle drei auf die Hoehe der
          laengsten, und der Ueberschuss sammelte sich als leerer Streifen
          ueber der Fussnote (dort nachgemessen).
          Die Sorge dahinter -- ungleich hohe Karten lesen sich als Rangfolge
          statt als Ablauf -- traegt die Pfeile als Loesung, nicht die Hoehe:
          sie sitzen ab lg mittig (self-center) und sagen die Richtung
          ausdruecklich.
          UNTER lg bleibt items-stretch stehen. In einer Spalte ist die
          Querachse die BREITE -- items-start liesse die drei Karten dort auf
          ihre Inhaltsbreite zusammenschnurren. */}
      <div className="flex flex-col items-stretch lg:flex-row lg:items-start">
        <StageCard stage={m.stages[0]} accent={false} delay={0} />
        <StageArrow label={m.arrows[0]} delay={STUFEN_VERSATZ} />
        <StageCard stage={m.stages[1]} accent={false} delay={2 * STUFEN_VERSATZ} />
        <StageArrow label={m.arrows[1]} delay={3 * STUFEN_VERSATZ} />
        <StageCard stage={m.stages[2]} accent={false} delay={4 * STUFEN_VERSATZ} />
      </div>

      {/* Die Rueckkopplung. Bewusst als eigene, volle Breite unter den drei
          Stufen und in der Akzentfarbe: sie ist nicht die vierte Stufe eines
          Ablaufs, sondern das, was aus dem Ablauf zurueck in ihn hineinlaeuft.
          Der Pfeil zeigt deshalb nach OBEN, gegen die Leserichtung. */}
      {/* Pfeil und Kasten als EIN bewegtes Stueck: sie sind ein Gedanke, und
          ein Pfeil, der vor seinem Ziel eintrifft, zeigt kurz ins Leere. */}
      <div
        className="fb-anim fb-rise-8 mt-3 flex flex-col items-center"
        style={{ animationDelay: schleifeVerzoegerung + "ms" }}
      >
        <svg viewBox="0 0 16 30" className="h-7 w-4 text-coral" fill="none" aria-hidden>
          <path d="M8 30V6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M2.5 9 8 2l5.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="mt-2 w-full rounded-2xl border border-coral/40 bg-coral-soft p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
            {m.loop.label}
          </p>
          <h3 className="mt-2 max-w-[46ch] text-[1.0625rem] font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-xl">
            {m.loop.title}
          </h3>
          <p className="mt-2.5 max-w-[70ch] text-sm leading-relaxed text-soft">{m.loop.body}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {m.loop.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-coral/30 bg-panel px-3 py-1 text-[12px] leading-snug text-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
