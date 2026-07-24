"use client";
import Image from "next/image";
import Link from "next/link";
import { useT } from "./language-provider";

// Zwei Wege, bewusst nach Plan getrennt:
//
// Starter -> TRIAL_URL: direkte Anmeldung, 14 Tage ohne Kreditkarte. Vorher lief
// auch dieser Knopf auf Calendly, hiess aber "Kostenlos testen" -- wer testen
// will und einen Terminkalender sieht, springt ab. Die App bringt alles mit,
// was Selfserve braucht (/signup, Stripe-Checkout, trial_ends_at).
//
// Agentur -> BOOKING_URL: mehrere Workspaces, Whitelabel und Preis ab 199 EUR
// wollen ohnehin besprochen werden.
export const BOOKING_URL = "https://calendly.com/youssef-tayachi-frostbreaker/30min";

// Achtung: app.frostbreaker.app war hier eingetragen, loest aber nicht auf
// (kein DNS-Eintrag) -- der wichtigste Knopf der Seite waere ins Leere gelaufen.
// Bis die Wunschdomain auf das Vercel-Projekt zeigt, bleibt die erreichbare
// Adresse stehen. Danach genuegt es, diese eine Zeile zu aendern.
export const TRIAL_URL = "https://system3-app.vercel.app/signup";

export function Logo() {
  return (
    <Link href="/" className="text-3xl font-extrabold tracking-tighter text-[#0EA5E9]">
      frostbreaker
    </Link>
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
  // Der primaere Knopf verspricht die Testphase und muss deshalb auch dorthin
  // fuehren. Wo bewusst ein Gespraech gemeint ist (Agentur-Plan), wird href
  // explizit auf BOOKING_URL gesetzt.
  return (
    <a
      href={href ?? (isPrimary ? TRIAL_URL : BOOKING_URL)}
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
  const { t } = useT();
  return (
    <div className={"flex flex-wrap items-center justify-center gap-x-6 gap-y-3 " + className}>
      <CTAButton variant="primary" />
      {/* Der Gespraechs-Weg bleibt erreichbar, aber klar untergeordnet -- sonst
          konkurrieren zwei gleich starke Knoepfe um dieselbe Entscheidung. */}
      <a
        href={BOOKING_URL}
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-ink"
      >
        {t.cta.secondary}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
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
      <Image
        src={src}
        alt={alt}
        width={1690}
        height={955}
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </a>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
          <span aria-hidden className="h-px w-6 bg-edge2" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function FactBox({ fact, sub, source }: { fact: string; sub?: string; source: string }) {
  const { lang } = useT();
  return (
    <div className="mt-4 rounded-xl border border-sky-200/70 bg-sky-50/70 p-4">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 shrink-0 rounded bg-sky-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          {lang === "de" ? "Fakt" : "Fact"}
        </span>
        <p className="text-sm font-semibold leading-snug text-sky-950">{fact}</p>
      </div>
      {sub && <p className="mt-2 text-sm leading-relaxed text-sky-900/80">{sub}</p>}
      <p className="mt-2 text-xs text-sky-900/55">{lang === "de" ? "Quelle" : "Source"}: {source}</p>
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
