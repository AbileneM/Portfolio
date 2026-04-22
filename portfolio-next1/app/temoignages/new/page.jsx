"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import TestimonialForm from "@/components/TestimonialForm";

export default function NewTestimonialPage() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nom obligatoire";
    if (!form.message.trim()) newErrors.message = "Message obligatoire";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post("/api/testimonials", form);
      router.push("/testimonials");
    } catch (error) {
      setErrors({ api: error.response?.data?.message || "Erreur d'envoi" });
    }
  };

  return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">Ajouter un témoignage</h2>
      <TestimonialForm
        form={form}
        setForm={setForm}
        errors={errors}
        handleSubmit={handleSubmit}
        buttonText="Envoyer"
      />
    </section>
  );
}