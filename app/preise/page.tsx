"use client";
import { Logo, CTAButton, NavDropdown, SectionHeading, BOOKING_URL } from "../_ui";
import { SavingsCalculator } from "../_calculator";
import { Reveal } from "../reveal";
import { CheckIcon, CrossIcon } from "../_icons";
import { useT, LanguageToggle } from "../language-provider";

/**
 * Eigene Preisseite. "Preise" ist der meistgeklickte Navigationspunkt bei
 * einem SaaS, landete bisher aber als Anker mitten in einer sehr langen
 * Startseite -- wer ueber die Navigation kam, stand zwischen zwei anderen
 * Themen. Hier zusaetzlich das, was auf der Startseite fehlte: beide
 * Rechnungsposten offen nebeneinander, damit die erste Abrechnung niemanden
 * ueberrascht. Die Vergleichstabelle ist von der Startseite hierher gezogen,
 * weil sie zur Kaufentscheidung gehoert und nicht in den Erzaehlfluss.
 */
export default function PreisePage() {
  const { t } = useT();
  const p = t.pricingPage;

  const navLinks = [
    { href: "/fuer-agenturen", label: t.nav.agenturen },
    { href: "/preise", label: t.nav.preise },
    { href: "/kontakt", label: t.nav.kontakt },
  ];

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            <NavDropdown label={t.nav.produkt} items={t.nav.produktItems} />
            <NavDropdown label={t.featuresPage.eyebrow} items={t.nav.funktionenItems} />
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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{p.eyebrow}</p>
          <h1 className="font-display max-w-[16ch] text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-soft sm:text-lg">{p.intro}</p>
        </div>
      </section>

      {/* Pläne */}
      <section id="plaene" className="scroll-mt-20 border-b border-edge/60">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {t.pricing.plans.map((plan) => (
              <div
                key={plan.id}
                className={
                  "relative flex flex-col rounded-2xl border bg-panel p-6 " +
                  (plan.highlighted ? "border-sky-500/50" : "border-edge/60")
                }
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 right-6 rounded-full bg-sky-600 px-2.5 py-0.5 text-xs font-medium text-white shadow">
                    {t.pricing.agencyBadge}
                  </span>
                )}
                <h2 className="text-sm font-semibold text-ink">{plan.label}</h2>
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-semibold tracking-[-0.03em] text-ink">{plan.price}</span>
                  <span className="text-sm text-faint">{plan.priceNote}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm text-soft">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  className="mt-6 w-full"
                  label={plan.ctaLabel}
                  href={plan.id === "starter" ? undefined : BOOKING_URL}
                  variant={plan.id === "starter" ? "primary" : "secondary"}
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-mute">{t.pricing.note}</p>
        </div>
      </section>

      {/* Beide Rechnungsposten offen. Genau das fehlte bisher: der Plan allein
          ist nicht die ganze Rechnung, und wer das erst auf der ersten
          Abrechnung merkt, fuehlt sich getaeuscht. */}
      <section className="border-b border-edge/60 bg-panel2">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <SectionHeading title={p.breakdownTitle} />
          <p className="-mt-6 mb-10 max-w-[62ch] text-base leading-relaxed text-soft">{p.breakdownIntro}</p>

          <div className="grid gap-5 sm:grid-cols-2">
            {p.breakdown.map((b, i) => (
              <Reveal key={b.id} delay={i * 70}>
                <div className="h-full rounded-2xl border border-edge/60 bg-panel p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">{b.label}</p>
                  <p className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">{b.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-soft">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 rounded-2xl border border-sky-200/70 bg-sky-50/60 px-5 py-4 text-sm leading-relaxed text-sky-950">
            {p.breakdownExample}
          </p>
        </div>
      </section>

      <SavingsCalculator />

      {/* Vergleichstabelle, von der Startseite hierher gezogen */}
      <section id="vergleich" className="scroll-mt-20 border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading title={t.comparison.title} />
          <div className="hidden overflow-x-auto rounded-2xl border border-edge/60 sm:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-edge/60 bg-panel2 text-left">
                  <th className="px-5 py-3 font-medium text-faint"> </th>
                  <th className="bg-sky-50/60 px-5 py-3 font-semibold text-ink">{t.comparison.headerFrostbreaker}</th>
                  <th className="px-5 py-3 font-medium text-faint">{t.comparison.headerOther}</th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map(([label, s3, other], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-panel" : "bg-panel/60"}>
                    <td className="border-t border-edge/60 px-5 py-3 font-medium text-soft">{label}</td>
                    <td className="border-t border-edge/60 bg-sky-50/60 px-5 py-3 text-ink">
                      <span className="flex items-start gap-2.5">
                        <CheckIcon />
                        {s3}
                      </span>
                    </td>
                    <td className="border-t border-edge/60 px-5 py-3 text-faint">
                      <span className="flex items-start gap-2.5">
                        <CrossIcon />
                        {other}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 sm:hidden">
            {t.comparison.rows.map(([label, s3, other]) => (
              <div key={label} className="rounded-2xl border border-edge/60 bg-panel p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-faint">{label}</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-mute">{t.comparison.headerFrostbreaker}</p>
                    <p className="mt-1 text-sm text-ink">{s3}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-mute">{t.comparison.headerOther}</p>
                    <p className="mt-1 text-sm text-faint">{other}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis-FAQ */}
      <section className="border-b border-edge/60 bg-panel2">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <SectionHeading title={p.faqTitle} />
          <div className="divide-y divide-edge/60 rounded-2xl border border-edge/60 bg-panel">
            {p.faq.map((f) => (
              <details key={f.q} className="group px-6 py-4">
                <summary className="flex min-h-6 cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink marker:content-none">
                  {f.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    className="h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-open:-rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {t.featuresPage.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{t.cta.trialNote}</p>
        <CTAButton className="mt-9" />
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
