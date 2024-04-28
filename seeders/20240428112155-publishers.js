"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "publishers",
      [
        {
          // id:1
          name: "Hilol",
          
        },
        {
          // id:2
          name: "Zukko kitobxon",
          
        },
        {
          // id:3
          name: "G'afur G'ulom",
          
        },
        {
          // id:4
          name: "Azonkitoblari",
          
        },
        {
          // id:5
          name: "Asaxiybooks",
          
        },
        {
          // id:6
          name: "Qamarbooks",
          
        },
        {
          // id:7
          name: "Hilol",
          
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("publishers", null, {});
  },
};
