const error = (error, req, res, next) => {
  return res.status(500).send("Something failed.", err);
};

module.exports = error;
