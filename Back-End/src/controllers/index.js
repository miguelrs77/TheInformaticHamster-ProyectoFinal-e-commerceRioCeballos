const { loginAdmin, newAdmin } = require("./admin.controller");
const { loginEncuestador, newEncuestador } = require('./encuestador.controller');
const { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta } = require('./preguntas.controller');
const { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard } = require('./infoCard.controller');
const { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta } = require('./encuesta.controller');
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('./respuesta.controller');


module.exports = {
  adminController: { loginAdmin, newAdmin },
  encuestadorController: { loginEncuestador, newEncuestador },
  preguntaController: { deletePregunta, getPregunta, getPreguntas, postPregunta, updatePregunta },
  infoCardController: { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard },
  encuestaController: { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta },
  respuestaController: { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta }
};
