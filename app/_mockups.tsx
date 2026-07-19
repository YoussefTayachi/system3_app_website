import { StatTile } from "./_ui";

/**
 * Illustrierte, vereinfachte Nachbildung der Workspace-/Branding-UI (kein
 * echter Screenshot), analog zur bestehenden AI-Agent-Mockup-Karte: klein
 * noch lesbar, statt eines dichten echten Screenshots.
 */
export function AgencyMockup() {
  const workspaces = [
    { name: "Kunde: Muster GmbH", color: "#0EA5E9", active: true },
    { name: "Kunde: Beispiel AG", color: "#8B5CF6", active: false },
    { name: "Kunde: Nordwind KG", color: "#F59E0B", active: false },
  ];
  return (
    <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">Workspaces</p>
      <div className="mt-2 space-y-1.5">
        {workspaces.map((w) => (
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
              {w.name.slice(7, 8)}
            </span>
            <span className="min-w-0 flex-1 truncate">{w.name}</span>
            {w.active && <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-sky-600 dark:text-sky-300">aktiv</span>}
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">Branding dieses Workspaces</p>
      <div className="mt-2 flex items-center gap-3 rounded-lg bg-panel2 px-3 py-2.5">
        <span className="h-5 w-5 shrink-0 rounded-full" style={{ backgroundColor: "#0EA5E9" }} />
        <span className="text-sm text-soft">Muster GmbH · Akzentfarbe #0EA5E9</span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">Report-Link für den Endkunden</p>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-panel2 px-3 py-2.5">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-mute">
          <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m7.7 11 6.6-3M7.7 13l6.6 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="min-w-0 flex-1 truncate text-xs text-mute">app.thaw.io/report/muster-gmbh</span>
        <span className="shrink-0 rounded-md border border-edge2 px-2 py-1 text-[11px] font-medium text-soft">Kopieren</span>
      </div>
    </div>
  );
}

/**
 * Illustrierte Nachbildung des Post-Send-Loops: eine eingeordnete Antwort +
 * die dazugehörigen Kennzahlen als kompakte Kacheln statt eines vollen,
 * dichten Dashboard-Screenshots.
 */
export function PostSendMockup() {
  return (
    <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">Eingehende Antwort, automatisch eingeordnet</p>
      <div className="mt-2 rounded-lg bg-panel2 p-4">
        <p className="text-sm leading-relaxed text-ink">
          „Klingt interessant, können wir nächste Woche kurz telefonieren?“
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Interessiert
        </span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-faint">Fiktives Beispiel-Dashboard</p>
      <div className="mt-2 grid grid-cols-3 gap-2.5">
        <StatTile value="4" label="Meetings gebucht" />
        <StatTile value="2.400 €" label="Pipeline-Wert" />
        <StatTile value="1,4 %" label="Bounce-Rate" />
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
 * über die jeweilige Datenquelle, keine belegte Statistik.
 */
export function LocalReachMockup() {
  const businesses = [
    { name: "Frisör Kaiser", sub: "Einzelsalon, 1 Standort" },
    { name: "Schreinerei Huber", sub: "Handwerksbetrieb, 6 Mitarbeitende" },
    { name: "Zahnarztpraxis Dr. Berger", sub: "Einzelpraxis" },
  ];
  return (
    <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">Typische B2B-Datenbank</p>
          <div className="mt-2 space-y-1.5">
            {businesses.map((b) => (
              <div key={b.name} className="flex items-center gap-2.5 rounded-lg border border-edge2 px-3 py-2 opacity-60">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-panel2 text-mute">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm text-faint line-through">{b.name}</p>
                  <p className="text-[11px] text-mute">nicht gelistet</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">Thaw, über Google Places</p>
          <div className="mt-2 space-y-1.5">
            {businesses.map((b) => (
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
