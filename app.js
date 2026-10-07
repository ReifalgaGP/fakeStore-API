const userRoutes = require("./routes/userRoutes");
const invalidUrl = require("./middleware/invalidUrl");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/users", userRoutes);
app.use(invalidUrl); //middleware
module.exports = app;
