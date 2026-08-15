"use client";
import { CTAButton, SectionHeading, SiteHeader, SiteFooter, BOOKING_URL } from "../_ui";
import { AgencyMockup } from "../_mockups";
import { ReportMockup, CallListMockup } from "../_app-mockups";
import { CopyOutcomesMockup } from "../_guard-mockups";
import { CustomerStrip, CustomerSection } from "../_customers";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT } from "../language-provider";

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

  // Vier von sechs Abschnitten haben jetzt ein Bild. Vorher waren es zwei --
  // und ausgerechnet der Alltag ("wie sieht mein Montagmorgen aus") und der
  // Vorteil, den nur eine Agentur hat, standen als reiner Text da.
  //
  // "onboarding" und "costs" bleiben bewusst ohne Bild: eine Checkliste und
  // eine Rechnung sind Text, und ein Mockup dazu waere Dekoration.
  const visuals: Record<string, React.ReactNode> = {
    day: <CallListMockup />,
    workspaces: <AgencyMockup />,
    report: <ReportMockup />,
    learning: <CopyOutcomesMockup />,
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

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
          {/* Auf dieser Seite wiegt der Name schwerer als auf der Startseite:
              wer hier landet, ist selbst eine Agentur und liest den Beleg
              als "jemand wie ich", nicht als "irgendein Kunde". */}
          <CustomerStrip className="mt-7" />
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
              {/* min-w-0 an beiden Rasterkindern, gleiche Ursache wie in
                  _walkthrough.tsx: eine Rasterspalte ist minmax(auto, 1fr),
                  und `auto` meint die MINDESTBREITE des breitesten Kindes.
                  Unter lg liegen Text und Bild in derselben Spur -- ein Bild
                  mit grosser Mindestbreite zog die Spur und damit auch den
                  Text auf. Am Live-Stand gemessen (13.08.2026, Chrome 151,
                  375px Fenster): die Textspalte rechnete mit 398px, obwohl
                  ihre eigene Mindestbreite 110px betraegt, und die Seite
                  scrollte bis 446px seitlich. */}
              <div className={visual ? "grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14" : ""}>
                <div
                  className={
                    visual ? "min-w-0 lg:col-span-2 " + (flipped ? "lg:order-2" : "") : "max-w-3xl"
                  }
                >
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
                  <div className={"min-w-0 lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                    <Reveal>{visual}</Reveal>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}


      {/* Nach den sechs Abschnitten ueber den Agentur-Alltag und vor der
          Kostenfrage: an dieser Stelle ist alles behauptet, und der Leser
          fragt sich, ob es das auch ausserhalb dieser Seite gibt. */}
      <CustomerSection className="border-b border-edge/60 bg-panel2" />

      {/* Ohne Anbieternamen und ohne erfundene Preise: die Aussage laesst sich
          belegen, eine konkrete Zahl fuer fremde Tools nicht. */}
      <section className="border-b border-edge/60">
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

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={a.ctaLabel} />
      </div>
    </div>
  );
}
