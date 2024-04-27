const Author = require("../../db/models/Author");
const Book = require("../../db/models/Book");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");

function ShowBook(id) {
  return Book.findByPk(id, {
    include: [
      Publisher,
      Category,
      {
        model: Author,
        through: { attributes: [] },
      },
    ],
  }).then((book) => {
    if (!book) {
      throw new NotFoundError("Book is not found");
    }

    return book;
  });
}

module.exports = ShowBook;