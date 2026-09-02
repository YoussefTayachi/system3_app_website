"use client";
import Link from "next/link";
import { CTAButton, SiteHeader, SiteFooter, BOOKING_URL } from "./_ui";
import { ClaudeStage, StrikeList } from "./_stage";
import { Journey } from "./_journey";
import { Horizon, HeroScreen } from "./_hero-visual";
import { CustomerLogos, CustomerCards } from "./_customers";
import { Reveal } from "./reveal";
import { whoForIcons, noteIcons } from "./_icons";
import { useT } from "./language-provider";

/**
 * ══════════════════════════════════════════════════════════════════════
 * DIE STARTSEITE. Dritter Umbau am 2026-09-02: die dunkle Fassung.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Youssef hat Fora (fora.so) und die Galerie auf godly.design als Vorbild
 * gezeigt und dazu gesagt: weniger Text, mehr Bild, Bewegung, und der Text
 * denkt in Schmerz, Person und Versprechen. Der Umbau vom 2026-08-31 hatte
 * die AUSRICHTUNG schon richtig (Ergebnis statt Funktion, ein Ablauf als
 * Kernstueck). Was ihm fehlte, war der Raum: Tinte auf Papier, Kaesten auf
 * Weiss, und die Buehne ein leerer Kasten, der auf einen Klick wartet.
 *
 * ═══ WAS SICH AENDERT ═══
 *
 *   · Die Startseite ist dunkel. Nicht als Theme, sondern als Raum: ein
 *     kaltes Licht am Horizont, das Produkt gross und gerahmt darauf. Die
 *     Tokens dafuer stehen in globals.css unter `.fb-dark`; die
 *     Unterseiten bleiben hell, ihre Nachbildungen sind auf Weiss gebaut.
 *   · Der Held zeigt das Produkt. Unter der Ueberschrift steht eine
 *     Nachbildung, in der eine Liste sich fuellt, ein Aufhaenger
 *     geschrieben wird und eine Antwort eintrifft (_hero-visual.tsx). Das
 *     ist die Ueberschrift als Bild.
 *   · Der Ablauf hat Reiter ueber dem Rahmen und den Horizont im Rahmen,
 *     wie der Abschnitt von Fora, den Youssef als Bild geschickt hat.
 *   · Die Handgriffe streicht der Scroll durch, nicht eine Uhr.
 *   · Zwei Kunden statt einem: retaiyn und Frostbreaker Marketing.
 *
 * ═══ WAS BLEIBT ═══
 *
 * Die Ueberschrift (Entscheidung vom 2026-08-05), die neun Abschnitte in
 * ihrer Reihenfolge, die Texte des Ablaufs, die Claude-Buehne mit ihrer
 * Grenze, der eine Weg ueber Calendly, und das Wortbudget von rund 650
 * sichtbaren Woertern (gezaehlt mit scripts/count-words.mjs).
 *
 * ═══ SCHMERZ, PERSON, VERSPRECHEN ═══
 *
 *   Person        die Zeile ueber der Ueberschrift, und "Fuer wen"
 *   Versprechen   die Ueberschrift, und die Nachbildung darunter
 *   Schmerz       die vier Handgriffe, die durchgestrichen werden
 *
 * ═══ MOBIL ═══
 *
 * Bei 390 px gebaut, nicht nur geprueft: die Nachbildung verliert ihre
 * Seitenleiste und die Firmenspalte, die Reiter rollen seitlich, der
 * Rahmen hat 22 statt 28 px Radius, kein Klickziel unter 44 px.
 * ══════════════════════════════════════════════════════════════════════ */

// Wohin die drei Tueren aus "Fuer wen" fuehren. Nach id, nicht nach
// Reihenfolge, damit ein Umsortieren der Karten die Ziele nicht mitdreht.
const WOHIN: Record<string, string> = {
  self: "/fuer-saas",
  clients: "/fuer-agenturen",
  new: "/funktionen",
};

// Die Kapitelueberschrift dieser Seite. Leichter als h2Cls in _ui.tsx
// (medium statt bold): auf Dunkel traegt eine fette Grotesk in 56 px zu
// dick auf, und Fora setzt seine Kapitel in derselben Lautstaerke.
const kapitel =
  "font-display text-[2.125rem] font-medium leading-[1.06] tracking-[-0.03em] text-balance text-ink sm:text-[2.75rem] lg:text-[3.25rem]";
const einleitung = "text-[17px] leading-relaxed text-soft sm:text-[19px]";
const abschnitt = "py-20 sm:py-28 lg:py-32";

export default function Home() {
  const { t } = useT();

  return (
    <div className="fb-dark min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

      {/* ═══ 1 · DER HELD ═══════════════════════════════════════════════
          Ueberschrift in Ruhe, darunter das Produkt auf dem Horizont. Die
          Reihenfolge der Einblendung steht in --i: Zeile, Titel, Satz,
          Knoepfe, dann die Nachbildung (eigene, laengere Kurve).
          ═══════════════════════════════════════════════════════════ */}
      <section className="fb-grain relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="fb-hero-in inline-flex min-h-[32px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 text-[13px] font-medium text-soft sm:text-[14px]" style={{ ["--i" as string]: 0 }}>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {t.hero.pill}
            </p>
            <h1
              className="fb-hero-in mx-auto mt-6 max-w-[16ch] font-display text-[2.625rem] font-medium leading-[1.02] tracking-[-0.035em] text-balance text-ink sm:text-[4rem] lg:text-[5rem]"
              style={{ ["--i" as string]: 1 }}
            >
              {t.hero.h1Pre}
              <span className="text-sky-400">{t.hero.h1Accent}</span>
              {t.hero.h1Post}
            </h1>
            <p className="fb-hero-in mx-auto mt-6 max-w-[44ch] text-[17px] leading-relaxed text-soft sm:text-[20px]" style={{ ["--i" as string]: 2 }}>
              {t.hero.short}
            </p>
            <div className="fb-hero-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3" style={{ ["--i" as string]: 3 }}>
              <CTAButton className="!px-6 !py-3.5 !text-[15px]" />
              <a href={BOOKING_URL} className="tap-link group gap-1.5 text-[15px] font-medium text-soft transition-colors hover:text-ink">
                {t.cta.secondary}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
            <p className="fb-hero-in mt-4 text-[14px] text-mute" style={{ ["--i" as string]: 4 }}>
              {t.cta.trialShort}
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
            {/* Das Licht sitzt hinter der Oberkante der Nachbildung, nicht
                am Fuss des Abschnitts: die Nachbildung steht auf dem
                Horizont, so wie bei Fora das Produkt auf der Landschaft. */}
            <div aria-hidden className="absolute -inset-x-[12%] -bottom-[18%] -top-[42%] sm:-inset-x-[18%]">
              <Horizon parallax hy="22%" className="[&_.fb-h-a]:h-[140%] [&_.fb-h-b]:h-[72%] [&_.fb-h-b]:w-[118%]" />
            </div>
            <HeroScreen note={t.journey.sampleNote} />
          </div>

          <Reveal className="mt-16 sm:mt-20">
            <CustomerLogos />
          </Reveal>
        </div>
      </section>

      {/* ═══ 2 · DER SCHMERZ ════════════════════════════════════════════
          Vier Dinge, die der Leser heute macht. Der Scroll streicht sie
          durch, eine nach der anderen, waehrend er hinsieht.
          ═══════════════════════════════════════════════════════════ */}
      <section className={"border-t border-white/8 " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <h2 className={kapitel + " lg:sticky lg:top-28"}>{t.strikeList.title}</h2>
            </Reveal>
            <StrikeList items={t.strikeList.items} note={t.strikeList.note} />
          </div>
        </div>
      </section>

      {/* ═══ 3 · DER WEG. Das Kernstueck. ═══════════════════════════════
          Die alten Anker bleiben: auf #system, #kanaele und #rundgang
          zeigen Navigation und Verweise von aussen.
          ═══════════════════════════════════════════════════════════ */}
      <section id="ablauf" className={"scroll-mt-20 border-t border-white/8 " + abschnitt}>
        <span id="system" className="block scroll-mt-20" aria-hidden />
        <span id="kanaele" className="block scroll-mt-20" aria-hidden />
        <span id="rundgang" className="block scroll-mt-20" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <h2 className={kapitel + " mx-auto"}>{t.journey.title}</h2>
            <p className={"mx-auto mt-5 max-w-[40ch] " + einleitung}>{t.journey.body}</p>
          </Reveal>
          <Journey
            nischen={t.journey.nischen}
            akte={t.journey.akte}
            untertitel={t.journey.untertitel}
            firmenLabel={t.journey.firmenLabel}
            gefundenLabel={t.journey.gefundenLabel}
            geprueft={t.journey.geprueft}
            scanLabel={t.journey.scanLabel}
            anLabel={t.journey.anLabel}
            betreffLabel={t.journey.betreffLabel}
            schreibtLabel={t.journey.schreibtLabel}
            antwortLabel={t.journey.antwortLabel}
            statusVorher={t.journey.statusVorher}
            statusNachher={t.journey.statusNachher}
            notizenLabel={t.journey.notizenLabel}
            spalten={t.journey.spalten}
            wiederholen={t.journey.wiederholen}
            nischeLabel={t.journey.frage}
          />
        </div>
      </section>

      {/* ═══ 4 · CLAUDE ═════════════════════════════════════════════════
          Nach dem Ablauf, nicht davor: die Anbindung ist eine Aussage
          UEBER den Ablauf. Ueberschrift links, Chatfenster rechts.
          ═══════════════════════════════════════════════════════════ */}
      <section id="claude" className={"scroll-mt-20 border-t border-white/8 bg-band " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <Reveal>
              <h2 className={kapitel}>{t.claudeStage.title}</h2>
              <p className={"mt-5 max-w-[40ch] " + einleitung}>{t.claudeStage.body}</p>
            </Reveal>
            <Reveal delay={120}>
              <ClaudeStage
                auftrag={t.claudeStage.auftrag}
                schritte={t.claudeStage.schritte}
                ergebnis={t.claudeStage.ergebnis}
                grenze={t.claudeStage.grenze}
                wiederholen={t.claudeStage.wiederholen}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 5 · FUER WEN ═══════════════════════════════════════════════ */}
      <section id="fuer-wen" className={"scroll-mt-20 border-t border-white/8 " + abschnitt}>
        <span id="agenturen" className="block scroll-mt-20" aria-hidden />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className={kapitel + " mb-10 sm:mb-12"}>{t.whoFor.title}</h2>
          </Reveal>
          <div className="grid items-stretch gap-4 md:grid-cols-3 sm:gap-5">
            {t.whoFor.cards.map((c, i) => (
              <Reveal key={c.id} delay={i * 90} className="h-full">
                <Link
                  href={WOHIN[c.id]}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-6 transition-[border-color,transform,background-color] duration-200 ease-out hover:border-white/25 hover:bg-panel2 hoverfine:-translate-y-1 sm:p-7"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-400/12 text-sky-300">{whoForIcons[c.id]}</span>
                  <h3 className="mt-6 text-[19px] font-semibold leading-snug text-ink sm:text-[21px]">{c.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[15px] font-medium text-soft transition-colors group-hover:text-ink">
                    {c.linkLabel}
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 · WER DAMIT KUNDEN GEWINNT ═══════════════════════════════ */}
      <section id="kunde" className={"scroll-mt-20 border-t border-white/8 bg-band " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className={kapitel + " mb-10 sm:mb-12"}>{t.customer.logosTitle}</h2>
          </Reveal>
          <CustomerCards />
        </div>
      </section>

      {/* ═══ 7 · KOSTEN ═════════════════════════════════════════════════ */}
      <section id="kosten" className={"scroll-mt-20 border-t border-white/8 " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <h2 className={kapitel}>{t.costs.title}</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className={"max-w-[52ch] " + einleitung}>{t.costs.body}</p>
              <p className="mt-6 flex max-w-[52ch] items-start gap-3.5 text-[17px] leading-relaxed text-ink sm:text-[19px]">
                <span className="mt-0.5 shrink-0 text-sky-300">{noteIcons.price}</span>
                {t.costs.note}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 8 · FRAGEN ═════════════════════════════════════════════════ */}
      <section id="faq" className={"scroll-mt-20 border-t border-white/8 bg-band " + abschnitt}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <h2 className={kapitel + " mb-8 sm:mb-10"}>{t.faq.title}</h2>
          </Reveal>
          <div className="divide-y divide-white/8 rounded-2xl border border-white/10 bg-panel">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-[16px] font-medium text-ink marker:content-none sm:px-6 sm:text-[17px]">
                  {f.q}
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4 shrink-0 text-faint transition-transform duration-200 group-open:-rotate-180">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="fb-faq-answer -mt-1 max-w-[68ch] px-5 pb-5 text-[16px] leading-relaxed text-soft sm:px-6 sm:text-[17px]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9 · DER SCHLUSS ════════════════════════════════════════════
          Derselbe Horizont wie am Anfang, diesmal ueber der Handlung. Die
          Seite endet, wo sie begonnen hat: im Licht, mit einem Knopf.
          ═══════════════════════════════════════════════════════════ */}
      <section className="fb-grain relative overflow-hidden border-t border-white/8">
        <Horizon hy="108%" />
        <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 sm:py-36 lg:py-44">
          <Reveal>
            <h2 className={kapitel + " mx-auto"}>{t.finalCta.title}</h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <CTAButton className="!px-6 !py-3.5 !text-[15px]" />
              <a href={BOOKING_URL} className="tap-link group gap-1.5 text-[15px] font-medium text-soft transition-colors hover:text-ink">
                {t.cta.secondary}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      {/* Der feste Knopf am unteren Rand des Telefons. */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-surface/90 p-3 backdrop-blur sm:hidden">
        <CTAButton className="w-full !py-3.5 !text-[15px]" />
      </div>
    </div>
  );
}
