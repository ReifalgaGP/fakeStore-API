const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  statusCode: 429,
  message: {
    statusCode: 429,
    message: "To Many Request",
  },
});

module.exports = limiter;
