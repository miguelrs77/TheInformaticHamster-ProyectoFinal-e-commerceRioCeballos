const { userProvider } = require('../providers');

const validateUser = async (user) => {
  return await userProvider.validateUser(user);
};

const validateUserId = async (id) => {
  return await userProvider.validateUserId(id);
};

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUserId = async (id) => {
  return await userProvider.getUserId(id);
};

const findUsers = async (options) => {
  return await userProvider.findUsers(options);
};

const updateUser = async (id, user) => {
  return await userProvider.updateUser(id, user);
};

const deleteUser = async (id) => {
  return await userProvider.deleteUser(id);
};

module.exports = { 
  validateUser,
  validateUserId,
  createUser,
  getUserId,
  findUsers,
  updateUser,
  deleteUser,
};