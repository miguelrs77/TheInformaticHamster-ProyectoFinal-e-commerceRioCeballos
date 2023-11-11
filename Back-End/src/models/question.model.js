const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Category = require("./category.model");

const Pregunta = sequelize.define("Pregunta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// PREGUNTA ASSOCIATION

module.exports = Pregunta;
