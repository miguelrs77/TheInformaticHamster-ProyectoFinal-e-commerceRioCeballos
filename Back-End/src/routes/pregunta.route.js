const { Router } =require('express');
const router = Router();
const { authIsAdmin } = require('../middleware');
const { createPregunta, getIdPregunta, findPreguntas, putPregunta, deletePregunta } = require('../controllers/pregunta.controller');

router.post('/', createPregunta);
router.get('/:preguntaId', getIdPregunta);
router.get('/', findPreguntas);
router.put('/:preguntaId', authIsAdmin, putPregunta);
router.delete('/:preguntaId', authIsAdmin, deletePregunta);

module.exports = router;
