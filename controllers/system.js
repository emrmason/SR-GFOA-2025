const mongoose = require("mongoose");
const mongoDB = require("./connection");
const SysName = require("../schemas/systemNames");
const { response } = require("express");

const getSystemNames = async (req, res) => {
  const systemNames = await SysName.find();
  response.json(systemNames);
};

module.exports = { getSystemNames };
