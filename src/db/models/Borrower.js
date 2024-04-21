const { DataTypes } = require("sequelize");
const db = require("..");

const Borrower = db.define(
  "borrower",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    unitNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    streetNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    addressLine1: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    addressLine2: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "borrowers",
    timestamps: true,
  }
);

module.exports = Borrower;
