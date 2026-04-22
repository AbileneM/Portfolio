import { sequelize } from "@/models";
import {
  getProjetById,
  updateProjet,
  deleteProjet,
} from "@/controllers/projetController";

export async function GET(request, context) {
  await sequelize.sync();
  return getProjetById(request, context);
}

export async function PUT(request, context) {
  await sequelize.sync();
  return updateProjet(request, context);
}

export async function DELETE(request, context) {
  await sequelize.sync();
  return deleteProjet(request, context);
}