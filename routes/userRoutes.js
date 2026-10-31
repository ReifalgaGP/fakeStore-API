const express = require("express");
const userRoutes = express.Router();
const {
  getAllDataUser,
  getDataUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

userRoutes.get("/users", getAllDataUser);
userRoutes.get("/users/:id", getDataUserById);
userRoutes.post("/users", createUser);
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);

module.exports = userRoutes;
