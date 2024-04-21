const config  = require("../shared/config");
const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  port: config.db.port,
  database: config.db.name,
  username: config.db.username,
  password: config.db.pwd,
});

module.exports = db;


