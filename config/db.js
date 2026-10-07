require("dotenv").config();
const supabase = require("@supabase/supabase-js");
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;
const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

module.exports = db;
