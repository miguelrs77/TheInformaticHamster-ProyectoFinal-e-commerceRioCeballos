const { DataTypes } = require("sequelize");
const sequelize = require("../config/configDB");
const Survey = require("./survey.model");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// ASSOCIATION
User.hasMany(Survey, {
  foreignKey: { allowNull: false, field: "userId" },
  onDelete: "CASCADE",
});

module.exports = User;
