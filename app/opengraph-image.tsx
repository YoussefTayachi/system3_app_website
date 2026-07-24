import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Frostbreaker: Leads finden, anreichern und persönlich kontaktieren, ohne vier Tools zu bezahlen";

// Wird zur Build-Zeit einmal gerendert und danach statisch ausgeliefert.
// Bewusst ohne @fontsource-Fonts: Satori kann die variablen woff2-Dateien
// nicht laden, deshalb traegt hier Gewicht und Groesse die Hierarchie
// statt der Display-Serife der Website.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#f9f9f8",
          backgroundImage:
            "radial-gradient(120% 90% at 8% -10%, rgba(14,165,233,0.16), transparent 58%), radial-gradient(80% 70% at 95% 5%, rgba(234,90,62,0.10), transparent 62%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0EA5E9",
          }}
        >
          frostbreaker
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 940,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "#1c1b19",
            }}
          >
            Mindestens 5.000 echte Ansprechpartner pro Woche kontaktieren.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 27,
              lineHeight: 1.4,
              color: "#57534e",
            }}
          >
            Finden, verifizieren, personalisieren — E-Mail und Telefon in einem
            Tool statt vier Abos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 56,
            borderTop: "1px solid #e9e8e6",
            paddingTop: 28,
          }}
        >
          {/* Kein "≈": der Satori-Fallback-Font hat den Glyph nicht und rendert
              ein leeres Kaestchen. "rund" traegt dieselbe Aussage in Worten. */}
          {[
            ["rund 133 Std.", "Recherche gespart / 1.000 Leads"],
            ["65 €", "tatsächliche API-Kosten dafür"],
            ["1 Tool", "statt vier einzelne Abos"],
          ].map(([value, label]) => (
            <div key={value} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#1c1b19",
                }}
              >
                {value}
              </div>
              <div style={{ display: "flex", marginTop: 6, fontSize: 19, color: "#79766f" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
