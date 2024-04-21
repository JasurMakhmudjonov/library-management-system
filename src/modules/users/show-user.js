const { NotFoundError } = require("../../shared/errors");

function showUser() {
  return User.findByPk(id).then((user) => {
    if (!user) {
      throw new NotFoundError("User is not found");
    }
    return user;
  });
}

module.exports = showUser;
