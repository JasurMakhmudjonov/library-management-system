"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", { 
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
      password: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false,
      },
      role: {
        type: Sequelize.DataTypes.ENUM("librarian", "admin", "superadmin"),
        allowNull: false,
      },
     });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
