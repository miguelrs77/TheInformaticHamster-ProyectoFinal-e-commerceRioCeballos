const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const { encuestadorModel } = require('../models');

const newEncuestador = async (req, res) => {
  const { username, password } = req.body;

  // Validamos si el Encuestador ya existe en la base de datos
  const encuestador = await encuestadorModel.findOne({ where: { username } });

  if (encuestador) {
      return res.status(400).json({
          msg: 'Ya existe el Encuestador con el nombre: ' + encuestador
      });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
      // Guardamos el Encuestador en la base de datos
      await encuestadorModel.create({
          username: username,
          password: hashedPassword
      })
      res.json({
          msg: 'Admin creado existosamente!'
      })
  } catch (err) {
      res.status(400).json({
          msg: 'Error al crear el Encuestador'
      })
  }
};

const loginEncuestador = async (req, res) => {
  const { username, password } = req.body;
  // Validamos si el Encuestador existe en la base de datos
  const encuestador = await encuestadorModel.findOne({ where: { username } });
  if (!encuestador) {
      return res.status(400).json({
          msg: 'No existe el Encuestador con el nombre: '+ username
      });
  };
  // Validamos password
  const passwordValid = await bcrypt.compare(password, encuestador.password);
  if (!passwordValid) {
      return res.status(400).json({
          message: 'Usuario o contraseña Incorrecto'
      });
  };
  // Generamos Token
  const token = jwt.sign({ username: username, }, 
    process.env.SECRET_KEY || 'contraseña123');
    console.log(token);
    res.json(token);
};

module.exports = {
    newEncuestador,
    loginEncuestador
};
