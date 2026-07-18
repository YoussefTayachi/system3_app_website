import { LegalShell } from "../_legal/LegalShell";

export const metadata = { title: "AGB · Thaw" };

export default function AGB() {
  return (
    <LegalShell title="Allgemeine Geschäftsbedingungen" updated="Juli 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">1. Geltungsbereich</h2>
          <p className="mt-3">
            Diese AGB gelten für alle Verträge zwischen [Firmenname] („Thaw“, „wir“) und Unternehmern (B2B) über die
            Nutzung der Software Thaw zur Recherche, Anreicherung, Verifizierung und Personalisierung von
            B2B-Kontaktdaten.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">2. Vertragsschluss</h2>
          <p className="mt-3">
            Ein Vertrag kommt zustande, wenn wir nach einem Demo-Gespräch ein individuelles Angebot erstellen und der
            Kunde dieses schriftlich (auch per E-Mail) annimmt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">3. Leistungsumfang</h2>
          <p className="mt-3">
            Thaw stellt eine Software zur Verfügung, mit der Kunden Unternehmen recherchieren, Ansprechpartner samt
            E-Mail-Adressen ermitteln, diese Adressen verifizieren und automatisiert personalisierte Textbausteine
            erstellen lassen können. Die konkret nutzbaren Datenquellen (z. B. Google Places, Hunter) können sich
            ändern.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">4. Bring Your Own Key (BYOK)</h2>
          <p className="mt-3">
            Kunden hinterlegen eigene API-Zugangsdaten Dritter (z. B. für Kartendienste, E-Mail-Anreicherung,
            KI-Textgenerierung) und tragen die dadurch beim jeweiligen Drittanbieter anfallenden Kosten selbst.
            Zusätzlich fällt eine Nutzungsgebühr für Thaw an, die individuell vereinbart wird.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">5. Pflichten des Kunden</h2>
          <p className="mt-3">
            Der Kunde ist allein dafür verantwortlich, die mit Thaw recherchierten Kontakte im Einklang mit den für
            ihn geltenden Regeln zur Direktwerbung zu kontaktieren (u. a. TKG in Österreich, UWG in Deutschland).
            Thaw stellt ein Werkzeug bereit, prüft aber nicht die rechtliche Zulässigkeit einzelner Kampagnen des
            Kunden.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">6. Verfügbarkeit</h2>
          <p className="mt-3">
            Wir bemühen uns um eine hohe Verfügbarkeit, sichern jedoch keine bestimmte Uptime zu. Wartungsarbeiten
            werden nach Möglichkeit angekündigt. Für die Verfügbarkeit von Drittanbieter-Diensten (z. B. Hunter,
            OpenAI) übernehmen wir keine Gewähr.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">7. Haftung</h2>
          <p className="mt-3">
            Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie nach zwingenden gesetzlichen
            Vorschriften. Im Übrigen ist die Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">8. Laufzeit und Kündigung</h2>
          <p className="mt-3">Laufzeit und Kündigungsfristen werden im jeweiligen individuellen Angebot festgelegt.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">9. Schlussbestimmungen</h2>
          <p className="mt-3">
            Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist, soweit gesetzlich
            zulässig, [Gerichtsstand].
          </p>
        </section>
      </div>
    </LegalShell>
  );
}
