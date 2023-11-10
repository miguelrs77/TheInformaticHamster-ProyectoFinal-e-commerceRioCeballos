const { infoCardService } = require("../services");

// CREATE INFOCARD
const createInfoCard = async (req, res ) => {
  const { title, imageUrl, description, category } = req.body
  try {
    const newInfoCard = await infoCardService.createInfoCard({
      title,
      imageUrl,
      description,
      category
    });
    res.status(201).json({ message: 'InfoCard successfully created', newInfoCard });
  } catch (error) {
    res.status(500).json({ message: 'Error creating InfoCard', error: error.message });
  }
};

// GET INFOCARD BY ID
const getInfoCardId = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  try {
    const infoCard = await infoCardService.getInfoCardId(infoCardId);
    res.status(200).json(infoCard);
  } catch (error) {
    res.status(404).json({ message: "An error occurred finding InfoCard by ID", error: error.message });
  }
};

// GET ALL INFOCARDs
const findInfoCards = async (_req, res) => {
  try {
    const infoCards = await infoCardService.findInfoCards();
    res.json(infoCards);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE INFOCARD BY ID
const updateInfoCard = async (req, res) => {
  const infoCardId = req.params.infoCardId;
  const { title, imageUrl, description, category } = req.body;
  try {
    const newInfoCard = await infoCardService.putInfoCard(infoCardId, {
      title,
      imageUrl,
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
  const dbInfoCard = await infoCardService.validateInfoCard(infoCardId);
  if (!dbInfoCard) {
    return res
      .status(400)
      .json({ message: "No infoCard found with this ID: " + infoCardId });
  } else {
    const infoCard = infoCardService.deleteInfoCard(infoCardId);
    res.status(200).json({ message: 'InfoCard successfully deleted', infoCard });
  }
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting InfoCard", error: error.message });
  }
};

module.exports = { createInfoCard, getInfoCardId, findInfoCards, updateInfoCard, deleteInfoCard };
