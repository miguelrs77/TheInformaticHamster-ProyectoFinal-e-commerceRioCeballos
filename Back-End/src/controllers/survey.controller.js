const { surveyService } = require("../services");

// CREATE Survey
const createSurvey = async (req, res ) => {
  const { title, visible } = req.body
  try {
    const newSurvey = await surveyService.createSurvey({
      title,
      visible
    });
    res.status(201).json({ message: 'Survey successfully created', newSurvey });
  } catch (error) {
    res.status(500).json({ message: 'Error creating Survey', error: error.message });
  }
};

// GET Survey BY ID
const getSurveyId = async (req, res) => {
  const surveyId = req.params.surveyId;
  try {
    const survey = await surveyService.getSurveyId(surveyId);
    res.status(200).json(survey);
  } catch (error) {
    res.status(404).json({ message: "An error occurred finding survey by ID", error: error.message });
  }
};

// GET ALL Surveys
// TODO: Agregar validaciones: Title y Description son campos obligatorios. Description deberia tener un 100 caracteres max, etc etc
const findSurveys = async (_req, res) => {
  try {
    const surveys = await surveyService.findSurveys();
    res.status(200).json({ message: "Surveys found: ", surveys });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// UPDATE Survey BY ID
const updateSurvey = async (req, res) => {
  const surveyId = req.params.surveyId;
  const { title, visible } = req.body;
  try {
    const newSurvey = await surveyService.putSurvey(surveyId, {
      title,
      visible
    });
    res.status(200).json({ message: "Survey successfully updated", newSurvey });
  } catch (error) {
    res.status(500).json({ message: "An error occurred updating Survey", error: error.message });
  }
};

// DELETE Survey
const deleteSurvey = async (req, res) => {
  const surveyId = req.params.surveyId;
  try {
  const dbSurvey = await surveyService.validateSurvey(surveyId);
  if (!dbSurvey) {
    return res
      .status(400)
      .json({ message: "No Survey found with this ID: " + surveyId });
  } else {
    const survey = surveyService.deleteSurvey(surveyId);
    res.status(200).json({ message: 'Survey successfully deleted', survey });
  }
  } catch (error) {
    res.status(500).json({ message: "An error occurred deleting survey", error: error.message });
  }
};

module.exports = { createSurvey, getSurveyId, findSurveys, updateSurvey, deleteSurvey };
