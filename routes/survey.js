const express = require("express");
const router = new express.Router();
const systemController = require("../controllers/system");

router.post("/submit", systemController.addSurveyAnswer);

module.exports = router;
