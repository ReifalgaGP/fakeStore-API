const db = require("../config/db");
const { response, responseError } = require("../utils/response");

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

const getDataProductsById = async (req, res, next) => {
  try {
    const productsId = req.params.id;
    const { data, error } = await db
      .from("products")
      .select("*")
      .eq("id", productsId)
      .maybeSingle();
    if (error) throw error;
    if (!data) {
      return responseError(404, "Product Not Found", res);
    }
    response(200, data, 1, res);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllDataProduct, getDataProductsById };
