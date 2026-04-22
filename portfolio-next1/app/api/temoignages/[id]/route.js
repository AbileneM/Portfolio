import { sequelize } from "@/models";
import {
  deleteTemoignage,
  getTemoignageById,
  updateTemoignage,
} from "@/controllers/temoignageController";

export async function GET(request, context) {
  await sequelize.sync();
  return getTemoignageById(request, context);
}

export async function PUT(request, context) {
  await sequelize.sync();
  return updateTemoignage(request, context);
}

export async function DELETE(request, context) {
  await sequelize.sync();
  return deleteTemoignage(request, context);
}
