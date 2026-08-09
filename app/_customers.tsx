"use client";
import Image from "next/image";
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
 * die anderen fehlen. Als Satzanfang gelesen ("Im Einsatz bei RETAIYN")
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
        "group inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-edge2/70 bg-panel/70 py-2 pl-4 pr-4 transition-colors hover:border-edge3 " +
        className
      }
    >
      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
        {c.stripLabel}
      </span>
      <Image
        src={LOGO.src}
        alt={c.logoAlt}
        width={LOGO.width}
        height={LOGO.height}
        className="h-[15px] w-auto"
      />
      <span aria-hidden className="hidden text-edge3 sm:inline">
        ·
      </span>
      <span className="hidden text-xs text-mute transition-colors group-hover:text-soft sm:inline">
        {c.descriptor}
      </span>
      <span className="text-mute transition-colors group-hover:text-ink">
        <ExternalIcon />
      </span>
    </a>
  );
}

/**
 * Der volle Abschnitt, zwei Teile in einer Karte.
 *
 * Oben der Beleg: Wortzeichen links, die Geschichte rechts. Die Fakten
 * stehen als Beschreibungsliste statt als Haken-Aufzaehlung -- Haken lesen
 * sich wie Produktvorteile, hier geht es um Angaben ueber jemand anderen.
 *
 * Unten der Spiegel, abgesetzt auf eigenem Flaechenton: derselbe Gedanke,
 * aber in der zweiten Person und ohne den Kundennamen. Der Beleg allein
 * ueberzeugt niemanden, der sich nicht selbst darin erkennt -- deshalb
 * uebernimmt dieser Block die Uebertragung ausdruecklich, statt sie dem
 * Leser zu ueberlassen, und endet als einziger Teil des Abschnitts in
 * einem Weg ins Gespraech.
 */
export function CustomerSection({ className = "" }: { className?: string }) {
  const { t } = useT();
  const c = t.customer;
  return (
    <section id="kunde" className={"scroll-mt-20 " + className}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="rounded-2xl border border-edge/60 bg-panel p-6 sm:p-8 lg:p-10">
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
                      <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-mute">
                        {f.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-soft">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
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
              <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink sm:text-2xl">
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
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-all hover:opacity-85 active:scale-[0.98]"
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
