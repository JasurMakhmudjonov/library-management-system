const Book = require("../../db/models/Book");
const { NotFoundError } = require("../../shared/errors");

function removeBook(id) {
  return Book.findByPk(id).then((book) => {
    if (!book) {
      throw new NotFoundError("Book is not found");
    }
    return book.destroy().then(() => {
      return book;
    });
  });
}


module.exports = removeBook;