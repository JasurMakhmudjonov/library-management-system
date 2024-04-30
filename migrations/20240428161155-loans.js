"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("loans", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      borrowerId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "borrowers",
          key: "id",
        },
      },
      bookCopyId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "book_copies",
          key: "id",
        },
      },
      dateBorrowed: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      dateReturned: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
      dueDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.ENUM("loaned", "pending", "closed"),
        defaultValue: "loaned",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("loans");
  },
};
