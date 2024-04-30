const { DataTypes } = require("sequelize");
const db = require("..");
const Book = require("./Book");

const BookCopy = db.define(
  "bookCopy",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    countOfCopies: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    },
  },

  {
    tableName: "book_copies",
    timestamps: true,
  }
);

Book.hasMany(BookCopy, { foreignKey: "bookId" });
BookCopy.belongsTo(Book, { foreignKey: "bookId" });

module.exports = BookCopy;
