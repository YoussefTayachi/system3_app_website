"use client";
import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "./lang";
import { dict } from "./dict";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "de",
  setLang: () => {},
});

export function LanguageProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const router = useRouter();
  function setLang(next: Lang) {
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    document.documentElement.lang = next;
    router.refresh();
  }
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Bequemer Zugriff auf das Dictionary der aktuellen Sprache in Client-Komponenten. */
export function useT() {
  const { lang } = useContext(LangContext);
  return { t: dict[lang], lang };
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "de" ? "en" : "de")}
      title={lang === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
      className={
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-edge2 text-[11px] font-semibold uppercase text-soft transition-all hover:border-ink hover:text-ink active:scale-90 " +
        className
      }
    >
      {lang === "de" ? "EN" : "DE"}
    </button>
  );
}
