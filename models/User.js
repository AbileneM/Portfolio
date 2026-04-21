import database from "@/config/db.js";
import { DataTypes } from "sequelize";

const User = database.define("User", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: DataTypes.STRING,
},{
    timestamps: false}
);

export default User;