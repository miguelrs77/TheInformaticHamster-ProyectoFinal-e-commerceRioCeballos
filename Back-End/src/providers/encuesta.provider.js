const EncuestaModel = require('../models/encuesta.model');

// CREATE ENCUESTA
const createEncuesta = async (encuestaOptions) => {
  try {
    const newEncuesta = await EncuestaModel.create(encuestaOptions);
    return newEncuesta;
  } catch (error) {
    throw error;
  }
};

// GET ENCUESTA BY ID
const getIdEncuesta = async (id) => {
  try {
    const encuesta = await EncuestaModel.findByPk(id, { include: [{ all: true }] });
    if (encuesta) {
      return encuesta;
    } else {
      throw new Error("encuesta not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL ENCUESTAs
const findEncuestas = async (options) => {
  try {
    const encuestas = await EncuestaModel.findAll(options);
    return encuestas;
  } catch (error) {
    throw error;
  }
};

// UPDATE ENCUESTA BY ID
const putEncuesta = async (encuestaId, encuestaOptions) => {
  try {
    await getIdEncuesta(encuestaId);
    const [numRowsUpdated] = await EncuestaModel.update(encuestaOptions, {
      where: { id: encuestaId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return EncuestaModel.findByPk(encuestaId);
  } catch (error) {
    throw error;
  }
};

// DELETE ENCUESTA
const deleteEncuesta = async (encuestaId) => {
  try {
    return EncuestaModel.destroy({ where: { id: encuestaId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEncuesta,
  getIdEncuesta,
  findEncuestas,
  putEncuesta,
  deleteEncuesta
};