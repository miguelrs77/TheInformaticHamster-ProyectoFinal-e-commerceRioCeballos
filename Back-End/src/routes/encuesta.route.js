const { Router } = require("express");
const router = Router();
const { createEncuesta, getIdEncuesta, findEncuestas, putEncuesta, deleteEncuesta } = require("../controllers/encuesta.controller");

router.post('/', createEncuesta);
router.get('/:encuestaId', getIdEncuesta);
router.get('/', findEncuestas);
router.put('/:encuestaId', putEncuesta);
router.delete('/:encuestaId', deleteEncuesta);

module.exports = router;
