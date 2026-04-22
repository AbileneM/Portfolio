"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ProjetDetailsPage({ params }) {
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

    fetchProjet();
  }, [params.id]);

  if (loading) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
          <p className="text-lg text-slate-600">Chargement du projet...</p>
        </div>
      </section>
    );
  }

  if (!projet) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">
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
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/projets"
        className="mb-8 inline-flex items-center text-sm font-medium text-sky-700 transition hover:text-sky-900"
      >
        ← Retour aux projets
      </Link>

      <div className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200">
        <img
          src={projet.image || "https://via.placeholder.com/1200x600"}
          alt={projet.titre}
          className="h-[350px] w-full object-cover md:h-[500px]"
        />

        <div className="p-8 md:p-12">
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Projet
            </p>

            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {projet.titre}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              {projet.description}
            </p>
          </div>

          <div className="mb-8">
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
            {projet.github && (
              <a
                href={projet.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-sky-700 px-6 py-3 font-medium text-white transition hover:bg-sky-800"
              >
                Voir sur GitHub
              </a>
            )}

            <Link
              href="/projets"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Retour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}