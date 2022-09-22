const express = require("express");
const cors = require("cors");
const foods = require("../routes/foods");
const categories = require("../routes/categories");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");

function initRoutes(app) {
  //Middleware (app.use): alla små stopp i vår request processessing pipeline
  app.use(cors()); // här tillåts alla externa att kalla på BE api
  app.use(express.json()); // req.body får objeketet vi skickar in istället för undefined
  app.use("/api/foods", foods);
  app.use("/api/categories", categories);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
}

module.exports = initRoutes;
