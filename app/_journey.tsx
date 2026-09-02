"use client";
import { useEffect, useRef, useState } from "react";
import { Horizon } from "./_hero-visual";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DER WEG. Das Kernstueck der Startseite. Neu gebaut am 2026-09-02.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Die erste Fassung (2026-08-31) stand als weisser Kasten mit einer Frage
 * darin, und unter dem Kasten sechs Karten mit Nummern. Youssef hat als
 * Vorbild den Abschnitt von Fora gezeigt: eine Reiterleiste ueber einem
 * grossen, gerahmten Bild, darunter ein Satz und zwei Pfeile. Genau das
 * ist das hier.
 *
 * WAS BLEIBT: die eine Handlung (die Nische), die sechs Akte, ihre Texte
 * je Nische, das Vorfuehren statt Beschreiben. Alles aus der ersten
 * Fassung, Begruendung im Commit 6ef52da.
 *
 * WAS SICH AENDERT:
 *   · Kein Wartebildschirm mehr. Die Buehne laeuft los, sobald sie im
 *     Bild ist, mit der ersten Nische. Wer eine andere will, tippt sie
 *     oben an. Ein Kasten, der fuenf Sekunden auf einen Klick wartet, war
 *     fuenf Sekunden lang ein leerer Kasten.
 *   · Die Akte sind Reiter ueber dem Rahmen, nicht Karten darunter. Der
 *     aktive traegt eine Zeitlinie, die zeigt, wann es weitergeht.
 *   · Der Rahmen hat den Horizont des Helden in sich. Der Ablauf spielt
 *     im selben Licht wie das Versprechen darueber.
 *   · Unter dem Rahmen steht je Akt ein Satz, mit Pfeilen links und
 *     rechts. Beide springen wirklich.
 *
 * NUR DER AKTIVE AKT STEHT IM DOM, wie vorher: die Einlaufanimationen
 * sind Keyframes und muessen von vorn anfangen, wenn ein Akt neu kommt.
 * ══════════════════════════════════════════════════════════════════════ */

export type Nische = {
  id: string;
  label: string;
  suche: string;
  firmen: number;
  rolle: string;
  segment: string;
  befunde: readonly string[];
  betreff: string;
  mail: readonly string[];
  antwort: string;
  termin: string;
  notizen: readonly string[];
  abschluss: string;
};

export type JourneyProps = {
  nischen: readonly Nische[];
  akte: readonly string[];
  untertitel: readonly string[];
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
  nischeLabel: string;
};

// Standzeit je Akt in Millisekunden. Der Website-Akt und der Mail-Akt
// stehen laenger, weil dort am meisten nacheinander erscheint.
const STANDZEIT = [3600, 4200, 4600, 3400, 3800, 4200];

function reduziert() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useHochzaehlen(ziel: number, ms = 900) {
  const [wert, setWert] = useState(0);
  useEffect(() => {
    if (reduziert()) {
      setWert(ziel);
      return;
    }
    let id = 0;
    const start = performance.now();
    const tick = (jetzt: number) => {
      const t = Math.min(1, (jetzt - start) / ms);
      const e = 1 - Math.pow(1 - t, 3);
      setWert(Math.round(ziel * e));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [ziel, ms]);
  return wert;
}

function useUhr() {
  const [s, setS] = useState(0);
  useEffect(() => {
    if (reduziert()) return;
    const id = setInterval(() => setS((x) => x + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(s / 60);
  return String(m).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

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

/* Die Karte, auf der jeder Akt steht: dunkles Glas ueber dem Horizont. */
const karte = "rounded-2xl border border-white/10 bg-[#0e131b]/85 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md";
const label = "text-[12px] font-medium uppercase tracking-[0.12em]";

function Haken() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5">
      <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AktFinden({ n, p }: { n: Nische; p: JourneyProps }) {
  const zahl = useHochzaehlen(n.firmen);
  return (
    <div className="grid w-full max-w-[46rem] gap-6 sm:grid-cols-[1fr_1.15fr] sm:items-center sm:gap-10">
      <div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px] shrink-0 text-faint">
            <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="m19 19-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="relative min-w-0 text-[15px] text-ink sm:text-[17px]">
            <span className="fb-type fb-type-on block whitespace-nowrap">{n.suche}</span>
          </span>
        </div>
        <Ein ms={900} art="fb-fade" className="mt-6">
          <p className="font-display text-[3.25rem] font-medium leading-none tabular-nums tracking-[-0.03em] text-ink sm:text-[4rem]">
            {zahl.toLocaleString("de-DE")}
          </p>
          <p className="mt-2 text-[16px] text-mute">{p.firmenLabel}</p>
        </Ein>
      </div>
      <Ein ms={1500}>
        <div className={karte + " p-5"}>
          <p className={label + " text-sky-300"}>{p.gefundenLabel}</p>
          <div className="mt-3.5 flex items-center gap-4">
            <span aria-hidden className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sky-400/15 text-sky-300">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <circle cx="12" cy="8.5" r="3.6" stroke="currentColor" strokeWidth="1.7" />
                <path d="M5 20c1.2-4.2 3.9-6.3 7-6.3s5.8 2.1 7 6.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[18px] font-semibold leading-snug text-ink">{n.rolle}</p>
              <p className="text-[14px] text-soft sm:text-[15px]">{n.segment}</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.geprueft.map((g, i) => (
              <li
                key={g}
                className="fb-anim fb-rise-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/12 px-3 py-1.5 text-[13px] font-medium text-emerald-300"
                style={{ animationDelay: 1800 + i * 90 + "ms" }}
              >
                <Haken />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Ein>
    </div>
  );
}

function AktWebsite({ n, p }: { n: Nische; p: JourneyProps }) {
  return (
    <div className="grid w-full max-w-[48rem] gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
      <div className={karte + " overflow-hidden"}>
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-3 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
          </span>
          <span aria-hidden className="ml-2 h-4 flex-1 rounded-full bg-white/8" />
        </div>
        {/* Die fremde Website, abstrahiert: Balken statt Blindtext. Und
            heller als der Rest, denn sie ist nicht unsere Oberflaeche. */}
        <div className="relative h-[136px] overflow-hidden bg-[#f3f4f6] p-5 sm:h-[168px]">
          <span aria-hidden className="block h-3 w-2/5 rounded bg-[#c9ccd2]" />
          <span aria-hidden className="mt-2.5 block h-2 w-3/4 rounded bg-[#dcdfe4]" />
          <span aria-hidden className="mt-1.5 block h-2 w-2/3 rounded bg-[#dcdfe4]" />
          <span aria-hidden className="mt-4 flex gap-2.5">
            <span className="h-10 flex-1 rounded-lg bg-[#e6e8ec]" />
            <span className="h-10 flex-1 rounded-lg bg-[#e6e8ec]" />
            <span className="h-10 flex-1 rounded-lg bg-[#e6e8ec]" />
          </span>
          <span aria-hidden className="fb-scan" />
        </div>
      </div>
      <div>
        <p className={label + " text-faint"}>{p.scanLabel}</p>
        <ol className="mt-3 space-y-2">
          {n.befunde.map((b, i) => (
            <li
              key={b}
              className="fb-anim fb-rise-6 flex items-start gap-3 rounded-xl border border-white/10 bg-[#0e131b]/85 px-4 py-3 backdrop-blur-md"
              style={{ animationDelay: 1300 + i * 260 + "ms" }}
            >
              <span aria-hidden className="mt-px grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-ink text-[12px] font-bold text-surface">
                {i + 1}
              </span>
              <span className="min-w-0 text-[15px] leading-snug text-ink sm:text-[16px]">{b}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function AktMail({ n, p }: { n: Nische; p: JourneyProps }) {
  return (
    <div className={karte + " w-full max-w-[38rem] overflow-hidden"}>
      <div className="flex flex-wrap items-baseline gap-x-2 border-b border-white/8 px-5 py-3">
        <span className="text-[13px] text-mute">{p.anLabel}</span>
        <span className="text-[15px] text-ink">
          {n.rolle} · {n.segment}
        </span>
      </div>
      <div className="flex flex-wrap items-baseline gap-x-2 border-b border-white/8 px-5 py-3">
        <span className="text-[13px] text-mute">{p.betreffLabel}</span>
        <span className="text-[15px] font-medium text-ink">{n.betreff}</span>
      </div>
      <div className="space-y-3 px-5 py-4">
        {n.mail.map((z, i) => (
          <p
            key={z}
            className={
              "fb-anim fb-rise-6 text-[15px] leading-relaxed sm:text-[17px] " +
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

function AktAntwort({ n, p }: { n: Nische; p: JourneyProps }) {
  return (
    <div className="w-full max-w-[38rem]">
      <Ein>
        <div className="rounded-2xl border border-emerald-400/25 bg-[#0d1a17]/90 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-6">
          <p className={label + " flex items-center gap-2.5 text-emerald-300"}>
            <span aria-hidden className="fb-ping h-2.5 w-2.5 rounded-full bg-emerald-400" />
            {p.antwortLabel}
          </p>
          <p className="mt-3.5 text-[19px] leading-snug text-ink sm:text-[23px]">„{n.antwort}“</p>
        </div>
      </Ein>
      <Ein ms={700} className="mt-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-white/6 px-3.5 py-1.5 text-[15px] text-mute line-through decoration-edge3">
            {p.statusVorher}
          </span>
          <span aria-hidden className="text-faint">→</span>
          <span className="rounded-full bg-emerald-400/12 px-3.5 py-1.5 text-[15px] font-medium text-emerald-300">
            {p.statusNachher}
          </span>
        </div>
      </Ein>
    </div>
  );
}

function AktGespraech({ n, p }: { n: Nische; p: JourneyProps }) {
  const uhr = useUhr();
  return (
    <div className={karte + " w-full max-w-[38rem] overflow-hidden"}>
      <div className="flex items-center justify-between gap-4 border-b border-white/8 bg-white/[0.03] px-5 py-4">
        <p className="flex items-center gap-3 text-[15px] font-medium text-ink sm:text-[17px]">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px] shrink-0 text-sky-300">
            <rect x="3" y="5" width="18" height="16" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
            <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          {n.termin}
        </p>
        <p className="flex items-center gap-2 text-[15px] tabular-nums text-mute">
          <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400" />
          {uhr}
        </p>
      </div>
      <div className="px-5 py-5">
        <p className={label + " text-faint"}>{p.notizenLabel}</p>
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

function AktAbschluss({ n, p }: { n: Nische; p: JourneyProps }) {
  const [spalte, setSpalte] = useState(reduziert() ? p.spalten.length - 1 : 0);
  useEffect(() => {
    if (reduziert()) return;
    const ids = p.spalten.map((_, i) => (i === 0 ? 0 : window.setTimeout(() => setSpalte(i), 500 + i * 620)));
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
              (i === spalte ? "bg-emerald-400/12 text-emerald-300" : "text-mute")
            }
          >
            {s}
          </li>
        ))}
      </ol>
      <div className="relative mt-2.5 h-[92px]">
        <div aria-hidden className="grid h-full grid-cols-4 gap-2">
          {p.spalten.map((s) => (
            <span key={s} className="rounded-xl border border-dashed border-white/12" />
          ))}
        </div>
        <div
          className="absolute inset-y-0 left-0 w-1/4 transition-transform duration-[620ms]"
          style={{ transform: `translateX(${spalte * 100}%)`, transitionTimingFunction: "var(--fb-ease-in-out)" }}
        >
          <div
            className={
              "flex h-full flex-col justify-center rounded-xl border px-2.5 text-center backdrop-blur-md transition-colors duration-300 " +
              (spalte === p.spalten.length - 1
                ? "border-emerald-400/30 bg-[#0d1a17]/90 text-emerald-100"
                : "border-white/12 bg-[#0e131b]/90 text-ink")
            }
          >
            <span className="truncate text-[13px] font-semibold">{n.rolle}</span>
            <span className="mt-0.5 truncate text-[12px] text-mute">{n.segment.split(",")[0]}</span>
          </div>
        </div>
      </div>
      <Ein ms={2200} className="mt-7 text-center">
        <p className="font-display text-[1.5rem] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">{n.abschluss}</p>
      </Ein>
    </div>
  );
}

function Pfeil({ richtung }: { richtung: "l" | "r" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      {richtung === "l" ? (
        <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

const rundKnopf =
  "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 text-soft transition-[border-color,color,transform] duration-200 hover:border-white/30 hover:text-ink active:scale-95 disabled:opacity-30 disabled:hover:border-white/12 disabled:hover:text-soft";

export function Journey(p: JourneyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [drin, setDrin] = useState(false);
  const [nische, setNische] = useState(0);
  const [akt, setAkt] = useState(0);
  const [laeuft, setLaeuft] = useState(true);
  const n = p.nischen[nische];
  const letzter = p.akte.length;

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
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  // Los geht es, sobald die Buehne im Bild ist. Unter `reduce` steht sofort
  // der erste Akt, und der Besucher blaettert selbst.
  useEffect(() => {
    if (!drin || akt !== 0) return;
    setAkt(1);
    if (reduziert()) setLaeuft(false);
  }, [drin, akt]);

  useEffect(() => {
    if (!drin || !laeuft || akt < 1 || akt >= letzter) return;
    const id = setTimeout(() => setAkt((a) => a + 1), STANDZEIT[akt - 1] ?? 3600);
    return () => clearTimeout(id);
  }, [drin, akt, laeuft, letzter]);

  const waehle = (i: number) => {
    setNische(i);
    setAkt(1);
    setLaeuft(true);
  };
  const springe = (i: number) => {
    setAkt(Math.min(letzter, Math.max(1, i)));
    setLaeuft(false);
  };
  const a = Math.max(1, akt);
  const fertig = akt >= letzter;

  // Auf dem Telefon rollt die Reiterleiste seitlich. Der aktive Reiter
  // faehrt in die Mitte, sonst laeuft die Buehne ab, waehrend die Leiste
  // noch den ersten Akt zeigt (gesehen 2026-09-02 bei 390 px). Nur die
  // Leiste rollt, nie die Seite.
  const leiste = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = leiste.current;
    if (!bar || bar.scrollWidth <= bar.clientWidth) return;
    const tab = bar.querySelector<HTMLElement>("[aria-current='step']");
    if (!tab) return;
    bar.scrollTo({ left: tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2, behavior: reduziert() ? "auto" : "smooth" });
  }, [a]);

  return (
    <div ref={ref}>
      {/* Die Nische: die eine Handlung. */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 text-[14px] text-mute">{p.nischeLabel}</span>
        {p.nischen.map((x, i) => (
          <button
            key={x.id}
            type="button"
            onClick={() => waehle(i)}
            aria-pressed={i === nische}
            className={
              "inline-flex min-h-[44px] items-center rounded-full border px-4 text-[14px] font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.97] sm:text-[15px] " +
              (i === nische ? "border-ink bg-ink text-surface" : "border-white/12 text-soft hover:border-white/30 hover:text-ink")
            }
          >
            {x.label}
          </button>
        ))}
      </div>

      {/* Die Reiter: alle sechs Akte, immer. */}
      <div ref={leiste} className="fb-noscroll -mx-4 mt-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <ol className="flex w-max min-w-full gap-1 rounded-full border border-white/8 bg-white/[0.04] p-1 sm:grid sm:w-full sm:grid-cols-6">
          {p.akte.map((name, i) => {
            const nr = i + 1;
            const hier = a === nr;
            const vorbei = a > nr;
            return (
              <li key={name} className="min-w-0">
                <button
                  type="button"
                  onClick={() => springe(nr)}
                  aria-current={hier ? "step" : undefined}
                  className={
                    "relative flex min-h-[44px] w-full items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-full px-4 text-[14px] transition-[background-color,color] duration-300 sm:px-1.5 " +
                    (hier ? "bg-white/10 font-medium text-ink" : vorbei ? "text-soft hover:bg-white/5" : "text-mute hover:bg-white/5 hover:text-soft")
                  }
                >
                  {/* Ein Punkt statt eines Hakens: bei 1440 px teilen sich
                      sechs Reiter 1104 px, und "Entscheider gefunden" passte
                      mit Haken nicht mehr in seinen (gesehen 2026-09-02). */}
                  {vorbei && <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />}
                  <span className="truncate">{name}</span>
                  {hier && laeuft && !fertig && (
                    <span
                      key={n.id + "-" + a}
                      aria-hidden
                      className="fb-timer absolute inset-x-4 bottom-1 h-px bg-sky-400/80"
                      style={{ ["--fb-ms" as string]: (STANDZEIT[a - 1] ?? 3600) + "ms" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Der Rahmen. */}
      <div className="fb-grain relative mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-[#080c13] sm:mt-5 sm:rounded-[28px]">
        <Horizon className="[&_.fb-h-a]:h-[170%] [&_.fb-h-b]:h-[95%] [&_.fb-h-b]:w-[110%]" />
        <div className="relative grid min-h-[430px] place-items-center px-4 py-10 sm:min-h-[480px] sm:px-10 sm:py-14">
          {akt > 0 && (
            <div key={n.id + "-" + a} className="flex w-full justify-center">
              {a === 1 && <AktFinden n={n} p={p} />}
              {a === 2 && <AktWebsite n={n} p={p} />}
              {a === 3 && <AktMail n={n} p={p} />}
              {a === 4 && <AktAntwort n={n} p={p} />}
              {a === 5 && <AktGespraech n={n} p={p} />}
              {a >= 6 && <AktAbschluss n={n} p={p} />}
            </div>
          )}
        </div>
      </div>

      {/* Der Satz zum Akt, mit Pfeilen. */}
      <div className="mt-5 flex items-center gap-4">
        <button type="button" onClick={() => springe(a - 1)} disabled={a <= 1} aria-label="Zurück" className={rundKnopf}>
          <Pfeil richtung="l" />
        </button>
        <p key={a} className="fb-anim fb-fade min-w-0 flex-1 text-center text-[16px] leading-snug text-soft sm:text-[19px]">
          {p.untertitel[a - 1]}
        </p>
        {fertig ? (
          <button
            type="button"
            onClick={() => {
              setAkt(1);
              setLaeuft(true);
            }}
            aria-label={p.wiederholen}
            title={p.wiederholen}
            className={rundKnopf}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
              <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <button type="button" onClick={() => springe(a + 1)} aria-label="Weiter" className={rundKnopf}>
            <Pfeil richtung="r" />
          </button>
        )}
      </div>
    </div>
  );
}
