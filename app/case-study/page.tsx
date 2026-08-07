"use client";
import Link from "next/link";
import { Logo, CTAButton, NavDropdown, SectionHeading, StatTile, FactBox } from "../_ui";
import { useT, LanguageToggle } from "../language-provider";

export default function CaseStudyPage() {
  const { t } = useT();
  const c = t.caseStudyPage;
  const navLinks = [
    { href: "/#agenturen", label: t.nav.agenturen },
    { href: "/#vergleich", label: t.nav.vergleich },
  ];
  const produktItems = t.nav.produktItems.map((item) => ({ ...item, href: "/" + item.href }));

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            <NavDropdown label={t.nav.produkt} items={produktItems} />
            <NavDropdown label={t.featuresPage.eyebrow} items={t.nav.funktionenItems} />
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-soft hover:text-ink">{l.label}</a>
            ))}
            <a
              href="/eigene-software"
              className="hidden text-sm text-soft transition-colors hover:text-ink lg:inline"
            >
              {t.nav.custom}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <CTAButton />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />
        <p className="max-w-xl text-sm leading-relaxed text-soft sm:text-base">{c.intro}</p>

        <div className="mt-10 space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-ink">{c.problemHeading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-soft sm:text-base">{c.problemBody}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{c.whatHeading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-soft sm:text-base">{c.whatBody}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{c.techHeading}</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-soft sm:text-base">
              {c.techItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">{c.statsHeading}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatTile value={c.stats.businesses.value} label={c.stats.businesses.label} />
              <StatTile value={c.stats.contacts.value} label={c.stats.contacts.label} />
              <StatTile value={c.stats.withEmail.value} label={c.stats.withEmail.label} />
              <StatTile value={c.stats.migrations.value} label={c.stats.migrations.label} />
            </div>
          </div>

          <FactBox fact={c.honestNote} source="Frostbreaker, live production" />

          <div className="rounded-2xl border border-edge/60 bg-panel p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">{c.ctaHeading}</h2>
            <p className="mt-2 text-sm leading-relaxed text-soft sm:text-base">{c.ctaBody}</p>
            <CTAButton className="mt-5" label={c.ctaButtonLabel} />
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-mute">
          <Link href="/" className="underline hover:text-ink">{c.backLabel}</Link>
        </p>
      </section>

      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-xs text-mute sm:px-6">
          © {new Date().getFullYear()} Frostbreaker · {t.footer.location}
        </div>
      </footer>
    </div>
  );
}
