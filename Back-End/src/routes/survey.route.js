const { Router } = require("express");
const router = Router();
const { authIsAdmin } = require('../middleware');
const { createSurvey, getSurveyId, findSurveys, updateSurvey, deleteSurvey } = require("../controllers/survey.controller");

router.post('/', createSurvey);
router.get('/:surveyId', getSurveyId);
router.get('/', findSurveys);
router.put('/:surveyId', updateSurvey);
router.delete('/:surveyId', deleteSurvey);

module.exports = router;
