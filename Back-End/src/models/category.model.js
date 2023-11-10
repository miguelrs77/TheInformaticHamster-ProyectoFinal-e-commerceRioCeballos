const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Survey = require("./survey.model");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Category.belongsTo(Survey);

module.exports = Category;
