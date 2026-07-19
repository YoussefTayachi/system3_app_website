import { Logo, CTAButton, StatTile, FactBox } from "../_ui";
import { AgencyMockup } from "../_mockups";
import { heroStatTiles } from "../_copy";

export const metadata = {
  title: "Thaw für Agenturen · Kurzübersicht",
  description: "Lead-Gen und Cold Outreach für alle eure Kunden, aus einem Tool, unter eurem eigenen Namen.",
};

/**
 * Schlanke, navigationsfreie Landingpage speziell für Klicks aus der eigenen
 * Kaltakquise (E-Mail/Anruf). Bewusst kein Nav, keine Vergleichstabelle, keine
 * FAQ: wer hierher klickt, hat den Haken aus der Mail schon im Kopf und soll
 * in Sekunden bestätigt sehen, dass das hier genau das ist ("Message Match").
 * Die volle Seite mit allen Belegen bleibt unter thaw.io/ für alle anderen
 * Besucher (organisch, weitergeleitet, etc.).
 */
export default function StartPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-edge/60">
        <div className="mx-auto flex max-w-3xl items-center justify-center px-4 py-6 sm:px-6">
          <Logo />
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
          Lead-Gen und Cold Outreach für alle eure Kunden, aus einem Tool, unter eurem eigenen Namen.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-soft">
          Ein eigener Workspace pro Kunde, ein teilbarer Report-Link im Look des jeweiligen Kunden,
          und ein Dashboard, das gebuchte Meetings und Pipeline-Wert zeigt, nicht nur Öffnungsraten.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3">
          <CTAButton />
          <span className="text-xs text-mute">15 Minuten, live an eurer eigenen Nische, kein Skript von der Stange.</span>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {heroStatTiles.map((s) => (
            <StatTile key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <section className="border-y border-edge/60 bg-panel2">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-center text-lg font-semibold tracking-tight text-ink">
            Ein Login, ein Workspace pro Kunde
          </h2>
          <div className="mt-6">
            <AgencyMockup />
          </div>
          <FactBox
            fact="Bei reinen Versand-Tools ist Multi-Kunden-Verwaltung meist ein separat bepreistes Zusatzmodul."
            sub="Bei Thaw ist das von Anfang an Teil des Produkts, weil Lead-Suche, Personalisierung und Reporting sowieso pro Kunde getrennt laufen müssen."
            source="Marktvergleich White-Label-Cold-Email-Tools, 2026"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          15 Minuten, wir zeigen es live an eurer eigenen Nische
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-soft">
          Kein Verkaufsgespräch von der Stange, sondern eine echte Suche mit euren eigenen Kriterien.
        </p>
        <CTAButton className="mt-6" />
        <p className="mt-6 text-xs text-mute">
          <a href="/" className="underline hover:text-ink">Lieber erst alle Details ansehen?</a>
        </p>
      </section>

      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center text-xs text-mute sm:px-6">
          © {new Date().getFullYear()} Thaw · Wien, Österreich
        </div>
      </footer>
    </div>
  );
}
