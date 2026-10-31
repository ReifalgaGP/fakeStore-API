const db = require("../config/db");
const dataUser = require("../utils/funcUser");
const { response, responseError } = require("../utils/response");

const getAllDataUser = async (req, res, next) => {
  try {
    const { data, count, error } = await db
      .from("users")
      .select("*", { count: "exact" });
    if (error) throw error;
    response(200, data, count, res);
  } catch (error) {
    next(error);
  }
};

const getDataUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { data, error } = await db
      .from("users")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (error) throw error;
    if (!data) {
      return responseError(404, "User not found", res);
    }
    response(200, data, 1, res);
  } catch (error) {
    next(error);
  }
};

const createUser = (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const user = dataUser.create({ name, email, password });
    res.status(201).json({ message: "Data successfully added", data: user });
  } catch (error) {
    next(error);
  }
};

const updateUser = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;
    const user = dataUser.update(id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Invalid input" });
    }
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "Data Successfully updated", data: user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const user = dataUser.remove(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "Data Successfully Removed", data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDataUser,
  getDataUserById,
  createUser,
  updateUser,
  deleteUser,
};
