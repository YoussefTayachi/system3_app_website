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
  return v === "en" ? "en" : "de";
}
