"use strict";

const { SELECT } = require("sequelize/lib/query-types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("books", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      subTitle: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      isbnNumber: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      pages: {
        type: Sequelize.DataTypes.SMALLINT,
        allowNull: false,
      },
      lang: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      translated: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
      },
      prevLang: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: true,
      },
      yearPublished: {
        type: Sequelize.DataTypes.SMALLINT,
        allowNull: false,
      },
      publisherId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "publishers",
          key: "id",
        },
      },
      categoryId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      
      },

      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("books", { force: true });
  },
};
