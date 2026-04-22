import { NextResponse } from "next/server";
import Projet from "@/models/Projet";

export async function getProjets() {
  const projets = await Projet.findAll({ order: [["id", "ASC"]] });
  return NextResponse.json(projets);
}

export async function createProjet(request) {
  const { titre, description, technologies, image, github } = await request.json();

  if (!titre || !description || !technologies || technologies.length === 0) {
    return NextResponse.json(
      { message: "Titre, description et technologies sont obligatoires" },
      { status: 400 }
    );
  }

  const projet = await Projet.create({
    titre,
    description,
    technologies,
    image,
    github,
  });

  return NextResponse.json(projet, { status: 201 });
}

export async function getProjetById(_, { params }) {
  const projet = await Projet.findByPk(params.id);

  if (!projet) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  return NextResponse.json(projet);
}

export async function updateProjet(request, { params }) {
  const projet = await Projet.findByPk(params.id);

  if (!projet) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  const body = await request.json();
  await projet.update(body);

  return NextResponse.json(projet);
}

export async function deleteProjet(_, { params }) {
  const projet = await Projet.findByPk(params.id);

  if (!projet) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  await projet.destroy();
  return NextResponse.json({ message: "Projet supprimé" });
}