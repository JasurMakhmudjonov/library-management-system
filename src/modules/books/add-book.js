const { Book, BookCopy } = require("../../db/models");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const Author = require("../../db/models/Author");
const { Op } = require("sequelize");
const { NotFoundError, BadRequestError } = require("../../shared/errors");

function addBook(data) {
  const { publisherId, categoryId, authorIds, countOfCopies, ...rest } = data;

  return Publisher.findByPk(publisherId).then((publisher) => {
    if (!publisher) {
      throw new NotFoundError("Publisher is not found");
    }

    return Category.findByPk(categoryId).then((category) => {
      if (!category) {
        throw new BadRequestError("Category is not found");
      }

      if (!authorIds || authorIds.length === 0) {
        throw new BadRequestError("No authors provided");
      }

      return Author.findAll({ where: { id: { [Op.in]: authorIds } } }).then(
        (author) => {
          if (author.length !== authorIds.length) {
            throw new BadRequestError("Some authors were not found");
          }

          return Book.create({ ...rest, publisherId, categoryId })
            .then((book) => {
              return book.addAuthors(author).then(() => {
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
        }
      );
    });
  });
}

module.exports = addBook;
