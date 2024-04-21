const { Author } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function removeAuthor(id) {
  return Author.findByPk(id).then((author) => {
    if (!author) {
      throw new NotFoundError("Author is not found");
    }
    return author.destroy().then(() => {
      return author;
    });
  });
}

module.exports = removeAuthor;
