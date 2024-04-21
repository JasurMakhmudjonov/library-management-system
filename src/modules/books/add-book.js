const { Book } = require("../../db/models");
const Publisher = require("../../db/models/Publisher");
const { NotFoundError } = require("../../shared/errors");

function addBook(data) {
  const { publishedId } = data;

  return Publisher.findByPk(publishedId).then((publisher) => {
    if (!publisher) {
      throw new NotFoundError("Publisher is not found");
    }

    return Book.create(data)
      .then((book) => {
        return book;
      })
      .catch((err) => {
        console.log("Error creating book: ", err);
      });
  });
}

module.exports = addBook;
