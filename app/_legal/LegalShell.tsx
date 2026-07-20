import Link from "next/link";

export function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-edge/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-3xl font-extrabold tracking-tighter text-[#0EA5E9]">frostbreaker</span>
          </Link>
          <Link href="/" className="text-sm text-soft hover:text-ink">Zurück zur Startseite</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h1>
        <p className="mt-2 text-xs text-mute">Stand: {updated} · Entwurf, noch nicht anwaltlich geprüft</p>
        <div className="legal-content mt-8 text-sm leading-relaxed text-soft">{children}</div>
      </main>
      <footer className="border-t border-edge/60">
        <div className="mx-auto max-w-3xl px-4 py-8 text-xs text-mute sm:px-6">
          © {new Date().getFullYear()} Frostbreaker · Wien, Österreich
        </div>
      </footer>
    </div>
  );
}
