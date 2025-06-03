const mongoose = require("mongoose");

const systemSchema = new mongoose.Schema({
  system: {
    type: String,
  },
});

const SystemName = mongoose.model("SystemName", surveySchema);

module.exports = Surveyresponse;
