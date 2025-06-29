const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Close Mongoose connection on SIGINT (Ctrl+C)
process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("The way is shut.");
  process.exit(0);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB Connected!");
  } catch (error) {
    console.error("MongoDB connection error, ", error);
  }
};

module.exports = { connectDB };
