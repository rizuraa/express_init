'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nama: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      role: {
        type: Sequelize.STRING(50),
        allowNull: false
      },      
      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      access_token: {
        type: Sequelize.TEXT,
        allowNull: true
      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      {underscore: true}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};