const { DataTypes }  = require('sequelize');
const sequelize  = require('../config/configDB');

const Encuestador = sequelize.define('Encuestador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Encuestador;
