const RespuestaModel = require('../models/answer.model');

// TODO: ERROR CATCH BUT NOT DOING ANYTHING WITH IT. MUST EDIT ERROR MESSAGE.
// CREATE RESPUESTA
const createRespuesta = async (respuestaOptions) => {
  try {
    const newRespuesta = await RespuestaModel.create(respuestaOptions);
    return newRespuesta;
  } catch (error) {
    throw error;
  }
};

// GET RESPUESTA BY ID
const getIdRespuesta = async (id) => {
  try {
    const respuesta = await RespuestaModel.findByPk(id, { include: [{ all: true }] });
    if (respuesta) {
      return respuesta;
    } else {
      throw new Error("respuesta not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL RESPUESTAs
const findRespuestas = async (options) => {
  try {
    const respuestas = await RespuestaModel.findAll(options);
    return respuestas;
  } catch (error) {
    throw error;
  }
};

// TODO: se hace un await del get, pero no se guarda el resultado en ninguna variable
// TODO: PARA QUE ESTABA ESTO ?
// UPDATE RESPUESTA BY ID
const putRespuesta = async (respuestaId, respuestaOptions) => {
  try {
    await getIdRespuesta(respuestaId);
    const [numRowsUpdated] = await RespuestaModel.update(respuestaOptions, {
      where: { id: respuestaId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return RespuestaModel.findByPk(respuestaId);
  } catch (error) {
    throw error;
  }
};

// DELETE RESPUESTA
const deleteRespuesta = async (respuestaId) => {
  try {
    return RespuestaModel.destroy({ where: { id: respuestaId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRespuesta,
  getIdRespuesta,
  findRespuestas,
  putRespuesta,
  deleteRespuesta
};
