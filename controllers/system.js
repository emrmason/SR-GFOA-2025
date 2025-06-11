const mongoose = require("mongoose");
// const mongoDB = require("./connection");
const SystemNames = require("../schemas/systemNames");
const Surveyresponse = require("../schemas/survey");
const { response } = require("express");
const surveyAnswer = {};

const getSystemNames = async (req, res) => {
  try {
    const systemNames = await SystemNames.find({}, { _id: 0 });
    console.log(systemNames);
    res.json(systemNames);
  } catch (error) {
    console.error("Error fetching system names: ", error);
  }
};

const addSurveyAnswer = async (req, res, next) => {
  const newAnswer = {
    erp: req.body.erp,
    likeit: req.body.likeit,
    email: req.body.email,
  };
  try {
    const createdAnswer = await Surveyresponse.create(newAnswer);
    res.status(201).send(`Answer added with _id ${createdAnswer._id}`);
  } catch (error) {
    console.error(error);
  }
  if (createdAnswer) {
    req.flash("Thank you for participating!");
    req.redirect("/");
  } else {
    req.flash("There was a problem... ");
    console.log("No answer added to database.");
  }
};

module.exports = { getSystemNames, addSurveyAnswer };
