const { Router } =require('express');
const router = Router();
const { postPregunta, getPregunta, getPreguntas, updatePregunta, deletePregunta } = require('../controllers/preguntas.controller');

router.post('/', postPregunta);
router.get('/:preguntaId', getPregunta);
router.get('/', getPreguntas);
router.put('/:preguntaId', updatePregunta);
router.delete('/:preguntaId', deletePregunta);

module.exports = router;
