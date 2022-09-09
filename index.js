const logger = require("./middleware/logger");
const foods = require("./routes/foods");
const categories = require("./routes/categories");
const express = require("express");
const app = express("express");

//Middleware (app.use): alla små stopp i vår request processessing pipeline
app.use(express.json()); // req.body får objeketet vi skickar in istället för undefined
app.use(logger); //next för att skicka vidare kontrollen till nästa middleware. Route handlers har dessa inbyggda men används ej om de är sist
app.use("/api/foods", foods);
app.use("/api/categories", categories);

app.listen(8000, () => console.log("Listening on port 8000"));
