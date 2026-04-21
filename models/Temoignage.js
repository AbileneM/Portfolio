import sequelize from "@/config/db";
import { DataTypes } from "sequelize";

const Temoignage = sequelize.define("Temoignage", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
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
    tableName: "temoignages",
    timestamps: true,
  }
);

export default Temoignage;