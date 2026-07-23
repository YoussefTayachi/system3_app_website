"use client";
import { useT } from "./language-provider";

/**
 * Eigenstaendiges Hero-Visual statt eines reinen Screenshots: ein Stapel aus
 * mehreren echten Antworten (statt einer einzelnen gefundenen Lead-Karte),
 * zeigt direkt das Ergebnis -- viele Personen antworten auf die
 * personalisierte Mail, eine davon will gleich ein Meeting. Transportiert
 * "das funktioniert wirklich, in Volumen" auf einen Blick, ohne Text lesen
 * zu muessen.
 */
export function LeadCardStack() {
  const { t } = useT();
  const h = t.heroIllustration;
  const replies = h.replies;

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[420px]">
      <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-wide text-mute">{h.inboxLabel}</p>

      <div className="relative h-[340px]">
        {replies.map((r, i) => {
          const isFront = i === replies.length - 1;
          const rotate = (i - 1) * 4;
          const isMeeting = r.status === "meeting";
          return (
            <div
              key={r.name}
              className={
                "animate-float absolute left-1/2 w-72 -translate-x-1/2 rounded-2xl border p-4 transition-all " +
                (isFront
                  ? "z-10 border-edge/60 bg-panel shadow-xl shadow-ink/10"
                  : "border-edge/50 bg-panel/90 opacity-75 shadow-md")
              }
              style={{
                top: `${i * 34}px`,
                transform: `translateX(-50%) rotate(${rotate}deg)`,
                animationDelay: `${i * 0.35}s`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-xs font-semibold text-white">
                  {r.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{r.name}</p>
                  <p className="truncate text-xs text-mute">{r.company}</p>
                </div>
                <span
                  className={
                    "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium " +
                    (isMeeting ? "bg-emerald-500/15 text-emerald-600" : "bg-sky-500/15 text-sky-600")
                  }
                >
                  {isMeeting ? h.meetingLabel : h.replyLabel}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-soft">{r.message}</p>
            </div>
          );
        })}
      </div>

      <div className="animate-float absolute bottom-0 left-4 rounded-2xl bg-emerald-500 px-4 py-3 text-white shadow-lg shadow-emerald-500/30" style={{ animationDelay: "1.5s" }}>
        <p className="font-display text-2xl font-semibold leading-none">{h.badgeStat}</p>
        <p className="mt-1 text-[11px] leading-tight opacity-90">{h.badgeLabel}</p>
      </div>
    </div>
  );
}
