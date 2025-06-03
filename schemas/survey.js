const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  erp: {
    type: String,
  },
  likeit: {
    type: String,
  },
  email: {
    type: email,
  },
});

const Surveyresponse = mongoose.model("Surveyresponse", surveySchema);

module.exports = Surveyresponse;
