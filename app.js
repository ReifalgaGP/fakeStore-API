const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");
const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const invalidUrl = require("./middleware/invalidUrl");
const limiter = require("./middleware/rateLimiter");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

//! Endpoint Users
app.get("/users", userRoutes);
app.get("/users/:id", userRoutes);
app.post("/users", userRoutes);
app.put("/users/:id", userRoutes);
app.delete("/users/:id", userRoutes);

//! Endpoint Products
app.get("/products", productsRoutes);
app.get("/products/:id", productsRoutes);

app.use(invalidUrl, errorHandler);

module.exports = app;
