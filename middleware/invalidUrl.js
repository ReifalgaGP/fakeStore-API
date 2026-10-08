const { responseError } = require("../utils/response");

const invalidUrl = (req, res) => {
  responseError(404, `${req.originalUrl} : Endpoint Not Found`, res);
};

module.exports = invalidUrl;
