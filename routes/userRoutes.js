const express = require("express");
const userRoutes = express.Router();
const {
  getAllDataUser,
  getDataUserById,
  createUser,
} = require("../controller/userController");

userRoutes.get("/users", getAllDataUser);
userRoutes.get("/users/:id", getDataUserById);
userRoutes.post("/users", createUser);

module.exports = userRoutes;
