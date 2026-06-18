const Item = require("../models/Item");

// CREATE ITEM
async function createItem(req, res) {
  try {
    const item = new Item(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET ALL ITEMS
async function getAllItems(req, res) {
  try {
    const items = await Item.find(req.params.id);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// GET ONE ITEM
async function getItem(req, res) {
  try {
    const item = await Item.findById();

    if (!Item) {
      return res.statu(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// UPDATE ITEM
async function updateItem(req, res) {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// DELETE ITEM
async function deleteItem(req, res) {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
};
