'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CoachProfileViews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      month_of_clients: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      year_of_clients: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      count_of_clients: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      coach_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('CoachProfileViews');
  }
};