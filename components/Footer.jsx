export default function Footer() {
  return (
    <footer className="mt-20 bg-[#172033] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <h3 className="mb-3 text-2xl font-bold text-blue-300">
              Abi Portfolio
            </h3>
            
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Autre</h4>
            <div className="flex flex-col gap-2 text-slate-300">
              <a href="/projets">Projets</a>
              <a href="/temoignages">Témoignages</a>
             
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-slate-300">
              <a
                href="https://github.com/AbileneM"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-blue-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:abilene@gmail.com"
                className="transition hover:text-blue-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © 2026 Abilène Portfolio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}