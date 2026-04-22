import { sequelize } from "@/models";
import { getProjets, createProjet } from "@/controllers/projetController";

export async function GET() {
  await sequelize.sync();
  return getProjets();
}

export async function POST(request) {
  await sequelize.sync();
  return createProjet(request);
}