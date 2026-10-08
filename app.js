const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const invalidUrl = require("./middleware/invalidUrl");
const app = express();

app.use(express.json());

app.get("/users", userRoutes);
app.get("/users/:id", userRoutes);
app.use(invalidUrl, errorHandler);
module.exports = app;
