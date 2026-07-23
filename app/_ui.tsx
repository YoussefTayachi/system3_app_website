"use client";
import { useT } from "./language-provider";

// Echter Calendly-Link -- inzwischen das einzige CTA-Ziel auf der Website.
// Kein Selfserve-Signup mehr direkt von der Website aus: jede/r Interessent:in
// bucht zuerst ein kurzes Kennenlerngespraech, der Account wird danach manuell
// freigeschaltet. Die Registrierungsseite in der App (/signup) existiert
// weiterhin technisch, wird aber bewusst nirgends mehr von der Website aus verlinkt.
export const BOOKING_URL = "https://calendly.com/youssef-tayachi-frostbreaker/30min";
export const TRIAL_URL = "https://app.frostbreaker.app/signup";

export function Logo() {
  return (
    <a href="/" className="text-3xl font-extrabold tracking-tighter text-[#0EA5E9]">
      frostbreaker
    </a>
  );
}

/**
 * Ein CTAButton, zwei visuelle Varianten -- "primary" (auffaellig, dunkel)
 * und "secondary" (zurueckhaltender, outline) -- beide fuehren standardmaessig
 * zum selben Ziel (Call buchen), es gibt keinen Selfserve-Pfad mehr auf der
 * Website. Eine spaetere URL-Aenderung passiert nur an einer Stelle (BOOKING_URL).
 * Labels kommen standardmaessig aus dem Dictionary (zweisprachig), lassen
 * sich aber pro Aufrufstelle ueberschreiben (z. B. Preiskarten-Buttons).
 */
export function CTAButton({
  className = "",
  label,
  href,
  variant = "primary",
}: {
  className?: string;
  label?: string;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const { t } = useT();
  const isPrimary = variant === "primary";
  return (
    <a
      href={href ?? BOOKING_URL}
      className={
        (isPrimary
          ? "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-surface shadow-sm transition-all hover:opacity-85 hover:scale-[1.02] active:scale-[0.98] sm:px-6 sm:py-3 sm:text-sm "
          : "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-edge2 px-4 py-2.5 text-xs font-medium text-soft transition-colors hover:border-ink hover:text-ink sm:px-6 sm:py-3 sm:text-sm ") +
        className
      }
    >
      {label ?? (isPrimary ? t.cta.primary : t.cta.secondary)}
    </a>
  );
}

/** Primaer- + Sekundaer-CTA nebeneinander (bzw. gestapelt auf Mobile), fuer
 * Hero und finale CTA-Sektion -- ein Baustein statt zweimal CTAButton +
 * Layout-Klassen an zwei Stellen synchron zu halten. */
export function CTAGroup({ className = "" }: { className?: string }) {
  return (
    <div className={"flex items-center justify-center " + className}>
      <CTAButton variant="primary" />
    </div>
  );
}

/**
 * Dropdown im Nav-Bereich, oeffnet sich per Hover (Desktop) und signalisiert
 * allein durch seine Existenz mehr Tiefe/Reife als eine flache Ein-Klick-
 * Navigation -- die Eintraege verlinken auf echte, bestehende Anker auf der
 * Seite, keine Fake-Unterseiten.
 */
export function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm text-soft transition-colors hover:text-ink">
        {label}
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="w-52 rounded-2xl border border-edge/60 bg-panel p-2 shadow-lg shadow-ink/10">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="block rounded-lg px-3 py-2 text-sm text-soft transition-colors hover:bg-panel2 hover:text-ink"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-edge/60 shadow-sm transition-shadow hover:shadow-md"
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
  const { t, lang } = useT();
  return (
    <div className="mt-4 rounded-lg border-l-4 border-sky-500 bg-sky-50 p-4">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0 rounded bg-sky-500 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          {lang === "de" ? "Fakt" : "Fact"}
        </span>
        <p className="text-sm font-semibold leading-snug text-ink">{fact}</p>
      </div>
      {sub && <p className="mt-2 text-sm leading-relaxed text-soft">{sub}</p>}
      <p className="mt-2 text-xs text-mute">{lang === "de" ? "Quelle" : "Source"}: {source}</p>
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
    <div className={dark ? "text-center" : "rounded-2xl border border-edge/60 bg-panel p-5 text-center"}>
      <p className={"font-display text-2xl font-semibold tracking-tight sm:text-3xl " + (dark ? "text-surface" : "text-ink")}>
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
  return <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">{children}</div>;
}
