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
  // console.log("SystemNames model: ", SystemNames);
  try {
    const systemNames = await SystemNames.find().then((data) => {
      // console.log("Database Result: ", data);
      let list = "<ul>";
      for (x in data) {
        obj = data[x];
        sys = obj.system;
        list += "<li>";
        list += "<label for='sys-name' class='q1'" + sys + "/>" + sys + "</li>";
        x += 1;
      }
      list += "</ul";
      return list;
    });
    // SystemNames.find({}, { _id: 0 });
    // console.log("Fetched ERP systems: ", systemNames);
    res.render("index", { systemNames });
  } catch (error) {
    console.error("error fetching system names: ", error);
  }
});

// .catch((err) => console.log("Query error: ", err));

app.use(express.static("public"));
app.use("/styles.css", express.static(__dirname + "/public/styles.css"));
