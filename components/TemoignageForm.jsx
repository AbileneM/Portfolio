"use client";

export default function TemoignageForm({
  form,
  setForm,
  errors,
  handleSubmit,
  buttonText,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Votre nom"
          value={form.nom}
          onChange={(e) => setForm({ ...form, nom: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />
        {errors.nom && (
          <p className="mt-1 text-sm text-red-600">{errors.nom}</p>
        )}
      </div>

      <div>
        <textarea
          rows="5"
          placeholder="Votre témoignage"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg border px-4 py-3"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {errors.api && (
        <p className="text-sm text-red-600">{errors.api}</p>
      )}

      <button className="rounded-lg bg-sky-700 px-5 py-3 text-white">
        {buttonText}
      </button>
    </form>
  );
}