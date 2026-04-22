"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InscriptionPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    const newErrors = {};

    if (!form.nom.trim()) newErrors.nom = "Nom obligatoire";
    if (!form.email.trim()) newErrors.email = "Email obligatoire";
    if (!form.password.trim()) newErrors.password = "Mot de passe obligatoire";
    if (form.password && form.password.length < 6) {
      newErrors.password = "Minimum 6 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post("/api/auth/inscription", form);
      router.push("/login");
    } catch (error) {
      setErrors({
        api: error.response?.data?.message || "Erreur d'inscription",
      });
    }
  };

  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3ee] via-[#eef2f7] to-[#f8fafc]"></div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center">
        <div className="w-full max-w-xl rounded-[36px] bg-[#fffdf9]/95 p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 backdrop-blur md:p-12">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-700">
            ✨
          </div>

          <h1 className="mb-3 text-5xl font-bold tracking-tight text-slate-900">
            Inscription
          </h1>

          <p className="mb-8 max-w-md text-lg leading-8 text-slate-600">
            Créez votre compte pour accéder au portfolio et interagir avec les
            fonctionnalités disponibles.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Nom complet
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                value={form.nom}
                onChange={(e) =>
                  setForm({ ...form, nom: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-700 focus:bg-white"
              />
              {errors.nom && (
                <p className="mt-2 text-sm text-red-600">{errors.nom}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Adresse email
              </label>
              <input
                type="email"
                placeholder="exemple@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-700 focus:bg-white"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="Minimum 6 caractères"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-700 focus:bg-white"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {errors.api && (
              <p className="text-sm font-medium text-red-600">{errors.api}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-700 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-sky-800"
            >
              S’inscrire
            </button>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 text-center">
            <p className="text-sm text-slate-600">
              Vous avez déjà un compte ?{" "}
              <Link
                href="/login"
                className="font-semibold text-sky-700 transition hover:text-sky-900"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}