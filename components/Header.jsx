import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-[#fffdf9]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
          Abi Portfolio
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="transition hover:text-blue-700">
            Accueil
          </Link>
          <Link href="/projets" className="transition hover:text-blue-700">
            Projets
          </Link>
          <Link href="/temoignages" className="transition hover:text-blue-700">
            Témoignages
          </Link>
          <Link href="/login" className="transition hover:text-blue-700">
            Connexion
          </Link>
          <Link
            href="/inscription"
            className="rounded-full bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800"
          >
            Inscription
          </Link>
        </nav>
      </div>
    </header>
  );
}