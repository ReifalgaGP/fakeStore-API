const db = require("../config/db");
const { response } = require("../utils/response");

const getAllDataUser = async (req, res) => {
  const { data, count, error } = await db
    .from("users")
    .select("*", { count: "exact" });

  if (error) return res.status(500).json({ message: error.message });
  response(200, data, count, res);
};

module.exports = getAllDataUser;
