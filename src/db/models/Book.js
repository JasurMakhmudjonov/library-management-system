const { DataTypes } = require("sequelize");
const db = require("..");
const Publisher = require("./Publisher")

const Book = db.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isbnNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    pages: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    lang: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    translated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    prevLang: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    yearPublished: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  },
  {
    tableName: "books",
    timestamps: true,
  }
);

Publisher.hasMany(Book, { foreignKey: "publishedId" });
Book.belongsTo(Publisher, { foreignKey: "publishedId" });

module.exports = Book;
