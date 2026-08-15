"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Blendet children ein, sobald sie in den Viewport scrollen (einmalig,
 * bleibt danach sichtbar). Ergaenzt das bestehende einmalige Load-Fade
 * (.fade-up) um Bewegung beim Scrollen selbst -- ohne zusaetzliche
 * Abhaengigkeit, nur ein IntersectionObserver. `delay` in ms fuer leicht
 * gestaffelte Reveals bei mehreren Elementen nebeneinander (z. B. Karten
 * in einem Grid).
 *
 * ══════════════════════════════════════════════════════════════════════
 * WARUM HIER EIN ZWEITER AUSLOESER HAENGT
 * ══════════════════════════════════════════════════════════════════════
 * Ein IntersectionObserver meldet SCHWELLENUEBERTRITTE, nicht Positionen.
 * Springt ein Block zwischen zwei Frames von unterhalb des Fensters nach
 * oberhalb -- Ende-Taste, Scrollbalken ziehen, kraeftiger Trackpad-Wurf --,
 * dann ist sein Sichtbarkeitsverhaeltnis davor 0 und danach 0. Keine
 * Schwelle wird uebertreten, es gibt keinen Rueckruf, und der Block bleibt
 * auf opacity: 0 stehen. Nicht kurz, sondern bis jemand zurueckscrollt.
 *
 * Gemessen am 2026-08-15 (Chrome 151, 1440x900, Startseite):
 * window.scrollTo(0, document.body.scrollHeight), zwei Sekunden warten --
 * 23 von 23 Bloecken blieben unsichtbar. Auf /fuer-agenturen 5 von 5.
 * Ein Ankersprung aus dem Produkt-Menue ist dagegen harmlos: dabei laeuft
 * kein Block oben heraus (0 von 0 gemessen).
 *
 * ZUERST VERSUCHT UND VERWORFEN: `entry.boundingClientRect.top < 0` als
 * zweite Bedingung im Observer-Rueckruf. Sieht richtig aus, wirkt nicht --
 * nachgemessen weiterhin 23 von 23. Der Rueckruf laeuft in diesem Fall ja
 * gerade nicht.
 *
 * Deshalb `scrollend`: EIN gemeinsamer Listener fuer alle Bloecke, der
 * feuert, wenn das Scrollen zur Ruhe kommt. Was dann oberhalb des Fensters
 * liegt, ist durchgelaufen und gilt als gesehen -- es wird ohne Einblendung
 * gezeigt, denn eine Einblendung ausserhalb des Bildes sieht ohnehin
 * niemand. Im Normalfall passiert weiterhin alles im Observer; dieser Pfad
 * ist reine Absicherung und liest nur dann Geometrie.
 *
 * Ein gemeinsamer Listener und nicht einer je Block: bei 23 verborgenen
 * Bloecken waeren das 23 getBoundingClientRect je Ereignis. Die Menge leert
 * sich ausserdem von selbst, und mit dem letzten Eintrag geht der Listener
 * wieder ab.
 */

/** Rueckrufe der noch verborgenen Bloecke. Leer = kein Listener. */
const wartende = new Set<() => void>();
let listenerHaengt = false;

/** `scrollend` gibt es in Chrome 114+, Firefox 109+ und Safari 18.2+.
 *  Wo es fehlt, tut es ein entprelltes `scroll` -- gleicher Zweck, nur ohne
 *  die Zusicherung des Browsers, dass die Bewegung wirklich steht. */
const hatScrollend = typeof window !== "undefined" && "onscrollend" in window;
let entprellung: ReturnType<typeof setTimeout> | undefined;

function pruefeAlle() {
  for (const rueckruf of [...wartende]) rueckruf();
}

function beiScroll() {
  clearTimeout(entprellung);
  entprellung = setTimeout(pruefeAlle, 120);
}

function anmelden(rueckruf: () => void) {
  wartende.add(rueckruf);
  if (!listenerHaengt) {
    listenerHaengt = true;
    if (hatScrollend) window.addEventListener("scrollend", pruefeAlle, { passive: true });
    else window.addEventListener("scroll", beiScroll, { passive: true });
  }
}

function abmelden(rueckruf: () => void) {
  wartende.delete(rueckruf);
  if (wartende.size === 0 && listenerHaengt) {
    listenerHaengt = false;
    if (hatScrollend) window.removeEventListener("scrollend", pruefeAlle);
    else window.removeEventListener("scroll", beiScroll);
    clearTimeout(entprellung);
  }
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let erledigt = false;
    // Ein gemeinsamer Aufraeumpfad fuer beide Ausloeser: der Observer und der
    // Nachzuegler duerfen sich nicht gegenseitig stehen lassen.
    const zeigen = () => {
      if (erledigt) return;
      erledigt = true;
      setVisible(true);
      observer.disconnect();
      abmelden(nachzuegler);
    };

    const nachzuegler = () => {
      // Oberkante ueber dem Fensterrand: durchgelaufen, also gesehen.
      if (el.getBoundingClientRect().top < 0) zeigen();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) zeigen();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    anmelden(nachzuegler);
    // Der Fall "Seite laedt bereits weit unten" (Neuladen mit erhaltener
    // Scrollposition, Ankersprung): dort gibt es kein Scrollereignis mehr.
    nachzuegler();

    return () => {
      observer.disconnect();
      abmelden(nachzuegler);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
