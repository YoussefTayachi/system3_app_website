import { LegalShell } from "../_legal/LegalShell";

export const metadata = { title: "Impressum · Frostbreaker" };

export default function Impressum() {
  return (
    <LegalShell title="Impressum" updated="Juli 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">Angaben gemäß § 5 ECG, § 25 Mediengesetz</h2>
          <p className="mt-3">
            Youssef Tayachi<br />
            Einzelunternehmer (Gewerbeanmeldung ausständig)<br />
            Bernoullistraße 4/17<br />
            1220 Wien, Österreich
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">Vertretungsberechtigt</h2>
          <p className="mt-3">Youssef Tayachi</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">Kontakt</h2>
          <p className="mt-3">
            E-Mail: <a href="mailto:youssef.tayachi@frostbreaker.app" className="text-ink underline">youssef.tayachi@frostbreaker.app</a><br />
            Telefon: <a href="tel:+436769004865" className="text-ink underline">+43 676 9004865</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">Unternehmensgegenstand</h2>
          <p className="mt-3">Entwicklung und Betrieb von Software zur B2B-Lead-Recherche und -Anreicherung.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">Firmenbuch / UID</h2>
          <p className="mt-3">
            Aktuell als Einzelunternehmer ohne Firmenbucheintrag tätig, Gewerbeanmeldung befindet sich in Vorbereitung.
            Firmenbuchnummer und UID-Nummer werden hier ergänzt, sobald die Gewerbeanmeldung abgeschlossen ist.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">EU-Streitschlichtung</h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-ink underline">
              ec.europa.eu/consumers/odr
            </a>. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">Haftungshinweis</h2>
          <p className="mt-3">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den
            Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </div>
    </LegalShell>
  );
}
