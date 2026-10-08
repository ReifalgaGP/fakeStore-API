const db = require("../config/db");
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

module.exports = { getAllDataUser, getDataUserById };
