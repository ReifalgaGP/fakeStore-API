const db = require("../config/db");
const dataProduct = require("../utils/funcProduct");
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

const createProduct = (req, res, next) => {
  try {
    const { title, price, description, image } = req.body;
    if (!title || !price || !description || !image) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const numPrice = Number(price);
    if (!Number.isFinite(numPrice) || numPrice < 0) {
      return res
        .status(400)
        .json({ message: "The input price must consist only of numbers." });
    }

    const product = dataProduct.create({
      title,
      price: numPrice,
      description,
      image,
    });
    res.status(200).json({ message: "Data succesfully added", data: product });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllDataProduct, getDataProductsById, createProduct };
