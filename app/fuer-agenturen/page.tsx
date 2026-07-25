"use client";
import { Logo, CTAButton, NavDropdown, SectionHeading, BOOKING_URL } from "../_ui";
import { AgencyMockup } from "../_mockups";
import { ReportMockup } from "../_app-mockups";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT, LanguageToggle } from "../language-provider";

/**
 * Eigene Agenturseite. Agenturen sind die wertvollere Zielgruppe -- hoeherer
 * Plan, mehrere Workspaces, laengere Bindung -- bekamen auf der Startseite
 * aber nur eine Sektion unter zwanzig anderen. Wer ueber Empfehlung oder
 * Anzeige kommt, braucht eine Seite, die ab der ersten Zeile von ihm handelt.
 *
 * Der CTA fuehrt hier bewusst ins Gespraech statt in die Selbstanmeldung:
 * beim Agentur-Plan werden Workspaces und Branding gemeinsam eingerichtet.
 */
export default function AgenturenPage() {
  const { t } = useT();
  const a = t.agencyPage;

  const visuals: Record<string, React.ReactNode> = {
    workspaces: <AgencyMockup />,
    report: <ReportMockup />,
  };

  const navLinks = [
    { href: "/funktionen", label: t.featuresPage.eyebrow },
    { href: "/fuer-agenturen", label: t.nav.agenturen },
    { href: "/preise", label: t.nav.preise },
    { href: "/#faq", label: t.nav.faq },
    { href: "/kontakt", label: t.nav.kontakt },
  ];

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            <NavDropdown label={t.nav.produkt} items={t.nav.produktItems} />
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-soft hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <CTAButton />
          </div>
        </div>
      </header>

      <section className="hero-wash border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{a.eyebrow}</p>
          <h1 className="font-display max-w-[20ch] text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {a.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-soft sm:text-lg">{a.intro}</p>
          <div className="mt-8">
            <CTAButton href={BOOKING_URL} label={a.ctaLabel} />
          </div>
        </div>
      </section>

      {a.sections.map((s, i) => {
        const flipped = i % 2 === 1;
        const visual = visuals[s.id];
        return (
          <section
            key={s.id}
            id={s.id}
            className={"scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-panel2" : "")}
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <div className={visual ? "grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14" : ""}>
                <div className={visual ? "lg:col-span-2 " + (flipped ? "lg:order-2" : "") : "max-w-3xl"}>
                  <SectionHeading eyebrow={s.eyebrow} title={s.title} />
                  <p className="-mt-4 text-sm leading-relaxed text-soft sm:text-base">{s.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-soft">
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {visual && (
                  <div className={"lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                    <Reveal>{visual}</Reveal>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Ohne Anbieternamen und ohne erfundene Preise: die Aussage laesst sich
          belegen, eine konkrete Zahl fuer fremde Tools nicht. */}
      <section className="border-b border-edge/60 bg-panel2">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <SectionHeading title={a.contrastTitle} />
          <p className="-mt-4 text-sm leading-relaxed text-soft sm:text-base">{a.contrastBody}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {a.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{a.ctaBody}</p>
        <CTAButton className="mt-9" href={BOOKING_URL} label={a.ctaLabel} />
      </section>

      <footer className="border-t border-edge/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Frostbreaker · {t.footer.location}</span>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/impressum" className="hover:text-ink">{t.footer.impressum}</a>
            <a href="/datenschutz" className="hover:text-ink">{t.footer.datenschutz}</a>
            <a href="/agb" className="hover:text-ink">{t.footer.agb}</a>
            <a href="/kontakt" className="hover:text-ink">{t.footer.kontakt}</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={a.ctaLabel} />
      </div>
    </div>
  );
}
