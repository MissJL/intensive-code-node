const Joi = require("joi");
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, minlength: 2, maxlength: 50, required: true },
});

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
  });
  return schema.validate(category);
}

module.exports = {
  categorySchema: categorySchema,
  Category,
  validate: validateCategory,
};
