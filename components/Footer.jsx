export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row">
        <p>© 2026 Abi Portfolio. Tous droits réservés.</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/AbileneM"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-700"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-700"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abilene@gmail.com"
            className="hover:text-sky-700"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}