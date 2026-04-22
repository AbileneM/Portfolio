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