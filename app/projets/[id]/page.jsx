"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjetDetailsPage() {
  const params = useParams();
  const [projet, setProjet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjet = async () => {
      try {
        const res = await axios.get(`/api/projets/${params.id}`);
        setProjet(res.data);
      } catch (error) {
        console.error("Erreur lors du chargement du projet :", error);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchProjet();
    }
  }, [params]);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-white p-10 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg text-slate-600">Chargement du projet...</p>
        </div>
      </section>
    );
  }

  if (!projet) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-white p-10 shadow-sm ring-1 ring-slate-200">
          <h1 className="mb-3 text-3xl font-bold text-slate-900">
            Projet introuvable
          </h1>
          <p className="mb-6 text-slate-600">
            Le projet demandé n’existe pas ou a été supprimé.
          </p>

          <Link
            href="/projets"
            className="inline-flex rounded-full bg-sky-700 px-5 py-3 font-medium text-white transition hover:bg-sky-800"
          >
            Retour aux projets
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <Link
        href="/projets"
        className="mb-8 inline-flex items-center text-sm font-semibold text-sky-700 transition hover:text-sky-900"
      >
        ← Retour aux projets
      </Link>

      <div className="overflow-hidden rounded-[36px] bg-white shadow-sm ring-1 ring-slate-200">
        {/* Image principale */}
        <div className="relative">
          <img
            src={projet.image || "https://via.placeholder.com/1400x700"}
            alt={projet.titre}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent"></div>

          <div className="absolute bottom-6 left-6">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-sky-700 shadow">
              Projet
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="grid gap-10 p-8 md:grid-cols-[minmax(0,1.7fr)_360px] md:p-12">
          {/* Colonne principale */}
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {projet.titre}
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-600">
              {projet.description}
            </p>

            <div className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">
                Technologies utilisées
              </h2>

              <div className="flex flex-wrap gap-3">
                {Array.isArray(projet.technologies) &&
                  projet.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/projets"
                className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Retour
              </Link>
            </div>
          </div>

          {/* Colonne secondaire */}
          <aside className="h-fit rounded-[28px] bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="mb-5 text-xl font-semibold text-slate-900">
              Résumé du projet
            </h3>

            <div className="space-y-5 text-sm text-slate-600">
              <div>
                <p className="mb-1 font-semibold text-slate-900">Titre</p>
                <p>{projet.titre}</p>
              </div>

              <div>
                <p className="mb-1 font-semibold text-slate-900">
                  Technologies
                </p>
                <p>
                  {Array.isArray(projet.technologies)
                    ? projet.technologies.join(", ")
                    : "Non spécifiées"}
                </p>
              </div>

              <div>
                <p className="mb-1 font-semibold text-slate-900">Lien GitHub</p>
                {projet.github ? (
                  <a
                    href={projet.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-sky-700 hover:underline"
                  >
                    {projet.github}
                  </a>
                ) : (
                  <p>Aucun lien disponible</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}