const Joi = require("joi");
const express = require("express");
const router = express.Router();

const foods = [
  {
    id: "1",
    name: "Apple",
    category: "Fruit",
    numberInStock: "15",
    price: "3",
  },
  {
    id: "2",
    name: "Cookie",
    category: "Snack",
    numberInStock: "89",
    price: "9",
  },
  {
    id: "3",
    name: "Cucumber",
    category: "Vegetable",
    numberInStock: "26",
    price: "5",
  },
];

router.get("/", (req, res) => {
  return res.send(foods);
});

router.get("/:id", (req, res) => {
  const food = foods.find((food) => food.id === req.params.id);

  if (!food)
    return res.status(404).send("The food with the given id is not found.");

  return res.send(food);
});

router.post("/", (req, res) => {
  const { error } = validateFood(reg.body);
  if (error) return res.status(400).send(error.message);

  const food = { id: "4", name: req.body.name };

  foods.push(food);
  return res.send(food);
});

router.put("/:id", (req, res) => {
  // steg 1: validera med Joi
  const { error } = validateFood(req.body);

  // om ogiltig body, returnera 400
  if (error) return res.status(400).send(error.message);

  // steg 2: hitta objeketet med angivet id
  const food = foods.find((food) => food.id === req.params.id);

  // om ej hittas, returnera 404
  if (!food)
    return res.status(404).send("The food with the given id is not found.");

  //steg 3: göra uppdateringen
  food.name = req.body.name;

  //returnera med res.send
  return res.send(food);
});

router.delete("/:id", (req, res) => {
  const food = foods.find((food) => food.id === req.params.id);

  if (!food)
    return res.status(404).send("The food with the given id is not found.");

  const index = foods.indexOf(food);
  foods.splice(index, 1);

  return res.send(food);
});

function validateFood(food) {
  const schema = Joi.object({ name: Joi.string().required() });
  return schema.validate(food);
}

module.exports = router;
