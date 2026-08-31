"use client";
import { useEffect, useRef, useState } from "react";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DER WEG. Das Kernstueck der Startseite, neu am 2026-08-31.
 * ══════════════════════════════════════════════════════════════════════
 *
 * ANLASS. Youssef zur ersten Buehne: "bau die animation weiter aus. und zwar
 * wirklich konkret. schreib nix technisches. zeig wie der CEO gefunden wird,
 * zeig dass seine website gescannt wird, zeig dann wie email template
 * aufgesetzt wird, und zeig wie der lead auf die personalisierte email
 * antwortet und einen call ausmacht, dann zeig wie ein call laeuft und ein
 * deal geclosed wird. mach es gern super utopisch quasi man gibt nur seine
 * nische ein und auf knopfdruck passiert alles andere. lass das das
 * kernstueck der landing page sein denn darum gehts in der app."
 *
 * ═══ DIE EINE HANDLUNG ═══
 *
 * Der Besucher waehlt eine Nische. Das ist alles, was er tut, und es ist
 * genau das, was das Produkt verspricht: eine Eingabe, der Rest laeuft. Wer
 * nach fuenf Sekunden nicht gewaehlt hat, bekommt die erste Nische
 * vorgesetzt und sieht den Weg trotzdem -- eine Buehne, die auf einen Klick
 * wartet, der nie kommt, ist eine leere Buehne.
 *
 * Die Wahl zieht durch alle sechs Akte: Rolle, Firma, Befunde, Mailtext,
 * Antwort und Notizen sind je Nische eigene Saetze. Deshalb sind es drei
 * Nischen und nicht zwoelf -- jede kostet einen vollstaendigen Satz Text in
 * zwei Sprachen, und ein halbfertiger vierter waere sofort zu sehen.
 *
 * ═══ AKTE STATT ADDITIV ═══
 *
 * Die erste Buehne war additiv: alles blieb stehen, am Ende stand das ganze
 * Bild. Bei sechs Akten geht das nicht -- das waere eine Wand. Hier wechselt
 * die Buehne, und den Zusammenhang traegt die Leiste darunter: sie zeigt
 * immer alle sechs Schritte, auch waehrend einer laeuft.
 *
 * NUR DER AKTIVE AKT STEHT IM DOM. Nicht bloss unsichtbar geschaltet: was
 * niemand sieht, soll auch nicht mitgezaehlt werden, wenn
 * scripts/count-words.mjs die Seite misst. Die Buehne hat dafuer eine feste
 * Mindesthoehe, damit der Wechsel nichts verschiebt.
 *
 * ═══ WARUM NICHT SCROLLGESTEUERT ═══
 *
 * Sechs Akte an den Scrollbalken zu haengen (die Seite festpinnen, Scrollen
 * treibt die Akte) waere die auffaelligere Fassung. Dagegen sprechen zwei
 * Dinge, und beide kommen aus dem Auftrag selbst: Youssef will, dass der
 * Besucher KLICKT ("lass auch den user der website auf diese animation
 * klicken"), und eine festgepinnte Seite nimmt genau die Kontrolle weg, die
 * ein Klick gibt. Dazu ist Scroll-Pinning auf dem Telefon die fragilste
 * Bauform, die es gibt. Diese Buehne laeuft von allein, gehorcht aber jedem
 * Klick, und sie haelt das Scrollen der Seite nicht an.
 *
 * ═══ ZUTATEN ═══
 *
 *   Werkzeug   React-Zustand, CSS-Animationen aus globals.css (.fb-anim mit
 *              animation-delay je Element). Keine Bibliothek: die
 *              Bewegungen sind vorherbestimmt, und vorherbestimmte
 *              Bewegung laeuft als CSS-Animation auch dann rund, wenn der
 *              Hauptthread gerade laedt.
 *   Kurve      var(--fb-ease-out), die Kurve dieser Seite.
 *   Dauer      300-420ms je Element, 70-90ms Versatz innerhalb eines Akts,
 *              rund 3,4s Standzeit je Akt.
 *   Bewegt     ausschliesslich transform und opacity, dazu clip-path an der
 *              Schreibmaschine und der Scanlinie.
 *
 * ═══ REDUZIERTE BEWEGUNG ═══
 *
 * `prefers-reduced-motion` haelt den Ablauf an: der Besucher sieht Akt 1 und
 * waehlt die Akte selbst ueber die Leiste. Nichts laeuft von allein, nichts
 * ist unerreichbar. Die Regeln dafuer stehen in globals.css.
 * ══════════════════════════════════════════════════════════════════════
 */

export type Nische = {
  id: string;
  /** Der Knopf in Akt 0. */
  label: string;
  /** Was in Akt 1 in die Suchzeile getippt wird. Muss kurz bleiben: bei
   *  390 px stehen dafuer 225 Pixel zur Verfuegung (nachgemessen). */
  suche: string;
  /** Wie viele Firmen der Zaehler hochlaeuft. */
  firmen: number;
  rolle: string;
  segment: string;
  /** Genau drei. Zwei saehen duenn aus, vier passen bei 390 px nicht mehr
   *  neben den Browser darueber. */
  befunde: readonly string[];
  betreff: string;
  /** Genau drei Zeilen. Die letzte ist die Frage -- so sieht eine Erstmail
   *  in diesem Werkzeug wirklich aus. */
  mail: readonly string[];
  antwort: string;
  termin: string;
  notizen: readonly string[];
  abschluss: string;
};

export type JourneyProps = {
  frage: string;
  hinweis: string;
  nischen: readonly Nische[];
  akte: readonly string[];
  /** Beschriftungen, die in mehreren Akten vorkommen. */
  firmenLabel: string;
  gefundenLabel: string;
  geprueft: readonly string[];
  scanLabel: string;
  anLabel: string;
  betreffLabel: string;
  schreibtLabel: string;
  antwortLabel: string;
  statusVorher: string;
  statusNachher: string;
  notizenLabel: string;
  spalten: readonly string[];
  wiederholen: string;
  neuWaehlen: string;
};

/** Wie lange ein Akt steht. Akt 1 laenger, weil dort ein Zaehler laeuft. */
const STANDZEIT = [3400, 3800, 4200, 3400, 3600, 3600];

function reduziert() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Zaehlt eine Zahl hoch. Bewusst ueber requestAnimationFrame und nicht als
 *  CSS-Zaehler: der Wert soll bei jeder Bildwiederholrate in derselben Zeit
 *  ankommen, und `@property` mit counter-reset ist dafuer der laengere Weg
 *  mit schlechterer Unterstuetzung. */
function useHochzaehlen(ziel: number, laeuft: boolean, ms = 900) {
  const [wert, setWert] = useState(0);
  useEffect(() => {
    if (!laeuft) return;
    if (reduziert()) {
      setWert(ziel);
      return;
    }
    let id = 0;
    const start = performance.now();
    const tick = (jetzt: number) => {
      const t = Math.min(1, (jetzt - start) / ms);
      // Dieselbe Kurve wie --fb-ease-out, als Funktion: schnell los, weich an.
      const e = 1 - Math.pow(1 - t, 3);
      setWert(Math.round(ziel * e));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [ziel, laeuft, ms]);
  return wert;
}

/** Eine laufende Uhr fuer den Gespraechs-Akt. Sie startet bei 0 und laeuft,
 *  solange der Akt steht -- eine feste Zahl wuerde behaupten, das Gespraech
 *  sei vorbei, waehrend daneben Notizen entstehen. */
function useUhr(laeuft: boolean) {
  const [s, setS] = useState(0);
  useEffect(() => {
    if (!laeuft || reduziert()) return;
    const id = setInterval(() => setS((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, [laeuft]);
  const m = Math.floor(s / 60);
  return String(m).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

/** Ein Element, das nach `ms` einlaeuft. Nutzt das Bewegungssystem der
 *  Seite (.fb-anim + benannte Keyframes aus globals.css) statt eines eigenen. */
function Ein({
  ms = 0,
  art = "fb-rise-8",
  className = "",
  children,
}: {
  ms?: number;
  art?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={"fb-anim " + art + " " + className} style={{ animationDelay: ms + "ms" }}>
      {children}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// DIE SECHS AKTE
// ══════════════════════════════════════════════════════════════════════

/** Akt 1 · Der Entscheider ist gefunden. */
function AktFinden({ n, p }: { n: Nische; p: JourneyProps }) {
  const zahl = useHochzaehlen(n.firmen, true);
  return (
    // ZWEI SPALTEN AB sm. Erste Fassung war eine 30rem breite Saeule mitten
    // in einem 1152px-Rahmen: der Akt sah aus wie ein Kaertchen in einer
    // leeren Halle. Links die Suche und was sie gefunden hat, rechts, wen sie
    // gefunden hat -- das ist auch die Leserichtung des Satzes darueber.
    <div className="grid w-full max-w-[46rem] gap-8 sm:grid-cols-[1fr_1.15fr] sm:items-center sm:gap-10">
      <div>
      <div className="flex items-center gap-3 rounded-xl border border-edge2 bg-panel2/60 px-4 py-3">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px] shrink-0 text-faint">
          <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="m19 19-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="relative min-w-0 text-[15px] text-ink sm:text-[17px]">
          <span className="fb-type fb-type-on block whitespace-nowrap">{n.suche}</span>
        </span>
      </div>

        <Ein ms={900} art="fb-fade" className="mt-6">
          <p className="font-display text-[3.25rem] font-medium leading-none tabular-nums tracking-[-0.03em] text-ink">
            {zahl.toLocaleString("de-DE")}
          </p>
          <p className="mt-2 text-[17px] text-mute">{p.firmenLabel}</p>
        </Ein>
      </div>

      <Ein ms={1500}>
        <div className="rounded-2xl border border-edge/70 bg-panel2/40 p-5">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-sky-700">{p.gefundenLabel}</p>
          <div className="mt-3.5 flex items-center gap-4">
            {/* Kein Foto und kein erfundener Name: auf dieser Website gibt es
                genau zwei Namen, Frostbreaker und retaiyn. Ein Umriss und die
                Rolle sagen alles, worauf es hier ankommt. */}
            <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sky-500/12 text-sky-700">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <circle cx="12" cy="8.5" r="3.6" stroke="currentColor" strokeWidth="1.7" />
                <path d="M5 20c1.2-4.2 3.9-6.3 7-6.3s5.8 2.1 7 6.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[19px] font-semibold leading-snug text-ink">{n.rolle}</p>
              <p className="text-[15px] text-soft sm:text-[17px]">{n.segment}</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.geprueft.map((g, i) => (
              <li
                key={g}
                className="fb-anim fb-rise-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-3 py-1.5 text-[13px] font-medium text-emerald-800"
                style={{ animationDelay: 1800 + i * 90 + "ms" }}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5">
                  <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Ein>
    </div>
  );
}

/** Akt 2 · Seine Website wird angesehen. */
function AktWebsite({ n, p }: { n: Nische; p: JourneyProps }) {
  return (
    // Der Browser links, was auffiel rechts: die Befunde gehoeren neben das
    // Bild, aus dem sie stammen, nicht darunter. Unter lg untereinander, weil
    // ein 390px breiter Browser neben einer Liste keiner von beiden mehr ist.
    <div className="grid w-full max-w-[48rem] gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
      <div className="overflow-hidden rounded-xl border border-edge2 bg-panel shadow-card">
        {/* Fensterleiste. Drei Punkte und eine Adresszeile ohne Adresse: der
            Kasten muss als Website lesbar sein, ohne eine zu behaupten. */}
        <div className="flex items-center gap-2 border-b border-edge/70 bg-panel2/70 px-3 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-edge3/70" />
            <span className="h-2 w-2 rounded-full bg-edge3/70" />
            <span className="h-2 w-2 rounded-full bg-edge3/70" />
          </span>
          <span aria-hidden className="ml-2 h-4 flex-1 rounded-full bg-edge/80" />
        </div>
        {/* Der Seiteninhalt, abstrahiert. Balken statt Blindtext: Blindtext
            liest man, Balken sieht man. */}
        <div className="relative h-[136px] overflow-hidden bg-panel p-5 sm:h-[160px]">
          <span aria-hidden className="block h-3 w-2/5 rounded bg-edge2" />
          <span aria-hidden className="mt-2.5 block h-2 w-3/4 rounded bg-edge/90" />
          <span aria-hidden className="mt-1.5 block h-2 w-2/3 rounded bg-edge/90" />
          <span aria-hidden className="mt-4 flex gap-2.5">
            <span className="h-10 flex-1 rounded-lg bg-panel2" />
            <span className="h-10 flex-1 rounded-lg bg-panel2" />
            <span className="h-10 flex-1 rounded-lg bg-panel2" />
          </span>
          {/* Die Scanlinie. Sie faehrt einmal durch und bleibt nicht stehen:
              eine Dauerbewegung waere hier eine Behauptung ueber Dauer. */}
          <span aria-hidden className="fb-scan" />
        </div>
      </div>

      <div>
      <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-faint">{p.scanLabel}</p>
      <ol className="mt-3 space-y-2">
        {n.befunde.map((b, i) => (
          <li
            key={b}
            className="fb-anim fb-rise-6 flex items-start gap-3 rounded-xl border border-coral/30 bg-coral-soft/70 px-4 py-3"
            style={{ animationDelay: 1300 + i * 260 + "ms" }}
          >
            <span
              aria-hidden
              className="mt-px grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-coral/15 text-[13px] font-bold text-coral"
            >
              {i + 1}
            </span>
            <span className="min-w-0 text-[15px] leading-snug text-ink sm:text-[17px]">{b}</span>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}

/** Akt 3 · Die Mail schreibt sich. */
function AktMail({ n, p }: { n: Nische; p: JourneyProps }) {
  return (
    <div className="w-full max-w-[38rem] overflow-hidden rounded-2xl border border-edge/70 bg-panel shadow-card">
      <div className="flex flex-wrap items-baseline gap-x-2 border-b border-edge/70 px-5 py-3">
        <span className="text-[13px] text-mute">{p.anLabel}</span>
        <span className="text-[15px] text-ink">
          {n.rolle} · {n.segment}
        </span>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-2 border-b border-edge/70 px-5 py-3">
        <span className="text-[13px] text-mute">{p.betreffLabel}</span>
        <span className="text-[15px] font-medium text-ink">{n.betreff}</span>
      </div>
      {/* Zeilenweise statt zeichenweise. Eine Schreibmaschine ueber clip-path
          braucht eine Zeile, die nicht umbricht; diese Saetze brechen bei
          390 px auf drei Zeilen um, und ein Wischen ueber drei Zeilen
          gleichzeitig sieht nach Fehler aus. Zeilen, die nacheinander
          erscheinen, lesen sich als "wird geschrieben" und halten in jeder
          Breite. */}
      <div className="space-y-3 px-5 py-4">
        {n.mail.map((z, i) => (
          <p
            key={z}
            className={
              "fb-anim fb-rise-6 text-[15px] leading-relaxed sm:text-[17px] " +
              // Die letzte Zeile ist die Frage, um die es geht. Sie steht in
              // Tinte, die zwei davor in Weich.
              (i === n.mail.length - 1 ? "font-medium text-ink" : "text-soft")
            }
            style={{ animationDelay: 300 + i * 700 + "ms" }}
          >
            {z}
          </p>
        ))}
        <p className="fb-anim fb-fade flex items-center gap-2 pt-1 text-[13px] text-mute" style={{ animationDelay: "2400ms" }}>
          <span aria-hidden className="fb-caret fb-caret-inline fb-caret-on" />
          {p.schreibtLabel}
        </p>
      </div>
    </div>
  );
}

/** Akt 4 · Der Lead antwortet. */
function AktAntwort({ n, p }: { n: Nische; p: JourneyProps }) {
  return (
    <div className="w-full max-w-[38rem]">
      <Ein>
        <div className="rounded-2xl border border-emerald-600/25 bg-emerald-50/70 p-5 sm:p-6">
          <p className="flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-emerald-800">
            {/* Einmaliges Aufblitzen, keine Dauerschleife: der Punkt meldet
                ein Ereignis, und ein Ereignis wiederholt sich nicht. */}
            <span aria-hidden className="fb-ping h-2.5 w-2.5 rounded-full bg-emerald-600" />
            {p.antwortLabel}
          </p>
          <p className="mt-3.5 text-[19px] leading-snug text-emerald-950 sm:text-[22px]">„{n.antwort}"</p>
        </div>
      </Ein>

      <Ein ms={700} className="mt-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-panel2 px-3.5 py-1.5 text-[15px] text-mute line-through decoration-edge3">
            {p.statusVorher}
          </span>
          <span aria-hidden className="text-faint">→</span>
          <span className="rounded-full bg-emerald-500/12 px-3.5 py-1.5 text-[15px] font-medium text-emerald-800">
            {p.statusNachher}
          </span>
        </div>
      </Ein>
    </div>
  );
}

/** Akt 5 · Das Gespraech laeuft. */
function AktGespraech({ n, p }: { n: Nische; p: JourneyProps }) {
  const uhr = useUhr(true);
  return (
    <div className="w-full max-w-[38rem] overflow-hidden rounded-2xl border border-edge/70 bg-panel shadow-card">
      <div className="flex items-center justify-between gap-4 border-b border-edge/70 bg-panel2/50 px-5 py-4">
        <p className="flex items-center gap-3 text-[15px] font-medium text-ink sm:text-[17px]">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px] shrink-0 text-sky-600">
            <rect x="3" y="5" width="18" height="16" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          {n.termin}
        </p>
        <p className="flex items-center gap-2 text-[15px] tabular-nums text-mute">
          <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-600" />
          {uhr}
        </p>
      </div>
      <div className="px-5 py-5">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-faint">{p.notizenLabel}</p>
        <ul className="mt-3 space-y-2.5">
          {n.notizen.map((z, i) => (
            <li
              key={z}
              className="fb-anim fb-rise-6 flex items-start gap-3 text-[15px] leading-snug text-soft sm:text-[17px]"
              style={{ animationDelay: 500 + i * 800 + "ms" }}
            >
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-edge3" />
              {z}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Akt 6 · Aus dem Lead wird ein Kunde. */
function AktAbschluss({ n, p }: { n: Nische; p: JourneyProps }) {
  // Die Karte wandert ueber die vier Spalten. Der Zustand steht hier und
  // nicht in einer CSS-Animation, damit `reduce` sie einfach am Ziel
  // absetzen kann.
  const [spalte, setSpalte] = useState(reduziert() ? p.spalten.length - 1 : 0);
  useEffect(() => {
    if (reduziert()) return;
    const ids = p.spalten.map((_, i) =>
      i === 0 ? 0 : window.setTimeout(() => setSpalte(i), 500 + i * 620),
    );
    return () => ids.forEach((id) => id && clearTimeout(id));
  }, [p.spalten]);

  return (
    <div className="w-full max-w-[44rem]">
      <ol className="grid grid-cols-4 gap-2">
        {p.spalten.map((s, i) => (
          <li
            key={s}
            className={
              "truncate rounded-lg px-2 py-2 text-center text-[13px] font-medium transition-colors duration-300 " +
              (i === spalte ? "bg-emerald-500/12 text-emerald-800" : "text-mute")
            }
          >
            {s}
          </li>
        ))}
      </ol>

      {/* Die Bahn. Die Karte ist genau eine Spalte breit, also verschiebt
          translateX(n * 100%) sie um genau eine Spalte -- ohne dass hier
          irgendeine Pixelbreite steht, die bei der naechsten Aenderung des
          Rasters falsch waere. */}
      <div className="relative mt-2.5 h-[92px]">
        <div aria-hidden className="grid h-full grid-cols-4 gap-2">
          {p.spalten.map((s) => (
            <span key={s} className="rounded-xl border border-dashed border-edge2/70" />
          ))}
        </div>
        <div
          className="absolute inset-y-0 left-0 w-1/4 transition-transform duration-[620ms]"
          style={{
            transform: `translateX(${spalte * 100}%)`,
            transitionTimingFunction: "var(--fb-ease-in-out)",
          }}
        >
          <div
            className={
              "flex h-full flex-col justify-center rounded-xl border px-2.5 text-center transition-colors duration-300 " +
              (spalte === p.spalten.length - 1
                ? "border-emerald-600/30 bg-emerald-50 text-emerald-950"
                : "border-edge2 bg-panel text-ink shadow-card")
            }
          >
            <span className="truncate text-[13px] font-semibold">{n.rolle}</span>
            <span className="mt-0.5 truncate text-[13px] text-mute">{n.segment.split(",")[0]}</span>
          </div>
        </div>
      </div>

      <Ein ms={2200} className="mt-7 text-center">
        <p className="text-[19px] font-medium leading-snug text-ink sm:text-[22px]">{n.abschluss}</p>
      </Ein>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// DIE BUEHNE
// ══════════════════════════════════════════════════════════════════════

export function Journey(p: JourneyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [drin, setDrin] = useState(false);
  /** -1 = noch nichts gewaehlt, sonst der Index der Nische. */
  const [nische, setNische] = useState(-1);
  /** 0 = die Wahl, 1..6 = die Akte. */
  const [akt, setAkt] = useState(0);
  const [laeuft, setLaeuft] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrin(true);
          o.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  // Wer nicht waehlt, bekommt gewaehlt. Eine Buehne, die auf einen Klick
  // wartet, der nie kommt, zeigt nie etwas.
  useEffect(() => {
    if (!drin || nische >= 0 || !laeuft || reduziert()) return;
    const id = setTimeout(() => {
      setNische(0);
      setAkt(1);
    }, 5000);
    return () => clearTimeout(id);
  }, [drin, nische, laeuft]);

  // Der Taktgeber der Akte.
  useEffect(() => {
    if (!drin || nische < 0 || !laeuft || reduziert()) return;
    if (akt < 1 || akt >= p.akte.length) return;
    const id = setTimeout(() => setAkt((a) => a + 1), STANDZEIT[akt - 1] ?? 3400);
    return () => clearTimeout(id);
  }, [drin, nische, akt, laeuft, p.akte.length]);

  const fertig = akt >= p.akte.length;
  const n = p.nischen[Math.max(0, nische)];

  const waehle = (i: number) => {
    setNische(i);
    setAkt(1);
    setLaeuft(true);
  };
  const springe = (i: number) => {
    if (nische < 0) setNische(0);
    setAkt(i);
    setLaeuft(false);
  };

  return (
    <div ref={ref}>
      <div className="overflow-hidden rounded-[1.25rem] bg-panel shadow-screen">
        {/* Kopf: die gewaehlte Nische links, der Stand rechts, darunter die
            Fortschrittslinie. Sie ist die einzige Dauerbewegung der Buehne
            und hoert auf, sobald der Weg zu Ende ist. */}
        <div className="flex items-center justify-between gap-4 border-b border-edge/70 px-5 py-3.5 sm:px-6">
          {/* Vor der Wahl steht hier NICHTS. Erste Fassung zeigte die Frage,
              und dann stand "Welche Nische?" zweimal untereinander: einmal in
              der Leiste und einmal gross in der Mitte. Die Leiste meldet den
              Stand, und vor der Wahl gibt es keinen. */}
          <p className="min-w-0 truncate text-[15px] font-medium text-ink">
            {nische < 0 ? "" : n.label}
          </p>
          <p className="shrink-0 text-[13px] tabular-nums text-mute">
            {nische < 0 ? "" : Math.min(akt, p.akte.length) + " / " + p.akte.length}
          </p>
        </div>
        <div aria-hidden className="h-0.5 bg-edge/70">
          <span
            className="block h-full bg-sky-600 transition-transform duration-500 ease-out"
            style={{
              width: "100%",
              transformOrigin: "left",
              transform: `scaleX(${nische < 0 ? 0 : Math.min(akt, p.akte.length) / p.akte.length})`,
            }}
          />
        </div>

        {/* Der Buehnenboden. Feste Mindesthoehe, damit der Aktwechsel nichts
            verschiebt -- gemessen am hoechsten Akt (der Website-Akt bei
            390 px). */}
        <div className="grid min-h-[400px] place-items-center px-5 py-8 sm:min-h-[420px] sm:px-8 sm:py-10">
          {nische < 0 ? (
            <div className="text-center">
              <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-[2rem]">{p.frage}</p>
              <p className="mx-auto mt-3 max-w-[34ch] text-[15px] leading-relaxed text-soft sm:text-[17px]">
                {p.hinweis}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {p.nischen.map((x, i) => (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => waehle(i)}
                    className="fb-anim fb-rise-8 inline-flex min-h-[44px] items-center rounded-full border border-edge2 bg-panel px-5 text-[15px] font-medium text-ink transition-[border-color,transform,background-color] duration-200 ease-out hover:border-sky-600 hover:bg-sky-500/8 hoverfine:-translate-y-0.5 active:scale-[0.98] sm:text-[17px]"
                    style={{ animationDelay: 120 + i * 90 + "ms" }}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // `key` erzwingt einen Neuaufbau bei jedem Akt- und
            // Nischenwechsel. Genau das ist gewollt: die Animationen im Akt
            // haengen an animation-delay, und ein Delay laeuft nur beim
            // Einhaengen. Ohne den Schluessel saehe man beim Zurueckspringen
            // den Endzustand statt des Vorgangs.
            <div key={n.id + "-" + akt} className="w-full">
              <div className="flex justify-center">
                {akt === 1 && <AktFinden n={n} p={p} />}
                {akt === 2 && <AktWebsite n={n} p={p} />}
                {akt === 3 && <AktMail n={n} p={p} />}
                {akt === 4 && <AktAntwort n={n} p={p} />}
                {akt === 5 && <AktGespraech n={n} p={p} />}
                {akt >= 6 && <AktAbschluss n={n} p={p} />}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DIE AKTLEISTE. Sie traegt den Zusammenhang, den die wechselnde
          Buehne nicht tragen kann: alle sechs Schritte stehen immer da.
          Und jeder springt wirklich -- kein toter Knopf. */}
      <ol className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {p.akte.map((a, i) => {
          const nr = i + 1;
          const hier = nische >= 0 && akt === nr;
          const vorbei = nische >= 0 && akt > nr;
          return (
            <li key={a}>
              <button
                type="button"
                onClick={() => springe(nr)}
                aria-current={hier ? "step" : undefined}
                className={
                  "flex min-h-[44px] w-full flex-col justify-center gap-1 rounded-xl border px-3 py-2 text-left transition-[color,border-color,background-color] duration-200 " +
                  (hier
                    ? "border-sky-600/40 bg-sky-500/10"
                    : vorbei
                      ? "border-edge/70 bg-panel"
                      : "border-transparent")
                }
              >
                <span
                  className={
                    "text-[13px] tabular-nums " +
                    (hier ? "font-semibold text-sky-700" : vorbei ? "text-faint" : "text-edge3")
                  }
                >
                  {String(nr).padStart(2, "0")}
                </span>
                <span
                  className={
                    "text-[13px] font-medium leading-snug sm:text-[15px] " +
                    (hier ? "text-ink" : vorbei ? "text-soft" : "text-mute")
                  }
                >
                  {a}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {(fertig || !laeuft || nische >= 0) && (
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          <button
            type="button"
            onClick={() => {
              setAkt(1);
              setLaeuft(true);
            }}
            className="tap-link gap-2 text-[15px] text-mute transition-colors hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
              <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {p.wiederholen}
          </button>
          <button
            type="button"
            onClick={() => {
              setNische(-1);
              setAkt(0);
              setLaeuft(true);
            }}
            className="tap-link gap-2 text-[15px] text-mute transition-colors hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
              <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="m19 19-4.3-4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
            {p.neuWaehlen}
          </button>
        </div>
      )}
    </div>
  );
}
