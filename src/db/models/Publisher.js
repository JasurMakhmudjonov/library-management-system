const db = require("..");
const { DataTypes } = require("sequelize");



const Publisher = db.define(
  "publisher",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    tableName: "publishers",
    timestapms: true,
  }
);

module.exports = Publisher;
