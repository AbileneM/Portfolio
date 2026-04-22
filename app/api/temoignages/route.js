import { sequelize } from "@/models";
import { getTemoignages, createTemoignage } from "@/controllers/temoignageController";

export async function GET() {
  await sequelize.sync();
  return getTemoignages();
}

export async function POST(request) {
  await sequelize.sync();
  return createTemoignage(request);
}