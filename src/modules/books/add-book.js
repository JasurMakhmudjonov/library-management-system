const { Book, BookCopy } = require("../../db/models");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const Author = require("../../db/models/Author");
const { Op } = require("sequelize");
const { NotFoundError, BadRequestError } = require("../../shared/errors");

function addBook(data) {
  const { publisherId, categoryId, authorIds, countOfCopies, ...rest } = data;

  return Promise.all([
    Publisher.findByPk(publisherId),
    Category.findByPk(categoryId),
    Author.findAll({ where: { id: { [Op.in]: authorIds } } }),
  ]).then(([publisher, category, authors]) => {
    if (!publisher) {
      throw new NotFoundError("Publisher is not found");
    }

    if (!category) {
      throw new NotFoundError("Category is not found");
    }

    if (!authorIds || authorIds.length === 0) {
      throw new BadRequestError("No authors provided");
    }

    if (authors.length !== authorIds.length) {
      throw new BadRequestError("Some authors were not found");
    }

    return Book.create({ ...rest, publisherId, categoryId })
      .then((book) => {
        return book.addAuthors(authors).then(() => {
          return BookCopy.bulkCreate(
            new Array(countOfCopies).fill({ bookId: book.id })
          ).then(() => {
            return book;
          });
        });
      })
      .catch((err) => {
        console.log("Error adding book: ", err);
        throw err;
      });
  });
}

module.exports = addBook;
