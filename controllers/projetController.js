import { NextResponse } from "next/server";
import Projet from "@/models/Projet";

export async function getProjet() {
  const projets = await Projet.findAll({ order: [["id", "ASC"]] });
  return NextResponse.json(projets);
}
export async function createProject(request) {
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

export async function getProjectById(_, { params }) {
  const project = await Projet.findByPk(params.id);

  if (!project) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  return NextResponse.json(project);
}

export async function updateProject(request, { params }) {
  const projet = await Projet.findByPk(params.id);

  if (!projet) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  const body = await request.json();
  await projet.update(body);

  return NextResponse.json(projet);
}

export async function deleteProject(_, { params }) {
  const projet = await Projet.findByPk(params.id);

  if (!projet) {
    return NextResponse.json({ message: "Projet introuvable" }, { status: 404 });
  }

  await projet.destroy();
  return NextResponse.json({ message: "Projet supprimé" });
}