const express = require("express");
const productsRoutes = express.Router();
const {
  getAllDataProduct,
  getDataProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productsController");

productsRoutes.get("/products", getAllDataProduct);
productsRoutes.get("/products/:id", getDataProductsById);
productsRoutes.post("/products", createProduct);
productsRoutes.put("/products/:id", updateProduct);
productsRoutes.delete("/products/:id", deleteProduct);

module.exports = productsRoutes;
