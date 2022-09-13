const Joi = require("joi");
const mongoose = require("mongoose");
const { categorySchema } = require("../models/Category");

const foodSchema = mongoose.Schema({
  name: { type: String, minlength: 2, maxlength: 50, required: true },
  category: {
    type: categorySchema,
    required: true,
  },
  numberInStock: { type: Number, min: 0, max: 100, required: true },
  price: { type: Number, min: 0, max: 10, required: true },
});

const Food = mongoose.model("Food", foodSchema);

function validateFood(food) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    categoryId: Joi.string().required(),
    numberInStock: Joi.number().min(0).max(100).required(),
    price: Joi.number().min(0).max(10).required(),
  });
  return schema.validate(food);
}

module.exports.Food = Food;
module.exports.validate = validateFood;
