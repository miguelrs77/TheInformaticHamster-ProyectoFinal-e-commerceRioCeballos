const { DataTypes } = require('sequelize');
const sequelize =require('../config/configDB');

const InfoCard = sequelize.define('InfoCard', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false
  },
  description: {
      type: DataTypes.STRING,
      allowNull: false
  },
  category: {
      type: DataTypes.STRING,
      allowNull: false
  }
});

module.exports = InfoCard;
