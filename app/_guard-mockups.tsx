"use client";
import { useT } from "./language-provider";

/**
 * Die drei Bildschirme, die Frostbreaker von jedem Versandwerkzeug trennen:
 * der Torwart vor dem Start, die Kette ueber drei Kanaele, und die Ansicht,
 * die eine Zahl weglaesst statt sie zu erfinden.
 *
 * Eigene Datei neben _app-mockups.tsx, weil das dort gewachsene Bildschirme
 * der Lead-Beschaffung sind; hier geht es um das, was NACH dem Suchen
 * passiert. Derselbe Rahmen, dieselben Marken-Tokens, damit die Seite eine
 * Welt bleibt.
 *
 * Wie ueberall hier: nachgebaut, nicht abfotografiert. Im echten Betrieb
 * stehen dort Namen realer Personen mit Rolle und Arbeitgeber, die ohne
 * Einwilligung nicht ins Marketing gehoeren -- erst recht nicht auf einer
 * Seite, die mit Datensparsamkeit wirbt.
 */

function AppFrame({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-edge2/70 bg-panel shadow-xl shadow-ink/[0.07]">
      <div className="flex items-center gap-1.5 border-b border-edge/70 bg-panel2/60 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-edge3/50" />
        <span className="h-2 w-2 rounded-full bg-edge3/35" />
        <span className="h-2 w-2 rounded-full bg-edge3/25" />
        {title && <span className="ml-2 text-[11px] text-mute">{title}</span>}
      </div>
      {children}
    </div>
  );
}

type Severity = "blocker" | "warning" | "ok";

const SEVERITY: Record<Severity, { dot: string; box: string }> = {
  blocker: { dot: "bg-red-500", box: "border-red-500/40 bg-red-500/[0.06]" },
  warning: { dot: "bg-amber-500", box: "border-amber-500/35 bg-amber-500/[0.06]" },
  ok: { dot: "bg-emerald-500", box: "border-edge/60" },
};

/**
 * Der Torwart.
 *
 * Zeigt bewusst BEIDE Stufen: zwei rote Blocker und zwei gelbe Hinweise. Nur
 * rot zu zeigen wuerde die Sache als Schikane lesbar machen; der ganze Punkt
 * ist, dass die App zwischen "geht schief" und "waere besser" unterscheidet.
 */
export function GateMockup() {
  const { t } = useT();
  const m = t.guardMockups.gate;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="space-y-2 p-4 sm:p-5">
        {m.checks.map((c) => {
          const style = SEVERITY[c.severity as Severity];
          return (
            <div key={c.title} className={"flex gap-2.5 rounded-xl border px-3.5 py-3 " + style.box}>
              <span className={"mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full " + style.dot} />
              <div className="min-w-0">
                <p className="text-[13px] font-medium leading-snug text-ink">{c.title}</p>
                {c.body && <p className="mt-0.5 text-[11px] leading-relaxed text-faint">{c.body}</p>}
              </div>
            </div>
          );
        })}

        <div className="rounded-xl border border-red-500/40 bg-red-500/[0.08] px-3.5 py-2.5 text-[12px] font-semibold text-red-600 dark:text-red-400">
          {m.blocked}
        </div>

        {/* Abgeschalteter Knopf statt eines fehlenden: der Besucher soll
            sehen, dass der Start existiert und gerade nicht geht. */}
        <div className="pt-1">
          <span className="inline-block cursor-not-allowed rounded-lg bg-edge2/70 px-4 py-2 text-[12px] font-semibold text-mute">
            {m.button}
          </span>
        </div>
      </div>
    </AppFrame>
  );
}

/**
 * Die Kette ueber drei Kanaele.
 *
 * Die senkrechte Linie traegt die Aussage: es ist EIN Vorgang, nicht drei
 * Listen. Deshalb liegt sie hinter den Knoten und nicht zwischen den Karten.
 */
export function ChainMockup() {
  const { t } = useT();
  const m = t.guardMockups.chain;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-5 sm:p-6">
        <ol className="relative m-0 list-none p-0">
          <span
            aria-hidden
            className="absolute left-[15px] top-3 bottom-3 w-px bg-edge2"
          />
          {m.steps.map((s, i) => (
            <li key={s.title} className={"relative pl-11 " + (i < m.steps.length - 1 ? "pb-6" : "")}>
              <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border-2 border-sky-500/70 bg-panel text-[11px] font-bold text-sky-600 dark:text-sky-400">
                {i + 1}
              </span>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-sky-600 dark:text-sky-400">{s.day}</p>
              <p className="mt-0.5 text-[14px] font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-soft">{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 border-t border-edge/60 pt-4 text-[11px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}

/**
 * Die Wirkungs-Ansicht.
 *
 * Der Kern sind die zwei unteren Zeilen: Balken leer, statt "zu wenig" eine
 * Zahl zu erfinden. Wer das Bild ueberfliegt, sieht zuerst die Luecke, und
 * genau die ist das Verkaufsargument.
 */
export function EffectMockup() {
  const { t } = useT();
  const m = t.guardMockups.effect;

  return (
    <AppFrame title={m.frameTitle}>
      <div className="p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-7 gap-y-2 border-b border-edge/60 pb-4">
          {m.stats.map((s) => (
            <div key={s.label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-mute">{s.label}</p>
              <p className={"tabular-nums " + (s.strong ? "text-xl font-semibold text-ink" : "text-xl text-soft")}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {m.rows.map((r) => (
            <div key={r.label} className="flex items-center gap-3">
              <span className="w-[104px] shrink-0 truncate text-[12px] text-ink sm:w-[132px]">{r.label}</span>
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-chip">
                {r.percent !== null && (
                  <span
                    className="block h-full rounded-full bg-sky-500"
                    style={{ width: Math.min(100, r.percent * 5) + "%" }}
                  />
                )}
              </span>
              <span
                className={
                  "w-[92px] shrink-0 text-right text-[11px] tabular-nums " +
                  (r.percent === null ? "text-mute" : "text-soft")
                }
              >
                {r.value}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}
