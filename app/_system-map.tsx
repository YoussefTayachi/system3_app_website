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
 *  Strichstaerke mitdrehen und auf schmalen Geraeten ausfransen. */
function StageArrow({ label }: { label: string }) {
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center gap-1.5 py-3 lg:px-3 lg:py-0"
      aria-hidden
    >
      {/* senkrecht, unter lg */}
      <svg viewBox="0 0 16 34" className="h-8 w-4 text-edge3 lg:hidden" fill="none">
        <path d="M8 0v26" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.5 21 8 28l5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* waagerecht, ab lg */}
      <svg viewBox="0 0 34 16" className="hidden h-4 w-8 text-edge3 lg:block" fill="none">
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

function StageCard({ stage, accent }: { stage: Stage; accent: boolean }) {
  return (
    <div
      // Bewusst OHNE h-full: die Karte ist Flex-Kind einer Zeile mit
      // items-stretch, und "height: 100%" gegen ein Elternteil mit
      // automatischer Hoehe faellt auf auto zurueck -- die drei Karten waren
      // damit unterschiedlich hoch, obwohl stretch gesetzt war.
      className={
        "flex flex-1 flex-col rounded-2xl border p-5 " +
        (accent ? "border-coral/40 bg-coral-soft" : "border-edge/60 bg-panel")
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
      <h3 className="font-display mt-2 text-lg font-semibold leading-snug tracking-[-0.015em] text-ink">
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
      {stage.body ? (
        <p className="mt-4 text-[13px] leading-relaxed text-soft">{stage.body}</p>
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
            <li key={item} className="py-2.5 text-[13px] leading-snug text-soft">
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* Die Notiz sitzt am Kartenfuss (mt-auto), weil die drei Karten gleich
          hoch sind und ihre Notizen sonst auf drei verschiedenen Hoehen
          endeten. Der Rest der Hoehe sammelt sich damit UEBER der Notiz --
          und ein leerer Streifen mitten in einer Karte liest sich als
          Fehlstelle, solange nichts ihn erklaert. Die Linie erklaert ihn:
          dieselbe Fusszeilen-Loesung wie in den drei Kanalkarten weiter
          unten (mt-auto + border-t + pt-5), also kein neues Mittel. */}
      <p className="mt-auto border-t border-edge/70 pt-5 text-xs leading-relaxed text-mute">
        {stage.note}
      </p>
    </div>
  );
}

export function SystemMap() {
  const m = useT().t.systemMap;

  return (
    <div>
      {/* Die drei Stufen. items-stretch, damit die drei Karten gleich hoch
          bleiben -- unterschiedlich hohe Karten mit Pfeilen dazwischen lesen
          sich als Rangfolge statt als Ablauf. */}
      <div className="flex flex-col items-stretch lg:flex-row lg:items-stretch">
        <StageCard stage={m.stages[0]} accent={false} />
        <StageArrow label={m.arrows[0]} />
        <StageCard stage={m.stages[1]} accent={false} />
        <StageArrow label={m.arrows[1]} />
        <StageCard stage={m.stages[2]} accent={false} />
      </div>

      {/* Die Rueckkopplung. Bewusst als eigene, volle Breite unter den drei
          Stufen und in der Akzentfarbe: sie ist nicht die vierte Stufe eines
          Ablaufs, sondern das, was aus dem Ablauf zurueck in ihn hineinlaeuft.
          Der Pfeil zeigt deshalb nach OBEN, gegen die Leserichtung. */}
      <div className="mt-3 flex flex-col items-center">
        <svg viewBox="0 0 16 30" className="h-7 w-4 text-coral" fill="none" aria-hidden>
          <path d="M8 30V6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M2.5 9 8 2l5.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="mt-2 w-full rounded-2xl border border-coral/40 bg-coral-soft p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
            {m.loop.label}
          </p>
          <h3 className="font-display mt-2 max-w-[46ch] text-lg font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-xl">
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
