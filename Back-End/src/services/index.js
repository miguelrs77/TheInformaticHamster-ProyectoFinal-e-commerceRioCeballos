const {
  validateInfoCard,
  createInfoCard,
  getInfoCardId,
  updateInfoCard,
  deleteInfoCard,
  findInfoCards,
} = require("./infoCard.ser");
const {
  validateSurvey,
  createSurvey,
  getSurveyId,
  updateSurvey,
  deleteSurvey,
  findSurveys,
} = require("./survey.ser");
const {
  createRespuesta,
  getIdRespuesta,
  findRespuestas,
  putRespuesta,
  deleteRespuesta,
} = require("./respuesta.ser");
const {
  validateUserId,
  validateUser,
  createUser,
  getUserId,
  findUsers,
  updateUser,
  deleteUser,
} = require("./user.ser");
const {
  validatePregunta,
  createPregunta,
  getIdPregunta,
  findPreguntas,
  putPregunta,
  deletePregunta,
} = require("./pregunta.ser");

module.exports = {
  infoCardService: {
    validateInfoCard,
    createInfoCard,
    getInfoCardId,
    updateInfoCard,
    deleteInfoCard,
    findInfoCards,
  },
  preguntaService: {
    validatePregunta,
    createPregunta,
    getIdPregunta,
    findPreguntas,
    putPregunta,
    deletePregunta,
  },
  surveyService: {
    validateSurvey,
    createSurvey,
    getSurveyId,
    updateSurvey,
    deleteSurvey,
    findSurveys,
  },
  respuestaService: {
    createRespuesta,
    getIdRespuesta,
    findRespuestas,
    putRespuesta,
    deleteRespuesta,
  },
  userService: {
    validateUserId,
    validateUser,
    createUser,
    getUserId,
    findUsers,
    updateUser,
    deleteUser,
  },
};
