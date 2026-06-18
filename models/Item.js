const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
