"use client";
import { useT } from "./language-provider";

/**
 * Eigenstaendiges Hero-Visual statt eines reinen Screenshots: ein dichter
 * Feed aus mehreren echten, voll lesbaren Antworten (nicht hinter der
 * vordersten Karte versteckt wie in einer fruehen Version), plus ein
 * pulsierender "Live"-Indikator und ein "+X weitere"-Abschluss-Chip, damit
 * das Volumen an eingehenden Antworten sofort spuerbar ist, statt nur
 * behauptet zu werden. Der "2x"-Badge sitzt jetzt am Kartenrand statt
 * frei im leeren Raum darunter zu schweben.
 */
export function LeadCardStack() {
  const { t } = useT();
  const h = t.heroIllustration;
  const replies = h.replies;

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="rounded-3xl border border-edge/60 bg-panel p-4 shadow-xl shadow-ink/10 sm:p-5">
        <div className="mb-3 flex items-center gap-2 px-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[11px] font-medium uppercase tracking-wide text-mute">{h.inboxLabel}</p>
        </div>

        <div className="space-y-2">
          {replies.map((r, i) => {
            const isMeeting = r.status === "meeting";
            return (
              <div
                key={r.name}
                className="animate-float rounded-xl border border-edge/50 bg-panel2/70 p-3"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <div className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-[11px] font-semibold text-white">
                    {r.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[13px] font-semibold text-ink">{r.name}</p>
                      <span
                        className={
                          "shrink-0 rounded-full px-2 py-0.5 text-[9px] font-medium " +
                          (isMeeting ? "bg-emerald-500/15 text-emerald-600" : "bg-sky-500/15 text-sky-600")
                        }
                      >
                        {isMeeting ? h.meetingLabel : h.replyLabel}
                      </span>
                    </div>
                    <p className="truncate text-[11px] text-mute">{r.company}</p>
                    <p className="mt-1 text-xs leading-snug text-soft">{r.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-3 px-1 text-center text-[11px] font-medium text-mute">{h.moreLabel}</p>
      </div>

      <div className="animate-float absolute -right-4 -top-4 rounded-2xl bg-emerald-500 px-4 py-3 text-white shadow-lg shadow-emerald-500/30" style={{ animationDelay: "1.5s" }}>
        <p className="font-display text-2xl font-semibold leading-none">{h.badgeStat}</p>
        <p className="mt-1 max-w-[110px] text-[11px] leading-tight opacity-90">{h.badgeLabel}</p>
      </div>
    </div>
  );
}
