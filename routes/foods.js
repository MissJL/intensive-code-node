const Joi = require("joi");
const express = require("express");
const router = express.Router();

const foods = [
  {
    id: "1",
    name: "Apple",
    category: { _id: 1, name: "Fruit" },
    numberInStock: 15,
    price: 3,
  },
  {
    id: "2",
    name: "Cookie",
    category: { _id: 2, name: "Snack" },
    numberInStock: 89,
    price: 9,
  },
  {
    id: "3",
    name: "Cucumber",
    category: { _id: 3, name: "Vegetable" },
    numberInStock: 26,
    price: 5,
  },
];

router.get("/", (req, res) => res.send(foods));

router.get("/:id", (req, res) => {
  const food = foods.find((food) => food.id === req.params.id);

  if (!food)
    return res.status(404).send("The food with the given id is not found.");

  return res.send(food);
});

router.post("/", (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const food = req.body;

  foods.push(food);
  return res.send(food);
});

router.put("/:id", (req, res) => {
  const { error } = validate(req.body); // steg 1: validera med Joi
  if (error) return res.status(400).send(error.message); // om ogiltig body, returnera 400

  let food = foods.find((food) => food.id === req.params.id); // steg 2: hitta objeketet med angivet id
  if (!food)
    return res.status(404).send("The food with the given id is not found."); // om ej hittas, returnera 404

  food.body = req.body;

  //steg 3: göra uppdateringen

  return res.send(food.body); //returnera med res.send
});

router.delete("/:id", (req, res) => {
  const food = foods.find((food) => food.id === req.params.id);

  if (!food)
    return res.status(404).send("The food with the given id is not found.");

  const index = foods.indexOf(food);
  foods.splice(index, 1);

  return res.send(food);
});

function validate(food) {
  const schema = Joi.object({
    id: Joi.string(),
    name: Joi.string().min(2).max(50).required(),
    categoryId: Joi.string().required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    price: Joi.number().min(0).max(10).required(),
  });
  return schema.validate(food);
}

module.exports = router;
