const { surveyProvider } = require('../providers');

const validateSurvey = async (id) => {
  return await surveyProvider.validateSurvey(id);
};

const createSurvey = async (survey) => {
  return await surveyProvider.createSurvey(survey);
};

const getSurveyId = async (id) => {
  return await surveyProvider.getSurveyId(id);
};

const findSurveys = async (options) => {
  return await surveyProvider.findSurveys(options);
};

const updateSurvey = async (id, survey) => {
  return await surveyProvider.updateSurvey(id, survey);
};

const deleteSurvey = async (id) => {
  return await surveyProvider.deleteSurvey(id);
};


module.exports = {
  validateSurvey,
  createSurvey,
  getSurveyId,
  findSurveys,
  updateSurvey,
  deleteSurvey
};