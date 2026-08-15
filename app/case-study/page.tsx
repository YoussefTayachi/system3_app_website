"use client";
import Link from "next/link";
import { CTAButton, SectionHeading, StatTile, FactBox, SiteHeader, SiteFooter } from "../_ui";
import { useT } from "../language-provider";

export default function CaseStudyPage() {
  const { t } = useT();
  const c = t.caseStudyPage;
  return (
    <div className="min-h-screen">
      {/* Kopf und Fuss aus _ui.tsx. Diese Seite trug bis zum 14.08.2026 eine
          eigene Zusammenstellung mit "/#vergleich" statt "Kontakt" -- eine
          von mehreren Abweichungen, die entstanden sind, weil dasselbe
          Markup achtmal kopiert dastand. */}
      <SiteHeader />

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

      <SiteFooter />
    </div>
  );
}
