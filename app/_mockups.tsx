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
  const lead = m.rows[0];
  const rejected = m.rows;

  // Bewusst eine andere Komposition als LocalReachMockup (dort: zwei
  // parallele Listen). Hier: ein "Pulk" verworfener generischer Adressen
  // links, der sich zu EINER grossen, qualifizierten Lead-Karte rechts
  // verdichtet -- illustriert den Filter-Vorgang selbst (viele Kandidaten
  // rein, ein echter Ansprechpartner raus), nicht nur ein Vorher/Nachher.
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm sm:p-8">
      <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)]">
        <div className="relative mx-auto h-32 w-full max-w-[220px] sm:h-40">
          {rejected.map((r, i) => (
            <div
              key={r.generic}
              className="absolute inset-x-0 flex items-center gap-2 rounded-lg border border-edge2 bg-panel2 px-3 py-2 opacity-70 shadow-sm"
              style={{
                top: `${i * 22}px`,
                transform: `rotate(${(i - 1) * 4}deg)`,
                zIndex: rejected.length - i,
              }}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-panel text-mute">
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
              <p className="truncate text-xs text-faint line-through">{r.generic}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto text-mute sm:mx-0">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 rotate-90 sm:rotate-0">
            <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
          <div className="flex items-center gap-3">
            <div className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-semibold text-white">
              {lead.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{lead.name}</p>
              <p className="text-xs text-mute">{lead.role}</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="ml-auto h-5 w-5 shrink-0 text-emerald-500">
              <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="mt-3 rounded-lg bg-panel px-3 py-2 text-xs text-soft">{lead.email}</div>
          <p className="mt-2 text-[11px] text-mute">{m.frostbreakerLabel}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Drei kompakte Feature-Mockups fuer die "Was sonst noch mit drin steckt"-
 * Sektion: Sperrliste, Zustellbarkeits-Check, Kampagnen/Sequenzen. Bewusst
 * kleiner/einfacher als die grossen Hero-Mockups, laufen zu dritt in einem
 * Grid nebeneinander.
 */
export function SuppressionMockup() {
  const { t } = useT();
  const m = t.suppressionMockup;
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.label}</p>
      <div className="mt-3 flex items-center gap-3 rounded-lg border border-edge2 bg-panel2 px-4 py-3 opacity-80">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panel text-mute">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-ink line-through decoration-mute">{m.blocked.name} · {m.blocked.company}</p>
          <p className="text-xs text-mute">{m.blocked.note}</p>
        </div>
      </div>
      <span className="mt-2 inline-block rounded-full bg-sky-500/10 px-2.5 py-1 text-[10px] font-medium text-sky-600 dark:text-sky-300">
        {m.blockedTag}
      </span>
      <div className="mt-4 flex items-center gap-3 rounded-lg bg-panel2 px-4 py-3">
        <p className="text-2xl font-semibold text-ink">{m.count}</p>
        <p className="text-xs text-soft">{m.countLabel}</p>
      </div>
    </div>
  );
}

export function DeliverabilityMockup() {
  const { t } = useT();
  const m = t.deliverabilityMockup;
  const rows = [
    { label: m.spf, ok: true },
    { label: m.dkim, ok: true },
    { label: m.dmarc, ok: false },
  ];
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.domainLabel}</p>
      <p className="mt-1 text-sm font-medium text-ink">{m.domain}</p>
      <div className="mt-3 space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-lg bg-panel2 px-3 py-2 text-sm">
            <span className="text-soft">{r.label}</span>
            <span className={"flex items-center gap-1.5 text-xs font-medium " + (r.ok ? "text-emerald-600 dark:text-emerald-300" : "text-amber-600 dark:text-amber-300")}>
              {r.ok ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5"><path d="M12 9v4M12 16.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /></svg>
              )}
              {r.ok ? m.configured : m.missing}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-faint">{m.volumeLabel}</p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-panel2">
        <div className="h-full w-[84%] rounded-full bg-sky-500" />
      </div>
      <p className="mt-1.5 text-xs text-mute">{m.volumeNote}</p>
    </div>
  );
}

export function CampaignMockup() {
  const { t } = useT();
  const m = t.campaignMockup;
  return (
    <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-faint">{m.label}</p>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {m.activeLabel}
        </span>
      </div>
      <div className="relative mt-4 space-y-4 pl-5">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-edge2" />
        {m.steps.map((s) => (
          <div key={s.title} className="relative flex items-start gap-3">
            <span className="absolute -left-5 top-1 h-3.5 w-3.5 rounded-full border-2 border-sky-500 bg-panel" />
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wide text-mute">{s.day}</p>
              <p className="text-sm font-medium text-ink">{s.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
