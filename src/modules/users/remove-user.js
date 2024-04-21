const { User } = require("../../db/models");
const { NotFoundError } = require("../../shared/errors");

function removeUser(id, data) {
  return User.findByPk(id).then((user) => {
    if (!user) {
      throw new NotFoundError("User is not found");
    }

    return user.update(data).then((updated) => {
      return updated;
    });
  });
}

module.exports = removeUser;
