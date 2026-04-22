import { sequelize } from "@/models";
import { registerUser } from "@/controllers/authController";

export async function POST(request) {
  await sequelize.sync();
  return registerUser(request); 
}

