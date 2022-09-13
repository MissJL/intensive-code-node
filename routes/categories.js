const express = require("express");
const router = express.Router();
const { Category } = require("../models/Category");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  return res.send(categories);
});

router.get("/:_id", async (req, res) => {
  const category = await Category.findById(req.params._id);

  if (!category)
    return res.status(404).send("The category with the given id is not found.");

  return res.send(category);
});

module.exports = router;
