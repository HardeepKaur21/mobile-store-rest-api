const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customers");
const itemRoutes = require("./routes/items");
const orderRoutes = require("./routes/orders");

const app = express();
connectDB();

app.use(express.json()); //allows express to read  sent from Postman
app.use(cors());
app.use("/customers", customerRoutes);
app.use("/items", itemRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Assignment 6 API is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
