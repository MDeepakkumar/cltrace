import Sequelize from "sequelize";
import { sequelize } from "../connector.js";

export const traceUserGroupMappings = sequelize.define(
  "trace_user_group_mappings",
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
      primaryKey: false,
    },
    group_id: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: false,
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      primaryKey: false,
      default: false,
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
    tableName: "trace_user_group_mappings",
  },
);
