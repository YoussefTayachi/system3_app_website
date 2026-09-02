"use client";
import { useT } from "./language-provider";
import { Reveal } from "./reveal";
import { spot } from "./_motion";

/**
 * Die Funktionen, in einer Tafel statt auf einer eigenen Seite.
 *
 * Youssef am 2026-09-02: "entfern den gesamten Features-Bereich ... Features
 * kannst du evtl in einer schoenen Tabelle zusammenfassen und fertig." Die
 * Seite /funktionen hatte neun Gruppen mit je einer Nachbildung; hier steht
 * je Funktion ein Name und ein Satz. Was jemand genauer wissen will, wird
 * im Gespraech geklaert.
 */

function Ikon({ id }: { id: string }) {
  const s = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
      {id === "find" && (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" {...s} />
          <path d="m19 19-4.3-4.3" {...s} />
        </>
      )}
      {id === "enrich" && (
        <>
          <circle cx="12" cy="8.5" r="3.6" {...s} />
          <path d="M5 20c1.2-4.2 3.9-6.3 7-6.3s5.8 2.1 7 6.3" {...s} />
        </>
      )}
      {id === "personalize" && (
        <>
          <path d="M4 20 15.5 8.5l3 3L7 23H4v-3Z" {...s} />
          <path d="m13.5 10.5 3 3" {...s} />
        </>
      )}
      {id === "write" && (
        <>
          <path d="M4 6h16v12H4z" {...s} />
          <path d="m4 7 8 6 8-6" {...s} />
        </>
      )}
      {id === "check" && (
        <>
          <circle cx="12" cy="12" r="8.5" {...s} />
          <path d="m8.5 12.3 2.4 2.4 4.8-5" {...s} />
        </>
      )}
      {id === "send" && <path d="M20.5 3.5 10 14M20.5 3.5 14 20.5 10.5 13.5 3.5 10l17-6.5Z" {...s} />}
      {id === "protect" && (
        <>
          <path d="M12 3.5 5 6.5v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9v-5l-7-3Z" {...s} />
          <path d="m9.5 12 1.8 1.8 3.4-3.6" {...s} />
        </>
      )}
      {id === "pipeline" && <path d="M4 5h4v14H4zM10 5h4v9h-4zM16 5h4v6h-4z" {...s} />}
      {id === "claude" && (
        <>
          <path d="M4 12a8 8 0 0 1 14.5-4.6" {...s} />
          <path d="M20 12a8 8 0 0 1-14.5 4.6" {...s} />
          <path d="M18.5 4v3.5H15M5.5 20v-3.5H9" {...s} />
        </>
      )}
    </svg>
  );
}

export function FeatureTable() {
  const { t } = useT();
  const f = t.featureTable;
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/8 sm:grid-cols-2 lg:grid-cols-3">
      {f.rows.map((r, i) => (
        <Reveal key={r.id} delay={i * 50} className="h-full bg-panel">
          <li onPointerMove={spot} className="fb-spot flex h-full items-start gap-4 p-5 sm:p-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
              <Ikon id={r.id} />
            </span>
            <span className="min-w-0">
              <span className="block text-[16px] font-semibold leading-snug text-ink sm:text-[17px]">{r.name}</span>
              <span className="mt-1 block text-[15px] leading-relaxed text-soft">{r.text}</span>
            </span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
