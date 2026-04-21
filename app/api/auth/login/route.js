import { sequelize } from "@/models";
import { loginUser } from "@/controllers/authController";

export async function POST(request) {
  await sequelize.sync();
  return loginUser(request);
}