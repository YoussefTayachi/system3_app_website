"use client";
import { CTAButton, CTAGroup, SectionHeading, SiteHeader, SiteFooter } from "../_ui";
// DashboardMockup ist am 2026-08-14 mit dem textlosen Schlussabschnitt
// gefallen (Begruendung unten an der Fundstelle). Die Komponente bleibt in
// _app-mockups.tsx.
import { UnifiedSearchMockup, LeadsTableMockup, LeadDetailMockup, MailboxesMockup, AiAgentMockup, VerificationReportMockup, CopyCheckMockup, PipelineMockup, TechFilterMockup } from "../_app-mockups";
import { SuppressionMockup, LocalReachMockup, QualifiedLeadAnimation, CampaignMockup, DeliverabilityMockup } from "../_mockups";
import { LinkedInMockup } from "../_guard-mockups";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT } from "../language-provider";

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
  // Fuenf Bilder sind am 2026-08-06 von der Startseite hierher gezogen, als
  // dort fuenf Beschaffungs-Abschnitte zu einem wurden: TechFilterMockup,
  // LocalReachMockup, QualifiedLeadAnimation, CampaignMockup und
  // DeliverabilityMockup. Auf der Startseite kippten sie die Gewichtung, hier
  // sind sie genau das, was die Seite verspricht -- jeder Schritt einzeln.
  const visuals: Record<string, React.ReactNode> = {
    find: (
      <div className="space-y-5">
        <UnifiedSearchMockup />
        {/* Woher die Firmen kommen, die klassische B2B-Datenbanken nicht
            kennen. Gehoert zum Finden und nicht zum Anreichern: es ist eine
            Aussage ueber die QUELLE, nicht ueber den Kontakt. */}
        <LocalReachMockup />
      </div>
    ),
    tech: <TechFilterMockup />,
    // Verifizierung war bisher nur ein Textbullet ohne eigenes Bild -- genau
    // das Muster, das auf der Startseite schon eine eigene Sektion bekam.
    enrich: (
      <div className="space-y-5">
        <LeadDetailMockup />
        {/* Das Aussortieren der info@-Adressen ist der Kern dieser Gruppe und
            hatte hier bisher kein Bild. */}
        <QualifiedLeadAnimation />
        <VerificationReportMockup />
        <LeadsTableMockup />
      </div>
    ),
    personalize: <AiAgentMockup />,
    check: <CopyCheckMockup />,
    send: (
      <div className="space-y-5">
        <CampaignMockup />
        <MailboxesMockup />
        {/* Am 2026-08-14 von Rundgang Schritt 4 hierher gezogen: dort traegt
            jetzt ChainMockup das Bild, seit der Abschnitt #kette gefallen ist
            (VEREINFACHUNG.md 1.2). Die fertig eingesetzte LinkedIn-Nachricht
            gehoert zur Kampagne -- sie traegt denselben Aufhaenger wie die
            Mail und entsteht mit ihr. */}
        <LinkedInMockup />
        {/* Zustellbarkeit steht bewusst NACH den Postfaechern: erst sieht man,
            womit gesendet wird, dann, was daran kaputtgehen kann. */}
        <DeliverabilityMockup />
      </div>
    ),
    pipeline: <PipelineMockup />,
    protect: <SuppressionMockup />,
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

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
              {/* min-w-0 an beiden Rasterkindern -- dieselbe Ursache wie in
                  _walkthrough.tsx und fuer-agenturen/page.tsx: eine
                  Rasterspalte ist von Haus aus minmax(auto, 1fr), und `auto`
                  meint die MINDESTBREITE des breitesten Kindes. Unter lg
                  liegen Text und Bild in derselben Spur, und ein Bild mit
                  grosser Mindestbreite zieht die Spur samt Text auf.
                  Gemessen am 14.08.2026 (Chrome 151, 375px Fenster): die
                  Seite scrollte bis 594px seitlich, in beiden Sprachen. Die
                  Startseite und die Agenturseite hatten denselben Fehler und
                  wurden am 13.08. so behoben -- diese Seite ist damals
                  uebersehen worden. */}
              <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
                <div className={"min-w-0 lg:col-span-2 " + (flipped ? "lg:order-2" : "")}>
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
                <div className={"min-w-0 lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                  <Reveal>{visuals[g.id]}</Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Hier stand bis zum 2026-08-14 ein Abschnitt mit nichts als
          DashboardMockup darin -- keine Augenbraue, keine Ueberschrift, kein
          Satz. Der Kommentar behauptete, das Bild fasse alle Schritte
          zusammen und mache die Kosten sichtbar; auf der Seite stand das
          nirgends. Gefallen (EINHEITLICH.md S2): ein Bild ohne Text kann
          nichts zusammenfassen, und nach neun benannten Gruppen liest es sich
          als zehnte Funktion ohne Namen. Das Kostenargument gehoert ohnehin
          nicht hierher -- auf dieser Website steht kein Preis.
          DashboardMockup bleibt in _app-mockups.tsx fuer den Tag, an dem es
          einen Abschnitt gibt, in den sie gehoert.

          ACHTUNG FLAECHENFOLGE: die letzte Gruppe (i = 8) liegt auf hell, der
          Schluss-CTA ebenfalls. Diese Naht war vorher schon da -- der
          Dashboard-Abschnitt war selbst hell -- ist jetzt aber nur noch eine
          statt zwei. Gemeldet an den ui-designer. */}

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {f.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{f.ctaBody}</p>
        <CTAGroup className="mt-9" />
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
