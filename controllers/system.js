const mongoose = require("mongoose");
const SystemNames = require("../schemas/systemNames");
const SurveyResponse = require("../schemas/survey");
const { response } = require("express");

const getSystemNames = async () => {
  try {
    const systemNames = await SystemNames.find(); // Define it here
    let sorted = systemNames.map((obj) => obj.system).sort(); // Extract names and sort
    let list =
      "<ul>" +
      sorted
        .map(
          (sys) =>
            `<li><label for='#' id='sys-name' class='q1' name='${sys}' value='${sys}'/>${sys}</li>`
        )
        .join("") +
      "<li><label id='sys-name' name='' value=''>Other:</label>" +
      "<input type='text' class='form-field' id='sys-name'/></li>" +
      "</ul>";
    return list;
  } catch (error) {
    console.error("Error fetching system names:", error);
    return "<ul><li>Error loading systems</li></ul>";
  }
};

const addSurveyAnswer = async (req, res, next) => {
  try {
    const survey = new SurveyResponse({
      erp: req.body.erp,
      likeIt: req.body.likeIt,
      email: req.body.survey_email,
    });
    // console.log(survey);
    await survey.save();
    // res.redirect("/");
    res.redirect("/?submitted=1");
  } catch (error) {
    console.error("Error saving survey:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { addSurveyAnswer, getSystemNames };
