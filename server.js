const supabase = require("@supabase/supabase-js");
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async (req, res) => {
  const getData = await db.from("users").select();
  console.log(getData);
  res.send("success get all data");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
