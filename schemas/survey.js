const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  erp: {
    type: String,
  },
  likeit: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Surveyresponse = mongoose.model("Surveyresponse", surveySchema);

module.exports = Surveyresponse;
