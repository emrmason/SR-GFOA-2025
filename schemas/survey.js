const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  erp: {
    type: String,
  },
  likeIt: {
    type: String,
  },
  email: {
    type: String,
  },
});

const SurveyResponse = mongoose.model("Surveyresponse", surveySchema);

module.exports = SurveyResponse;
