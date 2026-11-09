const express = require("express");
const productsRoutes = express.Router();
const {
  getAllDataProduct,
  getDataProductsById,
  createProduct,
  updateProduct,
} = require("../controller/productsController");

productsRoutes.get("/products", getAllDataProduct);
productsRoutes.get("/products/:id", getDataProductsById);
productsRoutes.post("/products", createProduct);
productsRoutes.put("/products/:id", updateProduct);

module.exports = productsRoutes;
