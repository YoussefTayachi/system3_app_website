"use client";
import { Logo, CTAButton, NavDropdown, SectionHeading, BOOKING_URL } from "../_ui";
import { TechFilterMockup } from "../_app-mockups";
import { CopyOutcomesMockup } from "../_guard-mockups";
import { Reveal } from "../reveal";
import { CheckIcon } from "../_icons";
import { useT, LanguageToggle } from "../language-provider";

/**
 * Die zweite Segmentseite, nach dem Muster von /fuer-agenturen.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * WARUM EIGENE SEITE UND KEIN ABSCHNITT AUF DER STARTSEITE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Die Startseite spricht in ihrer ersten Zeile Agenturen an
 * (`hero.eyebrow`). Ein SaaS-Abschnitt an Position 9 einer Seite, deren
 * erste Zeile jemand anderen meint, verliert den Leser in den ersten
 * Sekunden -- der Befund aus KONVERSION.md 1, nur mit vertauschten Rollen.
 * Ausserdem ist eine Segmentseite ein Ziel fuer Kaltmails und Anzeigen; ein
 * Anker mitten in einer 12.000px-Seite ist es nicht.
 * (Begruendung in voller Laenge: ANGEBOT-VERMARKTUNG.md 3.3.)
 *
 * ═══════════════════════════════════════════════════════════════════════
 * DER HOEHEPUNKT IST ABSCHNITT 3, NICHT ABSCHNITT 1
 * ═══════════════════════════════════════════════════════════════════════
 *
 * `learning` ist das eine Argument, das fuer diese Gruppe STAERKER ist als
 * fuer Agenturen: wer immer dasselbe verkauft, stapelt die Daten zur selben
 * Sequenz, und erst dadurch lohnt sich die Auswertung. Eine Agentur mit
 * wechselnden Nischen faengt jedes Mal von vorn an. Deshalb bekommt dieser
 * Abschnitt das staerkste Bild und nicht der Angebots-Abschnitt.
 *
 * ═══════════════════════════════════════════════════════════════════════
 * KEIN KUNDENBELEG AUF DIESER SEITE
 * ═══════════════════════════════════════════════════════════════════════
 *
 * /fuer-agenturen zeigt CustomerStrip und CustomerSection mit der
 * ausdruecklichen Begruendung, dass der Leser dort selbst eine Agentur ist
 * und den Namen als „jemand wie ich“ liest. Genau diese Begruendung traegt
 * hier nicht: die bisherigen Kunden sind keine SaaS-Anbieter. Ein Beleg,
 * der als „jemand wie ich“ gemeint ist und als „irgendein Kunde“ gelesen
 * wird, ist schwaecher als keiner. Kommt zurueck, sobald ein SaaS-Kunde
 * genannt werden darf.
 */
export default function SaasPage() {
  const { t } = useT();
  const s = t.saasPage;

  /**
   * Zwei der fuenf Abschnitte haben ein Bild, beide liegen fertig im Repo:
   * `TechFilterMockup` lag bis jetzt ungenutzt in _app-mockups.tsx,
   * `CopyOutcomesMockup` traegt auf /fuer-agenturen denselben Gedanken.
   * Beide holen ihre Texte selbst aus dem Dictionary und brauchen hier
   * nichts weiter als den Aufruf.
   *
   * `offer` bleibt vorerst ohne Bild, obwohl `OfferMapMockup` aus Stufe 2
   * inzwischen existiert: die Komponente ist props-getrieben und bekommt auf
   * der Startseite ihren gesamten Text aus `t.offerSection.offerMap`.
   * `saasPage` hat keine eigenen Mockup-Texte, und dieselbe Angebotskarte
   * ein zweites Mal mit demselben Beispiel (Shopware-Haendler,
   * Anfrageformular) zu zeigen, waere fuer einen SaaS-Anbieter eine
   * Wiederholung mit dem falschen Beispiel. Sobald `saasPage` einen eigenen
   * `offerMap`-Block bekommt, gehoert er hier hinein -- kein Fehler, sondern
   * eine offene Textluecke.
   *
   * `multi` und `limits` bleiben dauerhaft ohne Bild: beides sind
   * Abgrenzungen, und ein Mockup dazu waere Dekoration.
   */
  const visuals: Record<string, React.ReactNode> = {
    icp: <TechFilterMockup />,
    learning: <CopyOutcomesMockup />,
  };

  const navLinks = [
    { href: "/funktionen", label: t.featuresPage.eyebrow, secondary: false },
    { href: "/fuer-agenturen", label: t.nav.agenturen, secondary: false },
    // Auch auf der eigenen Seite erst ab lg, damit die Leiste hier dieselbe
    // Breite hat wie auf /fuer-agenturen -- Messwerte im Kopf von page.tsx.
    { href: "/fuer-saas", label: t.nav.saas, secondary: true },
    { href: "/kontakt", label: t.nav.kontakt, secondary: false },
  ];

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            <NavDropdown label={t.nav.produkt} items={t.nav.produktItems} />
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={"text-sm text-soft hover:text-ink " + (l.secondary ? "hidden lg:inline" : "")}
              >
                {l.label}
              </a>
            ))}
            {/* Erst ab lg, wie auf den uebrigen Seiten: zwischen 768 und
                1024px laeuft die Leiste sonst ueber (Begruendung im Kopf
                von page.tsx). Diese Seite hat einen Nav-Punkt mehr als
                /fuer-agenturen, weil sie die Schwesterseite mitfuehrt --
                der Schwellwert wird damit frueher erreicht, nicht spaeter. */}
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

      <section className="hero-wash border-b border-edge/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-sky-700">{s.eyebrow}</p>
          <h1 className="font-display max-w-[20ch] text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {s.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-soft sm:text-lg">{s.intro}</p>
          <div className="mt-8">
            <CTAButton href={BOOKING_URL} label={s.ctaLabel} />
          </div>
        </div>
      </section>

      {s.sections.map((sec, i) => {
        const flipped = i % 2 === 1;
        const visual = visuals[sec.id];
        return (
          <section
            key={sec.id}
            id={sec.id}
            className={"scroll-mt-20 border-b border-edge/60 " + (flipped ? "bg-panel2" : "")}
          >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
              <div className={visual ? "grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14" : ""}>
                <div className={visual ? "lg:col-span-2 " + (flipped ? "lg:order-2" : "") : "max-w-3xl"}>
                  <SectionHeading eyebrow={sec.eyebrow} title={sec.title} />
                  <p className="-mt-4 text-sm leading-relaxed text-soft sm:text-base">{sec.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-soft">
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {visual && (
                  <div className={"lg:col-span-3 " + (flipped ? "lg:order-1" : "")}>
                    <Reveal>{visual}</Reveal>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink text-balance sm:text-3xl">
          {s.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{s.ctaBody}</p>
        <CTAButton className="mt-9" href={BOOKING_URL} label={s.ctaLabel} />
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
        <CTAButton className="w-full" href={BOOKING_URL} label={s.ctaLabel} />
      </div>
    </div>
  );
}
