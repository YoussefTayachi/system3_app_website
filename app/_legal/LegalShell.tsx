import Link from "next/link";

export function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-edge/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
              T
            </div>
            <span className="text-base font-semibold tracking-tight text-ink">Thaw</span>
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
          © {new Date().getFullYear()} Thaw · Wien, Österreich
        </div>
      </footer>
    </div>
  );
}
