const bcrypt = require("bcrypt");
const { userService } = require("../services");

// CREATE USER WITH BYCRYPT
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  // Validamos si User ya existe en DB
  const dbUser = await userService.validateUser(email);
  if (dbUser) {
    return res
      .status(400)
      .json({ msg: "Ya existe el User con el nombre: " + email });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userService.createUser({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ msg: "User creado existosamente!", newUser });
  } catch (error) {
    console.error("Error al crear el Usuario", error)
    res
      .status(404)
      .json({ message: "Error al crear el Usuario", error: error.message });
  }
};

module.exports = createUser;
