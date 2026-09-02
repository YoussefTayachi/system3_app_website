"use client";
import { CTAButton, SiteHeader, SiteFooter, BOOKING_URL, h1Cls, h2Cls } from "../_ui";
import { Horizon } from "../_hero-visual";
import { Reveal } from "../reveal";
import { Words, spot } from "../_motion";
import { useT } from "../language-provider";

/**
 * ══════════════════════════════════════════════════════════════════════
 * EIGENE SOFTWARE. Neu gebaut am 2026-09-02, im Raum der Startseite.
 * ══════════════════════════════════════════════════════════════════════
 *
 * Youssef: "custom software muss auch designtechnisch verbessert werden,
 * viel weniger text, inhalte etc haben aber dafuer sehr gut aussehen und
 * converten zum call."
 *
 * Vorher: drei Textabschnitte mit je vier Stichpunkten, eine Fallstudie,
 * drei Nachbildungen. Jetzt vier Bilder und ein Knopf:
 *
 *   Person        die Zeile ueber der Ueberschrift
 *   Schmerz       "Heute": vier Kaesten, zwei davon von Hand
 *   Versprechen   die Ueberschrift, und darunter der eine Kasten
 *   Beleg         drei Zahlen aus dem eigenen Betrieb
 *   Handlung      der Knopf, zweimal
 *
 * Die Fallstudie ist gefallen (/case-study leitet hierher um). Was jemand
 * ueber die Entstehung wissen will, erzaehle ich im Gespraech.
 * ══════════════════════════════════════════════════════════════════════ */

function Hand() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-3.5 w-3.5">
      <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11.5V6a1.5 1.5 0 0 1 3 0v8.5c0 3.6-2.4 6-6 6s-5.5-2-6.8-4.6L5 12.5a1.4 1.4 0 0 1 2.4-1.4L8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Der Schmerz als Bild: heute vier Kaesten, zwei davon von Hand, dann ein
   Kasten. Alles laeuft ein, sobald der Block im Bild ist (fb-anim haengt am
   umgebenden Reveal). */
function Flow() {
  const { t } = useT();
  const f = t.customPage.flow;
  return (
    <Reveal>
      <div className="fb-dark fb-grain relative overflow-hidden rounded-[22px] border border-ink/10 bg-[#080c13] sm:rounded-[28px]">
        <Horizon className="[&_.fb-h-a]:h-[170%] [&_.fb-h-b]:h-[95%] [&_.fb-h-b]:w-[110%]" />
        <div className="relative px-5 py-8 sm:px-10 sm:py-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-faint">{f.today}</p>
          <ol className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {f.steps.map((s, i) => (
              <li
                key={s.label}
                className="fb-anim fb-rise-8 flex min-h-[76px] flex-col justify-between rounded-xl border border-white/10 bg-[#0e131b]/85 p-3.5 backdrop-blur-md"
                style={{ animationDelay: 200 + i * 160 + "ms" }}
              >
                <span className="text-[15px] font-medium text-ink">{s.label}</span>
                {s.manual ? (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.08em] text-ink/80">
                    <Hand />
                    {f.manual}
                  </span>
                ) : (
                  <span className="mt-2 h-[15px]" />
                )}
              </li>
            ))}
          </ol>
          <div className="fb-anim fb-fade my-6 flex items-center gap-4" style={{ animationDelay: "1000ms" }}>
            <span aria-hidden className="h-px flex-1 bg-white/10" />
            <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5 text-faint">
              <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span aria-hidden className="h-px flex-1 bg-white/10" />
          </div>
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-sky-300">{f.after}</p>
          <div
            className="fb-anim fb-rise-8 mt-4 rounded-2xl border border-emerald-400/25 bg-[#0d1a17]/90 p-5 backdrop-blur-md sm:p-6"
            style={{ animationDelay: "1300ms" }}
          >
            <p className="font-display text-[1.5rem] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-[2rem]">{f.one}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {f.steps.map((s, i) => (
                <li
                  key={s.label}
                  className="fb-anim fb-rise-6 rounded-full bg-emerald-400/12 px-3 py-1.5 text-[13px] font-medium text-emerald-300"
                  style={{ animationDelay: 1700 + i * 90 + "ms" }}
                >
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function EigeneSoftwarePage() {
  const { t } = useT();
  const c = t.customPage;
  const [bauen, ablauf] = c.sections;
  const abschnitt = "py-20 sm:py-28 lg:py-32";

  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <SiteHeader />

      <section className="fb-grain relative overflow-hidden">
        <Horizon parallax hy="100%" className="[&_.fb-h-a]:h-[150%] [&_.fb-h-b]:h-[80%] [&_.fb-h-b]:w-[120%]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="fb-hero-in inline-flex min-h-[32px] items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.04] px-3.5 text-[13px] font-medium text-soft sm:text-[14px]" style={{ ["--i" as string]: 0 }}>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
              {c.pill}
            </p>
            <h1 className={"fb-hero-in mx-auto mt-6 max-w-[18ch] " + h1Cls} style={{ ["--i" as string]: 1 }}>
              {c.title}
            </h1>
            <p className="fb-hero-in mx-auto mt-6 max-w-[48ch] text-[17px] leading-relaxed text-soft sm:text-[20px]" style={{ ["--i" as string]: 2 }}>
              {c.intro}
            </p>
            <div className="fb-hero-in mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3" style={{ ["--i" as string]: 3 }}>
              <CTAButton href={BOOKING_URL} label={c.ctaLabel} />
            </div>
            <p className="fb-hero-in mt-4 text-[14px] text-mute" style={{ ["--i" as string]: 4 }}>
              {c.ctaBody}
            </p>
          </div>
        </div>
      </section>

      <section className={"border-t border-ink/8 " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <h2 className={h2Cls + " mx-auto"}><Words text={bauen.title} /></h2>
          </Reveal>
          <Flow />
        </div>
      </section>

      <section className={"border-t border-ink/8 bg-band " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <h2 className={h2Cls + " lg:sticky lg:top-28"}><Words text={ablauf.title} /></h2>
            </Reveal>
            <ol className="grid gap-4 sm:grid-cols-2">
              {ablauf.bullets.map((b, i) => (
                <Reveal key={b} delay={i * 90} className="h-full">
                  <li onPointerMove={spot} className="fb-spot flex h-full flex-col rounded-2xl border border-ink/10 bg-panel p-6">
                    <span className="font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-5 text-[16px] leading-relaxed text-ink sm:text-[17px]">{b}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={"border-t border-ink/8 " + abschnitt}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <h2 className={h2Cls}><Words text={c.proofTitle} /></h2>
          </Reveal>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3 sm:mt-12">
            {c.proofStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div onPointerMove={spot} className="fb-spot rounded-2xl border border-ink/10 bg-panel p-6 sm:p-7">
                  <dd className="font-display text-[2.5rem] font-medium leading-none tracking-[-0.03em] text-ink sm:text-[3rem]">{s.value}</dd>
                  <dt className="mt-3 text-[15px] leading-snug text-soft sm:text-[16px]">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="fb-grain relative overflow-hidden border-t border-ink/8">
        <Horizon hy="108%" />
        <div className="relative mx-auto max-w-3xl px-4 py-28 text-center sm:px-6 sm:py-36 lg:py-44">
          <Reveal>
            <h2 className={h2Cls + " mx-auto"}><Words text={c.ctaTitle} /></h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <CTAButton href={BOOKING_URL} label={c.ctaLabel} />
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-ink/10 bg-surface/90 p-3 backdrop-blur-md sm:hidden">
        <CTAButton className="w-full" href={BOOKING_URL} label={c.ctaLabel} />
      </div>
    </div>
  );
}
