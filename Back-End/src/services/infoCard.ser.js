const { infoCardProvider } = require('../providers');

const validateInfoCard = async (id) => {
  return await infoCardProvider.validateInfoCard(id);
};

const createInfoCard = async (infoCard) => {
  return await infoCardProvider.createInfoCard(infoCard);
};

const getInfoCardId = async (id) => {
  return await infoCardProvider.getInfoCardId(id);
};

const findInfoCards = async (options) => {
  return await infoCardProvider.findInfoCards(options);
};

const updateInfoCard = async (id, infoCard) => {
  return await infoCardProvider.updateInfoCard(id, infoCard);
};

const deleteInfoCard = async (id) => {
  return await infoCardProvider.deleteInfoCard(id);
};

module.exports = { 
  validateInfoCard,
  createInfoCard,
  getInfoCardId,
  findInfoCards,
  updateInfoCard,
  deleteInfoCard,
};
