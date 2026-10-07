const { responseInvalidUrl } = require("../utils/response");

const invalidUrl = (req, res, next) => {
  responseInvalidUrl(404, "Url Not Found", res);
};

module.exports = invalidUrl;
