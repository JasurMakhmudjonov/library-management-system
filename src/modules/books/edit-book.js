const Book = require("../../db/models/Book");
const { NotFoundError } = require("../../shared/errors");

function editBook(id, data) {
  return Book.findByPk(id).then((book) => {
    if (!book) {
      throw new NotFoundError("Book is not found");
    }

    return book.update(data).then((updated) => {
      return updated;
    });
  });
}

module.exports = editBook;
