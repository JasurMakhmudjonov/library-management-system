"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "borrowers",
      [
        // id:1
        {
          firstName: "Vali",
          lastName: "Aliyev",
          email:"valialiyev@gmail.com",
          username: "vali",
          unitNumber: '145',
          streetNumber: "Huriyat 7",
          addressLine1: "Huriyat ko'cha 145",
          addressLine2: "Muqumiy ko'cha 8",
          city: "Chilonzor",
          region: "Tashkent",
          postalCode: "123456"

        },

        {
           // id:2
          firstName: "Jorge",
          lastName: "Lens",
          email:"goergelens@gmail.com",
          username: "george",
          unitNumber: '2',
          streetNumber: "Lecter 7",
          addressLine1: "Brooklyn 145",
          addressLine2: "Bloomington 8",
          city: "Bloomington",
          region: "Chicago",
          postalCode: "1234567"

        },
        {
          // id:3
          firstName: "Lora",
          lastName: "Ivanova",
          email:"loraivanova@gmail.com",
          username: "lora",
          unitNumber: '3',
          streetNumber: "Pushkin 7",
          addressLine1: "Moskovskiy 145",
          addressLine2: "Something 8",
          city: "Moscov city",
          region: "Moscov",
          postalCode: "12345678"

        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("borrowers", null, {});
  },
};
