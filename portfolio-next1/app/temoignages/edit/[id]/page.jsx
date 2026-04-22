"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import TestimonialForm from "@/components/TestimonialForm";

export default function EditTestimonialPage({ params }) {
  const [form, setForm] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchOne = async () => {
      const res = await axios.get(`/api/testimonials/${params.id}`);
      setForm({ name: res.data.name, message: res.data.message });
    };

    fetchOne();
  }, [params.id]);

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
      await axios.put(`/api/testimonials/${params.id}`, form);
      router.push("/testimonials");
    } catch (error) {
      setErrors({ api: error.response?.data?.message || "Erreur de modification" });
    }
  };

  return (
    <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold">Modifier un témoignage</h2>
      <TestimonialForm
        form={form}
        setForm={setForm}
        errors={errors}
        handleSubmit={handleSubmit}
        buttonText="Mettre à jour"
      />
      </section>
  );
}