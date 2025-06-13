const bodyParser = require("body-parser");
const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const router = express.Router();
const app = express();
const port = 3000;
const { connectDB } = require("./controllers/connection");
const dotenv = require("dotenv").config();
const SystemNames = require("./schemas/systemNames");
const { addSurveyAnswer, getSystemNames } = require("./controllers/system");
const surveyRouter = require("./routes/survey");

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
};

startServer();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/survey", surveyRouter);

app.get("/", async (req, res) => {
  try {
    const systemList = await getSystemNames();
    res.render("index", { systemList });
  } catch (error) {
    console.error("Error fetching system names:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use(express.static("public"));
