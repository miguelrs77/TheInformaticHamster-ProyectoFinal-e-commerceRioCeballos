const { Router } =require('express');
const router = Router();
const { authIsAdmin } = require('../middleware');
const { createRespuesta, getIdRespuesta, findRespuestas, putRespuesta, deleteRespuesta } = require('../controllers/respuesta.controller');


router.post('/', createRespuesta);
router.get('/:respuestaId', getIdRespuesta);
router.get('/', findRespuestas);
// route de FindRespuestas associated to pregunta
// router.get('/:respuestaId', getResOfPre);

router.put('/:respuestaId', putRespuesta);
router.delete('/:respuestaId', deleteRespuesta);

module.exports = router;
