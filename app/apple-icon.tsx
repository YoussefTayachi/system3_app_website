import { ImageResponse } from "next/og";

/**
 * Das Symbol fuer den Startbildschirm von iOS und iPadOS.
 *
 * Aus der Abnahmeliste (Website_Business/Lehren/checkliste.md, "Kopf des
 * Dokuments"): `icon.svg`, `favicon.ico` und `apple-icon.png` gehoeren
 * zusammen, und das dritte fehlte. Ohne es nimmt iOS beim Ablegen auf dem
 * Startbildschirm einen Ausschnitt der Seite -- bei dieser Seite also ein
 * Stueck des Helden, weiss auf weiss.
 *
 * WARUM GEZEICHNET UND NICHT ABGELEGT. Die Bildmarke steht in app/icon.svg,
 * und zwei Dateien mit demselben Zeichen laufen frueher oder spaeter
 * auseinander. Hier wird derselbe Pfad zur Bauzeit einmal auf 180 Pixel
 * gerendert; wer die Marke aendert, aendert sie an zwei Stellen im selben
 * Repo statt in einer SVG und einem PNG, das niemand mehr oeffnen kann.
 *
 * OHNE ECKENRUNDUNG. iOS beschneidet das Symbol selbst und legt seinen
 * eigenen Radius an. Ein mitgelieferter Radius ergibt einen zweiten Rand
 * innerhalb des ersten -- sichtbar als heller Saum um das Zeichen.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const alt = "Frostbreaker";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0284C7",
        }}
      >
        {/* Derselbe Pfad wie in app/icon.svg, auf 180 statt 512 gerechnet.
            Bei dieser Groesse traegt das f noch: der Querbalken misst
            umgerechnet 22 Pixel, die Strichstaerke 22. */}
        <svg width="180" height="180" viewBox="0 0 512 512">
          <g fill="none" stroke="#FFFFFF" strokeWidth="62" strokeLinecap="butt">
            <path d="M 262 400 V 228 A 74 74 0 0 1 336 154" />
            <path d="M 182 252 H 342" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
