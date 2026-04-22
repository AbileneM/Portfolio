import { NextResponse } from "next/server";
import Temoignage from "@/models/Temoignage";

export async function getTemoignages() {
  const temoignages = await Temoignage.findAll({ order: [["id", "DESC"]] });
  return NextResponse.json(temoignages);
}

export async function createTemoignage(request) {
  const { nom, message } = await request.json();

  if (!nom || !message) {
    return NextResponse.json(
      { message: "Nom et message obligatoires" },
      { status: 400 }
    );
  }

  const temoignage = await Temoignage.create({ nom, message });
  return NextResponse.json(temoignage, { status: 201 });
}

export async function getTemoignageById(request, context) {
  const { id } = await context.params;

  const temoignage = await Temoignage.findByPk(id);

  if (!temoignage) {
    return NextResponse.json(
      { message: "Témoignage introuvable" },
      { status: 404 }
    );
  }

  return NextResponse.json(temoignage);
}

export async function updateTemoignage(request, context) {
  const { id } = await context.params;

  const temoignage = await Temoignage.findByPk(id);

  if (!temoignage) {
    return NextResponse.json(
      { message: "Témoignage introuvable" },
      { status: 404 }
    );
  }

  const body = await request.json();
  await temoignage.update(body);

  return NextResponse.json(temoignage);
}

export async function deleteTemoignage(request, context) {
  const { id } = await context.params;

  const temoignage = await Temoignage.findByPk(id);

  if (!temoignage) {
    return NextResponse.json(
      { message: "Témoignage introuvable" },
      { status: 404 }
    );
  }

  await temoignage.destroy();

  return NextResponse.json({
    message: "Témoignage supprimé avec succès",
  });
}