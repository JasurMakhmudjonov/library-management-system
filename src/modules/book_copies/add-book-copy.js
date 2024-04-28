const BookCopy = require("../../db/models/BookCopy");
const { NotFoundError } = require("../../shared/errors");

function addBookCopies(data) {
  const { bookId, countOfCopies } = data;

  return BookCopy.findByPk(bookId)
    .then(existingBook => {
      if (!existingBook) {
        throw new NotFoundError("Book is not found");
      }

      const promises = [];
      for (let i = 0; i < countOfCopies; i++) {
        promises.push(BookCopy.create({ bookId }));
      }

      return Promise.all(promises);
    })
    .catch(error => {
      console.error("Error creating book copies:", error);
      throw error;
    });
}

module.exports = addBookCopies;
