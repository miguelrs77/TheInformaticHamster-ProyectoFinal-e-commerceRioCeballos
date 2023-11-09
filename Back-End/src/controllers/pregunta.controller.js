const { preguntaService } = require("../services");

// TODO: Agregar permisos para cada accion.
// CREATE PREGUNTA
const createPregunta = async (req, res) => {
  const { question, visible } = req.body;
  try {
    const newPregunta = await preguntaService.createPregunta({
      question,
      visible,
    });
    res
      .status(201)
      .json({ message: "Pregunta successfully created", newPregunta });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating Pregunta", error: error.message });
  }
};

// GET PREGUNTA BY ID
const getIdPregunta = async (req, res) => {
  const preguntaId = req.params.preguntaId;
  try {
    const pregunta = await preguntaService.getIdPregunta(preguntaId);
    res.status(200).json(pregunta);
  } catch (error) {
    res
      .status(404)
      .json({
        message: "An error occurred finding Pregunta by ID",
        error: error.message,
      });
  }
};

// GET ALL PREGUNTAs
const findPreguntas = async (_req, res) => {
  try {
    const preguntas = await preguntaService.findPreguntas();
    res.json(preguntas);
    // res.status(200).json({ message: "Infocards found: ", preguntasArray });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE PREGUNTA BY ID
const putPregunta = async (req, res) => {
  const preguntaId = req.params.preguntaId;
  const { question, visible } = req.body;
  try {
    const newPregunta = await preguntaService.putPregunta(preguntaId, {
      question,
      visible,
    });
    res
      .status(200)
      .json({ message: "Pregunta successfully updated", newPregunta });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error occurred updating Pregunta",
        error: error.message,
      });
  }
};

// DELETE PREGUNTA
const deletePregunta = async (req, res) => {
  const preguntaId = req.params.preguntaId;
  try {
    const dbPregunta = await preguntaService.validatePregunta(preguntaId);
    if (!dbPregunta) {
      return res
        .status(400)
        .json({ message: "No pregunta found with this ID: " + preguntaId });
    } else {
      const pregunta = preguntaService.deletePregunta(preguntaId);
      res
        .status(200)
        .json({ message: "Pregunta successfully deleted", pregunta });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "An error occurred deleting Pregunta",
        error: error.message,
      });
  }
};

module.exports = {
  createPregunta,
  getIdPregunta,
  findPreguntas,
  putPregunta,
  deletePregunta,
};
