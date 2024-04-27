const { NotFoundError } = require("../../shared/errors");
const { Author } = require("../../db/models");

function showAuthor(id) {
  return Author.findByPk(id).then((author) => {
    if (!author) {
      throw new NotFoundError("Author is not found");
    }
    return author;
  });
}

module.exports = showAuthor;
