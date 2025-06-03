const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;
const { connectDB } = require("./controllers/connection");
const dotenv = require("dotenv").config();

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
};

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Working!");
  res.render("index", {
    system: "",
  });
});

router.use(express.static("public"));
router.use("/css", express.static(__dirname + "public/css"));

startServer();
