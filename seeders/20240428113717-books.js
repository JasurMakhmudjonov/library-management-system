"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          // id:1
          title: "Kompyuter tushunchasi",
          subTitle: null,
          isbnNumber: "978-9943-8448-2-9",
          pages: 200,
          lang: "Uzbek",
          translated: false,
          prevLang: null,
          yearPublished: 2020,
          publisherId: 5,
          categoryId: 1,
        },
        {
          // id:2
          title: "Savdogarlar ustozi",
          subTitle: null,
          isbnNumber: "978-9943-8448-2-0",
          pages: 200,
          lang: "Uzbek",
          translated: false,
          prevLang: null,
          yearPublished: 2022,
          publisherId: 6,
          categoryId: 4,
        },
        {
          // id:3
          title: "Buyuk ipak yo'li",
          subTitle: null,
          isbnNumber: "978-9943-8448-2-1",
          pages: 260,
          lang: "Uzbek",
          translated: true,
          prevLang: "Russian",
          yearPublished: 2018,
          publisherId: 7,
          categoryId: 3,
        },
        {
           // id:4
          title: "Algoritmlash",
          subTitle: null,
          isbnNumber: "978-9943-8448-2-2",
          pages: 200,
          lang: "English",
          translated: false,
          prevLang: null,
          yearPublished: 2016,
          publisherId: 3,
          categoryId: 7,
        },
        {
           // id:5
          title: "Qo'rqma",
          subTitle: null,
          isbnNumber: "978-9943-8448-2-3",
          pages: 200,
          lang: "Uzbek",
          translated: false,
          prevLang: null,
          yearPublished: 2024,
          publisherId: 6,
          categoryId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
