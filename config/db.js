//need to use mongo here instead of mongodb to make the schemas work

const mongoose = require("mongoose");

const url =
  "mongodb+srv://dbUser:dbUser@assignment05-cluster.kv8g5zs.mongodb.net/";

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to Mongo!");
  } catch (error) {
    console.log("Failed to connect to Mongo");
    console.log(error.message);
  }
}

module.exports = connectDB;
