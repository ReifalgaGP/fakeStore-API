const response = (statusCode, data, count, res) => {
  res.status(statusCode).json({
    datas: data,
    totalDataUser: count,
  });
};

module.exports = response;
