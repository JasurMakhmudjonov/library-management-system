const { Publisher } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function removePublisher(id) {
  return Publisher.findByPk(id).then((publisher) => {
    if (!publisher) {
      throw new NotFoundError("Publisher is not found");
    }
    return publisher.destroy().then(() => {
      return publisher;
    });
  });
}

module.exports = removePublisher;
