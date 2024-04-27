const { NotFoundError } = require("../../shared/errors");
const { Publisher } = require("../../db/models");

function showPublisher(id) {
  return Publisher.findByPk(id).then((publisher) => {
    if (!publisher) {
      throw new NotFoundError("Publisher is not found");
    }
    return publisher;
  });
}

module.exports = showPublisher;
