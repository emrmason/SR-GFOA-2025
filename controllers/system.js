const mongoose = require("mongoose");
// const mongoDB = require("./connection");
const SystemNames = require("../schemas/systemNames");
const SurveyResponse = require("../schemas/survey");
const { response } = require("express");
// const surveyAnswer = {};

// const getSystemNames = async (req, res) => {
//   try {
//     const systemNames = await SystemNames.find().then((data) => {
//       let sorted = [];
//       let listed = [];
//       let list = "<ul>";
//       for (x in data) {
//         obj = data[x];
//         sys = obj.system;
//         listed.push(sys);
//         x += 1;
//       }
//       sorted = listed.sort();
//       for (x in sorted) {
//         sys = sorted[x];
//         list += "<li>";
//         list += "<label for='#' class='q1'  name=" + sys + "/>" + sys + "</li>";
//         x += 1;
//       }
//       list += "</ul>";
//       return list;
//     });
//   } catch (error) {
//     console.error("error fetching system names: ", error);
//   }
// };

const getSystemNames = async () => {
  try {
    const systemNames = await SystemNames.find(); // Define it here
    let sorted = systemNames.map((obj) => obj.system).sort(); // Extract names and sort
    let list =
      "<ul>" +
      sorted
        .map(
          (sys) => `<li><label for='#' class='q1' name='${sys}'/>${sys}</li>`
        )
        .join("") +
      "</ul>";

    return list; // Ensure list is returned
  } catch (error) {
    console.error("Error fetching system names:", error);
    return "<ul><li>Error loading systems</li></ul>"; // Return fallback
  }
};

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
    console.log(survey);
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

module.exports = { addSurveyAnswer, getSystemNames };
