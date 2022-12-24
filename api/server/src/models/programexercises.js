'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgramExercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProgramExercises.init({
    client_program_details: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProgramExercises',
  });
  return ProgramExercises;
};