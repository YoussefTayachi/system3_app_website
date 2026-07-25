"use client";
import { useState } from "react";
import { useT } from "./language-provider";

/**
 * Nachbildungen echter Screens aus der App (Dashboard, Suche, Leads-Tabelle,
 * Postfaecher). Bewusst keine Screenshots aus dem laufenden Betrieb: dort
 * stehen Namen realer Personen mit Rolle und Arbeitgeber, die ohne
 * Einwilligung nicht ins Marketing gehoeren -- erst recht nicht auf einer
 * Seite, die mit Datensparsamkeit wirbt. Die Firmen hier sind erfunden und
 * dieselben wie in _mockups.tsx, damit die Seite eine Welt bleibt.
 *
 * Zweiter Grund fuer Nachbau statt Screenshot: ein 1690px-Screenshot wird auf
 * Textbreite skaliert unlesbar, und die Zeilen im echten Export sind
 * anonymisiert -- gross dargestellt wirkt das wie ein Ladeplatzhalter.
 *
 * Getrennt von _mockups.tsx, weil das dort illustrierte Konzepte sind
 * (Vorher/Nachher-Vergleiche), hier dagegen konkrete Bildschirme.
 */

/** Gemeinsamer Rahmen: dezente Fensterleiste, damit die Nachbildung als
 *  Programmoberflaeche lesbar ist, ohne ein Browserfenster zu imitieren. */
function AppFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={"overflow-hidden rounded-2xl border border-edge2/70 bg-panel shadow-xl shadow-ink/[0.07] " + className}>
      <div className="flex items-center gap-1.5 border-b border-edge/70 bg-panel2/60 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-edge3/50" />
        <span className="h-2 w-2 rounded-full bg-edge3/35" />
        <span className="h-2 w-2 rounded-full bg-edge3/25" />
      </div>
      {children}
    </div>
  );
}

/** Kennzahlenzeile plus Zeitersparnis-Banner -- der Screen, der den
 *  Kostenvorteil am direktesten zeigt. */
export function DashboardMockup() {
  const { t } = useT();
  const m = t.appMockups.dashboard;
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{m.title}</p>
            <p className="mt-0.5 text-xs text-mute">{m.subtitle}</p>
          </div>
          {/* Als Beispiel gekennzeichnet: die Zahlen zeigen, wie eine gut
              laufende Pipeline aussieht, und duerfen nicht als Zusage
              missverstanden werden. */}
          <span className="rounded-full border border-edge2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-faint">
            {m.sampleBadge}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-edge/70 sm:grid-cols-3 lg:grid-cols-6">
          {m.stats.map((s) => (
            <div
              key={s.label}
              className={
                "border-b border-r border-edge/70 px-3.5 py-3 last:border-r-0 " +
                (s.accent ? "bg-sky-50/70" : "")
              }
            >
              <p
                className={
                  "text-[10px] font-medium uppercase tracking-[0.1em] " +
                  (s.accent ? "text-sky-700" : "text-faint")
                }
              >
                {s.label}
              </p>
              <p
                className={
                  "font-display mt-1 text-xl font-semibold tracking-[-0.02em] " +
                  (s.accent ? "text-sky-700" : "text-ink")
                }
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl border border-sky-200/70 bg-sky-50/60 px-4 py-3">
          <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-sm font-semibold text-ink">{m.savings.strong}</span>
            <span className="text-sm text-soft">{m.savings.rest}</span>
            <span className="text-xs text-sky-900/60">{m.savings.cost}</span>
          </span>
          <span className="shrink-0 text-right">
            <span className="block text-[10px] font-medium uppercase tracking-[0.1em] text-sky-900/50">
              {m.costLabel}
            </span>
            <span className="font-display block text-base font-semibold tracking-[-0.02em] text-ink">
              {m.costValue}
            </span>
          </span>
        </div>

        {/* Zweifarbige Balken in der Markenfarbe: heller Anteil sind neue
            Leads, kraeftiger Anteil die Antworten darunter. Reines Markup,
            keine Diagramm-Bibliothek. */}
        <div className="mt-3 rounded-xl border border-edge/70 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-medium text-ink">{m.chartTitle}</p>
            <p className="text-[11px] text-mute">{m.chartRange}</p>
          </div>

          {/* h-full auf der Spalte ist noetig, sonst hat die prozentuale
              Balkenhoehe keinen Bezugsrahmen und der Balken bleibt unsichtbar. */}
          <div className="mt-4 flex h-24 items-end gap-1.5">
            {m.chartBars.map(([lead, reply], i) => (
              <div key={i} className="flex h-full flex-1 flex-col justify-end">
                <div
                  className="flex flex-col justify-end overflow-hidden rounded-t-[3px] bg-sky-200/70"
                  style={{ height: `${lead}%` }}
                >
                  <div className="bg-sky-600" style={{ height: `${Math.round((reply / lead) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-4 border-t border-edge/70 pt-3">
            {m.chartLegend.map((label, i) => (
              <span key={label} className="flex items-center gap-1.5 text-[11px] text-mute">
                <span className={"h-2 w-2 rounded-sm " + (i === 0 ? "bg-sky-200" : "bg-sky-600")} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

/** Suchformular mit Playbook, beiden Suchmodi und dem Lead-Abo -- letzteres
 *  stand bisher nirgends auf der Website, obwohl es der Grund ist, warum
 *  Listen von allein weiterwachsen. */
function FieldBox({ label, value, chevron = false }: { label: string; value: string; chevron?: boolean }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{label}</p>
      <div className="mt-1.5 flex items-center justify-between rounded-lg border border-edge2 bg-field px-3 py-2 text-sm text-ink">
        {value}
        {chevron && (
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5 shrink-0 text-mute">
            <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}

/**
 * Beide Suchwege in einer bedienbaren Maske statt zwei nebeneinanderstehender
 * Standbilder. Der Reiter laesst sich wirklich umschalten -- genau wie in der
 * App -- was die Kernaussage der Sektion ("derselbe Bildschirm, zwei Quellen")
 * belegt, statt sie nur zu behaupten. Die Werte bleiben Beispieldaten.
 */
export function UnifiedSearchMockup() {
  const { t } = useT();
  const local = t.appMockups.search;
  const corporate = t.appMockups.corporateSearch;
  const [mode, setMode] = useState<"local" | "corporate">("local");
  const m = mode === "local" ? local : corporate;

  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <p className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{m.title}</p>
        <p className="mt-0.5 text-xs text-mute">{m.subtitle}</p>

        <div className="mt-5 inline-flex rounded-lg bg-panel2 p-1" role="tablist">
          {local.tabs.map((tab, i) => {
            const value = i === 0 ? "local" : "corporate";
            const active = mode === value;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setMode(value as "local" | "corporate")}
                className={
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-colors " +
                  (active ? "bg-sky-500/15 text-sky-700" : "text-faint hover:text-soft")
                }
              >
                {tab}
              </button>
            );
          })}
        </div>

        {mode === "local" ? (
          <>
            <div className="mt-4">
              <FieldBox label={local.playbookLabel} value={local.playbookValue} chevron />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {local.fields.map((f) => (
                <FieldBox key={f.label} label={f.label} value={f.value} />
              ))}
            </div>
            {/* Die Pain-Point-Filter sind der Grund, warum eine Liste zur
                Zielgruppe wird statt nur eine Ortsliste zu sein. */}
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{local.filterLabel}</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {local.filters.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/70 bg-sky-50/70 px-2.5 py-1 text-[11px] font-medium text-sky-800"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 rounded-xl border border-edge/70 bg-panel2/50 px-4 py-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{local.subscriptionLabel}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{local.subscriptionValue}</p>
                <p className="mt-0.5 text-xs text-mute">{local.subscriptionNote}</p>
              </div>
              <span className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-surface">{local.cta}</span>
            </div>
          </>
        ) : (
          <>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {corporate.fields.map((f) => (
                <FieldBox key={f.label} label={f.label} value={f.value} chevron />
              ))}
            </div>
            <div className="mt-4">
              <FieldBox label={corporate.keywordsLabel} value={corporate.keywordsValue} />
            </div>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3 rounded-xl border border-emerald-200/70 bg-emerald-50/50 px-4 py-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-emerald-700/70">{corporate.noteLabel}</p>
                <p className="mt-1 text-sm font-semibold text-emerald-800">{corporate.noteValue}</p>
              </div>
              <span className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-surface">{corporate.cta}</span>
            </div>
          </>
        )}
      </div>
    </AppFrame>
  );
}

/** Leads-Tabelle mit Werkzeugleiste. Zeigt, dass Verifizierung und Export
 *  im selben Bildschirm sitzen statt in einem zweiten Tool. */
export function LeadsTableMockup() {
  const { t } = useT();
  const m = t.appMockups.leads;
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <p className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{m.title}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-edge2 px-2.5 py-1.5 text-[11px] font-medium text-soft">
            {m.toolbar.verify}
          </span>
          <span className="rounded-md bg-sky-500/15 px-2.5 py-1.5 text-[11px] font-medium text-sky-700">
            {m.toolbar.export}
          </span>
          <span className="rounded-md border border-edge2 px-2.5 py-1.5 text-[11px] font-medium text-soft">
            {m.toolbar.csv}
          </span>
          <span className="ml-auto text-[11px] text-mute">{m.toolbar.count}</span>
        </div>

        <div className="mt-3 divide-y divide-edge/70 overflow-hidden rounded-xl border border-edge/70">
          {m.rows.map((r) => (
            <div key={r.name} className="flex items-center gap-3 px-3.5 py-3">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold text-white"
                style={{ backgroundColor: r.color }}
              >
                {r.name.slice(0, 1)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-ink">{r.name}</span>
                <span className="block truncate text-[11px] text-mute">{r.domain}</span>
              </span>
              <span className="shrink-0 text-right text-[11px] text-mute">
                {r.contacts} ·{" "}
                <span className="font-medium text-emerald-600">{r.withMail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

/** Aufgeklappter Lead: Person, Rolle, geprüfte Mail, Telefonnummer aus dem
 *  oeffentlichen Eintrag. Die beiden Kennzeichnungen stehen bewusst
 *  unterschiedlich da -- geprueft werden nur E-Mail-Adressen. */
export function LeadDetailMockup() {
  const { t } = useT();
  const m = t.appMockups.leadDetail;
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.label}</p>

        <div className="mt-3 flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sm font-semibold text-sky-700">
            MH
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink">{m.person}</p>
            <p className="text-xs text-mute">
              {m.role} · {m.company}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg bg-panel2/70 px-3 py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.emailLabel}</span>
            <span className="min-w-0 flex-1 truncate text-sm text-ink">{m.email}</span>
            <span className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              {m.emailBadge}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg bg-panel2/70 px-3 py-2.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.phoneLabel}</span>
            <span className="min-w-0 flex-1 truncate text-sm text-ink">{m.phone}</span>
            {/* Neutral gehalten, nicht gruen: die Nummer stammt ungeprueft aus
                dem Google-Eintrag und darf nicht wie eine Verifizierung wirken. */}
            <span className="shrink-0 rounded-full border border-edge2 px-2 py-0.5 text-[10px] font-medium text-faint">
              {m.phoneBadge}
            </span>
          </div>
        </div>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.icebreakerLabel}</p>
        <p className="mt-1.5 rounded-lg border border-edge/70 bg-panel2/40 px-3 py-2.5 text-sm leading-relaxed text-soft">
          „{m.icebreaker}“
        </p>
      </div>
    </AppFrame>
  );
}

/** Der Konfigurationsbildschirm des KI-Agenten. Nutzt bewusst die schon
 *  vorhandenen Texte aus t.personalization statt eigener Dictionary-Eintraege:
 *  es ist derselbe Sachverhalt, nur als Bildschirm statt als Fliesstext. */
export function AiAgentMockup() {
  const { t } = useT();
  const p = t.personalization;
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <p className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">AI Agent</p>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{p.dataSourceLabel}</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {p.sourceOptions.map((o, i) => (
            <span
              key={o}
              className={
                "rounded-full px-2.5 py-1 text-[11px] font-medium " +
                (i === 0 ? "bg-sky-500/15 text-sky-700" : "border border-edge2 text-faint")
              }
            >
              {o}
            </span>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{p.promptLabel}</p>
        <div className="mt-1.5 space-y-1 rounded-lg border border-edge/70 bg-panel2/60 p-3 font-mono text-[11px] leading-relaxed text-soft">
          {p.promptLines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-start gap-x-8 gap-y-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{p.forbiddenLabel}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {p.forbiddenWords.map((w) => (
                <span key={w} className="rounded bg-panel2 px-1.5 py-0.5 text-[10px] text-faint line-through">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

/** Der teilbare Report aus Sicht des Endkunden. Bewusst nicht im
 *  Frostbreaker-Blau, sondern in einer fremden Akzentfarbe: der Report traegt
 *  das Branding des jeweiligen Kunden, und genau das ist das Argument. */
export function ReportMockup() {
  const { t } = useT();
  const m = t.appMockups.report;
  const accent = "#7C3AED";
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-white"
              style={{ backgroundColor: accent }}
            >
              M
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{m.client}</p>
              <p className="text-[11px] text-mute">{m.period}</p>
            </div>
          </div>
          <span className="rounded-full border border-edge2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-faint">
            {m.badge}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-edge/70">
          {m.stats.map((s) => (
            <div key={s.label} className="border-r border-edge/70 px-3.5 py-3 last:border-r-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{s.label}</p>
              <p className="font-display mt-1 text-xl font-semibold tracking-[-0.02em] text-ink">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.progressLabel}</p>
            <p className="text-xs font-medium text-ink">{m.progressValue}</p>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-panel2">
            <div
              className="h-full rounded-full"
              style={{ width: `${m.progressPercent}%`, backgroundColor: accent }}
            />
          </div>
        </div>

        <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.urlLabel}</p>
        <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-panel2/70 px-3 py-2.5">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5 shrink-0 text-mute">
            <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="min-w-0 flex-1 truncate text-xs text-soft">{m.url}</span>
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-mute">{m.note}</p>
      </div>
    </AppFrame>
  );
}

/** Postfaecher mit Warmup-Status und Tagesvolumen. */
export function MailboxesMockup() {
  const { t } = useT();
  const m = t.appMockups.mailboxes;
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <p className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">{m.title}</p>
        <p className="mt-0.5 text-xs text-mute">{m.subtitle}</p>

        <div className="mt-4 divide-y divide-edge/70 overflow-hidden rounded-xl border border-edge/70">
          {m.rows.map((r) => (
            <div key={r.address} className="flex flex-wrap items-center gap-x-3 gap-y-1 px-3.5 py-3">
              <span className="min-w-0 flex-1 truncate text-sm text-ink">{r.address}</span>
              <span
                className={
                  "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium " +
                  (r.ok ? "bg-emerald-500/15 text-emerald-700" : "bg-amber-500/15 text-amber-700")
                }
              >
                {r.state}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-mute">{r.volume}</span>
            </div>
          ))}
        </div>
      </div>
    </AppFrame>
  );
}

/** Zeigt das Ergebnis einer Verifizierung, nicht nur den Knopf dafuer. Bisher
 *  visualisierte kein Mockup, was die Pruefung tatsaechlich bewirkt -- nur
 *  "E-Mails verifizieren" als Aktion in der Leads-Tabelle. Drei Zahlen reichen,
 *  um den Nutzen sofort sichtbar zu machen, statt ihn nur zu behaupten. */
export function VerificationReportMockup() {
  const { t } = useT();
  const m = t.verification;
  return (
    <AppFrame>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">{m.reportLabel}</p>
          <span className="rounded-full border border-edge2 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-faint">
            {m.reportBadge}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 divide-x divide-edge/70 overflow-hidden rounded-xl border border-edge/70">
          <div className="px-3.5 py-3.5">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{m.reportCheckedValue}</p>
            <p className="mt-1 text-xs leading-relaxed text-soft">{m.reportChecked}</p>
          </div>
          {/* Der ungueltig-erkannt-Wert steht bewusst in Amber statt Rot: er
              ist das Ergebnis der Schutzfunktion, keine Fehlermeldung. */}
          <div className="bg-amber-50/50 px-3.5 py-3.5">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-amber-700">
              {m.reportInvalidValue}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-amber-900/70">{m.reportInvalid}</p>
          </div>
          <div className="bg-emerald-50/50 px-3.5 py-3.5">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-emerald-700">
              {m.reportRateValue}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-emerald-900/70">{m.reportRate}</p>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-mute">{m.reportNote}</p>
      </div>
    </AppFrame>
  );
}
