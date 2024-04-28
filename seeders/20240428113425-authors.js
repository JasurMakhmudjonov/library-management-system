"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "authors",
      [
        {
          // id:1
          name: "Ali Valiyev",
          
        },
        {
          // id:2
          name: "Jack Williams",
          
        },
        {
          // id:3
          name: "Bob Lenas",
          
        },
        {
          // id:4
          name: "Trey Lemo",
          
        },
        {
          // id:5
          name: "Crep One",
          
        },
        {
          // id:6
          name: "Lorry Letos",
          
        },
        {
          // id:7
          name: "Hack Tech",
          
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("authors", null, {});
  },
};
