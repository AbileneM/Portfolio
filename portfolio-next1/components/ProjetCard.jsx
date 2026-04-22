import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <img
        src={project.image || "https://via.placeholder.com/600x300"}
        alt={project.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{project.description}</p>
        <Link href={`/projets/${project.id}`} className="text-sky-700 font-medium">
          Voir les détails
        </Link> 
        </div>
    </div>
  );
}