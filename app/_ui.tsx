export const BOOKING_URL = "#book-a-demo"; // TODO: Cal.com/Calendly-Link einsetzen, sobald eingerichtet

// Ziel fuer den primaeren Selfserve-CTA -- die neue Registrierungsseite in
// der App. handle_new_user() legt dort automatisch eine 14-Tage-Trial an,
// hier ist absichtlich keine Preis-Auswahl noetig: erst testen, Plan waehlt
// man spaeter in /pricing bzw. beim Trial-Ende.
export const TRIAL_URL = "https://app.frostbreaker.app/signup";

export function Logo() {
  return <span className="text-3xl font-extrabold tracking-tighter text-[#0EA5E9]">frostbreaker</span>;
}

/**
 * Ein CTAButton, zwei Varianten -- "primary" (Selfserve-Trial, auffaellig)
 * und "secondary" (Call buchen, zurueckhaltender). So bleibt an jeder Stelle
 * der Seite dieselbe Anlaufstelle, statt dass CTA-Ziele pro Sektion einzeln
 * gepflegt werden muessen -- eine spaetere URL-Aenderung passiert nur hier.
 */
export function CTAButton({
  className = "",
  label,
  variant = "primary",
}: {
  className?: string;
  label?: string;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";
  return (
    <a
      href={isPrimary ? TRIAL_URL : BOOKING_URL}
      className={
        (isPrimary
          ? "inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-ink px-3.5 py-2 text-xs font-medium text-surface shadow-sm transition-all hover:opacity-85 active:scale-[0.99] sm:px-5 sm:py-2.5 sm:text-sm "
          : "inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-edge2 px-3.5 py-2 text-xs font-medium text-soft transition-colors hover:border-ink hover:text-ink sm:px-5 sm:py-2.5 sm:text-sm ") +
        className
      }
    >
      {label ?? (isPrimary ? "Kostenlos testen" : "Oder Call buchen")}
    </a>
  );
}

/** Primaer- + Sekundaer-CTA nebeneinander (bzw. gestapelt auf Mobile), fuer
 * Hero und finale CTA-Sektion -- ein Baustein statt zweimal CTAButton +
 * Layout-Klassen an zwei Stellen synchron zu halten. */
export function CTAGroup({ className = "" }: { className?: string }) {
  return (
    <div className={"flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 " + className}>
      <CTAButton variant="primary" />
      <CTAButton variant="secondary" />
    </div>
  );
}

export function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-edge/60 shadow-sm transition-shadow hover:shadow-md"
      title="Zum Vergrößern klicken"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full transition-transform duration-300 group-hover:scale-[1.02]" />
    </a>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="mb-2 text-xs font-medium uppercase tracking-wide text-faint">{eyebrow}</p>}
      <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
    </div>
  );
}

export function FactBox({ fact, sub, source }: { fact: string; sub?: string; source: string }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-sky-500 bg-sky-50 p-4">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0 rounded bg-sky-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Fakt</span>
        <p className="text-sm font-semibold leading-snug text-ink">{fact}</p>
      </div>
      {sub && <p className="mt-2 text-sm leading-relaxed text-soft">{sub}</p>}
      <p className="mt-2 text-xs text-mute">Quelle: {source}</p>
    </div>
  );
}

/**
 * Kompakte, chatarmin-artige Stat-Kachel: eine große Zahl + Label, statt eines
 * Fließtext-Absatzes. Für Zahlen, die wir schon anderswo auf der Seite belegen
 * (z. B. die 33-Stunden-Zahl), hier bewusst verdichtet und wiederholt, damit
 * sie beim Scrollen öfter auftaucht, ohne den Beleg/die Quelle zu verlieren.
 */
export function StatTile({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className={dark ? "text-center" : "rounded-xl border border-edge/60 bg-panel p-5 text-center"}>
      <p className={"text-2xl font-semibold tracking-tight sm:text-3xl " + (dark ? "text-surface" : "text-ink")}>
        {value}
      </p>
      <p className={"mt-1 text-sm " + (dark ? "text-mute" : "text-soft")}>{label}</p>
    </div>
  );
}

/** Gemeinsamer Rahmen für illustrierte Produkt-Mockups (kein echter Screenshot,
 * sondern eine vereinfachte, bewusst reduzierte Nachbildung der UI, damit sie
 * auch klein noch lesbar bleibt -- gleiches Prinzip wie die bestehende
 * AI-Agent- und Icebreaker-Mockup-Karte). */
export function MockupPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-edge/60 bg-panel p-6 shadow-sm">{children}</div>;
}
