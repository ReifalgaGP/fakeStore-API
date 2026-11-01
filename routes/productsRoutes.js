const express = require("express");
const productsRoutes = express.Router();
const getAllDataProduct = require("../controller/productsController");

productsRoutes.get("/products", getAllDataProduct);

module.exports = productsRoutes;
