import { LegalShell } from "../_legal/LegalShell";

export const metadata = { title: "Auftragsverarbeitungsvertrag · Thaw" };

export default function AVV() {
  return (
    <LegalShell title="Auftragsverarbeitungsvertrag (AVV)" updated="Juli 2026">
      <div className="space-y-8">
        <section>
          <p>
            Dieser Auftragsverarbeitungsvertrag nach Art. 28 DSGVO gilt ergänzend zu den AGB zwischen dem Kunden
            (Verantwortlicher) und [Firmenname] („Thaw“, Auftragsverarbeiter), soweit Thaw im Auftrag des Kunden
            personenbezogene Daten von Ansprechpartnern bei Zielunternehmen verarbeitet.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">1. Gegenstand und Dauer</h2>
          <p className="mt-3">
            Gegenstand ist die Recherche, Anreicherung und Verifizierung von geschäftlichen Kontaktdaten im Auftrag
            des Kunden. Die Dauer entspricht der Laufzeit des Hauptvertrags.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">2. Art und Zweck der Verarbeitung</h2>
          <p className="mt-3">
            Verarbeitet werden Name, berufliche E-Mail-Adresse und Firmenzugehörigkeit von Ansprechpartnern bei den
            vom Kunden ausgewählten Zielunternehmen, zum Zweck der B2B-Kontaktanbahnung durch den Kunden.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">3. Kreis der Betroffenen</h2>
          <p className="mt-3">Ansprechpartner bei den vom Kunden über Thaw recherchierten Unternehmen.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">4. Pflichten von Thaw</h2>
          <p className="mt-3">
            Thaw verarbeitet die Daten ausschließlich auf dokumentierte Weisung des Kunden, gewährleistet
            Vertraulichkeit, trifft angemessene technische und organisatorische Maßnahmen (u. a. Verschlüsselung,
            Zugriffskontrollen, EU-Hosting) und unterstützt den Kunden bei der Erfüllung von Betroffenenrechten.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">5. Unterauftragsverarbeiter</h2>
          <p className="mt-3">Thaw setzt aktuell folgende Unterauftragsverarbeiter ein:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Supabase (Datenbank, EU-Region Frankfurt)</li>
            <li>Vercel Inc. (Hosting)</li>
            <li>OpenAI (KI-gestützte Textgenerierung)</li>
            <li>Hunter.io (E-Mail-Anreicherung)</li>
            <li>Google (Google Places API für Unternehmensrecherche)</li>
            <li>NeverBounce (E-Mail-Verifizierung)</li>
          </ul>
          <p className="mt-3">
            Der Kunde stimmt dem Einsatz dieser Unterauftragsverarbeiter zu. Über Änderungen informieren wir mit
            angemessener Frist, der Kunde kann in diesem Fall widersprechen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">6. Löschung und Rückgabe</h2>
          <p className="mt-3">
            Nach Vertragsende löscht Thaw die im Auftrag verarbeiteten Daten oder gibt sie auf Wunsch des Kunden
            zurück, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">7. Kontakt</h2>
          <p className="mt-3">
            Bei Fragen zu diesem AVV:{" "}
            <a href="mailto:youtaybusiness@gmail.com" className="text-ink underline">[Kontakt-E-Mail]</a>.
          </p>
        </section>
      </div>
    </LegalShell>
  );
}
