const InfoCardModel = require('../models/infoCard.model');

// TODO: ERROR CATCH BUT NOT DOING ANYTHING WITH IT. MUST EDIT ERROR MESSAGE.
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
const getInfoCardId = async (id) => {
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
    return infoCards;
  } catch (error) {
    throw error;
  }
};

// TODO: se hace un await del get, pero no se guarda el resultado en ninguna variable
// TODO: PARA QUE ESTABA ESTO ?
// UPDATE INFOCARD BY ID
const updateInfoCard = async (infoCardId, infoCardOptions) => {
  try {
    await getInfoCardId(infoCardId);
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
    return InfoCardModel.destroy({ where: { id: infoCardId } });
  } catch (error) {
    throw error;
  }
};

// VALIDACION SI EXISTE INFOCARD EN DB
const validateInfoCard = async (infoCardId) => {
  try {
    const infoCard = await InfoCardModel.findOne({ where: { id: infoCardId } });
    if (infoCard) {
      console.log(infoCard);
      return infoCard;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateInfoCard,
  createInfoCard,
  getInfoCardId,
  findInfoCards,
  updateInfoCard,
  deleteInfoCard,
};
