'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PackageDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      short_description: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      long_description: {
        allowNull: true,
        type: Sequelize.BLOB
      },
      access_link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      program_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      offer_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['client', 'coach', 'admin'],
        defaultValue:'client'
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
    await queryInterface.dropTable('PackageDetails');
  }
};