const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  town: { type: String, required: true },
  county: { type: String, required: true },
  eircode: { type: String },
});

const customerSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Mx", "Ms", "Mr", "Mrs", "Miss", "Dr", "Other"],
    required: true,
  },
  firstName: { type: String, required: true },
  surname: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },

  homeAddress: {
    type: addressSchema,
    required: true,
  },

  shippingAddress: {
    type: addressSchema,
    required: true,
  },
});

//create model from schema
module.exports = mongoose.model("Customer", customerSchema);
