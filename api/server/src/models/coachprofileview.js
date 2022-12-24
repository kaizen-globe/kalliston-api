'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoachProfileView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CoachProfileView.init({
    month_of_clients: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CoachProfileView',
  });
  return CoachProfileView;
};