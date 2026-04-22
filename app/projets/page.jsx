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
      const res = await axios.get("/api/projets");
      dispatch(setProjets(res.data));
    };

    fetchProjets();
  }, [dispatch]);

  return (
    <section className="mx-auto max-w-6xl">
      <h2 className="mb-8 text-3xl font-bold">Mes projets</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projets.map((projet) => (
          <ProjetCard key={projet.id} projet={projet} />
        ))}
      </div>
    </section>
  );
}