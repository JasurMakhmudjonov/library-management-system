"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        { 
          // id:1
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          role: "superadmin",
        },
        {
          // id:2
          firstName: "Leo",
          lastName: "Dev",
          email: "leodev@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          role: "admin",
        },
        {
          // id:3
          firstName: "Alex",
          lastName: "Hormozi",
          email: "alexhormozi@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          role: "admin",
        },
        {
          // id:4
          firstName: "Lena",
          lastName: "Lor",
          email: "lenalor@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          role: "librarian",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
