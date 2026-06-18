const Order = require("../models/Order");

// CREATE ORDER
async function createOrder(req, res) {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET ALL ORDERS
async function getAllOrders(req, res) {
  try {
    const orders = await Order.find().populate("customer").populate("items");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET AN ORDER
async function getOrder(req, res) {
  try {
    const order = await Order.findById(req.params.id)
      .populate("customer")
      .populate("items");

    if (!order) {
      res.status(404).json({ message: "Order was not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// UPDATE AN ORDER
async function updateOrder(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("customer")
      .populate("items");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// DELETE AN ORDER
async function deleteOrder(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json("Order successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
