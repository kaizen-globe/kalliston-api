'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientProgramExercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClientProgramExercises.init({
    program_exercises: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClientProgramExercises',
  });
  return ClientProgramExercises;
};