const mongoose = require("mongoose");
const connectDB = require("./config/db");

const Customer = require("./models/Customer");
const Item = require("./models/Item");
const Order = require("./models/Order");

async function seed() {
  await connectDB();

  const customer = await Customer.create({
    title: "Mr",
    firstName: "Test",
    surname: "User",
    mobile: "123456789",
    email: "test@test.com",
    homeAddress: {
      addressLine1: "1 Main St",
      town: "Dublin",
      county: "Dublin",
    },
    shippingAddress: {
      addressLine1: "1 Main St",
      town: "Dublin",
      county: "Dublin",
    },
  });

  const item = await Item.create({
    manufacturer: "Apple",
    model: "iPhone Test",
    price: 999,
  });

  await Order.create({
    customer: customer._id,
    items: [item._id],
  });

  console.log("Seed data created");
  mongoose.connection.close();
}

seed();
