const logger = (req, res, next) => {
  console.log("my first middleware!");
  next();
};

//module.exports.logger = logger; named export
module.exports = logger; //är default export
