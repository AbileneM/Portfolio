import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-sky-700">
          Abi Portfolio
        </Link>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-gray-700">
          <Link href="/">Accueil</Link>
          <Link href="/projets">Projets</Link>
          <Link href="/temoignages">Témoignages</Link>
          <Link href="/login">Login</Link>
          <Link href="/inscription">Inscription</Link>
        </nav>
      </div>
    </header>
  );
}