import Sequelize from "sequelize";
import { sequelize } from "../connector.js";

export const traceTickets = sequelize.define(
  "trace_tickets",
  {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: false,
    },
    raised_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: false,
    },
    assigned_to: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: false,
    },
    status: {
      type: Sequelize.TINYINT(4),
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
    additional_info: {
      type: Sequelize.JSON,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "trace_tickets",
  },
);
