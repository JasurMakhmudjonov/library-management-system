const Book = require("../../db/models/Book");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError, BadRequestError } = require("../../shared/errors");

function editBook(id, data) {
  const { publisherId, categoryId } = data;
  const promises = [];

  if (publisherId) {
    promises.push(Publisher.findByPk(publisherId));
  }

  if (categoryId) {
    promises.push(Category.findByPk(categoryId));
  }

  return Promise.all(promises).then((result) => {
    if (result.includes(null)) {
      throw new BadRequestError("Publisher or Category is not found");
    }

    return Book.findByPk(id).then((book) => {
      if (!book) {
        throw new NotFoundError("Book is not found");
      }

      return book.update(data).then((updated) => {
        return updated;
      });
    });
  });
}

module.exports = editBook;
