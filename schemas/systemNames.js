const mongoose = require("mongoose");

const systemSchema = new mongoose.Schema({
  system: {
    type: String,
  },
});

const SystemName = mongoose.model("SystemName", systemSchema);

module.exports = SystemName;
