const { encuestaProvider } = require('../providers');

const createEncuesta = async (encuesta) => {
  return await encuestaProvider.createEncuesta(encuesta);
};

const getIdEncuesta = async (id) => {
  return await encuestaProvider.getIdEncuesta(id);
};

const findEncuestas = async (options) => {
  return await encuestaProvider.findEncuestas(options);
};

const putEncuesta = async (id, encuesta) => {
  return await encuestaProvider.putEncuesta(id, encuesta);
};

const deleteEncuesta = async (id) => {
  return await encuestaProvider.deleteEncuesta(id);
};

module.exports = { 
  createEncuesta,
  getIdEncuesta,
  findEncuestas,
  putEncuesta,
  deleteEncuesta
};