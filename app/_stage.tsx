"use client";
import { useEffect, useRef, useState } from "react";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE ZWEI BUEHNEN DER STARTSEITE, neu am 2026-08-31.
 * ══════════════════════════════════════════════════════════════════════
 *
 * ANLASS. Youssef zur vorigen Fassung: "du hast zwar visuals eingebaut, aber
 * es ist eigentlich nur Text in Kaestchen -- mach lieber eine Animation, die
 * zeigt was passiert, anstatt es zu schreiben."
 *
 * Er hat recht. Die Systemkarte war ein Raster aus drei Karten mit je einer
 * Dreipunktliste: 127 sichtbare Woerter, die BESCHREIBEN, was das Werkzeug
 * tut. Hier laeuft es stattdessen ab.
 *
 * ═══ WARUM DAS HIER ANIMIEREN DARF ═══
 *
 * Eine Verkaufsseite sieht ein Besucher einmal. Das ist die Stufe, auf der
 * Bewegung ueberhaupt erlaubt ist ("rare / first-time"), und der Zweck hat
 * einen Namen: ERKLAEREN. Nicht Zierde, nicht Ruecckmeldung -- der Ablauf
 * IST die Aussage, und ein Ablauf laesst sich vorfuehren oder beschreiben.
 * Auf einer Werkzeugoberflaeche waere dasselbe verboten.
 *
 * ═══ DREI ENTSCHEIDUNGEN, DIE ALLES ANDERE TRAGEN ═══
 *
 * 1. ADDITIV, NICHT ALS KARUSSELL. Was einmal da ist, bleibt stehen. Am Ende
 *    steht das ganze Bild, nicht der letzte Takt. Ein Karussell zeigt fuenf
 *    Zustaende und nie den Zusammenhang -- und wer nach dem dritten Takt
 *    hinsieht, hat die ersten beiden verpasst.
 *
 * 2. ALLE ELEMENTE VON ANFANG AN IM FLUSS. Sichtbar wird ueber `opacity` und
 *    `transform` geschaltet, nie ueber `display` oder Hoehe. Die Buehne ist
 *    dadurch in jedem Takt gleich hoch, und nichts unter ihr springt. Das
 *    ist auch der Grund, warum die Takte additiv sein MUESSEN: eine wachsende
 *    Buehne waere ein Layoutsprung je Takt.
 *
 * 3. NUR transform UND opacity. Beide laufen ohne Layout und ohne Neuzeichnen.
 *    Die einzige Ausnahme ist `clip-path` an der Schreibmaschine unten, und
 *    die ist ausdruecklich dafuer vorgesehen.
 *
 * ═══ ZUTATEN ═══
 *
 *   Werkzeug   React-Zustand + CSS-Transitions. KEINE Keyframes: der Besucher
 *              kann einen Takt anklicken und springen, und eine Transition
 *              zielt vom aktuellen Wert um, waehrend ein Keyframe von vorn
 *              anfaengt.
 *   Kurve      var(--fb-ease-out), die Kurve dieser Seite. Kein zweites
 *              Kurvensystem daneben.
 *   Dauer      420ms je Takt, 60ms Versatz innerhalb eines Takts.
 *              Laenger als die 150-250ms der Bedienelemente, und das ist
 *              richtig: das hier ist keine Antwort auf einen Klick, sondern
 *              eine Erklaerung.
 *   Takt       1400ms Standzeit. Kurz genug, dass niemand wartet, lang genug,
 *              dass man den Takt davor gelesen hat.
 *
 * ═══ REDUZIERTE BEWEGUNG ═══
 *
 * `prefers-reduced-motion` springt in den Endzustand und laesst den Ablauf
 * gar nicht erst laufen. Der ganze Inhalt steht dann sofort da -- das ist
 * hier die richtige Auslegung von "weniger und sanfter": es geht nichts
 * verloren, nur die Vorfuehrung. Die Transitions selbst schaltet globals.css
 * fuer diesen Fall bereits ab.
 * ══════════════════════════════════════════════════════════════════════
 */

/** Nimmt die Buehne erst in Gang, wenn sie im Bild ist, und genau einmal.
 *  Ohne das laeuft der Ablauf ab, waehrend der Besucher noch im Helden steht,
 *  und er sieht das Ergebnis statt des Vorgangs -- derselbe Grund, aus dem
 *  `.fb-anim` an `.reveal` haengt (globals.css). */
function useImBild<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [drin, setDrin] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Kein Observer noetig, wenn die Bewegung ohnehin nicht laufen soll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrin(true);
      return;
    }
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrin(true);
          o.disconnect();
        }
      },
      // 0.25 statt 0.15 wie in reveal.tsx: die Buehne ist hoch, und bei 15 %
      // steht ihr Kopf noch unter der Falz, wenn der Ablauf losgeht.
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return { ref, drin };
}

/** Der Taktgeber. Zaehlt bis `takte` und bleibt dann stehen -- keine
 *  Dauerschleife: eine Erklaerung, die sich unaufgefordert wiederholt, zieht
 *  den Blick von allem ab, was daneben steht. Wiederholt wird auf Zuruf. */
function useTakt(takte: number, drin: boolean, ms = 1400) {
  const [takt, setTakt] = useState(0);
  const [fertig, setFertig] = useState(false);
  useEffect(() => {
    if (!drin || fertig) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTakt(takte);
      setFertig(true);
      return;
    }
    if (takt >= takte) {
      setFertig(true);
      return;
    }
    const id = setTimeout(() => setTakt((t) => t + 1), takt === 0 ? 400 : ms);
    return () => clearTimeout(id);
  }, [drin, takt, takte, ms, fertig]);
  return { takt, setTakt, fertig, setFertig };
}

/** Ein Element, das ab einem Takt da ist. `hoch` ist der Weg, den es dabei
 *  zuruecklegt -- 8px fuer Karten, 4px fuer Zeichen und kleine Zeilen. */
function Ab({
  takt,
  ab,
  hoch = 8,
  versatz = 0,
  className = "",
  children,
}: {
  takt: number;
  ab: number;
  hoch?: number;
  versatz?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const da = takt >= ab;
  return (
    <div
      className={"fb-step " + (da ? "fb-step-on " : "") + className}
      style={{
        // Der Versatz gilt nur beim Kommen. Beim Zurueckspringen soll nichts
        // nachlaufen, sonst raeumt die Buehne sich sichtbar auf.
        transitionDelay: da ? versatz + "ms" : "0ms",
        // Als eigene Eigenschaft und nicht im transform: so kann die Regel in
        // globals.css den Endzustand setzen, ohne die Zahl zu kennen.
        ["--fb-step-y" as string]: hoch + "px",
      }}
    >
      {children}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// HIER STAND `FlowStage`, gefallen am 2026-08-31.
//
// Fuenf Takte, additiv: Suchfeld, drei Entscheider, je eine eigene erste
// Zeile, eine Zeitachse, die Antwort. Sie hat einen halben Tag gelebt und
// ist von der grossen Buehne in _journey.tsx abgeloest worden -- dieselbe
// Geschichte, aber in sechs Akten und mit dem Schritt, auf den es Youssef
// ankam: der Besucher waehlt selbst die Nische.
//
// Ersatzlos entfernt statt ungenutzt liegen gelassen. Zwei Bauteile, die
// denselben Ablauf zeigen, laufen beim naechsten Umbau auseinander, und
// dann erklaert die Seite sich an zwei Stellen verschieden.
// ══════════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════════════
// BUEHNE 2: DIE ANBINDUNG AN CLAUDE
// ══════════════════════════════════════════════════════════════════════

export type ClaudeStageProps = {
  /** Der Satz, den ein Mensch tippt. */
  auftrag: string;
  /** Was daraufhin im Werkzeug passiert. `name` ist der echte Werkzeugname
   *  aus dem Protokoll -- er steht hier, weil er BELEGT, dass es die
   *  Anbindung gibt, und weil er nachpruefbar ist. */
  schritte: readonly { name: string; text: string }[];
  ergebnis: string;
  grenze: string;
  wiederholen: string;
};

export function ClaudeStage(p: ClaudeStageProps) {
  const { ref, drin } = useImBild<HTMLDivElement>();
  const { takt, setTakt, fertig, setFertig } = useTakt(p.schritte.length + 1, drin, 900);

  return (
    <div ref={ref}>
      <div className="overflow-hidden rounded-2xl bg-panel shadow-card">
        {/* Der Auftrag. Rechtsbuendig und in Tinte, wie eine gesendete
            Nachricht -- die Seite braucht keine Nachbildung eines fremden
            Chatfensters, um klarzumachen, wer hier spricht. */}
        <div className="border-b border-edge/70 px-5 py-5 sm:px-7">
          <div className="ml-auto max-w-[46ch] rounded-2xl rounded-br-md bg-ink px-4 py-3 text-[15px] leading-snug text-surface sm:text-[17px]">
            {p.auftrag}
          </div>
        </div>

        <ol className="space-y-1 px-5 py-5 sm:px-7">
          {p.schritte.map((s, i) => (
            <li key={s.name}>
              <Ab takt={takt} ab={i + 1} hoch={4}>
                <div className="flex items-start gap-3 py-1.5">
                  <span
                    aria-hidden
                    className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-sky-500/12 text-sky-700"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                      <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="min-w-0 text-[15px] leading-snug text-soft sm:text-[17px]">
                    {s.text}{" "}
                    {/* Der Werkzeugname in Schreibmaschine, weil er genau das
                        ist: eine Kennung aus einem Protokoll, keine Prosa.
                        Die einzige Stelle dieser Seite mit fester Laufweite. */}
                    <code className="whitespace-nowrap rounded bg-panel2 px-1.5 py-0.5 font-mono text-[13px] text-faint">
                      {s.name}
                    </code>
                  </p>
                </div>
              </Ab>
            </li>
          ))}
        </ol>

        <Ab takt={takt} ab={p.schritte.length + 1} className="px-5 pb-5 sm:px-7">
          <p className="rounded-xl border border-emerald-600/25 bg-emerald-50/60 px-4 py-3.5 text-[15px] leading-snug text-emerald-950 sm:text-[17px]">
            {p.ergebnis}
          </p>
        </Ab>
      </div>

      {/* Die Grenze steht UNTER der Buehne und nicht darin: sie gehoert nicht
          zum Ablauf, sie ist die Aussage darueber, wo er aufhoert. */}
      <div className="mt-5 flex flex-wrap items-start gap-x-6 gap-y-3">
        <p className="flex max-w-[52ch] items-start gap-3 text-[15px] leading-relaxed text-mute">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 h-[18px] w-[18px] shrink-0">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 7.5v5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <circle cx="12" cy="16.3" r="1" fill="currentColor" />
          </svg>
          {p.grenze}
        </p>
        {fertig && (
          <button
            type="button"
            onClick={() => {
              setTakt(0);
              setFertig(false);
            }}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] text-mute transition-colors hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
              <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {p.wiederholen}
          </button>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// DIE HANDGRIFFE, DIE WEGFALLEN
// ══════════════════════════════════════════════════════════════════════

export type StrikeListProps = {
  items: readonly string[];
  note: string;
};

/**
 * Vier Handgriffe, die nacheinander durchgestrichen werden.
 *
 * Warum das animiert und nicht als Liste mit Haken dasteht: der Haken sagt
 * "erledigt", der Strich sagt "faellt weg". Der Unterschied ist der ganze
 * Abschnitt. `fb-strike` gibt es in globals.css schon (Begruendung dort) --
 * eine 1px-Linie, die von links durch das Wort laeuft, statt eines
 * `line-through`, das nicht animierbar ist.
 */
export function StrikeList({ items, note }: StrikeListProps) {
  const { ref, drin } = useImBild<HTMLUListElement>();
  const { takt } = useTakt(items.length, drin, 700);
  return (
    <div>
      <ul ref={ref} className="space-y-1">
        {items.map((s, i) => {
          const weg = takt >= i + 1;
          return (
            <li
              key={s}
              className={
                "flex items-baseline gap-3.5 border-b border-edge/70 py-4 transition-opacity duration-500 last:border-b-0 " +
                (weg ? "opacity-45" : "opacity-100")
              }
            >
              <span
                aria-hidden
                className={
                  "mt-1 h-2 w-2 shrink-0 rounded-full transition-colors duration-300 " +
                  (weg ? "bg-edge3" : "bg-coral")
                }
              />
              <span
                className={
                  "fb-strike text-[19px] leading-snug text-ink sm:text-[22px] " + (weg ? "fb-strike-on" : "")
                }
              >
                {s}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 max-w-[46ch] text-[19px] leading-relaxed text-soft">{note}</p>
    </div>
  );
}
