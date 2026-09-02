"use client";
import { useEffect, useRef, useState } from "react";
import { useT } from "./language-provider";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DER HORIZONT UND DIE NACHBILDUNG IM HELDEN, neu am 2026-09-02.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Youssef hat Fora gezeigt: ein Licht am unteren Rand, das Produkt gross
 * und gerahmt darauf, darueber eine Ueberschrift in Ruhe. Diese Datei
 * liefert beides.
 *
 * DAS LICHT ist kein Bild, sondern drei Verlaeufe (globals.css, .fb-horizon).
 * Es antwortet auf den Zeiger, um wenige Pixel und nur bei feinem Zeiger:
 * ein Licht, das sich mit der Hand bewegt, ist der eine Moment, in dem die
 * Seite auf den Besucher reagiert, bevor er scrollt.
 *
 * DIE NACHBILDUNG zeigt, was die Ueberschrift verspricht, als Ablauf statt
 * als Standbild: die Liste steht schon da, ein Aufhaenger wird gerade
 * geschrieben, dann trifft eine Antwort ein und der Status springt. Vier
 * Takte, einmal, dann bleibt das Bild stehen. Nichts darin ist ein
 * Firmenname: Rolle und Stadtteil reichen, dieselbe Regel wie im Ablauf.
 * ══════════════════════════════════════════════════════════════════════ */

function reduziert() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Horizon({ className = "", parallax = false, hy }: { className?: string; parallax?: boolean; hy?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!parallax) return;
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reduziert()) return;
    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--px", ((e.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
      el.style.setProperty("--py", ((e.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [parallax]);
  return (
    <div ref={ref} aria-hidden className={"fb-horizon " + className} style={hy ? ({ ["--hy" as string]: hy } as React.CSSProperties) : undefined}>
      <i className="fb-h-a" />
      <i className="fb-h-b" />
      <i className="fb-h-c" />
    </div>
  );
}

function Chip({ kind, label }: { kind: "neu" | "kontaktiert" | "termin"; label: string }) {
  const cls =
    kind === "termin"
      ? "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30"
      : kind === "kontaktiert"
        ? "bg-sky-400/12 text-sky-300 ring-sky-400/25"
        : "bg-white/6 text-faint ring-white/10";
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-medium ring-1 ring-inset transition-colors duration-500 " +
        cls
      }
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function useSchreibmaschine(text: string, laeuft: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!laeuft) return;
    if (reduziert()) {
      setN(text.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, [text, laeuft]);
  return text.slice(0, n);
}

export function HeroScreen({ note }: { note: string }) {
  const { t } = useT();
  const v = t.heroVisual;
  const ref = useRef<HTMLDivElement>(null);
  const [drin, setDrin] = useState(false);
  // 0 Reihen kommen · 1 Aufhaenger wird getippt · 2 Antwort trifft ein ·
  // 3 Status springt auf Termin
  const [takt, setTakt] = useState(0);

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
      { threshold: 0.3 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (!drin) return;
    if (reduziert()) {
      setTakt(3);
      return;
    }
    const ids = [
      window.setTimeout(() => setTakt(1), 1500),
      window.setTimeout(() => setTakt(2), 4200),
      window.setTimeout(() => setTakt(3), 5000),
    ];
    return () => ids.forEach(clearTimeout);
  }, [drin]);

  const getippt = useSchreibmaschine(v.typing, takt >= 1);

  return (
    <div ref={ref} className={"fb-screen-in relative " + (drin ? "fb-on" : "")}>
      <div className="fb-dark relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1119] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.03)] sm:rounded-[22px]">
        {/* Fensterleiste */}
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-2.5 sm:px-5">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="ml-1 inline-flex min-w-0 max-w-[50%] items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-[12px] text-faint sm:max-w-none">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
            <span className="truncate">{v.workspace}</span>
          </span>
          <span className="ml-auto shrink-0 text-[12px] text-mute">{note}</span>
        </div>

        <div className="grid sm:grid-cols-[176px_1fr]">
          {/* Seitenleiste, nur ab sm: auf dem Telefon traegt die Liste
              allein, und eine Leiste daneben wuerde ihr die Breite nehmen. */}
          <aside className="hidden border-r border-white/8 px-3 py-4 sm:block">
            <ul className="space-y-0.5">
              {v.nav.map((n, i) => (
                <li
                  key={n}
                  className={
                    "flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] " +
                    (i === 0 ? "bg-white/8 font-medium text-ink" : "text-faint")
                  }
                >
                  <span aria-hidden className={"h-1.5 w-1.5 rounded-full " + (i === 0 ? "bg-sky-400" : "bg-white/20")} />
                  {n}
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0 px-3 py-4 sm:px-5 sm:py-5">
            <div className="flex items-baseline justify-between gap-3 px-1">
              <p className="text-[15px] font-medium text-ink">{v.listTitle}</p>
              <p className="text-[12px] tabular-nums text-mute">{v.count}</p>
            </div>

            {/* Auf dem Telefon ist jede Reihe eine Karte (Rolle und Status
                oben, Aufhaenger darunter), ab sm eine Tabellenzeile. Vier
                Spalten in 358 px hiessen: jede Rolle abgeschnitten (gesehen
                2026-09-02 bei 390 px). `sm:contents` loest die Kopfzeile der
                Karte im Raster wieder auf. */}
            <div className="mt-3 overflow-hidden rounded-xl border border-white/8">
              <div className="hidden grid-cols-[1.1fr_1fr_1.8fr_auto] gap-3 border-b border-white/8 bg-white/[0.03] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.08em] text-mute sm:grid">
                <span>{v.columns[0]}</span>
                <span>{v.columns[1]}</span>
                <span>{v.columns[2]}</span>
                <span className="text-right">{v.columns[3]}</span>
              </div>
              {v.rows.map((r, i) => {
                const tippt = r.aufhaenger === "";
                const status: "neu" | "kontaktiert" | "termin" =
                  i === 0 && takt >= 3 ? "termin" : (r.status as "neu" | "kontaktiert");
                return (
                  <div
                    key={r.firma}
                    className="fb-row-in border-b border-white/6 px-3.5 py-3 last:border-b-0 sm:grid sm:grid-cols-[1.1fr_1fr_1.8fr_auto] sm:items-center sm:gap-3 sm:px-4"
                    style={{ ["--i" as string]: i }}
                  >
                    <span className="hidden truncate text-[13px] text-soft sm:block">{r.firma}</span>
                    <div className="flex items-center justify-between gap-3 sm:contents">
                      <span className="truncate text-[14px] font-medium text-ink sm:text-[13px]">{r.rolle}</span>
                      <span className="sm:hidden">
                        <Chip kind={status} label={v.status[status]} />
                      </span>
                    </div>
                    <span className="mt-1.5 block min-w-0 text-[13px] leading-snug text-soft sm:mt-0">
                      {tippt ? (
                        <span className="line-clamp-2">
                          {getippt}
                          {takt >= 1 && getippt.length < v.typing.length && (
                            <span aria-hidden className="fb-caret fb-caret-inline fb-caret-on ml-0.5 align-middle" />
                          )}
                        </span>
                      ) : (
                        <span className="line-clamp-2">{r.aufhaenger}</span>
                      )}
                    </span>
                    <span className="hidden justify-self-end sm:block">
                      <Chip kind={status} label={v.status[status]} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Die Antwort. Schwebt ueber der unteren Kante: sie kommt von aussen,
          also liegt sie auch ausserhalb des Fensters. */}
      <div
        className={
          "fb-float-in absolute -bottom-5 right-2 w-[min(84%,21rem)] sm:-right-5 sm:bottom-1 " +
          (takt >= 2 ? "fb-float-on" : "")
        }
        aria-hidden={takt < 2}
      >
        <div className="fb-dark fb-float-body rounded-2xl border border-emerald-400/25 bg-[#0d1a17]/95 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur">
          <p className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.1em] text-emerald-300">
            <span aria-hidden className={"h-2 w-2 rounded-full bg-emerald-400 " + (takt >= 2 ? "fb-ping" : "")} />
            {v.replyLabel}
          </p>
          <p className="mt-2 text-[15px] leading-snug text-ink sm:text-[16px]">„{v.reply}“</p>
          <p className="mt-1.5 text-[12px] text-mute">{v.replyFrom}</p>
        </div>
      </div>
    </div>
  );
}
