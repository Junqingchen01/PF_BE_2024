const { Sequelize } = require("sequelize");

const sequelize = new Sequelize.Sequelize(
  "pf2024",
  "root",
  "mysqlchen123",
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

exports.sequelize = sequelize;