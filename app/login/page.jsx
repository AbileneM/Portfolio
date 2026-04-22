"use client";

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) newErrors.email = "Email obligatoire";
    if (!form.password.trim()) newErrors.password = "Mot de passe obligatoire";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await axios.post("/api/auth/login", form);
      dispatch(setUser(res.data.user));
      router.push("/");
    } catch (error) {
      setErrors({
        api: error.response?.data?.message || "Erreur de connexion",
      });
    }
  };

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg rounded-[32px] bg-white p-10 shadow-lg ring-1 ring-slate-200">
        <h1 className="mb-3 text-4xl font-bold text-slate-900">Connexion</h1>

        <p className="mb-8 text-slate-600">
          Connectez-vous pour accéder au portfolio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-700"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-700"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {errors.api && (
            <p className="text-sm text-red-600">{errors.api}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-700 py-4 text-lg font-semibold text-white transition hover:bg-sky-800"
          >
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}