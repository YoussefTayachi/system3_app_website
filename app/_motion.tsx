"use client";

/**
 * Zwei kleine Bewegungen nach Godly-Art, 2026-09-02. Die Regeln dazu stehen
 * in globals.css bei .fb-word und .fb-spot.
 */

/** Ein Satz, Wort fuer Wort. Braucht einen .reveal-Vorfahren (Reveal). */
export function Words({ text, className = "" }: { text: string; className?: string }) {
  const woerter = text.split(" ");
  return (
    <span className={className}>
      {woerter.map((w, i) => (
        <span key={i}>
          <span className="fb-word" style={{ ["--i" as string]: i }}>
            {w}
          </span>
          {i < woerter.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/** Setzt die Zeigerposition als --mx/--my an die Karte, fuer .fb-spot. */
export function spot(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
  e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
}
