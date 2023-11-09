const sequelize = require("./configDB");

const initializeDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB established");
    // false conserva la BD / true actualiza la BD
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Synchronizing DB failed", error);
  }
};

module.exports = initializeDB;
