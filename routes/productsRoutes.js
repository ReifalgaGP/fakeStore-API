const express = require("express");
const productsRoutes = express.Router();
const {
  getAllDataProduct,
  getDataProductsById,
} = require("../controller/productsController");

productsRoutes.get("/products", getAllDataProduct);
productsRoutes.get("/products/:id", getDataProductsById);

module.exports = productsRoutes;
