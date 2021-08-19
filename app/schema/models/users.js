import Sequelize from "sequelize";
import { sequelize } from "../connector.js";

export const users = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: false,
      unique: true,
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
    tableName: "users",
  },
);
