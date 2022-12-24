'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoachClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CoachClient.init({
    client_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoachClient',
  });
  return CoachClient;
};