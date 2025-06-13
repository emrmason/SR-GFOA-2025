const bodyParser = require("body-parser");
const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const router = express.Router();
const app = express();
const port = 3000;
const { connectDB } = require("./controllers/connection");
const dotenv = require("dotenv").config();
const SystemNames = require("./schemas/systemNames");
const { addSurveyAnswer } = require("./controllers/system");
const surveyRouter = require("./routes/survey");

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
};

startServer();

app.set("view engine", "ejs");
// app.use(expressLayouts);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/survey", surveyRouter);

app.get("/", async (req, res) => {
  try {
    const systemNames = await SystemNames.find().then((data) => {
      let list = "<ul>";
      for (x in data) {
        obj = data[x];
        sys = obj.system;
        list += "<li>";
        list += "<label for='#' class='q1'  name=" + sys + "/>" + sys + "</li>";
        x += 1;
      }
      list += "</ul>";
      return list;
    });
    res.render("index", { systemNames });
  } catch (error) {
    console.error("error fetching system names: ", error);
  }
});

// .catch((err) => console.log("Query error: ", err));

app.use(express.static("public"));
app.use("/styles.css", express.static(__dirname + "/public/styles.css"));
