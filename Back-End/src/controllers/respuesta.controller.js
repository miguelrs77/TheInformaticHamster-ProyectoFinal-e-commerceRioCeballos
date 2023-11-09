const { respuestaService } = require("../services");
const Respuesta = require("../models/respuesta.model");

// CREATE RESPUESTA
const createRespuesta = async (req, res ) => {
  const { title, preguntaId, value } = req.body
  try {
    const newRespuesta = await respuestaService.createRespuesta({
      title,
      preguntaId,
      value
    });
    res.status(201).json({ message: 'Respuesta successfully created', newRespuesta });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Respuesta', error: error.message });
  }
};

// GET RESPUESTA BY ID
const getIdRespuesta = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  try {
    const respuesta = await respuestaService.getIdRespuesta(respuestaId);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ message: "An error occurred finding Respuesta by ID", error: error.message });
  }
};

// GET ALL RESPUESTAs
// TODO: Agregar validaciones: Title y Description son campos obligatorios. Description deberia tener un 100 caracteres max, etc etc
const findRespuestas = async (_req, res) => {
  try {
    const respuestas = await RespuestaService.findRespuestas();
    res.status(200).json({ message: "Respuestas found: ", respuestas });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// GET RESPUESTA ASSOCIATED TO PREGUNTA
const getResOfPre = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  const respuesta = await Respuesta.findAll({ where: { preguntaId: respuestaId } })
  res.json(respuesta);
  // try {
  //   const newRespuesta = await respuestaService.putRespuesta(respuestaId, {
  //     title,
  //     preguntaId,
  //     value,
  //   });
  //   res.status(200).json({ message: "Respuesta successfully updated", newRespuesta });
  // } catch (error) {
  //   res.status(500).json({ message: "An error occurred updating Respuesta", error: error.message });
  // }
};

// UPDATE RESPUESTA BY ID
const putRespuesta = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  const { title, preguntaId, value } = req.body;
  try {
    const newRespuesta = await respuestaService.putRespuesta(respuestaId, {
      title,
      preguntaId,
      value,
    });
    res.status(200).json({ message: "Respuesta successfully updated", newRespuesta });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating Respuesta", error: error.message });
  }
};

// DELETE RESPUESTA
const deleteRespuesta = async (req, res) => {
  const respuestaId = req.params.respuestaId;
  try {
    const respuesta = respuestaService.deleteRespuesta(respuestaId);
    res.status(200).json({ message: 'Respuesta successfully deleted', respuesta });
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting respuesta", error: error.message });
  }
};

module.exports = { createRespuesta, getIdRespuesta, findRespuestas, getResOfPre, putRespuesta, deleteRespuesta };
