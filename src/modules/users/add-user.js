const bcrypt = require("bcryptjs");
const { User } = require("../../db/models");

function addUser(data) {
  return bcrypt
    .hash(data.password, 10)
    .then((hashedPwd) => {
      return User.create({ ...data, password: hashedPwd }).then((user) => {
        return user;
      });
    })
    .catch((err) => {
      console.log("Error creating user: ", err);
    });
}

module.exports = addUser;
