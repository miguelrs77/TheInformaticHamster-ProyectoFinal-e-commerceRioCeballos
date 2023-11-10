const preguntaModel = require('../models/pregunta.model');

// CREATE PREGUNTA
const postPregunta = async (req, res) => {
    const { body } = req;
    try {
        await preguntaModel.create(body);
        res.json({ msg: 'La pregunta fue agregada con exito!' })
    } catch (err) {
        console.log(err);
        res.json({ msg: 'Ocurrio un error: ' + err })
    }
};

// GET PREGUNTA
const getPregunta = async (req, res) => {
    const preguntaId = req.params.preguntaId;
    const pregunta = await preguntaModel.findByPk(preguntaId);
    if (pregunta) {
        res.json(pregunta);
    } else {
        res.status(404).json({ msg: 'No existe la Pregunta con ese (preguntaId)' })
    }
};

// GET ALL PREGUNTA
const getPreguntas = async (req, res) => {
    const listPreguntas = await preguntaModel.findAll();
    console.log(listPreguntas)
    res.json(listPreguntas);
};

// UPDATE PREGUNTA
const updatePregunta = async (req, res) => {
    const { body } = req;
    const preguntaId = req.params.preguntaId;
    try {
        const pregunta = await preguntaModel.findByPk(preguntaId);
        if (pregunta) {
            await pregunta.update(body);
            res.json({ msg: 'La pregunta fue actualizada con exito!' })
        } else {
            res.status(404).json({ msg: 'No existe la pregunta con ese preguntaId' })
        }
    } catch (err) {
        console.log(err);
        res.json({ msg: 'Ocurrio un error, reinicie el Server' })
    }
};

// DELETE PREGUNTA
const deletePregunta = async (req, res) => {
    const preguntaId = req.params.preguntaId;
    const pregunta = await preguntaModel.findByPk(preguntaId);
    if (!pregunta) {
        res.status(404).json({ msg: 'No existe la pregunta con ese (preguntaId)' })
    } else {
        await pregunta.destroy();
        res.json({ msg: 'La pregunta fue eliminada con exito!' })
    }
};

module.exports = {
    postPregunta,
    getPregunta,
    getPreguntas,
    updatePregunta,
    deletePregunta,
};
