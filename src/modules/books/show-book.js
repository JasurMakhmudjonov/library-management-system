const { Sequelize } = require("sequelize");
const Author = require("../../db/models/Author");
const Book = require("../../db/models/Book");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");
const BookCopy = require("../../db/models/BookCopy");

function ShowBook(id) {
  return Book.findByPk(id, {
    attributes: [
      "id",
      "title",
      "subTitle",
      "isbnNumber",
      "pages",
      "lang",
      "translated",
      "prevLang",
      "yearPublished",
      "createdAt",
      "updatedAt",
      [Sequelize.fn("COUNT", "bookCopies.id"), "copies"],
    ],
    group: ["book.id", "publisher.id", "category.id", "authors.id"],
    include: [
      Publisher,
      Category,
      {
        model: Author,
        through: { attributes: [] },
      },
      { model: BookCopy, attributes: [] },
    ],
  }).then((book) => {
    if (!book) {
      throw new NotFoundError("Book is not found");
    }

    return book;
  });
}

module.exports = ShowBook;
