const initDb = require("./db");
const initroutes = require("./routes");
const initConfig = require("./config");

function startUp(app) {
  initConfig();
  initroutes(app);
  initDb();
}

module.exports = startUp;
