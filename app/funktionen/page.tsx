"use client";
import { Logo, CTAButton, CTAGroup, NavDropdown, SectionHeading } from "../_ui";
import { DashboardMockup, SearchFormMockup, LeadsTableMockup, LeadDetailMockup, MailboxesMockup, AiAgentMockup, VerificationReportMockup } from "../_app-mockups";
import { SuppressionMockup } from "../_mockups";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT, LanguageToggle } from "../language-provider";

/**
 * Eigene Funktionsseite. Auf der Startseite lagen die Detailfunktionen ueber
 * zwoelf Sektionen verteilt, und jede weitere haette sie noch laenger gemacht.
 * Hier stehen sie in der Reihenfolge des tatsaechlichen Ablaufs -- finden,
 * anreichern, personalisieren, versenden, absichern -- jeweils mit der
 * Nachbildung des Bildschirms, um den es geht.
 */
export default function FunktionenPage() {
  const { t } = useT();
  const f = t.featuresPage;

  // Pro Gruppe die passende Nachbildung. Bewusst hier zugeordnet und nicht im
  // Dictionary: das Dictionary haelt Text, keine Komponenten.
  const visuals: Record<string, React.ReactNode> = {
    find: <SearchFormMockup />,
    // Verifizierung war bisher nur ein Textbullet ohne eigenes Bild -- genau
    // das Muster, das auf der Startseite schon eine eigene Sektion bekam.
    enrich: (
      <div className="space-y-5">
        <LeadDetailMockup />
        <VerificationReportMockup />
        <LeadsTableMockup />
      </div>
    ),
    personalize: <AiAgentMockup />,
    send: <MailboxesMockup />,
    protect: <SuppressionMockup />,
  };

  const navLinks = [
    { href: "/funktionen", label: f.eyebrow },
    { href: "/#agenturen", label: t.nav.agenturen },
    { href: "/#preise", label: t.nav.preise },
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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{f.eyebrow}</p>
          <h1 className="font-display max-w-[18ch] text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {f.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-soft sm:text-lg">{f.intro}</p>
        </div>
      </section>

      {/* Abwechselnde Seiten: Text links/rechts im Wechsel, damit die fuenf
          Gruppen nicht als fuenfmal dasselbe Muster gelesen werden. */}
      {f.groups.map((g, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={g.id}
            id={g.id}
            className={
              "scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-panel2" : "")
            }
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
                <div className={"lg:col-span-2 " + (flipped ? "lg:order-2" : "")}>
                  <SectionHeading eyebrow={g.eyebrow} title={g.title} />
                  <p className="-mt-4 text-sm leading-relaxed text-soft sm:text-base">{g.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-soft">
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={"lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                  <Reveal>{visuals[g.id]}</Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Das Dashboard steht am Ende, weil es das Ergebnis aller Schritte
          zusammenfasst -- und weil dort die Kosten sichtbar werden. */}
      <section className="border-b border-edge/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <DashboardMockup />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {f.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{f.ctaBody}</p>
        <CTAGroup className="mt-9" />
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
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
