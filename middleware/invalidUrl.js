const { responseError } = require("../utils/response");

const invalidUrl = (req, res) => {
  responseError(404, `${req.originalUrl} : Url Not Found`, res);
};

module.exports = invalidUrl;
