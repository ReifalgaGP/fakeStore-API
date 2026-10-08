const response = (statusCode, data, count, res) => {
  res.status(statusCode).json({
    data,
    totalDataUser: count,
  });
};

const responseError = (statusCode, message, res) => {
  res.status(statusCode).json({
    status: statusCode,
    message: message,
  });
};

module.exports = { response, responseError };
