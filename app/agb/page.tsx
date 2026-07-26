"use client";
import { LegalShell } from "../_legal/LegalShell";
import { useT } from "../language-provider";

export default function AGB() {
  const { t } = useT();
  const l = t.legal.termsPage;
  return (
    <LegalShell title={t.footer.agb} updated={l.updated}>
      <div className="space-y-8">
        <section>
          <h2 className="text-base font-semibold text-ink">{l.scopeHeading}</h2>
          <p className="mt-3">{l.scopeText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.formationHeading}</h2>
          <p className="mt-3">{l.formationText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.scopeOfServiceHeading}</h2>
          <p className="mt-3">{l.scopeOfServiceText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.byokHeading}</h2>
          <p className="mt-3">{l.byokText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.customerDutyHeading}</h2>
          <p className="mt-3">{l.customerDutyText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.availabilityHeading}</h2>
          <p className="mt-3">{l.availabilityText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.liabilityHeading}</h2>
          <p className="mt-3">{l.liabilityText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.termHeading}</h2>
          <p className="mt-3">{l.termText}</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-ink">{l.finalHeading}</h2>
          <p className="mt-3">{l.finalText}</p>
        </section>
      </div>
    </LegalShell>
  );
}
