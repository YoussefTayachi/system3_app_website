import { cookies } from "next/headers";

// Gleiches Muster wie lib/i18n/lang.ts in der Haupt-App (System3_App):
// Sprache liegt in einem Cookie, wird serverseitig in layout.tsx gelesen und
// als Startwert an den Client-Context durchgereicht -- dadurch ist der erste
// Client-Render identisch zum Server-Render, kein Hydration-Mismatch/Flackern.
export type Lang = "de" | "en";
export const COOKIE_NAME = "lang";

export async function getLangServer(): Promise<Lang> {
  const store = await cookies();
  const v = store.get(COOKIE_NAME)?.value;
  return v === "de" ? "de" : "en";
}

/* Das Design, hell oder dunkel, liegt im selben Cookie-Muster wie die
   Sprache: der Server liest es, setzt data-theme am html-Element, und der
   erste Aufbau stimmt schon. Ohne Cookie dunkel, so hat Youssef die Seite
   am 2026-09-02 abgenommen. */
export type Theme = "dark" | "light";
export const THEME_COOKIE = "theme";

export async function getThemeServer(): Promise<Theme> {
  const store = await cookies();
  return store.get(THEME_COOKIE)?.value === "light" ? "light" : "dark";
}
