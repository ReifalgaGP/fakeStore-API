const db = require("../config/db");
const { response } = require("../utils/response");

const getAllDataProduct = async (req, res, next) => {
  try {
    const { data, count, error } = await db
      .from("products")
      .select("*", { count: "exact" });
    if (error) throw error;
    response(200, data, count, res);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllDataProduct;
