const express = require("express");
const productsRoutes = express.Router();
const {
  getAllDataProduct,
  getDataProductsById,
  createProduct,
} = require("../controller/productsController");

productsRoutes.get("/products", getAllDataProduct);
productsRoutes.get("/products/:id", getDataProductsById);
productsRoutes.post("/products", createProduct);

module.exports = productsRoutes;
