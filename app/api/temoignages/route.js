import { sequelize } from "@/models";
import {
  createTemoignage,
  getTemoignages,
} from "@/controllers/temoignageController";

export async function GET() {
  await sequelize.sync();
  return getTemoignages();
}

export async function POST(request) {
  await sequelize.sync();
  return createTemoignage(request);
}