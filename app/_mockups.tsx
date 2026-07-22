"use client";
import { StatTile } from "./_ui";
import { useT } from "./language-provider";

/**
 * Illustrierte, vereinfachte Nachbildung der Workspace-/Branding-UI (kein
 * echter Screenshot), analog zur bestehenden AI-Agent-Mockup-Karte: klein
 * noch lesbar, statt eines dichten echten Screenshots.
 */
export function AgencyMockup() {
  const { t } = useT();
  const m = t.agencyMockup;
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.workspacesLabel}</p>
      <div className="mt-2 space-y-1.5">
        {m.workspaces.map((w) => (
          <div
            key={w.name}
            className={
              "flex items-center gap-2.5 rounded-lg border px-3 py-2 text-sm " +
              (w.active ? "border-sky-500/60 bg-sky-500/10 text-ink" : "border-edge2 text-faint")
            }
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold text-white"
              style={{ backgroundColor: w.color }}
            >
              {(w.name.split(": ")[1] ?? w.name).slice(0, 1)}
            </span>
            <span className="min-w-0 flex-1 truncate">{w.name}</span>
            {w.active && <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-sky-600 dark:text-sky-300">{m.active}</span>}
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{m.brandingLabel}</p>
      <div className="mt-2 flex items-center gap-3 rounded-lg bg-panel2 px-3 py-2.5">
        <span className="h-5 w-5 shrink-0 rounded-full" style={{ backgroundColor: "#0EA5E9" }} />
        <span className="text-sm text-soft">{m.brandingValue}</span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{m.reportLinkLabel}</p>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-panel2 px-3 py-2.5">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-mute">
          <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m7.7 11 6.6-3M7.7 13l6.6 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="min-w-0 flex-1 truncate text-xs text-mute">app.frostbreaker.app/report/muster-gmbh</span>
        <span className="shrink-0 rounded-md border border-edge2 px-2 py-1 text-[11px] font-medium text-soft">{m.copyLabel}</span>
      </div>
    </div>
  );
}

/**
 * Illustrierte Nachbildung des Post-Send-Loops: eine eingeordnete Antwort +
 * die dazugehoerigen Kennzahlen als kompakte Kacheln statt eines vollen,
 * dichten Dashboard-Screenshots.
 */
export function PostSendMockup() {
  const { t } = useT();
  const m = t.postSendMockup;
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.incomingLabel}</p>
      <div className="mt-2 rounded-lg bg-panel2 p-4">
        <p className="text-sm leading-relaxed text-ink">{m.exampleReply}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {m.statusInterested}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">{m.dashboardLabel}</p>
      <div className="mt-2 grid grid-cols-3 gap-2.5">
        <StatTile value="4" label={m.meetings} />
        <StatTile value="2.400 €" label={m.pipeline} />
        <StatTile value="1,4 %" label={m.bounce} />
      </div>
    </div>
  );
}

/**
 * Illustrierter Vergleich, warum die Lead-Quelle den Unterschied macht:
 * kleine, rein lokale Betriebe tauchen in klassischen B2B-Firmendatenbanken
 * (LinkedIn-/Firmografie-basiert) kaum auf, wohl aber bei einer direkten
 * Google-Places-Suche. Bewusst als illustrierter Vergleich, keine erfundene
 * Zahl/Studie dazu -- das ist eine strukturelle, nachvollziehbare Beobachtung
 * ueber die jeweilige Datenquelle, keine belegte Statistik.
 */
export function LocalReachMockup() {
  const { t } = useT();
  const m = t.localReachMockup;
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.typicalLabel}</p>
          <div className="mt-2 space-y-1.5">
            {m.businesses.map((b) => (
              <div key={b.name} className="flex items-center gap-2.5 rounded-lg border border-edge2 px-3 py-2 opacity-60">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-panel2 text-mute">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm text-faint line-through">{b.name}</p>
                  <p className="text-[11px] text-mute">{m.notListed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.frostbreakerLabel}</p>
          <div className="mt-2 space-y-1.5">
            {m.businesses.map((b) => (
              <div key={b.name} className="flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{b.name}</p>
                  <p className="text-[11px] text-mute">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustrierter Vorher/Nachher-Vergleich fuer den Qualifizierte-Leads-Filter:
 * generische Adresse (durchgestrichen, wie nicht-gelistete Firmen in
 * LocalReachMockup) vs. echte Person mit Name, Rolle und direktem Kontakt.
 * Gleiches visuelles Muster wie LocalReachMockup, bewusst wiederverwendet
 * statt eines neuen Layouts, damit die Seite konsistent bleibt.
 */
export function QualifiedLeadMockup() {
  const { t } = useT();
  const m = t.qualifiedMockup;
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.typicalLabel}</p>
          <div className="mt-2 space-y-1.5">
            {m.rows.map((r) => (
              <div key={r.generic} className="flex items-center gap-2.5 rounded-lg border border-edge2 px-3 py-2 opacity-60">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-panel2 text-mute">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm text-faint line-through">{r.generic}</p>
                  <p className="text-[11px] text-mute">{m.genericNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.frostbreakerLabel}</p>
          <div className="mt-2 space-y-1.5">
            {m.rows.map((r) => (
              <div key={r.email} className="flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{r.name} · {r.role}</p>
                  <p className="text-[11px] text-mute">{r.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
