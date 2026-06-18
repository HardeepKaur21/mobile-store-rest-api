const express = require("express");
const router = express.Router();

const {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

router.post("/", createItem);

router.get("/", getAllItems);

router.get("/:id", getItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
