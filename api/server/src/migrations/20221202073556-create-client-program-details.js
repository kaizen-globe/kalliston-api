'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClientProgramDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coach_client: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      program_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      week_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      day_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      day_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_rest_day: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      focus_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      links: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('ClientProgramDetails');
  }
};