const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userService } = require("../services");
const secret = require("../middleware/jwtStrategy.middleware");

// USER LOGIN VALIDATIONS & CREDENTIALS ASSIGNED
const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const dbUser = await userService.validateUser(email);
    if (!dbUser) {
      return res
        .status(400)
        .json({ msg: "No existe el Usuario con el email: " + email });
    }

    const dbPass = dbUser.password;
    // Validamos password
    const passwordValid = await bcrypt.compare(password, dbPass);
    if (!passwordValid) {
      return res
        .status(400)
        .json({ message: "Los datos ingresados son incorrectos" });
    }

    // ROLES
    let role = "USER"; // Rol predeterminado, SINO es "admin" ni "encuestador"
    if (username === "admin") {
      role = "ADMIN";
    } else if (username === "encuestador") {
      role = "ENCUESTADOR";
    }
    // FIRMAMOS TOKEN
    const token = jwt.sign(
      { username: username, role: role },
      secret
    );
    res.json({ token, role });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error en Login General", error: error.message });
  }
};

module.exports = loginUser;
