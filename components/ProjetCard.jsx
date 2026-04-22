import Link from "next/link";

export default function ProjetCard({ projet }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={projet.image || "https://via.placeholder.com/800x500"}
          alt=""
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-900">
          {projet.titre}
        </h3>

        <p className="mb-6 line-clamp-4 text-base leading-7 text-slate-600">
          {projet.description}
        </p>

        <div className="mb-7 flex flex-wrap gap-2">
          {Array.isArray(projet.technologies) &&
            projet.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700"
              >
                {tech}
              </span>
            ))}
        </div>

        <div className="mt-auto">
          <Link
            href={`/projets/${projet.id}`}
            className="inline-flex items-center rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
          >
            Voir détails
          </Link>
        </div>
      </div>
    </article>
  );
}