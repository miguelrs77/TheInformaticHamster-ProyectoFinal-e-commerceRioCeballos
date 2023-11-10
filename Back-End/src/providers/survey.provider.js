const SurveyModel = require('../models/survey.model');

// TODO: ERROR CATCH BUT NOT DOING ANYTHING WITH IT. MUST EDIT ERROR MESSAGE.
// CREATE SURVEY
const createSurvey = async (surveyOptions) => {
  try {
    const newSurvey = await SurveyModel.create(surveyOptions);
    return newSurvey;
  } catch (error) {
    throw error;
  }
};

// GET SURVEY BY ID
const getSurveyId = async (id) => {
  try {
    const survey = await SurveyModel.findByPk(id, { include: [{ all: true }] });
    if (survey) {
      return survey;
    } else {
      throw new Error("Survey not found");
    }
  } catch (error) {
    throw error;
  }
};

// GET ALL SURVEYs
const findSurveys = async (options) => {
  try {
    const surveys = await SurveyModel.findAll(options);
    return surveys;
  } catch (error) {
    throw error;
  }
};

// TODO: se hace un await del get, pero no se guarda el resultado en ninguna variable
// TODO: PARA QUE ESTABA ESTO ?
// UPDATE SURVEY BY ID
const updateSurvey = async (surveyId, surveyOptions) => {
  try {
    await getSurveyId(surveyId);
    const [numRowsUpdated] = await SurveyModel.update(surveyOptions, {
      where: { id: surveyId },
    });
    console.log(`${numRowsUpdated} rows updated on DB`);
    return SurveyModel.findByPk(surveyId);
  } catch (error) {
    throw error;
  }
};

// DELETE SURVEY
const deleteSurvey = async (surveyId) => {
  try {
    return SurveyModel.destroy({ where: { id: surveyId } });
  } catch (error) {
    throw error;
  }
};

// VALIDACION SI EXISTE SURVEY EN DB
const validateSurvey = async (surveyId) => {
  try {
    const survey = await SurveyModel.findOne({ where: { id: surveyId } });
    if (survey) {
      console.log(survey);
      return survey;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateSurvey,
  createSurvey,
  getSurveyId,
  findSurveys,
  updateSurvey,
  deleteSurvey
};