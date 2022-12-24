'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientProgramDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClientProgramDetails.init({
    coach_client: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClientProgramDetails',
  });
  return ClientProgramDetails;
};