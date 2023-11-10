const { Sequelize } = require("sequelize");
require('dotenv').config()

// Conexión a la BD MySQL, modificar .env 
const sequelizeOptions = {
  host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  dialect: 'mysql',
};

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);

module.exports = sequelize;
