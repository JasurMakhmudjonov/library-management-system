const { NotFoundError } = require("../../shared/errors");
const { User } = require("../../db/models");


function showUser(id) {
  return User.findByPk(id).then((user) => {
    if (!user) {
      throw new NotFoundError("User is not found");
    }
    return user;
  });
}

module.exports = showUser;
