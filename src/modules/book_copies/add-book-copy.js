const { Book, BookCopy } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function addBookCopies(data) {
  const { bookId, countOfCopies } = data;

  return Book.findByPk(bookId)
    .then((book) => {
      if (!book) {
        throw new NotFoundError("Book is not found");
      }

      return BookCopy.bulkCreate(
        new Array(countOfCopies).fill({ bookId: book.id })
      ).then(() => {
        return book;
      });
    })
    .catch((error) => {
      console.error("Error adding book copies:", error);
      throw error;
    });
}

module.exports = addBookCopies;
