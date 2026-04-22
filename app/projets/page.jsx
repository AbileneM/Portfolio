"use client";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProjets } from "@/store/slices/projetSlice";
import ProjetCard from "@/components/ProjetCard";

export default function ProjetsPage() {
  const dispatch = useDispatch();
  const projets = useSelector((state) => state.projets.items);

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        const res = await axios.get("/api/projets");
        dispatch(setProjets(res.data));
      } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
      }
    };

    fetchProjets();
  }, [dispatch]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          Mon travail
        </p>
        <h1 className="mb-4 text-5xl font-bold text-slate-900">
          Mes projets
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Voici quelques projets que j’ai réalisés en développement web et
          fullstack. Ils mettent en valeur mes compétences techniques, mon sens
          du design et ma capacité à construire des applications complètes.
        </p>
      </div>

      {projets.length === 0 ? (
        <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900">
            Aucun projet pour le moment
          </h2>
          <p className="text-slate-600">
            Ajoute quelques projets dans ta base pour les afficher ici.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {projets.map((projet) => (
    <ProjetCard key={projet.id} projet={projet} />
  ))}
</div>
      )}
    </section>
  );
}