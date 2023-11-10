const { DataTypes } = require('sequelize');
const sequelize =require('../config/configDB');

const Encuesta = sequelize.define('Encuesta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
      type: DataTypes.STRING,
      allowNull: false
  },
  visible: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
});

module.exports = Encuesta;
