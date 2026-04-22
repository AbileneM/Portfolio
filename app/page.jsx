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

          <h1 className="mb-5 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Bonjour, je suis Abi.
          </h1>

          <p className="mb-4 max-w-2xl text-lg leading-8 text-slate-600">
            Étudiante en programmation, passionnée par le développement web,
            les interfaces modernes et les applications fullstack.
          </p>

          <p className="mb-8 text-base leading-8 text-slate-500">
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
              src="/abi-photo.png"
              alt="Photo de Abi"
              className="relative h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl md:h-80 md:w-80"
            />
          </div>
        </div>
      </div>

      {/* À PROPOS / COMPÉTENCES */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              À propos
            </h2>
            <p className="text-slate-600 leading-7">
              Je suis étudiante en programmation et je développe des projets
              web et desktop qui combinent design, logique métier et bases de
              données.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              Frontend
            </h2>
            <p className="text-slate-600 leading-7">
              Création d’interfaces modernes et responsive avec Next.js, React,
              Tailwind CSS, JavaScript et EJS.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-3 text-xl font-semibold text-slate-900">
              Backend & données
            </h2>
            <p className="text-slate-600 leading-7">
              Développement de logique backend, API et gestion des données avec
              Node.js, SQL, SQLite, C# et architecture MVVM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}