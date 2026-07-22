"use client";
import { Logo, CTAButton, BOOKING_URL } from "../_ui";
import { useT, LanguageToggle } from "../language-provider";

const EMAIL = "youssef.tayachi@frostbreaker.app";
const PHONE = "+43 676 9004865";
const PHONE_HREF = "+436769004865";

export default function KontaktPage() {
  const { t } = useT();
  const c = t.contactPage;
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-edge/60 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <CTAButton />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-faint">{c.eyebrow}</p>
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{c.title}</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft sm:text-base">{c.intro}</p>

        <div className="mt-10 grid gap-8 rounded-xl border border-edge/60 bg-panel p-6 sm:p-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team/youssef-tayachi.png"
              alt={c.name}
              className="aspect-square w-full max-w-[220px] rounded-xl object-cover shadow-sm"
            />
            <h2 className="mt-4 text-lg font-semibold text-ink">{c.name}</h2>
            <p className="text-sm text-mute">{c.role}</p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm leading-relaxed text-soft sm:text-base">{c.bio}</p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-lg border border-edge2 px-4 py-3 text-sm text-ink transition-colors hover:border-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-mute">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  <span className="block text-xs text-mute">{c.emailLabel}</span>
                  {EMAIL}
                </span>
              </a>

              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-3 rounded-lg border border-edge2 px-4 py-3 text-sm text-ink transition-colors hover:border-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-mute">
                  <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5V19a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span>
                  <span className="block text-xs text-mute">{c.phoneLabel}</span>
                  {PHONE}
                </span>
              </a>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-surface shadow-sm transition-all hover:opacity-85"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                  <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 9h16M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                {c.calendlyLabel}
              </a>
              <p className="text-xs text-mute">{c.calendlyNote}</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-mute">
          <a href="/" className="underline hover:text-ink">{c.backLabel}</a>
        </p>
      </section>

      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-xs text-mute sm:px-6">
          © {new Date().getFullYear()} Frostbreaker · {t.footer.location}
        </div>
      </footer>
    </div>
  );
}
