async function getProject(id) {
  const res = await fetch(`http://localhost:3000/api/projets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Projet introuvable");
  }

  return res.json();
}

export default async function ProjectDetailsPage({ params }) {
  const project = await getProjet(params.id);

   return (
    <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
      <img
        src={project.image || "https://via.placeholder.com/900x400"}
        alt={project.title}
        className="mb-6 h-80 w-full rounded-xl object-cover"
      />

      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
      <p className="mb-6 text-gray-700">{project.description}</p>

      <h3 className="mb-3 text-xl font-semibold">Technologies utilisées</h3>
      <ul className="mb-6 list-disc pl-6 text-gray-700">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <div className="flex gap-4">
        <a href={project.github} target="_blank" className="text-sky-700">
          GitHub
        </a>
        <a href={project.demo} target="_blank" className="text-sky-700">
          Démo
        </a>
      </div>
    </section>
  );
}