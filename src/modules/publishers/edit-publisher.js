const { Publisher } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");


function editPublisher(id, data) {
  return Publisher.findByPk(id).then((publisher) => {
    if (!publisher) {
      throw new NotFoundError("Publisher is not found");
    }

    return publisher.update(data).then((updated) => {
      return updated;
    });
  });
}

module.exports = editPublisher;
