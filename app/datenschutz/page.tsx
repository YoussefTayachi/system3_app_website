import { LegalShell } from "../_legal/LegalShell";

export const metadata = { title: "Datenschutzerklärung · Thaw" };

export default function Datenschutz() {
  return (
    <LegalShell title="Datenschutzerklärung" updated="Juli 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">1. Verantwortlicher</h2>
          <p className="mt-3">
            [Firmenname], [Adresse], Österreich. Kontakt für Datenschutzanfragen:{" "}
            <a href="mailto:youtaybusiness@gmail.com" className="text-ink underline">[Kontakt-E-Mail]</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">2. Welche Daten wir verarbeiten</h2>
          <p className="mt-3">
            Beim Besuch dieser Website verarbeiten wir technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des
            Zugriffs) für den Betrieb und die Sicherheit der Seite. Wenn ihr über das Icebreaker-Formular auf dieser
            Seite euren Firmennamen, eure Website und eure E-Mail-Adresse angebt, verarbeiten wir diese Daten
            zusätzlich für den unten beschriebenen Zweck.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">3. Icebreaker-Demo und Kontaktaufnahme</h2>
          <p className="mt-3">
            Über das Formular „Kostenlosen Icebreaker generieren“ könnt ihr freiwillig Firmenname, Website und
            E-Mail-Adresse angeben, um ein Beispiel für eine personalisierte E-Mail-Ansprache zu erhalten. Mit dem
            Absenden stimmt ihr ausdrücklich zu, dass wir euch per E-Mail zu Thaw kontaktieren dürfen (Art. 6 Abs. 1
            lit. a DSGVO, Einwilligung). Diese Einwilligung könnt ihr jederzeit formlos per E-Mail an{" "}
            <a href="mailto:youtaybusiness@gmail.com" className="text-ink underline">[Kontakt-E-Mail]</a> widerrufen.
            Ohne diese Einwilligung wird das Formular nicht abgeschickt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">4. Hosting und Auftragsverarbeiter</h2>
          <p className="mt-3">Für den Betrieb dieser Website setzen wir folgende Dienstleister ein:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Vercel Inc. (Hosting der Website)</li>
            <li>Supabase (Datenbank, Serverstandort Frankfurt/EU)</li>
            <li>OpenAI (Erzeugung des Beispiel-Icebreakers aus den angegebenen Firmendaten)</li>
          </ul>
          <p className="mt-3">
            Bei Anbietern mit Sitz außerhalb der EU (z. B. Vercel, OpenAI) stellen wir die datenschutzkonforme
            Übermittlung über Standardvertragsklauseln der EU-Kommission sicher.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">5. Speicherdauer</h2>
          <p className="mt-3">
            Über das Formular übermittelte Daten speichern wir, bis der Zweck der Kontaktaufnahme erfüllt ist oder ihr
            der Speicherung widersprecht, längstens jedoch 24 Monate.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">6. Eure Rechte</h2>
          <p className="mt-3">
            Ihr habt das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch bezüglich eurer personenbezogenen Daten. Wendet euch dazu an{" "}
            <a href="mailto:youtaybusiness@gmail.com" className="text-ink underline">[Kontakt-E-Mail]</a>. Außerdem
            habt ihr das Recht, euch bei der österreichischen Datenschutzbehörde (dsb.gv.at) zu beschweren.
          </p>
        </section>
      </div>
    </LegalShell>
  );
}
