const express = require("express");
const router = express.Router();

const categories = [
  { _id: "1", category: "Fruit" },
  { _id: "2", category: "Snack" },
  { _id: "3", category: "Vegetable" },
];

router.get("/", (req, res) => res.send(categories));

router.get("/:_id", (req, res) => {
  const category = categories.find(
    (category) => category._id === req.params._id
  );

  if (!category)
    return res.status(404).send("The category with the given id is not found.");

  return res.send(category);
});

module.exports = router;
