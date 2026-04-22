import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">
            Développeuse Fullstack
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Bonjour, je suis Abi.
          </h1>

          <p className="mb-5 max-w-xl text-lg leading-8 text-slate-600">
            Étudiante en programmation, passionnée par le développement web,
            les interfaces modernes et les applications fullstack.
          </p>

          <p className="mb-8 max-w-2xl text-base leading-8 text-slate-500">
            Compétences : Next.js, React, Tailwind CSS, Redux, Node.js,
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
              src="https://via.placeholder.com/420"
              alt="Photo de profil"
              className="relative h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl md:h-96 md:w-96"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            Développement Web
          </h3>
          <p className="text-slate-600">
            Création d’interfaces modernes, responsive et agréables à utiliser.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            Fullstack
          </h3>
          <p className="text-slate-600">
            Intégration frontend, backend, base de données et API dans une seule application.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            Projets académiques
          </h3>
          <p className="text-slate-600">
            Réalisation de projets concrets avec Next.js, Node.js, SQL et Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}