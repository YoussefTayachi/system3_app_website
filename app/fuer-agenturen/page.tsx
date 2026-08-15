"use client";
import {
  CTAButton,
  SectionHeading,
  SiteHeader,
  SiteFooter,
  BOOKING_URL,
  h1Cls,
  h2Cls,
  sectionPad,
} from "../_ui";
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
        {/* Mittiger Hero, Begruendung ausgeschrieben in funktionen/page.tsx:
            die linksbuendige Fassung liess die rechten 530px des Rahmens leer
            stehen, und zwar auf allen fuenf Unterseiten gleich. */}
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{a.eyebrow}</p>
          <h1 className={"mx-auto max-w-[24ch] " + h1Cls}>{a.title}</h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-soft sm:text-lg">{a.intro}</p>
          <div className="mt-9">
            <CTAButton href={BOOKING_URL} label={a.ctaLabel} />
          </div>
          {/* Auf dieser Seite wiegt der Name schwerer als auf der Startseite:
              wer hier landet, ist selbst eine Agentur und liest den Beleg
              als "jemand wie ich", nicht als "irgendein Kunde". */}
          {/* CustomerStrip ist inline-flex -- im mittigen Hero zentriert es
              das text-center des Elternteils, kein justify-center noetig. */}
          <CustomerStrip className="mt-8" />
        </div>
      </section>

      {a.sections.map((s, i) => {
        const flipped = i % 2 === 1;
        const visual = visuals[s.id];
        return (
          <section
            key={s.id}
            id={s.id}
            className={"scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-band" : "")}
          >
            <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
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
                  <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.body} />
                  <ul className="space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-soft">
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
      <CustomerSection className="border-b border-edge/60 bg-band" />

      {/* Ohne Anbieternamen und ohne erfundene Preise: die Aussage laesst sich
          belegen, eine konkrete Zahl fuer fremde Tools nicht. */}
      <section className="border-b border-edge/60">
        {/* max-w-6xl statt max-w-3xl: der Abschnitt stand als einziger dieser
            Seite 192px weiter innen als der Kopf darueber und las sich
            dadurch wie ein eingeklebter Kasten. Die Textbreite regelt jetzt
            der Fliesstext selbst (SectionHeading: 62ch), nicht der Rahmen. */}
        <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
          <SectionHeading title={a.contrastTitle} lead={a.contrastBody} flush />
        </div>
      </section>

      <section className={"mx-auto max-w-3xl px-4 text-center sm:px-6 " + sectionPad}>
        <h2 className={"mx-auto " + h2Cls}>{a.ctaTitle}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-soft">{a.ctaBody}</p>
        <CTAButton className="mt-9" href={BOOKING_URL} label={a.ctaLabel} />
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={a.ctaLabel} />
      </div>
    </div>
  );
}
