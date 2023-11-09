const { Router } =require('express');
const router = Router();
const { createRespuesta, getIdRespuesta, findRespuestas, getResOfPre, putRespuesta, deleteRespuesta } = require('../controllers/respuesta.controller');

router.post('/', createRespuesta);
// router.get('/:respuestaId', getIdRespuesta);
router.get('/', findRespuestas);
router.get('/:respuestaId', getResOfPre);
router.put('/:respuestaId', putRespuesta);
router.delete('/:respuestaId', deleteRespuesta);

module.exports = router;
