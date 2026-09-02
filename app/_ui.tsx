"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT, LanguageToggle, ThemeToggle } from "./language-provider";

// ══════════════════════════════════════════════════════════════════════
// EIN WEG: DAS GESPRAECH. Die 14-Tage-Testphase ist am 2026-08-06
// ersatzlos entfallen, mit ihr jeder Selbstbedienungs-Einstieg. Der Grund
// steht in KONVERSION.md: Postfaecher brauchen zwei bis vier Wochen Warmup,
// eine Testphase von 14 Tagen waere kuerzer als die Einrichtung.
// ══════════════════════════════════════════════════════════════════════
export const BOOKING_URL = "https://calendly.com/youssef-tayachi-frostbreaker/30min";

// ══════════════════════════════════════════════════════════════════════
// DIE TYPOSKALA. Seit dem 2026-09-02 in medium statt bold: auf Dunkel
// traegt eine fette Grotesk in 56 px zu dick auf, und Fora setzt seine
// Kapitel in derselben Lautstaerke. Wix Madefor Display ueber Wix Madefor
// Text, wie auf marketing.frostbreaker.app.
// ══════════════════════════════════════════════════════════════════════
export const h1Cls =
  "font-display text-[2.625rem] font-medium leading-[1.02] tracking-[-0.035em] text-balance text-ink sm:text-[4rem] lg:text-[5rem]";
export const h2Cls =
  "font-display text-[2.125rem] font-medium leading-[1.06] tracking-[-0.03em] text-balance text-ink sm:text-[2.75rem] lg:text-[3.25rem]";
export const h3Cls = "font-display text-[1.75rem] font-medium leading-[1.2] tracking-[-0.025em] text-ink";
export const cardTitleCls = "text-[1.1875rem] font-semibold leading-snug text-ink";
export const leadCls = "text-[17px] leading-relaxed text-soft sm:text-[19px]";
export const sectionPad = "py-20 sm:py-28 lg:py-32";
export const heroPad = "py-16 sm:py-24 lg:py-28";

export function Logo() {
  return (
    <Link href="/" className="inline-flex min-h-[44px] items-center text-2xl font-bold tracking-[-0.02em] text-sky-600 dark:text-sky-400 sm:text-3xl">
      frostbreaker
    </Link>
  );
}

/**
 * Der eine Knopf. Primaer in Tinte auf Grund (kippt mit dem Design: auf
 * Dunkel ein heller Knopf, wie bei Fora), sekundaer als Rahmen.
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
          ? "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-surface shadow-sm transition-[opacity,scale] duration-[140ms] ease-out hover:opacity-85 hoverfine:scale-[1.02] active:scale-[0.98] "
          : "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-ink/15 px-6 py-3.5 text-[15px] font-medium text-soft transition-[color,border-color,scale] duration-[140ms] ease-out hover:border-ink hover:text-ink active:scale-[0.98] ") +
        className
      }
    >
      {label ?? (isPrimary ? t.cta.primary : t.cta.secondary)}
    </a>
  );
}

/** Knopf plus Textlink daneben, die Kombination unter jeder Ueberschrift. */
export function CTAGroup({ className = "", label, href }: { className?: string; label?: string; href?: string }) {
  const { t } = useT();
  return (
    <div className={"flex flex-wrap items-center justify-center gap-x-6 gap-y-3 " + className}>
      <CTAButton label={label} href={href} />
      <a href={href ?? BOOKING_URL} className="tap-link group gap-1.5 text-[15px] font-medium text-soft transition-colors hover:text-ink">
        {t.cta.secondary}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </div>
  );
}

/**
 * Die Kopfzeile. Seit dem 2026-09-02 ein Onepager: vier Anker auf die
 * Startseite, dazu Kontakt und Eigene Software als eigene Seiten. Die drei
 * Menues (Produkt, Funktionen, Fuer wen) sind gefallen, ihre Seiten auch.
 *
 * Der Knopf faengt erst bei sm an: auf dem Telefon traegt jede Seite
 * unten eine feste Leiste mit demselben Knopf, und bei 375 px passte er
 * neben Wortmarke und zwei Schaltern ohnehin nicht (gemessen 2026-08-15).
 */
export function SiteHeader() {
  const { t } = useT();
  const pfad = usePathname();
  return (
    <header className="sticky top-0 z-10 border-b border-ink/8 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-soft transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href="/eigene-software"
            aria-current={pfad === "/eigene-software" ? "page" : undefined}
            className={"text-[15px] transition-colors hover:text-ink " + (pfad === "/eigene-software" ? "font-medium text-ink" : "text-soft")}
          >
            {t.nav.custom}
          </a>
        </nav>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <LanguageToggle />
          <div className="hidden sm:block">
            <CTAButton className="!px-5 !py-3 !text-[14px]" />
          </div>
        </div>
      </div>
    </header>
  );
}

/** Die Fusszeile: Anker, die zwei anderen Seiten, dann das Recht. */
export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="border-t border-ink/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-mute sm:px-6">
        <div className="tap-row flex flex-wrap items-center gap-x-5 gap-y-1">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href="/eigene-software" className="hover:text-ink">{t.nav.custom}</a>
          <a href="/kontakt" className="hover:text-ink">{t.nav.kontakt}</a>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Frostbreaker · {t.footer.location}</span>
          <div className="tap-row flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/impressum" className="hover:text-ink">{t.footer.impressum}</a>
            <a href="/datenschutz" className="hover:text-ink">{t.footer.datenschutz}</a>
            <a href="/agb" className="hover:text-ink">{t.footer.agb}</a>
            <a href="/avv" className="hover:text-ink">{t.footer.avv}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
