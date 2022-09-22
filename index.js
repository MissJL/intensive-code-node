const express = require("express");
const startUp = require("./startup");
const app = express("express");

startUp(app);

app.listen(8000, () => console.log("Listening on port 8000"));
