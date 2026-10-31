const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const invalidUrl = require("./middleware/invalidUrl");
const limiter = require("./middleware/rateLimiter");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

app.get("/users", userRoutes);
app.get("/users/:id", userRoutes);
app.post("/users", userRoutes);
app.use(invalidUrl, errorHandler);
module.exports = app;
