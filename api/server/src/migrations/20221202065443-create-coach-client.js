'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CoachClients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      coach_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      date_of_join: {
        type: Sequelize.DATE,
        allowNull:false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['approve','reject'],
        defaultValue:'reject'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CoachClients');
  }
};