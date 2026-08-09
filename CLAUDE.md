# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for Frostbreaker (a B2B lead-gen/outreach SaaS product, "System3_App" is the
sibling app repo). Next.js 15 App Router, React 19, Tailwind v4, TypeScript. No backend, no
database, no self-serve signup on this site — every CTA leads to a Calendly booking link.

## Commands

```
npm run dev      # next dev, default port 3000
npm run build    # next build
npm run start    # next start (serve production build)
npm run lint     # next lint
```

There is no test suite in this repo (no test script, no test files).

### Dev server: use port 3100, not `next dev` directly

Run `node dev-3100.js` instead of `npm run dev` when launching through the sandbox/preview tooling.
That script force-`chdir`s into the project root before starting Next on port 3100 (port 3000 is
used by another project on this machine). This matters because the preview environment sometimes
launches the dev server from a different working directory, which breaks two things silently:
Tailwind v4's automatic content detection (it scans from `cwd`, not from the CSS file location) and
Next's project-root inference (`outputFileTracingRoot` in `next.config.mjs` pins this explicitly for
the same reason — an ancestor `package-lock.json` outside this repo would otherwise make Next pick
the wrong root, breaking dev-server hydration entirely). If a page loads with no Tailwind styling or
no interactivity, check the working directory first.

## Architecture

### Routing: file-based, App Router

Each top-level folder under `app/` (`funktionen/`, `fuer-agenturen/`, `kontakt/`, `eigene-software/`,
`case-study/`, `start/`, and the legal pages `agb/`, `avv/`, `datenschutz/`, `impressum/`) is a route
with its own `page.tsx`. Routes that need per-page `<title>`/OpenGraph metadata add a `layout.tsx`
that only exports `metadata` (built from the dictionary) and passes `children` through — see
`app/fuer-agenturen/layout.tsx` for the pattern.

Files and folders prefixed with `_` under `app/` (`_ui.tsx`, `_mockups.tsx`, `_app-mockups.tsx`,
`_compare.tsx`, `_walkthrough.tsx`, `_system-map.tsx`, `_illustration.tsx`, `_icons.tsx`,
`_legal/`, etc.) are Next.js private folders/modules — shared components and data, excluded from
routing. They are not orphaned or dead code just because they lack a route.

### i18n: cookie-based, single dictionary file

- `app/dict.ts` is the single source of truth for all copy on the site, in German (`de`) and English
  (`en`). It's large (3000+ lines) — search it rather than reading it end to end.
  `type Dictionary = typeof de` forces `en` to have the exact same shape as `de`; adding a key to one
  without the other is a type error.
- `app/lang.ts` reads the `lang` cookie server-side (`getLangServer`, default `en`).
- `app/language-provider.tsx` receives that value in `RootLayout` (`app/layout.tsx`) and exposes it
  to client components via `useT()` (returns `{ t, lang }`, `t` being `dict[lang]`) and `useLang()`.
  Switching language sets the cookie and calls `router.refresh()`, so server and first client render
  always agree — no hydration mismatch/flash.
- Icons live separately in `app/_icons.tsx` since they're language-independent.

### No self-serve — everything points at one Calendly link

`BOOKING_URL` in `app/_ui.tsx` is the single booking link every CTA resolves to by default
(`CTAButton`, `CTAGroup`). This was a deliberate product decision (see `KONVERSION.md`), not an
oversight — do not add a signup/trial flow back in without checking with the user first.

### Styling

Tailwind v4 via `@import "tailwindcss"` in `app/globals.css`, with design tokens defined as CSS
custom properties (`--c-*`) and re-exposed through `@theme inline` (`--color-*`, `--font-*`) rather
than `tailwind.config.js` (there isn't one — v4 is CSS-first). Two fonts: Space Grotesk (UI/body)
and Fraunces (display serif for headline accents), loaded as self-hosted `@fontsource-variable`
packages rather than `next/font/google` — deliberately, so the production build doesn't depend on a
live fetch to Google Fonts at build time.

Scroll-triggered fade-ins go through the `Reveal` component (`app/reveal.tsx`, IntersectionObserver,
`.reveal`/`.reveal-visible` classes), not CSS scroll-driven animations, for consistent browser
support.

### Content/planning docs at repo root

Root-level `*.md` files (`POSITIONIERUNG.md`, `UMBAU-PLAN.md`, `KONVERSION.md`, `CONTENT.md`,
`CONTENT-BACKLOG.md`, `APP-TO-WEBSITE-PLAN.md`, `NEVERBOUNCE-PLAN.md`, `VISUALS-PLAN.md`,
`NAECHSTER-SCHRITT.md`) are German-language working documents recording product/positioning
decisions and their rationale, not implementation docs. Check each doc's status line near the top
("Zur Freigabe"/"Zur Abstimmung" = proposed, not yet implemented, vs. a plan whose steps are marked
done) before assuming its contents reflect the current state of the site — cross-check against
`app/dict.ts` and `app/page.tsx`, which are authoritative for what's actually live.

## Conventions

- Comments in code and commit messages are written in German, matching the rest of the codebase.
  Comments explain *why* a decision was made (often with a dated rationale), not what the code does
  — follow that pattern rather than adding what/how comments.
- Commit messages are short, descriptive, sentence-style German phrases without conventional-commit
  prefixes (`feat:`, `fix:`, etc.) — e.g. "Kein Trial mehr, Agenturen zuerst, und Zahlen in
  Agenturgroesse".
