"use client";
import { useT } from "./language-provider";

/**
 * Eigenstaendiges Hero-Visual statt eines reinen Screenshots: eine
 * durchgestrichene generische Adresse im Hintergrund, im Vordergrund eine
 * vollstaendige, qualifizierte Lead-Karte samt KI-Icebreaker-Vorschau, dazu
 * ein floatendes Zahlen-Badge. Transportiert den Kernclaim ("echte Menschen
 * statt info@") visuell, ohne Text lesen zu muessen -- und ist eigenstaendig
 * wiedererkennbar statt eines generischen App-Screenshots.
 */
export function LeadCardStack() {
  const { t } = useT();
  const lead = t.qualifiedMockup.rows[0];
  const h = t.heroIllustration;

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[420px]">
      <div className="animate-float-slow absolute left-0 top-6 w-64 rotate-[-6deg] rounded-2xl border border-edge/60 bg-panel/80 p-4 opacity-60 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-panel2 text-mute">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-faint line-through">{lead.generic}</p>
            <p className="text-[11px] text-mute">{t.qualifiedMockup.genericNote}</p>
          </div>
        </div>
      </div>

      <div className="animate-float absolute right-0 top-24 w-72 rounded-3xl border border-edge/60 bg-panel p-5 shadow-xl shadow-ink/10">
        <div className="flex items-center gap-3">
          <div className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-sm font-semibold text-white">
            {lead.name.split(" ").map((p) => p[0]).join("")}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">{lead.name}</p>
            <p className="text-xs text-mute">{lead.role}</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 rounded-lg bg-panel2 px-3 py-2 text-xs text-soft">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0 text-emerald-500">
              <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {lead.email}
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-panel2 px-3 py-2 text-xs text-soft">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0 text-emerald-500">
              <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {h.verified}
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-ink p-3">
          <p className="text-[10px] font-medium uppercase tracking-wide text-mute">{h.icebreakerLabel}</p>
          <p className="mt-1 text-xs leading-relaxed text-surface">{h.icebreakerExample}</p>
        </div>
      </div>

      <div className="animate-float absolute bottom-4 left-4 rounded-2xl bg-coral px-4 py-3 text-white shadow-lg shadow-coral/30" style={{ animationDelay: "1.5s" }}>
        <p className="font-display text-2xl font-semibold leading-none">{h.badgeStat}</p>
        <p className="mt-1 text-[11px] leading-tight opacity-90">{h.badgeLabel}</p>
      </div>
    </div>
  );
}
