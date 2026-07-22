"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Blendet children ein, sobald sie in den Viewport scrollen (einmalig,
 * bleibt danach sichtbar). Ergaenzt das bestehende einmalige Load-Fade
 * (.fade-up) um Bewegung beim Scrollen selbst -- ohne zusaetzliche
 * Abhaengigkeit, nur ein IntersectionObserver. `delay` in ms fuer leicht
 * gestaffelte Reveals bei mehreren Elementen nebeneinander (z. B. Karten
 * in einem Grid).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
