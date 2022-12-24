module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    card_number: {
      type: DataTypes.STRING
    },
    card_holder_name: {
      type: DataTypes.STRING
    },
    expiry_date: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    billing_address1: {
      allowNull: true,
      type: DataTypes.STRING
    },
    billing_address2: {
      allowNull: true,
      type: DataTypes.STRING
    },
    city: {
      allowNull: true,
      type: DataTypes.STRING
    },
    country: {
      allowNull: true,
      type: DataTypes.STRING
    },
    coach_id: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    pin: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    cvv: {
      allowNull: true,
      type: DataTypes.STRING
    },
  });
  return Card;
};