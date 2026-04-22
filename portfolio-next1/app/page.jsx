export default function HomePage() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Développeuse Fullstack
        </p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Bonjour, je suis Abi.
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Étudiante en programmation, passionnée par le développement web,
          les interfaces modernes et les applications fullstack.
        </p>

        <p className="mb-6 text-gray-600">
          Compétences : Next.js, React, Tailwind CSS, Redux, Node.js,
          MySQL, SQLite, C#, Java.
        </p>
        <a
          href="/projets"
          className="inline-block rounded-xl bg-sky-700 px-6 py-3 text-white"
        >
          Voir mes projets
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/350"
          alt="Photo de profil"
          className="h-72 w-72 rounded-full object-cover shadow-xl md:h-80 md:w-80"
        />
      </div>
    </section>
  );
}