const { Router } = require("express");
const router = Router();
const { loginEncuestador, newEncuestador } = require("../controllers/encuestador.controller");

router.post('/', newEncuestador);
router.post('/login', loginEncuestador)

module.exports = router;
