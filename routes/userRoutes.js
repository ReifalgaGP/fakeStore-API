const express = require("express");
const userRoutes = express.Router();
const getAllDataUser = require("../controller/userController");

userRoutes.get("/users", getAllDataUser);

module.exports = userRoutes;
