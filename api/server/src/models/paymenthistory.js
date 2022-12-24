'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentHistory.init({
    client_coach: DataTypes.INTEGER,
    amount: DataTypes.REAL,
    paid_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PaymentHistory',
  });
  return PaymentHistory;
};