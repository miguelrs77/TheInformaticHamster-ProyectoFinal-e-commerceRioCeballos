const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Pregunta = require("./question.model");
const User = require("./user.model");
const Category = require("./category.model");

const Survey = sequelize.define("Survey", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

// PREGUNTA ASSOCIATION
// Survey.hasMany(Category, {
//   foreignKey: { allowNull: false, field: "categoryId" },
//   onDelete: "CASCADE",
// });

// Survey.belongsTo(User);

module.exports = Survey;
