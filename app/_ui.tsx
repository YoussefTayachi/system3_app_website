"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT, LanguageToggle } from "./language-provider";

// ══════════════════════════════════════════════════════════════════════
// EIN WEG: DAS GESPRAECH. Die 14-Tage-Testphase ist am 2026-08-06
// ersatzlos entfallen, mit ihr jeder Selbstbedienungs-Einstieg.
//
// Der Grund steht in KONVERSION.md und ist keine Geschmacksfrage: die App
// sagt selbst, dass Postfaecher zwei bis vier Wochen Warmup brauchen. Eine
// Testphase von 14 Tagen ist damit KUERZER ALS DIE EINRICHTUNG -- wer sie
// startet, kann in ihr gar nicht sehen, worum es geht, und kuendigt aus dem
// richtigen Grund. Dazu kam die Huerde davor: erst bei bis zu fuenf
// Anbietern Konten anlegen und Schluessel eintragen, bevor der erste
// Bildschirm etwas zeigt.
//
// Fuer eine Agentur, die mehrere Kundendomains anfasst, ist das Gespraech
// ohnehin der wahrscheinlichere erste Schritt. TRIAL_URL ist entfernt statt
// auskommentiert -- ein Knopf, den es nicht mehr gibt, soll auch keinen
// halben Verweis hinterlassen.
// ══════════════════════════════════════════════════════════════════════
export const BOOKING_URL = "https://calendly.com/youssef-tayachi-frostbreaker/30min";

export function Logo() {
  return (
    <Link href="/" className="text-3xl font-extrabold tracking-tighter text-[#0EA5E9]">
      frostbreaker
    </Link>
  );
}

/**
 * Ein CTAButton, zwei visuelle Varianten -- "primary" (auffaellig, dunkel)
 * und "secondary" (zurueckhaltender, outline) -- beide fuehren standardmaessig
 * zum selben Ziel (Call buchen), es gibt keinen Selfserve-Pfad mehr auf der
 * Website. Eine spaetere URL-Aenderung passiert nur an einer Stelle (BOOKING_URL).
 * Labels kommen standardmaessig aus dem Dictionary (zweisprachig), lassen
 * sich aber pro Aufrufstelle ueberschreiben (z. B. Preiskarten-Buttons).
 */
export function CTAButton({
  className = "",
  label,
  href,
  variant = "primary",
}: {
  className?: string;
  label?: string;
  href?: string;
  variant?: "primary" | "secondary";
}) {
  const { t } = useT();
  const isPrimary = variant === "primary";
  // Der primaere Knopf verspricht die Testphase und muss deshalb auch dorthin
  // fuehren. Wo bewusst ein Gespraech gemeint ist (Agentur-Plan), wird href
  // explizit auf BOOKING_URL gesetzt.
  return (
    <a
      href={href ?? BOOKING_URL}
      className={
        (isPrimary
          ? "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-surface shadow-sm transition-all hover:opacity-85 hover:scale-[1.02] active:scale-[0.98] sm:px-6 sm:py-3 sm:text-sm "
          : "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-edge2 px-4 py-2.5 text-xs font-medium text-soft transition-colors hover:border-ink hover:text-ink sm:px-6 sm:py-3 sm:text-sm ") +
        className
      }
    >
      {label ?? (isPrimary ? t.cta.primary : t.cta.secondary)}
    </a>
  );
}

/** Primaer- + Sekundaer-CTA nebeneinander (bzw. gestapelt auf Mobile), fuer
 * Hero und finale CTA-Sektion -- ein Baustein statt zweimal CTAButton +
 * Layout-Klassen an zwei Stellen synchron zu halten. */
export function CTAGroup({ className = "" }: { className?: string }) {
  const { t } = useT();
  return (
    <div className={"flex flex-wrap items-center justify-center gap-x-6 gap-y-3 " + className}>
      <CTAButton variant="primary" />
      {/* Der Gespraechs-Weg bleibt erreichbar, aber klar untergeordnet -- sonst
          konkurrieren zwei gleich starke Knoepfe um dieselbe Entscheidung. */}
      <a
        href={BOOKING_URL}
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-ink"
      >
        {t.cta.secondary}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </div>
  );
}

/**
 * Dropdown im Nav-Bereich, oeffnet sich per Hover (Desktop) und signalisiert
 * allein durch seine Existenz mehr Tiefe/Reife als eine flache Ein-Klick-
 * Navigation -- die Eintraege verlinken auf echte, bestehende Anker auf der
 * Seite, keine Fake-Unterseiten.
 *
 * Seit dem 14.08.2026 haengen an einem dieser Menues ("Fuer wen") drei echte
 * Seiten, die vorher als eigene Links in der Leiste standen. Daraus folgen
 * zwei Ergaenzungen:
 *
 * 1. `group-focus-within` neben `group-hover`. Vorher liess sich das Menue
 *    ausschliesslich mit der Maus oeffnen -- solange darin nur Anker derselben
 *    Seite lagen, war das verschmerzbar. Mit den Zielgruppenseiten darin waeren
 *    sie per Tastatur gar nicht mehr erreichbar gewesen: `invisible` nimmt die
 *    Links auch aus der Tab-Reihenfolge. Jetzt oeffnet der Fokus auf dem Knopf
 *    das Menue, und Tab laeuft weiter hinein.
 * 2. Der Eintrag der aktuellen Seite wird markiert (`aria-current`). Im
 *    geschlossenen Zustand zeigt die Leiste nur noch die Sammelbeschriftung --
 *    beim Oeffnen soll man sehen, wo man steht. Verglichen wird nur der reine
 *    Pfad; Anker-Eintraege wie "/#rundgang" treffen deshalb nie zu, was richtig
 *    ist: ein Anker ist keine eigene Seite.
 */
export function NavDropdown({
  label,
  items,
  className = "",
}: {
  label: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  const pfad = usePathname();
  return (
    <div className={"group relative " + className}>
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm text-soft transition-colors hover:text-ink"
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
        >
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-52 rounded-2xl border border-edge/60 bg-panel p-2 shadow-lg shadow-ink/10">
          {items.map((it) => {
            const hier = it.href === pfad;
            return (
              <a
                key={it.href}
                href={it.href}
                aria-current={hier ? "page" : undefined}
                className={
                  "block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-panel2 hover:text-ink " +
                  (hier ? "bg-panel2 font-medium text-ink" : "text-soft")
                }
              >
                {it.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * Ein einzelner Link in der Kopfleiste. Traegt die Markierung der aktuellen
 * Seite, aus demselben Grund wie NavDropdown: wer irgendwo steht, soll das
 * sehen. Bleibt dabei ein Link und wird kein <span> -- ein Element, das
 * aussieht wie ein Nachbar, aber nicht fokussierbar ist, faellt beim Tabben
 * aus der Reihe.
 */
function NavLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  const pfad = usePathname();
  const hier = href === pfad;
  return (
    <a
      href={href}
      aria-current={hier ? "page" : undefined}
      className={
        (hier ? "text-sm font-medium text-ink " : "text-sm text-soft transition-colors hover:text-ink ") + className
      }
    >
      {label}
    </a>
  );
}

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE KOPFLEISTE. Ein Bauteil fuer alle acht Seiten.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Bis zum 2026-08-14 stand dasselbe Markup ACHTMAL kopiert im Repo, und es
 * war achtmal verschieden: auf drei Seiten ein Aufklappmenue "Funktionen",
 * auf vieren ein einzelner Link darauf, auf /kontakt und /case-study
 * stattdessen ein Link "Vergleich". Die neun Funktionsnamen aus
 * nav.funktionenItems -- das Inhaltsverzeichnis des Produkts -- waren damit
 * von der Haelfte der Seiten aus unerreichbar. Wer ueber eine Anzeige auf
 * /fuer-agenturen landet, sah nie, was das Produkt kann.
 *
 * WAS DABEI GEFALLEN IST: der Link "Vergleich" auf /kontakt und
 * /case-study. Er zeigte auf "/#vergleich", und diesen Anker gibt es auf der
 * Startseite nicht -- die Vergleichstabelle sitzt unter id="ergaenzt"
 * (nachgesehen am 2026-08-14, ein Suchlauf ueber app/ findet "vergleich" nur
 * in diesen beiden Leisten und als Beschriftung in dict.ts). Der Klick
 * sprang also an den Seitenanfang. An seine Stelle tritt "Kontakt" wie auf
 * den uebrigen sechs Seiten.
 *
 * ──────────────────────────────────────────────────────────────────────
 * DIE BREITE DER LEISTE. Hier stehen die Messwerte, die vorher im Kopf von
 * app/page.tsx standen.
 * ──────────────────────────────────────────────────────────────────────
 *
 * Zwischen 768px und 1024px passen Logo, volle Navigation und CTA nicht
 * nebeneinander (die Leiste lief ueber und erzeugte horizontales Scrollen).
 * Deshalb erscheint alles Sekundaere erst ab lg.
 *
 * Am 14.08.2026 kam als dritter Zielgruppen-Link "Unser Kunde" dazu, und
 * damit lief die Leiste auch OBERHALB von lg ueber: `max-w-6xl` deckelt den
 * Platz ab 1152px bei 1104px (Leiste komplett, inkl. Logo und CTA) -- der
 * Platz waechst also nicht mehr mit dem Fenster. Nachgemessen in Chrome auf
 * Deutsch, natuerliche Breite der Leiste gegen ihren Kasten:
 *
 *   1280/1440px  /, /funktionen 1121 · /kontakt, /case-study 1130 · Rest 1103
 *   1024px       verfuegbar 961, benoetigt 1103 bis 1130
 *
 * Auf vier von sieben Seiten brachen die Beschriftungen dadurch zweizeilig
 * um ("Fuer / Agenturen") und die Leiste wurde doppelt so hoch; bei 1024px
 * kamen auf /kontakt und /case-study 4px Querscrollen dazu. Ein hoeherer
 * Breakpoint half nicht -- der Deckel gilt fuer jede Fensterbreite ab 1152px.
 *
 * Loesung: die drei Zielgruppenseiten stecken in EINEM Menue ("Fuer wen",
 * siehe nav.fuerWenItems). Drei Links plus Abstaende waren 311px, das Menue
 * ist rund 96px breit -- gespart sind ~215px.
 *
 * Das Menue selbst bleibt bei lg, so wie die drei Links, die es ersetzt:
 * ab md sichtbar braeuchte es bei 768px etwa 110px, die dort nirgends frei
 * sind (verfuegbar 705px, benoetigt danach 660 bis 794).
 *
 * Nach der Zusammenlegung am 2026-08-14 erneut gemessen (leiste.js, acht
 * Seiten x 768/1024/1280/1440px x de/en = 64 Kombinationen): 0 kaputt.
 * Wer hier einen Eintrag hinzufuegt, misst nach.
 *
 * ──────────────────────────────────────────────────────────────────────
 * ZWEI AUSNAHMEN, BEIDE AM PFAD ERKANNT STATT AN EINEM PROP
 * ──────────────────────────────────────────────────────────────────────
 *
 * NavDropdown vergleicht ohnehin schon usePathname(), um den aktuellen
 * Eintrag zu markieren. Dieselbe Quelle hier zu benutzen heisst: die Leiste
 * hat keinen einzigen Schalter, den eine kopierte Seite falsch setzen kann.
 *
 * 1. Auf /eigene-software erscheint das Funktionen-Menue erst ab lg. Diese
 *    Leiste ist die vollste von allen, weil sie zusaetzlich den Namen der
 *    eigenen Seite traegt. Gemessen am 14.08.2026 in Chrome: bei 768px
 *    braucht sie mit dem Eintrag 791px bei 705px Platz, bricht zweizeilig um
 *    und erzeugt 13px Querscrollen; ohne ihn sind es 681px. Verloren geht
 *    nichts -- der erste Eintrag des Produkt-Menues ("Alle Funktionen")
 *    fuehrt auf dieselbe Seite und ist ab md sichtbar.
 * 2. Der Link auf die aktuelle Seite ist nie versteckt. "Eigene Software"
 *    steht sonst erst ab lg; auf /eigene-software ist es der Name der Seite,
 *    auf der man steht, und der gehoert ab md sichtbar. Dieselbe Regel
 *    greift auf /kontakt fuer "Kontakt" -- dort war der Eintrag ohnehin nie
 *    versteckt, die Bedingung aendert dort also nur die Markierung.
 */
export function SiteHeader() {
  const { t } = useT();
  const pfad = usePathname();
  const istEigeneSoftware = pfad === "/eigene-software";
  return (
    <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Logo />
        {/* gap-5 zwischen md und lg, erst darueber gap-6: genau der Bereich,
            in dem die Leiste ueberlaeuft, bekommt den kleineren Abstand. */}
        <nav className="hidden items-center gap-5 md:flex lg:gap-6">
          {/* Reihenfolge auf allen acht Seiten gleich: Produkt, Funktionen,
              Fuer wen, Kontakt, Eigene Software -- vom Angebot ueber die
              Zielgruppe zum Gespraech. */}
          <NavDropdown label={t.nav.produkt} items={t.nav.produktItems} />
          <NavDropdown
            label={t.featuresPage.eyebrow}
            items={t.nav.funktionenItems}
            className={istEigeneSoftware ? "hidden lg:block" : ""}
          />
          <NavDropdown label={t.nav.fuerWen} items={t.nav.fuerWenItems} className="hidden lg:block" />
          <NavLink href="/kontakt" label={t.nav.kontakt} />
          <NavLink
            href="/eigene-software"
            label={t.nav.custom}
            className={istEigeneSoftware ? "" : "hidden lg:inline"}
          />
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <CTAButton />
        </div>
      </div>
    </header>
  );
}

/**
 * Die Fusszeile, ebenfalls ein Bauteil fuer alle acht Seiten.
 *
 * Bis zum 2026-08-14 stand auch dieses Markup achtmal kopiert da, in zwei
 * Fassungen: fuenf Seiten mit Linksatz, /kontakt und /case-study nur mit der
 * Zeile darueber. Und der Linksatz war nicht derselbe -- der AVV kam am
 * 14.08. aus dem gestrichenen Vertrauens-Abschnitt in den Fuss der
 * Startseite und NUR dorthin. Rechtlich ist er auf jeder Seite gleich
 * relevant; genau das ist der Fehler, den fuenffach kopiertes Markup
 * produziert.
 *
 * BREITE: max-w-6xl auf allen Seiten, auch auf /kontakt und /case-study, wo
 * der Inhalt in max-w-3xl steht und der Fuss ihm bisher folgte. Kopf und
 * Fuss sind zusammen der Rahmen der Seite; die Kopfleiste steht auf ALLEN
 * acht Seiten in max-w-6xl. Ein Fuss, der schmaler ist als der Kopf
 * darueber, liest sich als zweiter Rahmen. Dazu kommt, dass der Fuss jetzt
 * ueberall fuenf Links traegt statt nur einer Zeile -- die brauchen die
 * Breite, sonst umbrechen sie auf schmalen Seiten frueher als auf breiten.
 *
 * `/start` und die Rechtsseiten (_legal/LegalShell.tsx) benutzen dieses
 * Bauteil bewusst NICHT: /start ist eine navigationsfreie Landingpage fuer
 * Klicks aus der eigenen Kaltakquise (Begruendung im Kopf der Datei), und
 * LegalShell traegt statt des Linksatzes einen eigenen Rechtssatz
 * (legal.footerLine).
 */
export function SiteFooter() {
  const { t } = useT();
  return (
    <footer className="border-t border-edge/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-mute sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>© {new Date().getFullYear()} Frostbreaker · {t.footer.location}</span>
        {/* tap-row hebt die Trefferflaeche der Links auf 24px -- vier Zeichen
            hohe Textlinks nebeneinander sind auf dem Telefon sonst nicht
            sicher zu treffen. */}
        <div className="tap-row flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href="/impressum" className="hover:text-ink">{t.footer.impressum}</a>
          <a href="/datenschutz" className="hover:text-ink">{t.footer.datenschutz}</a>
          <a href="/agb" className="hover:text-ink">{t.footer.agb}</a>
          <a href="/avv" className="hover:text-ink">{t.footer.avv}</a>
          <a href="/kontakt" className="hover:text-ink">{t.footer.kontakt}</a>
        </div>
      </div>
    </footer>
  );
}

export function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-edge/60 shadow-sm transition-shadow hover:shadow-md"
      title="Zum Vergrößern klicken"
    >
      <Image
        src={src}
        alt={alt}
        width={1690}
        height={955}
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </a>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
          <span aria-hidden className="h-px w-6 bg-edge2" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/**
 * Rendert Fliesstext und hebt darin enthaltene Fachbegriffe (SPF, DKIM, DMARC)
 * als abbr mit Erklaerung beim Hovern hervor. Besucher aus dem Zielmarkt sind
 * ueberwiegend Agentur-/Vertriebsleute, keine E-Mail-Techniker -- die Begriffe
 * bleiben stehen, weil sie Kompetenz signalisieren, brauchen aber eine
 * Erklaerung an Ort und Stelle.
 */
export function GlossaryText({ text }: { text: string }) {
  const { t } = useT();
  const terms = Object.keys(t.glossary);
  const parts = text.split(new RegExp(`\\b(${terms.join("|")})\\b`, "g"));
  return (
    <>
      {parts.map((part, i) =>
        terms.includes(part) ? (
          <abbr
            key={i}
            title={t.glossary[part as keyof typeof t.glossary]}
            className="cursor-help underline decoration-dotted decoration-from-font underline-offset-2"
          >
            {part}
          </abbr>
        ) : (
          part
        )
      )}
    </>
  );
}

export function FactBox({ fact, sub, source }: { fact: string; sub?: string; source: string }) {
  const { lang } = useT();
  return (
    <div className="mt-4 rounded-xl border border-sky-200/70 bg-sky-50/70 p-4">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 shrink-0 rounded bg-sky-600 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
          {lang === "de" ? "Fakt" : "Fact"}
        </span>
        <p className="text-sm font-semibold leading-snug text-sky-950">{fact}</p>
      </div>
      {sub && <p className="mt-2 text-sm leading-relaxed text-sky-900/80">{sub}</p>}
      <p className="mt-2 text-xs text-sky-900/55">{lang === "de" ? "Quelle" : "Source"}: {source}</p>
    </div>
  );
}

/**
 * Kompakte, chatarmin-artige Stat-Kachel: eine große Zahl + Label, statt eines
 * Fließtext-Absatzes. Für Zahlen, die wir schon anderswo auf der Seite belegen
 * (z. B. die 33-Stunden-Zahl), hier bewusst verdichtet und wiederholt, damit
 * sie beim Scrollen öfter auftaucht, ohne den Beleg/die Quelle zu verlieren.
 */
export function StatTile({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className={dark ? "text-center" : "rounded-2xl border border-edge/60 bg-panel p-5 text-center"}>
      <p className={"font-display text-2xl font-semibold tracking-tight sm:text-3xl " + (dark ? "text-surface" : "text-ink")}>
        {value}
      </p>
      <p className={"mt-1 text-sm " + (dark ? "text-mute" : "text-soft")}>{label}</p>
    </div>
  );
}

/** Gemeinsamer Rahmen für illustrierte Produkt-Mockups (kein echter Screenshot,
 * sondern eine vereinfachte, bewusst reduzierte Nachbildung der UI, damit sie
 * auch klein noch lesbar bleibt -- gleiches Prinzip wie die bestehende
 * AI-Agent- und Icebreaker-Mockup-Karte). */
export function MockupPanel({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-edge/60 bg-panel p-6 shadow-sm">{children}</div>;
}
