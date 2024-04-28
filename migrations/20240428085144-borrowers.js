"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("borrowers", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      unitNumber: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      streetNumber: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      addressLine1: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      addressLine2: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      city: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      region: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
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
    await queryInterface.dropTable("borrowers", { force: true });
  },
};
