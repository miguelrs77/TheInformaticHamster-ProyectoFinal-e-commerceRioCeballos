const { userService } = require("../services");

// TODO: Agregar permisos para cada accion. (en ROUTEs)
// GET USER BY ID
const getUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userService.getUserId(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "An error occurred finding User by ID",
      error: error.message,
    });
  }
};

// GET ALL USERs
const findUsers = async (_req, res) => {
  try {
    const users = await userService.findUsers();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE USER BY ID
const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { username, email } = req.body;
  try {
    const newUser = await userService.updateUser(userId, {
      username,
      email,
    });
    res.status(200).json({ message: "User successfully updated", newUser });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred updating User",
      error: error.message,
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const dbUser = await userService.validateUserId(userId);
    if (!dbUser) {
      return res
        .status(400)
        .json({ message: "No user found with this ID: " + userId });
    } else {
      const user = userService.deleteUser(userId);
      res.status(200).json({ message: "User successfully deleted", user });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred deleting User",
      error: error.message,
    });
  }
};

module.exports = { getUserId, findUsers, updateUser, deleteUser };
