const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Respuesta = require("./respuesta.model");

const Pregunta = sequelize.define("Pregunta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // encuestaId: {
  //   type: DataTypes.STRING,
  //   foreignKey: true,
  //   allowNull: false,
  // },
  // visible: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: false,
  // },
});
// TODO esto? o crear una nueva tabla PreguntaEncuesta?

// Associations DB table
// CASCADE: if Pregunta deleted then Respuesta deleted too.
// Pregunta.associate = (models) => {
//     Pregunta.hasMany(models.Respuesta, {
//         foreignKey: "preguntaId",
//         onDelete: 'CASCADE',
//     })
// };

// Pregunta.hasMany(Respuesta, {
//   foreignKey: "preguntaId",
//   onDelete: "CASCADE",
// });

// const preguntaEncuestaColumn = "encuestaId";
// Pregunta.belongsTo(Encuesta, {
//   foreignKey: preguntaEncuestaColumn,
//   onDelete: "CASCADE",
// });
// Encuesta.hasMany(Pregunta, { foreignKey: preguntaEncuestaColumn });

module.exports = Pregunta;
