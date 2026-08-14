"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "./language-provider";

// ══════════════════════════════════════════════════════════════════════
// EIN WEG: DAS GESPRAECH. Die 14-Tage-Testphase ist am 2026-08-06
// ersatzlos entfallen, mit ihr jeder Selbstbedienungs-Einstieg.
//
// Der Grund steht in KONVERSION.md und ist keine Geschmacksfrage: die App
// sagt selbst, dass Postfaecher zwei bis vier Wochen Warmup brauchen. Eine
// Testphase von 14 Tagen ist damit KUERZER ALS DIE EINRICHTUNG -- wer sie
// startet, kann in ihr gar nicht sehen, worum es geht, und kuendigt aus dem
// richtigen Grund. Dazu kam die Huerde davor: erst bei bis zu fuenf
// Anbietern Konten anlegen und Schluessel eintragen, bevor der erste
// Bildschirm etwas zeigt.
//
// Fuer eine Agentur, die mehrere Kundendomains anfasst, ist das Gespraech
// ohnehin der wahrscheinlichere erste Schritt. TRIAL_URL ist entfernt statt
// auskommentiert -- ein Knopf, den es nicht mehr gibt, soll auch keinen
// halben Verweis hinterlassen.
// ══════════════════════════════════════════════════════════════════════
export const BOOKING_URL = "https://calendly.com/youssef-tayachi-frostbreaker/30min";

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
 *
 * Seit dem 14.08.2026 haengen an einem dieser Menues ("Fuer wen") drei echte
 * Seiten, die vorher als eigene Links in der Leiste standen. Daraus folgen
 * zwei Ergaenzungen:
 *
 * 1. `group-focus-within` neben `group-hover`. Vorher liess sich das Menue
 *    ausschliesslich mit der Maus oeffnen -- solange darin nur Anker derselben
 *    Seite lagen, war das verschmerzbar. Mit den Zielgruppenseiten darin waeren
 *    sie per Tastatur gar nicht mehr erreichbar gewesen: `invisible` nimmt die
 *    Links auch aus der Tab-Reihenfolge. Jetzt oeffnet der Fokus auf dem Knopf
 *    das Menue, und Tab laeuft weiter hinein.
 * 2. Der Eintrag der aktuellen Seite wird markiert (`aria-current`). Im
 *    geschlossenen Zustand zeigt die Leiste nur noch die Sammelbeschriftung --
 *    beim Oeffnen soll man sehen, wo man steht. Verglichen wird nur der reine
 *    Pfad; Anker-Eintraege wie "/#rundgang" treffen deshalb nie zu, was richtig
 *    ist: ein Anker ist keine eigene Seite.
 */
export function NavDropdown({
  label,
  items,
  className = "",
}: {
  label: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  const pfad = usePathname();
  return (
    <div className={"group relative " + className}>
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm text-soft transition-colors hover:text-ink"
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
        >
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-52 rounded-2xl border border-edge/60 bg-panel p-2 shadow-lg shadow-ink/10">
          {items.map((it) => {
            const hier = it.href === pfad;
            return (
              <a
                key={it.href}
                href={it.href}
                aria-current={hier ? "page" : undefined}
                className={
                  "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-panel2 hover:text-ink " +
                  (hier ? "bg-panel2 font-medium text-ink" : "text-soft")
                }
              >
                {it.label}
              </a>
            );
          })}
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

/**
 * Rendert Fliesstext und hebt darin enthaltene Fachbegriffe (SPF, DKIM, DMARC)
 * als abbr mit Erklaerung beim Hovern hervor. Besucher aus dem Zielmarkt sind
 * ueberwiegend Agentur-/Vertriebsleute, keine E-Mail-Techniker -- die Begriffe
 * bleiben stehen, weil sie Kompetenz signalisieren, brauchen aber eine
 * Erklaerung an Ort und Stelle.
 */
export function GlossaryText({ text }: { text: string }) {
  const { t } = useT();
  const terms = Object.keys(t.glossary);
  const parts = text.split(new RegExp(`\\b(${terms.join("|")})\\b`, "g"));
  return (
    <>
      {parts.map((part, i) =>
        terms.includes(part) ? (
          <abbr
            key={i}
            title={t.glossary[part as keyof typeof t.glossary]}
            className="cursor-help underline decoration-dotted decoration-from-font underline-offset-2"
          >
            {part}
          </abbr>
        ) : (
          part
        )
      )}
    </>
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
