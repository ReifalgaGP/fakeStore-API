const { responseError } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = status === 500 ? "Internal Server Error" : err.message;
  responseError(status, message, res);
};

module.exports = errorHandler;
