"use client";
import { LegalShell } from "../_legal/LegalShell";
import { useT } from "../language-provider";

const CONTACT_EMAIL = "youssef.tayachi@frostbreaker.app";

// EU-Streitschlichtung (ODR-Hinweis) bewusst weggelassen: die Pflicht dazu
// betrifft Online-Verkaeufe an Verbraucher (B2C), Frostbreaker ist laut AGB
// ausschliesslich B2B -- die Angabe waere hier nicht nur ueberfluessig,
// sondern sachlich falsch platziert.
export default function Impressum() {
  const { t } = useT();
  const l = t.legal.impressumPage;
  return (
    <LegalShell title={t.footer.impressum} updated={l.updated}>
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">{l.identityHeading}</h2>
          <p className="mt-3">
            {l.identityLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < l.identityLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.authorityHeading}</h2>
          <p className="mt-3">{l.authorityText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.chamberHeading}</h2>
          <p className="mt-3">{l.chamberText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.taxHeading}</h2>
          <p className="mt-3">{l.taxText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.contactHeading}</h2>
          <p className="mt-3">
            {l.contactEmailLabel}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline">{CONTACT_EMAIL}</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.purposeHeading}</h2>
          <p className="mt-3">{l.purposeText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.liabilityHeading}</h2>
          <p className="mt-3">{l.liabilityText}</p>
        </section>
      </div>
    </LegalShell>
  );
}
