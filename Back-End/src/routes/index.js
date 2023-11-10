const signUpRoute = require("./signUp.route");
const loginRoute = require("./login.route");
const infoCardRoute = require("./infoCard.route");
const preguntaRoute = require("./pregunta.route");
const respuestaRoute = require("./respuesta.route");
const surveyRoute = require("./survey.route");
const userRoute = require("./user.route");
const uploadRouter = require("./upload.route");

module.exports = {
  signUpRoute,
  loginRoute,
  preguntaRoute,
  infoCardRoute,
  surveyRoute,
  respuestaRoute,
  userRoute,
  uploadRouter
};
