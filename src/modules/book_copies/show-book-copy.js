const Author = require("../../db/models/Author");
const BookCopy = require("../../db/models/BookCopy");
const Category = require("../../db/models/Category");
const Publisher = require("../../db/models/Publisher");
const Book = require("../../db/models/Book");
const { NotFoundError } = require("../../shared/errors");

function showBookCopy(id) {
  return BookCopy.findByPk(id, {
    include: [
      {
        model: Book,
        include: [
          Publisher,
          Category,
          { model: Author, through: { attributes: [] } },
        ],
      },
    ],
  })
    .then((boooCopy) => {
      if (!boooCopy) {
        throw new NotFoundError("BookCopy is not found");
      }

      return boooCopy;
    })
    .catch((err) => {
      console.log("Error showing bookCopy: ", err);
      throw err;
    });
}

module.exports = showBookCopy;
