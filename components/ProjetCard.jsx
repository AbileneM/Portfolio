import Link from "next/link";

export default function ProjetCard({ projet }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <img
        src={projet.image || "https://via.placeholder.com/600x300"}
        alt={projet.titre}
        className="h-56 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold">{projet.titre}</h3>
        <p className="mb-4 text-sm text-gray-600">{projet.description}</p>
        <Link href={`/projets/${projet.id}`} className="font-medium text-sky-700">
          Voir les détails
        </Link>
      </div>
    </div>
  );
}