const mongoose = require("mongoose");

function initDb() {
  mongoose
    .connect("mongodb://localhost/intensive-food-Node")
    .then(() => console.log("connected to MongoDB..."))
    .catch((error) => console.log("Could not connect to MongoDB...", error));
}

module.exports = initDb;
