const express = require("express");
const router = express.Router();

const categories = [
  { id: "1", category: "Fruit" },
  { id: "2", category: "Snack" },
  { id: "3", category: "Vegetable" },
];

router.get("/", (req, res) => {
  return res.send(categories);
});

router.get("/:id", (req, res) => {
  const category = categories.find((category) => category.id === req.params.id);

  if (!category)
    return res.status(404).send("The category with the given id is not found.");

  return res.send(category);
});

module.exports = router;
