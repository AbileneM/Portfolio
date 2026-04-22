import { sequelize } from "@/models";
import {
  deleteProject,
  getProjectById,
  updateProject,
} from "@/controllers/projetController";

export async function GET(request, context) {
  await sequelize.sync();
  return getProjectById(request, context);
}

export async function PUT(request, context) {
  await sequelize.sync();
  return updateProject(request, context);
}

export async function DELETE(request, context) {
  await sequelize.sync();
  return deleteProject(request, context);
}