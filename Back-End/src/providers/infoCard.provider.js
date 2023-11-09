const InfoCardModel = require('../models/infoCard.model');

// CREATE INFOCARD
const createInfoCard = async (infoCardOptions) => {
  try {
    const newInfoCard = await InfoCardModel.create(infoCardOptions);
    return newInfoCard;
  } catch (error) {
    throw error;
  }
};

// GET INFOCARD BY ID
const getIdInfoCard = async (id) => {
  try {
    const infoCard = await InfoCardModel.findByPk(id, { include: [{ all: true }] });
    if (infoCard) {
      return infoCard;
    } else {
      throw new Error("infoCard not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL INFOCARDs
const findInfoCards = async (options) => {
  try {
    const infoCards = await InfoCardModel.findAll(options);
    // const infoCardsArray = Array.isArray(infoCards) ? infoCards : [infoCards];
    // console.log(infoCards);
    return infoCards;
  } catch (error) {
    throw error;
  }
};

// UPDATE INFOCARD BY ID
const putInfoCard = async (infoCardId, infoCardOptions) => {
  try {
    await getIdInfoCard(infoCardId);
    const [numRowsUpdated] = await InfoCardModel.update(infoCardOptions, {
      where: { id: infoCardId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return InfoCardModel.findByPk(infoCardId);
  } catch (error) {
    throw error;
  }
};

// DELETE INFOCARD
const deleteInfoCard = async (infoCardId) => {
  try {
    return infoCardModel.destroy({ where: { id: infoCardId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createInfoCard,
  getIdInfoCard,
  findInfoCards,
  putInfoCard,
  deleteInfoCard,
};
