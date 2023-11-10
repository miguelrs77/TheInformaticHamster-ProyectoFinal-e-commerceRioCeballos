const initializeDB = require("./syncDB");
const sequelize = require("./configDB");

module.exports = { sequelize, initializeDB };
