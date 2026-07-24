import { LegalShell } from "../_legal/LegalShell";

export const metadata = { title: "Datenschutzerklärung · Frostbreaker" };

export default function Datenschutz() {
  return (
    <LegalShell title="Datenschutzerklärung" updated="Juli 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">1. Verantwortlicher</h2>
          <p className="mt-3">
            Youssef Tayachi, Bernoullistraße 4/17, 1220 Wien, Österreich. Kontakt für Datenschutzanfragen:{" "}
            <a href="mailto:youssef.tayachi@frostbreaker.app" className="text-ink underline">youssef.tayachi@frostbreaker.app</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">2. Welche Daten wir verarbeiten</h2>
          <p className="mt-3">
            Beim Besuch dieser Website verarbeiten wir technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des
            Zugriffs, aufgerufene Seite) für den Betrieb und die Sicherheit der Seite. Ein eigenes Kontakt- oder
            Anfrageformular gibt es auf dieser Website nicht: E-Mail-Adresse und Telefonnummer auf der Kontaktseite
            sind direkte mailto:- bzw. tel:-Links, die euer eigenes E-Mail- oder Telefonprogramm öffnen, es werden
            dabei keine Daten an uns übermittelt oder gespeichert.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">3. Cookies</h2>
          <p className="mt-3">
            Diese Website setzt ein einziges, technisch notwendiges Cookie (<code className="rounded bg-panel2 px-1 py-0.5 text-xs">lang</code>),
            das eure gewählte Sprache (Deutsch/Englisch) für ein Jahr speichert. Es dient ausschließlich der
            Funktion der Seite, keiner Analyse oder Werbung, und erfordert daher keine gesonderte Einwilligung.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">4. Reichweitenmessung</h2>
          <p className="mt-3">
            Wir nutzen Vercel Web Analytics zur anonymisierten, aggregierten Auswertung von Seitenaufrufen (z. B.
            welche Unterseiten wie oft besucht werden). Der Dienst arbeitet cookie-frei und speichert keine
            IP-Adressen oder sonstige Daten, die einzelne Besucher:innen identifizierbar machen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">5. Terminbuchung über Calendly</h2>
          <p className="mt-3">
            Über den Button „Call buchen" gelangt ihr auf die Terminbuchungsseite unseres Anbieters Calendly
            (Calendly LLC, USA), die in einem neuen Tab außerhalb dieser Website geöffnet wird. Gebt ihr dort eure
            Daten ein (z. B. Name, E-Mail-Adresse, gewünschter Termin), gilt dafür die Datenschutzerklärung von
            Calendly, nicht diese hier. Wir erhalten von Calendly lediglich die zur Terminabwicklung notwendigen
            Angaben.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">6. Hosting</h2>
          <p className="mt-3">
            Diese Website wird bei Vercel Inc. (USA) gehostet. Bei der Übermittlung an Anbieter mit Sitz außerhalb
            der EU stellen wir die datenschutzkonforme Übermittlung über Standardvertragsklauseln der
            EU-Kommission sicher.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">7. Speicherdauer</h2>
          <p className="mt-3">
            Technische Zugriffsdaten (Server-Logs) werden automatisiert für einen kurzen, zur Fehleranalyse und
            Absicherung der Systeme notwendigen Zeitraum gespeichert und danach gelöscht. Das Sprach-Cookie bleibt
            höchstens ein Jahr auf eurem Gerät gespeichert oder bis ihr es selbst löscht.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">8. Eure Rechte</h2>
          <p className="mt-3">
            Ihr habt das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch bezüglich eurer personenbezogenen Daten. Wendet euch dazu an{" "}
            <a href="mailto:youssef.tayachi@frostbreaker.app" className="text-ink underline">youssef.tayachi@frostbreaker.app</a>. Außerdem
            habt ihr das Recht, euch bei der österreichischen Datenschutzbehörde (dsb.gv.at) zu beschweren.
          </p>
        </section>
      </div>
    </LegalShell>
  );
}
