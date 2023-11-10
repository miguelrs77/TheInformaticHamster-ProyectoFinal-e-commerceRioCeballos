const { preguntaProvider } = require("../providers");

const validatePregunta = async (id) => {
  return await preguntaProvider.validatePregunta(id);
};

const createPregunta = async (pregunta) => {
  return await preguntaProvider.createPregunta(pregunta);
};

const getIdPregunta = async (id) => {
  return await preguntaProvider.getIdPregunta(id);
};

const findPreguntas = async (options) => {
  return await preguntaProvider.findPreguntas(options);
};

const putPregunta = async (id, pregunta) => {
  return await preguntaProvider.putPregunta(id, pregunta);
};

const deletePregunta = async (id) => {
  return await preguntaProvider.deletePregunta(id);
};

module.exports = {
  validatePregunta,
  createPregunta,
  getIdPregunta,
  findPreguntas,
  putPregunta,
  deletePregunta,
};
