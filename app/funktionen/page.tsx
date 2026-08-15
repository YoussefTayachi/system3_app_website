"use client";
import {
  CTAButton,
  CTAGroup,
  SectionHeading,
  SiteHeader,
  SiteFooter,
  h1Cls,
  h2Cls,
  eyebrowCls,
  sectionPad,
} from "../_ui";
// DashboardMockup ist am 2026-08-14 mit dem textlosen Schlussabschnitt
// gefallen (Begruendung unten an der Fundstelle). Die Komponente bleibt in
// _app-mockups.tsx.
import { UnifiedSearchMockup, LeadsTableMockup, LeadDetailMockup, MailboxesMockup, AiAgentMockup, VerificationReportMockup, CopyCheckMockup, PipelineMockup, TechFilterMockup } from "../_app-mockups";
import { SuppressionMockup, LocalReachMockup, QualifiedLeadAnimation, CampaignMockup, DeliverabilityMockup } from "../_mockups";
import { LinkedInMockup } from "../_guard-mockups";
import { CoachFindingMockup } from "../_offer-mockups";
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
    // Die Gruppe "write" ist am 2026-08-13 mit dem Angebot dazugekommen, diese
    // Zuordnung aber nicht: `visuals["write"]` war undefined, und die
    // Bildspalte stand ueber die volle Abschnittshoehe leer da (gemeldet
    // 2026-08-15 mit Screenshot).
    // CampaignMockup zeigt genau die vier Stufen an Tag 0, 3, 5 und 7, von
    // denen der Absatz spricht; es lag bis dahin unter "send" und bebilderte
    // dort die Kampagne statt das Schreiben. CoachFindingMockup ist die zweite
    // Haelfte desselben Absatzes -- der benannte Verstoss samt fertigem
    // Ersatzsatz. Es steht sonst nur auf /kunden/retaiyn, also entsteht keine
    // zweite Fundstelle auf derselben Seite.
    write: (
      <div className="space-y-5">
        <CampaignMockup />
        <CoachFindingMockup {...t.offerSection.coachFinding} />
      </div>
    ),
    check: <CopyCheckMockup />,
    send: (
      <div className="space-y-5">
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

      {/* ═══════════════════════════════════════════════════════════════
          MITTIGER HERO, seit dem 2026-08-15.

          Vorher lag alles in den linken rund 620px eines 1152px-Rahmens und
          die rechten 530px standen leer -- auf fuenf Unterseiten dieselbe
          Fehlstelle. Leer ist in Ordnung, aber es muss VERSEHENTLICH von
          ABSICHTLICH unterscheidbar sein: mittig gesetzt ist das rechte
          Drittel Rand, linksbuendig ist es eine Luecke.

          Der Startseiten-Hero bleibt als einziger zweispaltig. Der
          Unterschied bedeutet dann etwas: dort faengt die Seite an, hier ein
          Kapitel davon.
          ═══════════════════════════════════════════════════════════════ */}
      <section className="hero-wash border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
          {/* Nicht eyebrowCls: die Hero-Augenbraue traegt sky-700 statt
              --c-faint (12px Grossbuchstaben brauchen 4,5:1, sky-600 kommt
              nur auf 3,9). Zwei Textfarben in einem className entscheidet die
              Reihenfolge im erzeugten CSS, nicht die im Attribut -- deshalb
              hier ausgeschrieben. Groesse und Laufweite sind dieselben. */}
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">
            {f.eyebrow}
          </p>
          <h1 className={"mx-auto max-w-[24ch] " + h1Cls}>{f.title}</h1>
          <p className="mx-auto mt-6 max-w-[58ch] text-base leading-relaxed text-soft sm:text-lg">
            {f.intro}
          </p>
          <CTAGroup className="mt-9" />
        </div>
      </section>

      {/* Abwechselnde Seiten: Text links/rechts im Wechsel, damit die fuenf
          Gruppen nicht als fuenfmal dasselbe Muster gelesen werden. */}
      {f.groups.map((g, i) => {
        const flipped = i % 2 === 1;
        // Fehlt der Schluessel, wird der Abschnitt einspaltig statt loechrig.
        // Genau dieser Fall ist am 2026-08-15 aufgetreten: `write` stand im
        // Woerterbuch, aber nicht in `visuals`, und die Bildspalte blieb ueber
        // die volle Abschnittshoehe leer. Ein Record<string, ReactNode> kann
        // das nicht verhindern -- TypeScript kennt keinen Pflichtschluessel,
        // und React rendert undefined klaglos als nichts. /fuer-agenturen,
        // /fuer-saas und /kunden/retaiyn fangen das seit jeher so ab.
        const visual = visuals[g.id];
        return (
          <section
            key={g.id}
            id={g.id}
            className={
              "scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-band" : "")
            }
          >
            <div className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
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
              <div className={visual ? "grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14" : ""}>
                <div
                  className={
                    visual ? "min-w-0 lg:col-span-2 " + (flipped ? "lg:order-2" : "") : "max-w-3xl"
                  }
                >
                  <SectionHeading eyebrow={g.eyebrow} title={g.title} lead={g.body} />
                  <ul className="space-y-2.5">
                    {g.bullets.map((b) => (
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

      <section className={"mx-auto max-w-3xl px-4 text-center sm:px-6 " + sectionPad}>
        <h2 className={"mx-auto " + h2Cls}>{f.ctaTitle}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-soft">{f.ctaBody}</p>
        <CTAGroup className="mt-9" />
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" />
      </div>
    </div>
  );
}
