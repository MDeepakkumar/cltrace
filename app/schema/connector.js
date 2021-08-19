"use strict";

import Sequelize from "sequelize";
import { mysqlConfig } from "../../config/mysqlConfig.js";

const { database, username, password, host, port, dialect, readHost } =
  mysqlConfig;
const sequelize = new Sequelize(null, null, null, {
  port: port,
  dialect: dialect,
  dialectOptions: {
    decimalNumbers: true,
    dateStrings: true,
    typeCast: true,
  },
  replication: {
    read: [
      {
        host: host,
        username: username,
        password: password,
        database: database,
      },
    ],
    write: {
      host: host,
      username: username,
      password: password,
      database: database,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Magento DB connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Error........", err);
  });

export { sequelize };
