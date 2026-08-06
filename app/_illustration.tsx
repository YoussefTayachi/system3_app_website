"use client";
import { useT } from "./language-provider";

/**
 * Das Hero-Visual rechts.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WAS AN DER VORIGEN FASSUNG NICHT STIMMTE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Vier gleich gebaute Antwortkarten untereinander, jede mit Name, Firma,
 * Satz und einem kleinen Status-Chip. Das zeigte VOLUMEN ("es kommt was
 * zurueck") -- aber die Ueberschrift daneben verspricht seit dem Umbau
 * nicht Volumen, sondern KUNDEN. Vier Antworten sind kein Kunde.
 *
 * Dazu drei handwerkliche Maengel:
 *  - 11 bis 13px Schrift in einem Element, das aus drei Metern wirken soll.
 *  - Verlaufs-Avatare (from-sky-400 to-sky-600) in einer sonst durchgehend
 *    flachen Gestaltung ohne einen einzigen weiteren Verlauf.
 *  - Zwei ueberlagerte Schwebe-Animationen (animate-float je Karte plus ein
 *    driftender Badge darueber), die den Blick vom Inhalt wegziehen. Der
 *    Badge musste per pt-14 aus dem Weg gehalten werden, weil er sonst das
 *    Status-Label der ersten Karte verdeckte -- ein Element, das man um sich
 *    selbst herumbauen muss, verdient seinen Platz nicht.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WAS DIESE FASSUNG ZEIGT
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Denselben Posteingang, aber als BOGEN statt als Liste: eine Antwort steht
 * gross und ausgeschrieben da, darunter, was aus ihr geworden ist -- Termin
 * mit Datum und ein Deal mit Wert. Das ist der Satz der Ueberschrift in
 * einem Bild: aus einem Kontakt wird ein Kunde.
 *
 * Die uebrigen Antworten stehen als zwei schmale Zeilen darunter. Sie
 * belegen weiterhin, dass mehr zurueckkommt als das eine Beispiel, kosten
 * aber nicht mehr die Haelfte der Flaeche.
 *
 * Der schwebende Badge ist ersatzlos entfallen. Die Aussage steht jetzt IM
 * Bild (der gruene Termin-Block), und zwei konkurrierende Botschaften in
 * einem Element sind eine zu viel.
 *
 * Nachgebaut, nicht abfotografiert -- im echten Betrieb stehen dort Namen
 * realer Personen mit Rolle und Arbeitgeber. Zahlen erfunden, aber an den
 * Schwellen gewaehlt, die das eigene Konto zeigt. Die Beispiel-Kennzeichnung
 * steht deshalb sichtbar im Rahmen und nicht im Kleingedruckten.
 */
export function LeadCardStack() {
  const { t } = useT();
  const h = t.heroIllustration;

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="overflow-hidden rounded-3xl border border-edge2/70 bg-panel shadow-xl shadow-ink/[0.07]">
        {/* Kopfzeile im selben Rahmen-Stil wie alle uebrigen Mockups der
            Seite. Vorher hatte dieses Element als einziges einen eigenen. */}
        <div className="flex items-center justify-between gap-2 border-b border-edge/70 bg-panel2/60 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="text-[12px] font-medium text-ink">{h.inboxLabel}</p>
          </div>
          <span className="rounded-full border border-edge2 bg-chip px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-mute">
            {h.exampleLabel}
          </span>
        </div>

        <div className="p-4 sm:p-5">
          {/* Die eine Antwort, ausgeschrieben. Sie traegt den Bogen. */}
          <div className="rounded-2xl border border-edge2/70 bg-panel2/50 p-4">
            <div className="flex items-start gap-3">
              {/* Flache Initialen-Kachel statt Verlaufs-Kreis: die ganze Seite
                  kommt ohne Verlaeufe aus. */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-chip text-[13px] font-semibold text-ink">
                {h.featured.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold leading-tight text-ink">{h.featured.name}</p>
                <p className="mt-0.5 text-[12px] text-mute">{h.featured.company}</p>
              </div>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-soft">{h.featured.message}</p>
          </div>

          {/* Der Verbinder. Ohne ihn lasen sich die Antwort und das, was aus
              ihr wurde, als zwei nebeneinander liegende Karten -- die
              Ursache-Wirkung-Beziehung ist aber die ganze Aussage des Bildes.
              Ein kurzer Pfeil kostet 20 Pixel und macht sie unmissverstaendlich. */}
          <div className="flex justify-center py-1.5" aria-hidden>
            <svg viewBox="0 0 14 22" className="h-5 w-3.5 text-emerald-600/70" fill="none">
              <path d="M7 0v15" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M2.5 11 7 16l4.5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Was daraus geworden ist. Der gruene Block ist die Aussage des
              ganzen Bildes und darf deshalb der einzige farbige sein. */}
          <div className="rounded-2xl border border-emerald-500/45 bg-emerald-500/[0.07] p-4">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <svg aria-hidden viewBox="0 0 16 16" className="h-[18px] w-[18px] text-emerald-700" fill="none">
                  <path
                    d="m3 8.5 3.2 3.2L13 5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[15px] font-semibold text-emerald-800">{h.featured.outcome}</p>
              </div>
              <p className="text-[14px] font-medium tabular-nums text-emerald-800">{h.featured.when}</p>
            </div>
            <p className="mt-2.5 border-t border-emerald-600/20 pt-2.5 text-[13px] leading-relaxed text-soft">
              {h.featured.dealNote}
            </p>
          </div>

          {/* Die uebrigen Antworten: schmal, damit sie das Volumen belegen,
              ohne mit dem Bogen darueber um Aufmerksamkeit zu ringen. */}
          <ul className="mt-4 space-y-1.5">
            {h.others.map((o) => (
              <li key={o.name} className="flex items-center gap-3 rounded-xl border border-edge/60 px-3 py-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-chip text-[11px] font-semibold text-ink">
                  {o.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium text-ink">{o.name}</span>
                  <span className="block truncate text-[11px] text-mute">{o.company}</span>
                </span>
                <span
                  className={
                    "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold " +
                    (o.status === "meeting"
                      ? "bg-emerald-500/15 text-emerald-700"
                      : "bg-sky-500/15 text-sky-700")
                  }
                >
                  {o.status === "meeting" ? h.meetingLabel : h.replyLabel}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 border-t border-edge/70 pt-3 text-[12px] text-mute">{h.footer}</p>
        </div>
      </div>
    </div>
  );
}
