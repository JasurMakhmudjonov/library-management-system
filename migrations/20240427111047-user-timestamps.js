"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",
      "createdAt",
      {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      }
      
    );
    await queryInterface.addColumn(
      "users",
      "updatedAt",
      {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users", "createdAt");
    await queryInterface.removeColumn("users", "updatedAt");
  },
};
