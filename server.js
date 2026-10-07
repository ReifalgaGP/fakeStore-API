const supabase = require("@supabase/supabase-js");
const express = require("express");
const app = express();
const response = require("./utils/response");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (req, res) => {
  const { data, count, error } = await db
    .from("users")
    .select("*", { count: "exact" });

  if (error) return res.status(500).json({ message: error.message });
  response(200, data, count, res);
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
