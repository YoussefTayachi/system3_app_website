"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import type { Lang, Theme } from "./lang";
import { dict } from "./dict";

/**
 * Sprache und Design, beide aus einem Cookie, beide vom Server gelesen
 * (app/lang.ts) und hier an die Client-Bauteile gereicht. Die Sprache
 * braucht nach dem Wechsel router.refresh(), weil Server und Client
 * denselben Text rendern muessen. Das Design braucht das nicht: die Tokens
 * haengen an data-theme, und das Attribut wird direkt umgeschaltet.
 */
const Ctx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({
  lang: "de",
  setLang: () => {},
  theme: "dark",
  setTheme: () => {},
});

export function LanguageProvider({
  lang,
  theme: start,
  children,
}: {
  lang: Lang;
  theme: Theme;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [theme, setThemeState] = useState<Theme>(start);
  function setLang(next: Lang) {
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    document.documentElement.lang = next;
    router.refresh();
  }
  function setTheme(next: Theme) {
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    setThemeState(next);
  }
  return <Ctx.Provider value={{ lang, setLang, theme, setTheme }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

/** Bequemer Zugriff auf das Woerterbuch der aktuellen Sprache. */
export function useT() {
  const { lang } = useContext(Ctx);
  return { t: dict[lang], lang };
}

export function useTheme() {
  const { theme, setTheme } = useContext(Ctx);
  return { theme, setTheme };
}

const toggleCls =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-edge2 text-[13px] font-semibold uppercase text-soft transition-all hover:border-ink hover:text-ink active:scale-90 ";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      title={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      className={toggleCls + className}
    >
      {lang === "de" ? "EN" : "DE"}
    </button>
  );
}

/** Sonne und Mond, die ineinander drehen (globals.css, .fb-theme-icon). */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { t } = useT();
  const dunkel = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dunkel ? "light" : "dark")}
      title={dunkel ? t.nav.themeLight : t.nav.themeDark}
      aria-label={dunkel ? t.nav.themeLight : t.nav.themeDark}
      className={toggleCls + "relative " + className}
    >
      <span className="fb-theme-icon" data-off={dunkel ? undefined : ""}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px]">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <span className="fb-theme-icon" data-off={dunkel ? "" : undefined}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[18px] w-[18px]">
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
