"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ nom: "", email: "", password: "" });
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
      setErrors({ api: error.response?.data?.message || "Erreur d'inscription" });
    }
  };

   return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">Inscription</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full rounded-lg border px-4 py-3"
          />
          {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border px-4 py-3"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded-lg border px-4 py-3"
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        {errors.api && <p className="text-sm text-red-600">{errors.api}</p>}

        <button className="w-full rounded-lg bg-sky-700 py-3 text-white">
          S'inscrire
        </button>
      </form>
    </section>
  );
}