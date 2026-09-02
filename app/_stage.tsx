"use client";
import { useEffect, useRef, useState } from "react";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE ZWEI KLEINEN BUEHNEN DER STARTSEITE. Neu gefasst am 2026-09-02.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Aus der Fassung vom 2026-08-31 bleiben die Regeln: additiv, alles im
 * Fluss, nur transform und opacity, und unter `reduce` steht sofort das
 * ganze Bild. Was sich geaendert hat:
 *
 *   · Die Handgriffe (StrikeList) werden vom SCROLLEN durchgestrichen,
 *     nicht von einer Uhr. Jede Zeile bekommt ihren Strich, wenn sie die
 *     Mitte des Bildschirms erreicht. Wer langsam liest, sieht jeden
 *     Strich; wer schnell scrollt, sieht sie alle nacheinander fallen.
 *   · Die Claude-Buehne ist ein dunkles Chatfenster, nicht mehr eine
 *     weisse Karte. Sie steht neben der Ueberschrift, nicht darunter.
 * ══════════════════════════════════════════════════════════════════════ */

function reduziert() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useImBild<T extends HTMLElement>(schwelle = 0.25) {
  const ref = useRef<T>(null);
  const [drin, setDrin] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduziert()) {
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
      { threshold: schwelle, rootMargin: "0px 0px -10% 0px" },
    );
    o.observe(el);
    return () => o.disconnect();
  }, [schwelle]);
  return { ref, drin };
}

function useTakt(takte: number, drin: boolean, ms = 1400) {
  const [takt, setTakt] = useState(0);
  const [fertig, setFertig] = useState(false);
  useEffect(() => {
    if (!drin || fertig) return;
    if (reduziert()) {
      setTakt(takte);
      setFertig(true);
      return;
    }
    if (takt >= takte) {
      setFertig(true);
      return;
    }
    const id = setTimeout(() => setTakt((t) => t + 1), takt === 0 ? 500 : ms);
    return () => clearTimeout(id);
  }, [drin, takt, takte, ms, fertig]);
  return { takt, setTakt, fertig, setFertig };
}

function Ab({
  takt,
  ab,
  hoch = 8,
  className = "",
  children,
}: {
  takt: number;
  ab: number;
  hoch?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const da = takt >= ab;
  return (
    <div className={"fb-step " + (da ? "fb-step-on " : "") + className} style={{ ["--fb-step-y" as string]: hoch + "px" }}>
      {children}
    </div>
  );
}

export type ClaudeStageProps = {
  auftrag: string;
  schritte: readonly { name: string; text: string }[];
  ergebnis: string;
  grenze: string;
  wiederholen: string;
};

export function ClaudeStage(p: ClaudeStageProps) {
  const { ref, drin } = useImBild<HTMLDivElement>();
  const { takt, setTakt, fertig, setFertig } = useTakt(p.schritte.length + 1, drin, 850);
  return (
    <div ref={ref}>
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-panel shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2.5 border-b border-white/8 px-5 py-3 text-[13px] text-faint">
          <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400" />
          Claude · Frostbreaker
        </div>
        <div className="px-5 pt-5 sm:px-6">
          <div className="ml-auto max-w-[44ch] rounded-2xl rounded-br-md bg-sky-500 px-4 py-3 text-[15px] leading-snug text-white sm:text-[16px]">
            {p.auftrag}
          </div>
        </div>
        <ol className="space-y-0.5 px-5 py-5 sm:px-6">
          {p.schritte.map((s, i) => (
            <li key={s.name}>
              <Ab takt={takt} ab={i + 1} hoch={4}>
                <div className="flex items-start gap-3 py-1.5">
                  <span aria-hidden className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                      <path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="min-w-0 text-[15px] leading-snug text-soft sm:text-[16px]">
                    {s.text}{" "}
                    <code className="whitespace-nowrap rounded bg-white/6 px-1.5 py-0.5 font-mono text-[12px] text-faint">{s.name}</code>
                  </p>
                </div>
              </Ab>
            </li>
          ))}
        </ol>
        <Ab takt={takt} ab={p.schritte.length + 1} className="px-5 pb-5 sm:px-6">
          <p className="rounded-xl border border-emerald-400/25 bg-emerald-400/8 px-4 py-3.5 text-[15px] leading-snug text-emerald-100 sm:text-[16px]">
            {p.ergebnis}
          </p>
        </Ab>
      </div>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <p className="flex max-w-[52ch] items-start gap-3 text-[14px] leading-relaxed text-mute">
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
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[14px] text-mute transition-colors hover:text-ink"
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

export type StrikeListProps = {
  items: readonly string[];
  note: string;
};

/* Der Strich kommt vom Scrollen: eine Zeile ist gestrichen, sobald ihre
   Oberkante ueber 62 % der Bildschirmhoehe liegt. Ein Scroll-Listener
   fuer alle Zeilen statt eines IntersectionObserver je Zeile: der Observer
   meldet nur Uebergaenge, und wer mit einem Wisch ueber den ganzen Block
   springt, laesst eine Zeile ungestrichen zurueck (gesehen am 2026-09-02).
   Einmal gestrichen bleibt gestrichen: die Aussage ist "faellt weg", nicht
   "faellt gerade weg". */
function Zeile({ text, weg, zeilenRef }: { text: string; weg: boolean; zeilenRef: (el: HTMLLIElement | null) => void }) {
  return (
    <li
      ref={zeilenRef}
      className={
        "flex items-baseline gap-4 border-b border-white/8 py-5 transition-opacity duration-700 last:border-b-0 sm:gap-6 sm:py-6 " +
        (weg ? "opacity-40" : "opacity-100")
      }
    >
      <span aria-hidden className={"mt-2 h-2 w-2 shrink-0 rounded-full transition-colors duration-500 " + (weg ? "bg-edge3" : "bg-sky-400")} />
      <span
        className={
          "fb-strike-lg font-display text-[1.5rem] font-medium leading-tight tracking-[-0.02em] text-ink sm:text-[2rem] lg:text-[2.25rem] " +
          (weg ? "fb-strike-on" : "")
        }
      >
        {text}
      </span>
    </li>
  );
}

export function StrikeList({ items, note }: StrikeListProps) {
  const zeilen = useRef<(HTMLLIElement | null)[]>([]);
  const [weg, setWeg] = useState<boolean[]>(() => items.map(() => false));
  useEffect(() => {
    if (reduziert()) {
      setWeg(items.map(() => true));
      return;
    }
    let raf = 0;
    const pruefe = () => {
      raf = 0;
      const grenze = window.innerHeight * 0.62;
      setWeg((alt) => {
        let geaendert = false;
        const neu = alt.map((w, i) => {
          if (w) return true;
          const el = zeilen.current[i];
          const da = !!el && el.getBoundingClientRect().top < grenze;
          if (da) geaendert = true;
          return da;
        });
        return geaendert ? neu : alt;
      });
    };
    const beiScroll = () => {
      if (!raf) raf = requestAnimationFrame(pruefe);
    };
    pruefe();
    window.addEventListener("scroll", beiScroll, { passive: true });
    window.addEventListener("resize", beiScroll);
    return () => {
      window.removeEventListener("scroll", beiScroll);
      window.removeEventListener("resize", beiScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);
  return (
    <div>
      <ul>
        {items.map((s, i) => (
          <Zeile
            key={s}
            text={s}
            weg={weg[i]}
            zeilenRef={(el) => {
              zeilen.current[i] = el;
            }}
          />
        ))}
      </ul>
      <p className="mt-8 max-w-[46ch] text-[18px] leading-relaxed text-soft sm:text-[20px]">{note}</p>
    </div>
  );
}
