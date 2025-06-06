const mongoose = require("mongoose");

const SystemNameSchema = new mongoose.Schema({
  system: {
    type: String,
  },
});

const SystemNames = mongoose.model(
  "SystemNames",
  SystemNameSchema,
  "SystemNames"
);

module.exports = SystemNames;
