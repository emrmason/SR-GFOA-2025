const bodyParser = require("body-parser");
const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const router = express.Router();
const app = express();
const port = 3000;
const { connectDB } = require("./controllers/connection");
const dotenv = require("dotenv").config();
const SystemNames = require("./schemas/systemNames");

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

app.get("/", async (req, res) => {
  console.log("SystemNames model: ", SystemNames);
  try {
    const systemNames = await SystemNames.find();
    console.log("Fetched ERP systems: ", systemNames);
    res.render("index", { systemNames });
  } catch (error) {
    console.error("error fetching system names: ", error);
  }
});

SystemNames.find()
  .then((data) => console.log("Database Result: ", data))
  .catch((err) => console.log("Query error: ", err));

app.use(express.static("public"));
app.use("/styles.css", express.static(__dirname + "/public/styles.css"));
