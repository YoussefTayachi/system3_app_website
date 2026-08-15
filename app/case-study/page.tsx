"use client";
import Link from "next/link";
import {
  CTAButton,
  SectionHeading,
  StatTile,
  FactBox,
  SiteHeader,
  SiteFooter,
  h3Cls,
  sectionPad,
} from "../_ui";
import { useT } from "../language-provider";

/**
 * ═══════════════════════════════════════════════════════════════════════
 * DIE SEITE, DIE TYPOGRAFISCH NICHT DAZUGEHOERTE. Behoben 2026-08-15.
 * ═══════════════════════════════════════════════════════════════════════
 *
 * DREI BEFUNDE, alle am 2026-08-15 im Browser gemessen:
 *
 * 1. GAR KEINE H1. SectionHeading rendert ein <h2>, und diese Seite hatte
 *    sonst nichts -- sie begann auf Ebene 2 und darunter kamen weitere h2.
 *    Das ist kein Geschmacksfehler, sondern ein Struktur- und SEO-Fehler:
 *    ein Vorleser sagt hier nicht, wie die Seite heisst. `as="h1"` an
 *    SectionHeading schaltet Element und Groesse gemeinsam um.
 *
 * 2. INHALT SPRANG NACH INNEN. Der Rumpf lag in max-w-3xl (768px) unter
 *    einem max-w-6xl-Kopf (1152px): der Text begann bei x=352, das Logo
 *    darueber bei x=160. Genau dieses Argument steht seit dem 14.08.2026
 *    fuer den FUSS ausgeschrieben (_ui.tsx, Kommentar bei SiteFooter) --
 *    fuer den Inhalt dazwischen gilt es genauso. Jetzt: aeusserer Rahmen
 *    max-w-6xl wie ueberall, die Textspalte darin auf 68ch.
 *
 * 3. ~90 ZEICHEN JE ZEILE. In 768px Breite bei 16px lief der Fliesstext
 *    weit ueber die 45-75, die noch gut lesbar sind. Die 68ch sind die
 *    Obergrenze davon, nicht die Mitte -- diese Seite ist ein langer Text
 *    und darf breiter laufen als eine Bildunterschrift.
 *
 * Die Zwischenueberschriften standen auf 18px Space Grotesk, also unter der
 * Fliesstextgroesse mancher Absaetze daneben. Sie sind jetzt h3 (24px
 * Fraunces) -- die eine Abschnittsstufe, die es noch gibt.
 */
export default function CaseStudyPage() {
  const { t } = useT();
  const c = t.caseStudyPage;
  return (
    // pb-16 sm:pb-0 wie auf den uebrigen sieben Seiten: die feste Leiste
    // unten wuerde sonst den Fuss verdecken.
    <div className="min-h-screen pb-16 sm:pb-0">
      {/* Kopf und Fuss aus _ui.tsx. Diese Seite trug bis zum 14.08.2026 eine
          eigene Zusammenstellung mit "/#vergleich" statt "Kontakt" -- eine
          von mehreren Abweichungen, die entstanden sind, weil dasselbe
          Markup achtmal kopiert dastand. */}
      <SiteHeader />

      <section className={"mx-auto max-w-6xl px-4 sm:px-6 " + sectionPad}>
        <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title} lead={c.intro} />

        {/* Die Textspalte. Kein max-w am Abschnitt, sondern hier: die
            Kennzahlen-Kacheln weiter unten stehen bewusst NICHT in 68ch,
            sie sind ein Raster und kein Satz. */}
        <div className="mt-14 max-w-[68ch] space-y-12">
          <div>
            <h2 className={h3Cls}>{c.problemHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-soft">{c.problemBody}</p>
          </div>

          <div>
            <h2 className={h3Cls}>{c.whatHeading}</h2>
            <p className="mt-3 text-base leading-relaxed text-soft">{c.whatBody}</p>
          </div>

          <div>
            <h2 className={h3Cls}>{c.techHeading}</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-soft">
              {c.techItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vier Kacheln nebeneinander brauchen mehr als 68ch. Sie stehen
            deshalb ausserhalb der Textspalte und laufen bis max-w-3xl --
            breiter waeren die Zahlen darin verloren. */}
        <div className="mt-12 max-w-3xl">
          <h2 className={h3Cls}>{c.statsHeading}</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile value={c.stats.businesses.value} label={c.stats.businesses.label} />
            <StatTile value={c.stats.contacts.value} label={c.stats.contacts.label} />
            <StatTile value={c.stats.withEmail.value} label={c.stats.withEmail.label} />
            <StatTile value={c.stats.migrations.value} label={c.stats.migrations.label} />
          </div>
        </div>

        <div className="mt-12 max-w-[68ch]">
          <FactBox fact={c.honestNote} source="Frostbreaker, live production" />
        </div>

        <div className="mt-12 max-w-[68ch] rounded-2xl border border-edge/60 bg-panel p-6 sm:p-8">
          <h2 className={h3Cls}>{c.ctaHeading}</h2>
          <p className="mt-3 text-base leading-relaxed text-soft">{c.ctaBody}</p>
          <CTAButton className="mt-6" label={c.ctaButtonLabel} />
        </div>

        {/* Linksbuendig statt mittig: der Rueckweg gehoert an dieselbe Kante
            wie alles darueber, sonst schwebt er allein in der Breite. */}
        <p className="mt-12 text-sm text-mute">
          <Link href="/" className="underline hover:text-ink">{c.backLabel}</Link>
        </p>
      </section>

      <SiteFooter />

      {/* Neu am 2026-08-15, aus demselben Grund wie auf /kontakt: der Knopf
          in der Kopfleiste faengt erst bei sm an, der Weg gehoert auf dem
          Telefon nach unten. */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-edge/60 bg-surface/95 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full" label={c.ctaButtonLabel} />
      </div>
    </div>
  );
}
