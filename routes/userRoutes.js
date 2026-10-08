const express = require("express");
const userRoutes = express.Router();
const {
  getAllDataUser,
  getDataUserById,
} = require("../controller/userController");

userRoutes.get("/users", getAllDataUser);
userRoutes.get("/users/:id", getDataUserById);

module.exports = userRoutes;
