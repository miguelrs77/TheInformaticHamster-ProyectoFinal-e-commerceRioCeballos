const { respuestaProvider } = require('../providers');

const createRespuesta = async (respuesta) => {
  return await respuestaProvider.createRespuesta(respuesta);
};

const getIdRespuesta = async (id) => {
  return await respuestaProvider.getIdRespuesta(id);
};

const findRespuestas = async (options) => {
  return await respuestaProvider.findRespuestas(options);
};

const putRespuesta = async (id, respuesta) => {
  return await respuestaProvider.putRespuesta(id, respuesta);
};

const deleteRespuesta = async (id) => {
  return await respuestaProvider.deleteRespuesta(id);
};

module.exports = { 
  createRespuesta,
  getIdRespuesta,
  findRespuestas,
  putRespuesta,
  deleteRespuesta
};