import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      {/* HERO */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Développeuse Fullstack
          </p>

          <h1 className="mb-5 text-5xl font-bold leading-tight text-slate-900 md:text-5xl">
            Bonjour, je suis Abilène.
          </h1>

          <p className="mb-4 max-w-2xl text-lg leading-8 text-slate-600">
            Étudiante en programmation informatique, passionnée par le développement web,
            les interfaces modernes et la gestion de projets.
          </p>

          <p className="mb-8 text-base leading-8 text-slate-500">
            Compétences : Next.js, React, XML, Redux, Node.js,
            MySQL, SQLite, C#, Java.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projets"
              className="rounded-full bg-sky-700 px-6 py-3 text-white shadow-md transition hover:bg-sky-800"
            >
              Voir mes projets
            </Link>

            <Link
              href="/inscription"
              className="rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:border-sky-700 hover:text-sky-700"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-sky-100 blur-3xl"></div>

            <img
              src="/images/abi-photo.png"
              alt="Photo de Abi"
              className="relative h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>

      {/* À PROPOS / COMPÉTENCES */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
  <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
      Expérience
    </p>

    <h2 className="mb-6 text-2xl font-bold text-slate-900">
      Stage COOP - ESDC
    </h2>

    <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
      <div>
        <p className="text-sm font-semibold text-slate-500">
          Janvier 2025 - Mars 2026
        </p>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-semibold text-slate-900">
          Analyste de données - Gatineau,QC
        </h3>

        <p className="mb-5 leading-8 text-slate-600">
          Réalisation d’un stage COOP au sein de la ESDC (Emploi et Développement social Canada) où j’ai participé à la
          création et à l’adaptation de formulaires XML, aux tests de
          fonctionnalités et à l’organisation de processus administratifs.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            XML
          </span>
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            XMLSpy
          </span>
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            Tests fonctionnels
          </span>
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            Validation de données
          </span>
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            Processus administratifs
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}