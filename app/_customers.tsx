"use client";
import Image from "next/image";
import Link from "next/link";
import { useT } from "./language-provider";
import { BOOKING_URL } from "./_ui";
import { Reveal } from "./reveal";

// ══════════════════════════════════════════════════════════════════════
// KUNDENBELEG. Zwei Groessen desselben Inhalts, damit derselbe Name zweimal
// wirken kann, ohne sich zu wiederholen: ein schmaler Streifen im Hero
// (ueber der Falz, ohne den Hero zu verstopfen) und ein voller Abschnitt
// weiter unten, wo Platz fuer Einordnung ist.
//
// Der Text steht in dict.customer, die Begruendung fuer den Zuschnitt
// ebenfalls dort. Hier nur die Darstellung.
//
// Das Wortzeichen liegt freigestellt vor (transparenter Grund statt des
// weissen Kastens vom Framer-Original), damit es auf --c-panel und
// --c-panel2 gleich sauber sitzt und kein hellerer Block darunter steht.
// ══════════════════════════════════════════════════════════════════════

const LOGO = { src: "/customers/retaiyn.png", width: 720, height: 214 };

/** Pfeil fuer ausgehende Links -- unterscheidet den Sprung auf eine fremde
 *  Domain vom "→" der internen Wege. */
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3 w-3">
      <path
        d="M8.5 15.5 15.5 8.5M9.5 8.5h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Schmale Zeile fuer den Hero: Label, Wortzeichen, auf breiten Schirmen die
 * Einordnung dahinter. Bewusst kein Kasten und keine Logo-Wand -- ein
 * einzelnes Logo in einem breiten Band sieht aus wie eine Wand, bei der
 * die anderen fehlen. Als Satzanfang gelesen ("Im Einsatz bei retaiyn")
 * fehlt nichts.
 */
export function CustomerStrip({ className = "" }: { className?: string }) {
  const { t } = useT();
  const c = t.customer;
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "group inline-flex min-h-[44px] max-w-full flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-edge2/70 bg-panel/70 px-4 py-2.5 transition-colors hover:border-edge3 " +
        className
      }
    >
      <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-mute">
        {c.stripLabel}
      </span>
      <Image
        src={LOGO.src}
        alt={c.logoAlt}
        width={LOGO.width}
        height={LOGO.height}
        // Auf der dunklen Startseite wird das violette Logo weiss: ein
        // farbiges Logo auf Dunkel liest sich als Werbung, ein weisses als
        // Beleg.
        className="h-[17px] w-auto [.fb-dark_&]:brightness-0 [.fb-dark_&]:invert"
      />
      <span aria-hidden className="hidden text-edge3 sm:inline">
        ·
      </span>
      <span className="hidden text-[13px] text-mute transition-colors group-hover:text-soft sm:inline">
        {c.descriptor}
      </span>
      <span className="text-mute transition-colors group-hover:text-ink">
        <ExternalIcon />
      </span>
    </a>
  );
}

/**
 * DIE KURZFASSUNG DES KUNDENBELEGS, neu am 2026-08-31.
 *
 * `CustomerSection` darunter ist 259 Woerter lang und war damit der
 * drittteuerste Abschnitt der Startseite -- zwei Absaetze Fallbeschreibung,
 * vier Faktenzeilen und ein Spiegel-Block mit eigenem Knopf. Der ganze Fall
 * steht seit dem 2026-08-14 auf /kunden/retaiyn, wo er hingehoert; auf der
 * Startseite muss er nur belegen, DASS es ihn gibt.
 *
 * Was bleibt: das Wortzeichen, der Zuschnitt in einer Zeile, und der Satz
 * ueber die Zahl, die hier NICHT steht. Der ist der wichtigste von allen und
 * darf nirgends wegfallen -- eine Seite, die zugibt, was sie nicht messen
 * kann, wird beim Rest geglaubt.
 *
 * Steht auf der Startseite und auf /fuer-agenturen. Beide zeigten vorher die
 * lange Fassung darunter.
 */
export function CustomerProof({ className = "" }: { className?: string }) {
  const { t } = useT();
  const c = t.customer;
  return (
    <section id="kunde" className={"scroll-mt-20 " + className}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="grid items-center gap-8 rounded-2xl bg-panel p-6 shadow-card sm:p-10 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-14">
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-xl border border-edge/70 bg-panel2/60 px-6 py-9 transition-colors hover:border-edge2"
            >
              <Image
                src={LOGO.src}
                alt={c.logoAlt}
                width={LOGO.width}
                height={LOGO.height}
                className="h-9 w-auto sm:h-11"
              />
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-mute transition-colors group-hover:text-ink">
                {c.urlLabel}
                <ExternalIcon />
              </span>
            </a>

            <div>
              <h2 className="font-display max-w-[22ch] text-[1.75rem] font-medium leading-[1.12] tracking-[-0.025em] text-balance text-ink sm:text-[2.25rem]">
                {c.title}
              </h2>
              {/* Die einzige Faktenzeile, die bleibt: WOFUER retaiyn sucht.
                  Die drei anderen (Agentur fuer, Ueber, Als Naechstes) stehen
                  auf /kunden/retaiyn. */}
              <p className="mt-4 text-[19px] leading-relaxed text-soft">{c.descriptor}</p>
              <p className="mt-6 border-l-2 border-edge2 pl-4 text-[15px] leading-relaxed text-mute">
                {c.pending}
              </p>
              <Link
                href="/kunden/retaiyn"
                className="tap-link group mt-5 gap-1.5 text-[15px] font-medium text-soft transition-colors hover:text-ink"
              >
                {c.pageLink}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * DIE LANGE FASSUNG, zwei Teile in einer Karte: oben der Beleg, unten der
 * Spiegel in der zweiten Person und ohne den Kundennamen.
 *
 * Seit dem 2026-08-31 von keiner Seite mehr aufgerufen:
 * Startseite und /fuer-agenturen zeigen beide `CustomerProof` darueber, und
 * der Fall selbst steht auf /kunden/retaiyn.
 *
 * Sie bleibt liegen und wird nicht geloescht. Der Spiegel-Block darin ("Und
 * in eurer Agentur?") ist der einzige Ort auf dieser Website, an dem der Fall
 * auf den Leser zurueckgedreht wird, und `customer.mirror` steht dafuer in
 * beiden Sprachen formuliert bereit. Sobald es eine Seite gibt, auf die ein
 * ausfuehrlicher Kundenbeleg gehoert, steht er hier.
 */
export function CustomerSection({ className = "" }: { className?: string }) {
  const { t } = useT();
  const c = t.customer;
  return (
    <section id="kunde" className={"scroll-mt-20 " + className}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          {/* `shadow-card` statt `border`: die Haarlinie ist die erste Schicht
              des Schattens (globals.css). Der Kundenbeleg ist die einzige
              Karte dieses Abschnitts und darf auf der Seite LIEGEN -- als
              blosser Rahmen war er eine Umrandung ohne Koerper. */}
          <div className="rounded-2xl bg-panel p-6 shadow-card sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-2">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center rounded-xl border border-edge/70 bg-panel2/60 px-6 py-10 transition-colors hover:border-edge2"
                >
                  <Image
                    src={LOGO.src}
                    alt={c.logoAlt}
                    width={LOGO.width}
                    height={LOGO.height}
                    className="h-8 w-auto sm:h-10"
                  />
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs text-mute transition-colors group-hover:text-ink">
                    {c.urlLabel}
                    <ExternalIcon />
                  </span>
                </a>

                <dl className="mt-6 space-y-3.5">
                  {c.facts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-[13px] font-medium uppercase tracking-[0.1em] text-mute">
                        {f.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-soft">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-3">
                <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-faint">
                  {c.eyebrow}
                </p>
                <h2 className="font-display mt-2 max-w-[24ch] text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-ink text-balance sm:text-[1.75rem]">
                  {c.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {c.body.map((p) => (
                    <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-soft sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Die fehlende Ergebniszahl offen benennen, statt sie zu
                    ueberspielen: auf einer Seite, die sonst jede Zahl belegt,
                    ist das der glaubwuerdigere Weg -- und der Platz fuer die
                    echten Zahlen ist damit sichtbar reserviert. */}
                <p className="mt-6 border-l-2 border-edge2 pl-4 text-xs leading-relaxed text-mute">
                  {c.pending}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-edge/70 bg-panel2/70 p-6 sm:mt-10 sm:p-8">
              {/* Ohne `font-display`: der Display-Schnitt traegt erst ab 24px, und
                  diese Zeile steht auf schmalen Fenstern in 20px. Ein
                  Familienwechsel je Breakpoint waere ein zweiter Bruch -- die
                  Groessen bleiben deshalb unveraendert, nur die Familie
                  wechselt. */}
              <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink sm:text-2xl">
                {c.mirror.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-8">
                {c.mirror.body.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-soft">
                    {p}
                  </p>
                ))}
              </div>
              <a
                href={BOOKING_URL}
                // `transition-all` ersetzt durch die zwei Eigenschaften, die
                // tatsaechlich wechseln -- gleiche Begruendung wie an
                // CTAButton in _ui.tsx.
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-surface transition-[opacity,scale] duration-[140ms] ease-out hover:opacity-85 active:scale-[0.98]"
              >
                {c.mirror.cta}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   ZWEI NAMEN, seit dem 2026-09-02. Neben retaiyn steht Frostbreaker
   Marketing, Youssefs Website-Angebot fuer lokale Betriebe: es findet seine
   Kunden ueber Frostbreaker. Das ist der Beleg, der am naechsten am Produkt
   liegt, und er hat ein eigenes Gesicht (marketing.frostbreaker.app).

   Das Logo von Frostbreaker Marketing ist eine Wortmarke und wird als Text
   gesetzt, so wie es dort selbst steht: "frostbreaker" in Blau, "marketing"
   daneben in Grau.
   ══════════════════════════════════════════════════════════════════════ */

function Wortmarke({ id, name }: { id: string; name: string }) {
  const { t } = useT();
  if (id === "retaiyn") {
    return (
      <Image
        src={LOGO.src}
        alt={t.customer.logoAlt}
        width={LOGO.width}
        height={LOGO.height}
        className="h-6 w-auto [.fb-dark_&]:brightness-0 [.fb-dark_&]:invert sm:h-7"
      />
    );
  }
  const [erst, ...rest] = name.split(" ");
  return (
    <span className="whitespace-nowrap text-[22px] font-bold leading-none tracking-[-0.02em] sm:text-[26px]">
      <span className="text-sky-600 [.fb-dark_&]:text-sky-400">{erst}</span>
      <span className="ml-1.5 font-normal text-soft">{rest.join(" ")}</span>
    </span>
  );
}

/** Die Logoleiste unter dem Helden: ein Wort, zwei Namen. */
export function CustomerLogos({ className = "" }: { className?: string }) {
  const { t } = useT();
  const c = t.customer;
  return (
    <div className={"flex flex-wrap items-center justify-center gap-x-8 gap-y-4 " + className}>
      <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-mute">{c.stripLabel}</span>
      {c.logos.map((l) => (
        <a
          key={l.id}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center opacity-80 transition-opacity hover:opacity-100"
        >
          <Wortmarke id={l.id} name={l.name} />
        </a>
      ))}
    </div>
  );
}

/** Zwei Karten: wer, wofuer, und wen er damit sucht. */
export function CustomerCards({ className = "" }: { className?: string }) {
  const { t } = useT();
  const c = t.customer;
  return (
    <div className={"grid gap-4 sm:grid-cols-2 sm:gap-5 " + className}>
      {c.logos.map((l, i) => (
        <Reveal key={l.id} delay={i * 90} className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-6 sm:p-7">
            <div className="flex min-h-[32px] items-center">
              <Wortmarke id={l.id} name={l.name} />
            </div>
            <p className="mt-5 text-[17px] leading-snug text-ink sm:text-[19px]">{l.descriptor}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-soft">{l.sucht}</p>
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-link group gap-1.5 text-[14px] text-mute transition-colors hover:text-ink"
              >
                {l.urlLabel}
                <ExternalIcon />
              </a>
              {l.href && (
                <Link href={l.href} className="tap-link group gap-1.5 text-[14px] font-medium text-soft transition-colors hover:text-ink">
                  {c.pageLink}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
