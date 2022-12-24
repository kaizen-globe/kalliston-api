'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CardDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      card_number: {
        type: Sequelize.STRING
      },
      card_holder_name: {
        type: Sequelize.STRING
      },
      expiry_date: {
        type: Sequelize.STRING
      },
      billing_address1: {
        allowNull: true,
        type: Sequelize.STRING
      },
      billing_address2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pin: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING
      },
      country: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cvv: {
        allowNull: true,
        type: Sequelize.STRING
      },
      coach_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CardDetails');
  }
};