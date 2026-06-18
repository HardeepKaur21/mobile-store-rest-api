const express = require("express");
const router = express.Router();

const {
  createCustomer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

router.post("/", createCustomer);

router.get("/", getAllCustomers);

router.get("/:id", getCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

module.exports = router;
