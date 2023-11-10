const UserModel = require("../models/user.model");

// TODO: ERROR CATCH BUT NOT DOING ANYTHING WITH IT. MUST EDIT ERROR MESSAGE.
// VALIDATE USER ON DB
const validateUser = async ( email ) => {
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (user) {
      console.log(user);
      return user;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

// VALIDATE USER BY ID ON DB
const validateUserId = async ( userId ) => {
  try {
    const user = await UserModel.findOne({ where: { id: userId } });
    if (user) {
      console.log(user);
      return user;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

// CREATE USER
const createUser = async (userOptions) => {
  try {
    const newUser = await UserModel.create(userOptions);
    return newUser;
  } catch (error) {
    throw error;
  }
};

// GET USER BY ID
const getUserId = async (id) => {
  try {
    const user = await UserModel.findByPk(id, { include: [{ all: true }] });
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL USERs
const findUsers = async (options) => {
  try {
    const users = await UserModel.findAll(options);
    // const usersArray = Array.isArray(users) ? users : [users];
    // console.log(users);
    return users;
  } catch (error) {
    throw error;
  }
};

// TODO: se hace un await del get, pero no se guarda el resultado en ninguna variable
// TODO: PARA QUE ESTABA ESTO ?
// UPDATE USER BY ID
const updateUser = async (userId, userOptions) => {
  try {
    await getUserId(userId);
    const [numRowsUpdated] = await UserModel.update(userOptions, {
      where: { id: userId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return UserModel.findByPk(userId);
  } catch (error) {
    throw error;
  }
};

// DELETE USER
const deleteUser = async (userId) => {
  try {
    return UserModel.destroy({ where: { id: userId } });
  } catch (error) {
    throw error;
  }
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
