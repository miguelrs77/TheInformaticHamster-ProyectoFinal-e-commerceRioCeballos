const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/configDB");
const Pregunta = require("./pregunta.model");

const Respuesta = sequelize.define("Respuesta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  preguntaId: {
    type: DataTypes.STRING,
    foreignKey: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Associations DB
Respuesta.associate = (models) => {
  Respuesta.belongsTo(models.Pregunta, {
      foreignKey: "preguntaId",
      onDelete: 'CASCADE',
  })
};

// const respuestaPreguntaColumn = "preguntaId";
// Respuesta.belongsTo(Pregunta, {
//   foreignKey: respuestaPreguntaColumn,
//   onDelete: "CASCADE",
// });
// Pregunta.hasMany(Respuesta, { foreignKey: respuestaPreguntaColumn });

module.exports = Respuesta;
