const cors = require("cors");
const dotenv = require("dotenv");
const foods = require("./routes/foods");
const categories = require("./routes/categories");
const users = require("./routes/users");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const express = require("express");
const app = express("express");

dotenv.config();

//Middleware (app.use): alla små stopp i vår request processessing pipeline
app.use(cors()); // här tillåts alla externa att kalla på BE api
app.use(express.json()); // req.body får objeketet vi skickar in istället för undefined
app.use("/api/foods", foods);
app.use("/api/categories", categories);
app.use("/api/users", users);
app.use("/api/auth", auth);

mongoose
  .connect("mongodb://localhost/intensive-food-Node")
  .then(() => console.log("connected to MongoDB..."))
  .catch((error) => console.log("Could not connect to MongoDB...", error));

app.listen(8000, () => console.log("Listening on port 8000"));
