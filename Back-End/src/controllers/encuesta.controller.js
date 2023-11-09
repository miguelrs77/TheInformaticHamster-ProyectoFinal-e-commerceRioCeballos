const { encuestaService } = require("../services");

// CREATE ENCUESTA
const createEncuesta = async (req, res ) => {
  const { title, description, category, order } = req.body
  try {
    const newEncuesta = await encuestaService.createEncuesta({
      title,
      description,
      category,
      order
    });
    res.status(201).json({ message: 'Encuesta successfully created', newEncuesta });
  } catch (error) {
    res.status(500).json({ message: 'Error creating encuesta', error: error.message });
  }
};

// GET ENCUESTA BY ID
const getIdEncuesta = async (req, res) => {
  const encuestaId = req.params.encuestaId;
  try {
    const encuesta = await encuestaService.getIdEncuesta(encuestaId);
    res.status(200).json(encuesta);
  } catch (error) {
    res.status(500).json({ message: "An error occurred finding encuesta by ID", error: error.message });
  }
};

// GET ALL ENCUESTAs
// TODO: Agregar validaciones: Title y Description son campos obligatorios. Description deberia tener un 100 caracteres max, etc etc
const findEncuestas = async (_req, res) => {
  try {
    const encuestas = await encuestaService.findEncuestas();
    res.status(200).json({ message: "Encuestas found: ", encuestas });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE ENCUESTA BY ID
const putEncuesta = async (req, res) => {
  const encuestaId = req.params.encuestaId;
  const { title, description, category, order } = req.body;
  try {
    const newEncuesta = await encuestaService.putEncuesta(encuestaId, {
      title,
      description,
      category,
      order
    });
    res.status(200).json({ message: "encuesta successfully updated", newEncuesta });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating encuesta", error: error.message });
  }
};

// DELETE ENCUESTA
const deleteEncuesta = async (req, res) => {
  const encuestaId = req.params.encuestaId;
  try {
    const encuesta = encuestaService.deleteEncuesta(encuestaId);
    res.status(200).json({ message: 'Encuesta successfully deleted', encuesta });
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting encuesta", error: error.message });
  }
};

module.exports = { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta };
