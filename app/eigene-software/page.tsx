"use client";
import Link from "next/link";
import { CTAButton, SectionHeading, StatTile, SiteHeader, SiteFooter, BOOKING_URL } from "../_ui";
import { WorkaroundMockup, ProcessMockup, StackMockup } from "../_custom-mockups";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT } from "../language-provider";

/**
 * Zweites Angebot neben dem Produkt: Individualentwicklung im Auftrag.
 *
 * Bewusst eine eigene Seite statt einer Sektion auf der Startseite -- die
 * beiden Zielgruppen ueberschneiden sich nicht: Wer das SaaS-Produkt sucht,
 * soll nicht ueber Auftragsarbeit stolpern (das laesst das Produkt wie ein
 * Nebenprojekt wirken), und wer einen Entwickler sucht, nicht ueber
 * Trial-Buttons fuer ein Produkt, das er nicht kaufen will.
 *
 * Aufbau und CTA-Fuehrung folgen /fuer-agenturen: auch dort fuehrt der Weg
 * ins Gespraech statt in die Selbstanmeldung, weil Umfang und Preis vorher
 * gemeinsam geklaert werden muessen.
 */
export default function EigeneSoftwarePage() {
  const { t } = useT();
  const c = t.customPage;

  // Pro Sektion das passende Visual -- wie auf /funktionen bewusst hier
  // zugeordnet und nicht im Dictionary: das Dictionary haelt Text, keine
  // Komponenten.
  const visuals: Record<string, React.ReactNode> = {
    build: <WorkaroundMockup />,
    ablauf: <ProcessMockup />,
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

      <section className="hero-wash border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{c.eyebrow}</p>
          <h1 className="font-display max-w-[20ch] text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-soft sm:text-lg">{c.intro}</p>
          <div className="mt-8">
            <CTAButton href={BOOKING_URL} label={c.ctaLabel} />
          </div>
        </div>
      </section>

      {/* Abwechselnde Seiten wie auf /funktionen, damit die Sektionen nicht als
          zweimal dasselbe Muster gelesen werden. */}
      {c.sections.map((s, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={"scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-panel2" : "")}
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
                <div className={"lg:col-span-2 " + (flipped ? "lg:order-2" : "")}>
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
                <div className={"lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                  <Reveal>{visuals[s.id]}</Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Der Beleg steht bewusst nach dem Angebot, nicht davor: erst muss klar
          sein, was ich baue, danach interessiert, dass es schon einmal
          funktioniert hat. Zahlen stammen aus dem laufenden Betrieb der
          eigenen App, die ganze Herleitung steht auf /case-study. */}
      <section className="border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow={c.proofEyebrow} title={c.proofTitle} />
              <p className="-mt-4 text-sm leading-relaxed text-soft sm:text-base">{c.proofBody}</p>
              <Link
                href="/case-study"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-soft underline decoration-edge3 underline-offset-4 transition-colors hover:text-ink"
              >
                {c.proofLinkLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="lg:col-span-3">
              <Reveal>
                <StackMockup />
              </Reveal>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {c.proofStats.map((s) => (
                  <StatTile key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {c.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{c.ctaBody}</p>
        <CTAButton className="mt-9" href={BOOKING_URL} label={c.ctaLabel} />
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={c.ctaLabel} />
      </div>
    </div>
  );
}
