"use client";
import Link from "next/link";
import { SiteHeader, SiteFooter, h1Cls } from "./_ui";
import { useT } from "./language-provider";

/**
 * Die Auffangseite.
 *
 * Aus der Abnahmeliste (Website_Business/Lehren/checkliste.md, "Zum
 * Schluss"): "Jedes Linkziel existiert. Fusszeile, Navigation, Anker.
 * Auffangseite steht." Bis heute lieferte diese Website die Standardseite
 * von Next aus: schwarze Systemschrift auf Weiss, ohne Kopfleiste, ohne
 * Wortmarke, ohne einen Weg zurueck.
 *
 * MIT KOPF- UND FUSSLEISTE. Eine Fehlerseite ohne Navigation ist eine
 * Sackgasse -- der Besucher hat dann genau zwei Moeglichkeiten, zurueck oder
 * weg. Mit der Kopfleiste ist er weiter auf der Website und kommt ueberall
 * hin, und die drei Wege darunter nehmen ihm die Suche ab.
 *
 * KEIN CTA. Wer auf einem toten Link landet, hat nicht gerade eine
 * Kaufentscheidung getroffen. Ein "Gespraech buchen" an dieser Stelle liest
 * sich, als sei der Fehler eine Gelegenheit. Der Knopf steht in der
 * Kopfleiste, das reicht.
 */
export default function NotFound() {
  const { t } = useT();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-28 sm:px-6">
        <p className="text-[15px] font-medium uppercase tracking-[0.14em] text-accent">404</p>
        <h1 className={"mt-4 " + h1Cls}>{t.notFound.title}</h1>
        <p className="mt-6 text-[19px] leading-relaxed text-soft">{t.notFound.body}</p>
        <ul className="mt-8 flex flex-col gap-3">
          {t.notFound.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="tap-link group gap-2 text-[19px] font-medium text-ink underline decoration-edge3 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {l.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
