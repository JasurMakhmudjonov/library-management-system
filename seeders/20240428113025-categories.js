"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          // id:1
          name: "Badiiy Kitoblar",
          
        },
        {
          // id:2
          name: "Diniy kitoblar",
          
        },
        {
          // id:3
          name: "Ilmiy kitoblar",
          
        },
        {
          // id:4
          name: "Autobiografik",
          
        },
        {
          // id:5
          name: "Jaxon adabiyoti",
          
        },
        {
          // id:6
          name: "Shaxsiy rivojlanish",
          
        },
        {
          // id:7
          name: "Ilmiy-fantastik",
          
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
