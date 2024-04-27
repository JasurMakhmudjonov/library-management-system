const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../shared/errors");
const config = require("../../shared/config");
const { User } = require("../../db/models");

function loginUser({ email, password }) {
  return User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      throw new UnauthorizedError("Incorrect email or password");
    }

    return bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        throw new UnauthorizedError("Incorrect email or password");
      }

      const token = jwt.sign(
        { user: { id: user.id, role: user.role } },
        config.jwt.secret,
        { expiresIn: "24h" }
      );

      return { token };
    });
  });
}

module.exports = loginUser;
