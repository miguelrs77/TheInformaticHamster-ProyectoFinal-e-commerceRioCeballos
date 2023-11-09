const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Pregunta = require("./question.model");
const Survey = require("./survey.model");

const Respuesta = sequelize.define("Respuesta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associations DB
// Respuesta.belongsTo(Pregunta);
Respuesta.belongsTo(Survey);


module.exports = Respuesta;
