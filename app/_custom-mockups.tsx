"use client";
import { useT } from "./language-provider";

/**
 * Visuals fuer /eigene-software (Auftragsentwicklung).
 *
 * Eigene Datei nach demselben Trennprinzip wie _mockups.tsx (illustrierte
 * Konzepte) vs. _app-mockups.tsx (konkrete App-Bildschirme): Diese hier sind
 * Konzepte, zeigen aber bewusst NICHT die Frostbreaker-Oberflaeche -- auf
 * dieser Seite ist Frostbreaker der Beleg, nicht das Angebot. Die
 * Produkt-Mockups gehoeren deshalb nicht hierher und diese nicht dorthin.
 *
 * Kein AppFrame (Fensterleiste): nichts davon ist ein Bildschirm aus einem
 * Programm, ein Fensterrahmen wuerde etwas vortaeuschen, das es nicht gibt.
 */

/** Gemeinsamer Rahmen, identisch zu den Konzept-Mockups in _mockups.tsx. */
function Panel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">{children}</div>;
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0 text-edge3" aria-hidden>
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Vorher/Nachher des Arbeitsablaufs -- das Kernargument der Seite in einem
 * Bild. Der manuelle Schritt ist in Amber markiert, nicht in Rot: er ist die
 * teure Stelle, aber kein Fehler, den jemand gemacht hat.
 */
export function WorkaroundMockup() {
  const { t } = useT();
  const m = t.customMockups.workaround;
  return (
    <Panel>
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.beforeLabel}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
        {m.beforeSteps.map((s, i) => (
          <span key={s.label} className="flex items-center gap-1.5">
            {i > 0 && <Chevron />}
            <span
              className={
                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs " +
                (s.manual
                  ? "border-amber-300/80 bg-amber-50 text-amber-900"
                  : "border-edge2 bg-panel2 text-soft")
              }
            >
              {s.manual && (
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden>
                  <path
                    d="M8 11V5.5a1.5 1.5 0 0 1 3 0V11m0-1.5v-4a1.5 1.5 0 0 1 3 0V11m0-1a1.5 1.5 0 0 1 3 0v1m-9 .5V8a1.5 1.5 0 0 0-3 0v6a7 7 0 0 0 7 7h1a7 7 0 0 0 7-7v-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {s.label}
              {s.manual && <span className="font-medium">· {m.manualLabel}</span>}
            </span>
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-mute">{m.beforeNote}</p>

      <div className="my-5 h-px bg-edge/70" />

      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.afterLabel}</p>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-sky-500/40 bg-sky-500/[0.07] px-4 py-3.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-700">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
            <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 9h18M8 20V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
        <p className="text-sm font-medium text-ink">{m.afterTitle}</p>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-mute">{m.afterNote}</p>
    </Panel>
  );
}

/**
 * Ablauf der Zusammenarbeit als Zeitstrahl. Die Nummerierung ist hier
 * inhaltlich gedeckt -- es ist eine echte Reihenfolge, in der jeder Schritt
 * den vorherigen voraussetzt -- und nicht bloss Dekoration.
 * Gleiches Zeitstrahl-Muster wie CampaignMockup in _mockups.tsx.
 */
export function ProcessMockup() {
  const { t } = useT();
  const m = t.customMockups.process;
  const last = m.steps.length - 1;
  return (
    <Panel>
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.label}</p>
      <div className="relative mt-4 space-y-5 pl-5">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-edge2" />
        {m.steps.map((s, i) => (
          <div key={s.title} className="relative flex items-start gap-3">
            {/* Der letzte Punkt ist gefuellt statt hohl: die Uebergabe ist der
                Abschluss, nicht wieder nur eine weitere Station. */}
            <span
              className={
                "absolute -left-5 top-1 h-3.5 w-3.5 rounded-full border-2 " +
                (i === last ? "border-sky-500 bg-sky-500" : "border-sky-500 bg-panel")
              }
            />
            <div className="min-w-0">
              <p className="text-[11px] font-medium uppercase tracking-wide text-mute">{s.when}</p>
              <p className="text-sm font-medium text-ink">{s.title}</p>
              <p className="mt-0.5 text-xs text-soft">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/**
 * Macht die Zahl "sechs angebundene Dienste" sichtbar, statt sie nur zu
 * behaupten: viele externe Dienste laufen in einem System zusammen. Genau die
 * Faehigkeit, um die es bei Auftragsentwicklung meistens geht.
 */
export function StackMockup() {
  const { t } = useT();
  const m = t.customMockups.stack;
  return (
    <Panel>
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.label}</p>
      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
        {m.services.map((s) => (
          <span
            key={s}
            className="truncate rounded-lg border border-edge2 bg-panel2 px-2.5 py-1.5 text-center text-xs text-soft"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Zusammenfuehrung als Pfeil nach unten statt gezeichneter Verbindungs-
          linien: gleiche Aussage, aber ohne zerbrechliche Absolut-Positionierung,
          die auf schmalen Viewports verrutscht. */}
      <div className="flex justify-center py-2.5" aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-edge3">
          <path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl border border-sky-500/40 bg-sky-500/[0.07] px-4 py-3">
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium text-ink">{m.coreLabel}</span>
          <span className="block truncate text-xs text-soft">{m.coreNote}</span>
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-700">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
            <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="m8.5 12 2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-mute">{m.footnote}</p>
    </Panel>
  );
}
