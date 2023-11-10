const PreguntaModel = require("../models/question.model");

// TODO: ERROR CATCH BUT NOT DOING ANYTHING WITH IT. MUST EDIT ERROR MESSAGE.
// CREATE PREGUNTA
const createPregunta = async (preguntaOptions) => {
  try {
    const newPregunta = await PreguntaModel.create(preguntaOptions);
    return newPregunta;
  } catch (error) {
    throw error;
  }
};

// GET PREGUNTA BY ID
const getIdPregunta = async (id) => {
  try {
    const pregunta = await PreguntaModel.findByPk(id, {
      include: [{ all: true }],
    });
    if (pregunta) {
      return pregunta;
    } else {
      throw new Error("Pregunta not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL PREGUNTAs
const findPreguntas = async (options) => {
  try {
    const preguntas = await PreguntaModel.findAll(options);
    // const preguntasArray = Array.isArray(preguntas) ? preguntas : [preguntas];
    // console.log(preguntas);
    return preguntas;
  } catch (error) {
    throw error;
  }
};

// TODO: se hace un await del get, pero no se guarda el resultado en ninguna variable
// TODO: PARA QUE ESTABA ESTO ?
// UPDATE PREGUNTA BY ID
const putPregunta = async (preguntaId, preguntaOptions) => {
  try {
    await getIdPregunta(preguntaId);
    const [numRowsUpdated] = await PreguntaModel.update(preguntaOptions, {
      where: { id: preguntaId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return PreguntaModel.findByPk(preguntaId);
  } catch (error) {
    throw error;
  }
};

// DELETE PREGUNTA
const deletePregunta = async (preguntaId) => {
  try {
    return PreguntaModel.destroy({ where: { id: preguntaId } });
  } catch (error) {
    throw error;
  }
};

// VALIDACION SI EXISTE PREGUNTA EN DB
const validatePregunta = async (preguntaId) => {
  try {
    const pregunta = await PreguntaModel.findOne({ where: { id: preguntaId } });
    if (pregunta) {
      console.log(pregunta);
      return pregunta;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validatePregunta,
  createPregunta,
  getIdPregunta,
  findPreguntas,
  putPregunta,
  deletePregunta,
};
