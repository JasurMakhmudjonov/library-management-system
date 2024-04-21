const { Author } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function editAuthor(id, data) {
  return Author.findByPk(id).then((author) => {
    if (!author) {
      throw new NotFoundError("Author is not found");
    }

    return author.update(data).then((updated) => {
      return updated;
    });
  });
}

module.exports = editAuthor;

