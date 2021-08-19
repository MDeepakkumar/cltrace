import Sequelize from "sequelize";
import { sequelize } from "../connector.js";

export const traceTicketComments = sequelize.define(
  "trace_ticket_comments",
  {
    id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    posted_by: {
      type: Sequelize.INTEGER(10).UNSIGNED,
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
    tableName: "trace_ticket_comments",
  },
);
