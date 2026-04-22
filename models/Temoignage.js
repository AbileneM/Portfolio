import { DataTypes } from "sequelize";
import database from "@/config/db";

const Temoignage = database.define(
  "Temoignage",
  {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Temoignage;