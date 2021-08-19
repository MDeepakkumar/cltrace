import Sequelize from "sequelize";
import { sequelize } from "../connector.js";

export const connections = sequelize.define(
  "connections",
  {
    user_id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    connection: {
      type: Sequelize.TEXT,
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
    tableName: "connections",
  },
);
