"use client";
import { LegalShell } from "../_legal/LegalShell";
import { useT } from "../language-provider";

const CONTACT_EMAIL = "youssef.tayachi@frostbreaker.app";

export default function Datenschutz() {
  const { t } = useT();
  const l = t.legal.privacyPage;
  return (
    <LegalShell title={t.footer.datenschutz} updated={l.updated}>
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">{l.controllerHeading}</h2>
          <p className="mt-3">
            {l.controllerText} {l.controllerContactLabel}{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline">{CONTACT_EMAIL}</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.dataHeading}</h2>
          <p className="mt-3">{l.dataText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.cookiesHeading}</h2>
          <p className="mt-3">{l.cookiesText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.analyticsHeading}</h2>
          <p className="mt-3">{l.analyticsText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.calendlyHeading}</h2>
          <p className="mt-3">{l.calendlyText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.hostingHeading}</h2>
          <p className="mt-3">{l.hostingText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.retentionHeading}</h2>
          <p className="mt-3">{l.retentionText}</p>
        </section>

        {/* Beschwerderecht bei der Datenschutzbehoerde: Pflichtangabe nach
            Art. 13(2)(d)/14(2)(e) DSGVO, keine optionale Zusatzinfo -- bleibt
            deshalb bewusst stehen, siehe Chat-Erklaerung. */}
        <section>
          <h2 className="text-base font-semibold text-ink">{l.rightsHeading}</h2>
          <p className="mt-3">{l.rightsText}</p>
        </section>
      </div>
    </LegalShell>
  );
}
