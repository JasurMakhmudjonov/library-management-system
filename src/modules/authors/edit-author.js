const { Author } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function editAuthor(id, newData) {
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


module.exports = editAuthor;
