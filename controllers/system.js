const mongoose = require("mongoose");
// const mongoDB = require("./connection");
const SystemNames = require("../schemas/systemNames");
const { response } = require("express");

const getSystemNames = async (req, res) => {
  try {
    const systemNames = await SystemNames.find();
    console.log(systemNames);
    res.json(systemNames);
  } catch (error) {
    console.error("Error fetching system names: ", error);
  }
};

module.exports = { getSystemNames };
