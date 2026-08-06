"use client";
import { useMemo, useState } from "react";
import { useT } from "./language-provider";
import { CTAButton } from "./_ui";
import { SectionHeading } from "./_ui";

// Gleiche Annahmen wie ueberall sonst auf der Seite (Skalierungspotenzial-
// Sektion, pillars, starterExampleTiles) -- eine einzige Quelle der
// Wahrheit waere hier sauberer (siehe Kommentar unten), aber die Zahlen
// muessen exakt uebereinstimmen, deshalb hier bewusst dieselben Konstanten.
const MIN_PER_LEAD = 8;
const HOURLY_RATE = 45;
const API_COST_PER_LEAD = 0.065;
const STARTER_CAP = 5000;

// Die Termin-Zeile ist am 2026-08-06 ersatzlos entfallen, mit ihr die drei
// Konstanten REPLY_RATE (5 %), POSITIVE_RATE (25 %) und MEETING_RATE (50 %).
// Der Grund ist keine Geschmacksfrage: im eigenen Produktivkonto standen an
// dem Tag 755 kontaktierte Personen, 3 Antworten und 1 Termin -- also 0,4 %
// statt 5 %, Faktor 12. Der Rechner hat damit "≈ 6,3 Termine/Monat"
// versprochen, waehrend zwei Bildschirme weiter unten der Abschnitt
// "Was wir nicht behaupten" erklaert, dass wir unter 30 Kontakten nicht
// einmal eine Prozentzahl zeigen. Von zwei widersprechenden Zahlen glaubt
// man keine, und die geschenkte war die, die uns von den Wettbewerbern
// unterscheidet.
//
// Was bleibt, ist rechnerisch gedeckt: 8 Min/Lead Recherche, 45 EUR/Std.,
// 6,5 Ct API-Kosten je Lead. Wer die Termin-Prognose zurueckholen will,
// braucht dafuer eine Quote aus einer nennbaren Quelle -- nicht diese drei
// Zahlen wieder.
function useCalc(leads: number) {
  return useMemo(() => {
    const hours = (leads * MIN_PER_LEAD) / 60;
    const laborValue = hours * HOURLY_RATE;
    const apiCost = leads * API_COST_PER_LEAD;
    const plan = leads <= STARTER_CAP ? "starter" : "agency";
    return { hours, laborValue, apiCost, plan };
  }, [leads]);
}

/**
 * Interaktiver Sparpotenzial-Rechner, der wichtigste einzelne Conversion-
 * Baustein aus dem Design-Upgrade-Plan (siehe Design_Upgrade_Plan.md,
 * Stufe 2 Punkt 1): statt eines generischen "Kostenlos testen"-Buttons als
 * ersten CTA bekommt der Besucher sofort einen auf die eigene Zielgroesse
 * zugeschnittenen, live berechneten Wert zurueck -- niedrigere Huerde,
 * hoehere Relevanz. Nutzt exakt dieselbe, an anderer Stelle bereits offen
 * gelegte Methodik (8 Min/Lead, 45EUR/Std., 6,5 Ct API-Kosten/Lead), keine
 * neue Zahl wird erfunden -- siehe den Kommentar an useCalc dazu, warum die
 * Termin-Prognose nicht mehr dabei ist.
 */
export function SavingsCalculator() {
  const { t, lang } = useT();
  const c = t.calculator;
  const [leads, setLeads] = useState(1000);
  const calc = useCalc(leads);
  const fmt = (n: number, digits = 0) =>
    n.toLocaleString(lang === "de" ? "de-DE" : "en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });
  const plan = t.pricing.plans.find((p) => p.id === calc.plan)!;

  return (
    <section id="rechner" className="scroll-mt-20 border-y border-edge/60 bg-panel2">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} />
        <p className="-mt-6 mb-8 max-w-md text-sm leading-relaxed text-soft sm:text-base">{c.subtitle}</p>

        <div className="rounded-3xl border border-edge/60 bg-panel p-6 shadow-xl shadow-ink/5 sm:p-10">
          <div className="flex items-center justify-between">
            <label htmlFor="leads-range" className="text-sm font-medium text-ink">{c.sliderLabel}</label>
            <span className="font-display rounded-full bg-ink px-3 py-1 text-sm font-semibold text-surface">
              {fmt(leads)}
            </span>
          </div>
          <div className="mt-5">
            <input
              id="leads-range"
              type="range"
              min={100}
              max={10000}
              step={100}
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              aria-valuetext={`${fmt(leads)} ${c.sliderLabel}`}
              className="range-touch w-full cursor-pointer appearance-none bg-transparent"
            />
            <div className="flex justify-between text-[11px] text-mute">
              <span>100</span>
              <span>10.000</span>
            </div>
          </div>

          {/* Zwei Kacheln statt drei, seit die Termin-Prognose raus ist. Bewusst
              sm:grid-cols-2 und nicht weiterhin -cols-3 mit einer Luecke: eine
              leere dritte Spalte liest sich als fehlender Inhalt. */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-panel2 p-5">
              <p className="font-display text-2xl font-semibold text-ink">{fmt(calc.hours)} {c.hoursUnit}</p>
              <p className="mt-1 text-xs text-mute">{c.hoursLabel}</p>
            </div>
            <div className="rounded-2xl bg-panel2 p-5">
              <p className="font-display text-2xl font-semibold text-ink">{fmt(calc.laborValue)} €</p>
              <p className="mt-1 text-xs text-mute">{c.laborLabel}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-coral-soft p-5 sm:flex-row">
            <div>
              <p className="text-sm text-ink">
                {c.planPrefix} <span className="font-semibold">{plan.label}</span> ({plan.price}{plan.priceNote}) + {c.apiCostPrefix} {fmt(calc.apiCost)} €.
              </p>
              <p className="mt-1 text-xs text-mute">{t.cta.trialNote}</p>
            </div>
            <CTAButton className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
