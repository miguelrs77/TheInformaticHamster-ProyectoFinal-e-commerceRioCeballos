const { infoCardService } = require("../services");
const cloudinary = require("../utils/cloudinary");

// TODO: Agregar permisos para cada accion. 
// CREATE INFOCARD
const createInfoCard = async (req, res ) => {
  const { title, image, description, category } = req.body
  try {
    const newInfoCard = await infoCardService.createInfoCard({
      title,
      image,
      description,
      category
    });
    res.status(201).json({ message: 'InfoCard successfully created', newInfoCard });
  } catch (error) {
    res.status(500).json({ message: 'Error creating InfoCard', error: error.message });
  }
};

// GET INFOCARD BY ID
const getIdInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  try {
    const infoCard = await infoCardService.getIdInfoCard(infoCardId);
    res.status(200).json(infoCard);
  } catch (error) {
    res.status(500).json({ message: "An error occurred finding InfoCard by ID", error: error.message });
  }
};

// GET ALL INFOCARDs
const findInfoCards = async (_req, res) => {
  try {
    const infoCards = await infoCardService.findInfoCards();
    res.json(infoCards);
    // res.status(200).json({ message: "Infocards found: ", infoCardsArray });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE INFOCARD BY ID
const putInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  const { title, image, description, category } = req.body;
  try {
    const newInfoCard = await infoCardService.putInfoCard(infoCardId, {
      title,
      image,
      description,
      category
    });
    res.status(200).json({ message: "InfoCard successfully updated", newInfoCard });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating InfoCard", error: error.message });
  }
};

// DELETE INFOCARD
const deleteInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  try {
    const infoCard = infoCardService.deleteInfoCard(infoCardId);
    res.status(200).json({ message: 'infoCard successfully deleted', infoCard });
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting InfoCard", error: error.message });
  }
};

module.exports = { createInfoCard, getIdInfoCard, findInfoCards, putInfoCard, deleteInfoCard };
