const mongoose = require("mongoose");
// const mongoDB = require("./connection");
const SystemNames = require("../schemas/systemNames");
const SurveyResponse = require("../schemas/survey");
const { response } = require("express");
// const surveyAnswer = {};

// // const getSystemNames = async (req, res) => {
// //   try {
// //     const systemNames = await SystemNames.find({}, { _id: 0 });
// //     console.log(systemNames);
// //     res.json(systemNames);
// //   } catch (error) {
// //     console.error("Error fetching system names: ", error);
// //   }
// // };

const addSurveyAnswer = async (req, res, next) => {
  // const newAnswer = {
  //   erp: req.body.erp,
  //   likeit: req.body.likeIt,
  //   email: req.body.survey_email,
  // };
  try {
    const survey = new SurveyResponse({
      erp: req.body.erp,
      likeIt: req.body.likeIt,
      email: req.body.survey_email,
    });

    await survey.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error saving survey:", error);
    res.status(500).send("Internal Server Error");
  }
};
// try {
//   const createdAnswer = await SurveyResponse.create(newAnswer);
//   res.status(201).send(`Answer added with _id ${createdAnswer._id}`);
// } catch (error) {
//   console.error(error);
// }
// if (createdAnswer) {
//   req.flash("success", "Thank you for participating!");
//   res.redirect("/");
// } else {
//   req.flash("There was a problem... ");
//   console.log("No answer added to database.");
// }
// };

module.exports = { addSurveyAnswer };
