const mongoose = require("mongoose");
const mongoDB = require("./connection");
const SysName = require("./schemas/systemNames");
const { response } = require("express");

const getSystemNames = async (req, res) => {
  const sysName = await SysName.find();
  response.json(sysName);
};

module.exports = { getSystemNames };
