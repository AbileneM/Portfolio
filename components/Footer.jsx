export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <h3 className="mb-3 text-2xl font-bold text-sky-400">
              Abi Portfolio
            </h3>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Développeuse fullstack passionnée par la création d’interfaces
              modernes et d’applications complètes.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Navigation</h4>
            <div className="flex flex-col gap-2 text-slate-300">
              <a href="/">Accueil</a>
              <a href="/projets">Projets</a>
              <a href="/temoignages">Témoignages</a>
              <a href="/login">Connexion</a>
              <a href="/inscription">Inscription</a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Me contacter</h4>
            <div className="flex flex-col gap-3 text-slate-300">
              <a
                href="https://github.com/AbileneM"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abileneahue"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-400"
              >
                LinkedIn
              </a>
              <a
                href="mailto:abileneahue@gmail.com"
                className="transition hover:text-sky-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © 2026 Abilene Ahue Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}