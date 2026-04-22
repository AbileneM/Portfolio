"use client";

import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setTemoignages } from "@/store/slices/temoignageSlice";

export default function TemoignagesPage() {
  const dispatch = useDispatch();
  const temoignages = useSelector((state) => state.temoignages.items);

  useEffect(() => {
    const fetchTemoignages = async () => {
      const res = await axios.get("/api/temoignages");
      dispatch(setTemoignages(res.data));
    };

    fetchTemoignages();
  }, [dispatch]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Témoignages</h2>

        <Link
          href="/temoignages/nouveau"
          className="rounded-lg bg-sky-700 px-4 py-2 text-white"
        >
          Ajouter
        </Link>
      </div>

      <div className="space-y-4">
        {temoignages.map((item) => (
          <div key={item.id} className="rounded-2xl bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.nom}</h3>

              <Link
                href={`/temoignages/modifier/${item.id}`}
                className="text-sm text-sky-700"
              >
                Modifier
              </Link>
            </div>

            <p className="mt-2 text-gray-700">{item.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}