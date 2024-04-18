const  db  = require("..");
const { DataTypes } = require("sequelize");

// console.log(DataTypes);

const Publisher = db.define(
  "Publisher",
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
