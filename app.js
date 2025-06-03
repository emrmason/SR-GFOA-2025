const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();

app.get("/", (req, res) => {
  console.log("Working!");
});

app.listen(port, () => {
  console.log("App listening on port ${port}");
});
