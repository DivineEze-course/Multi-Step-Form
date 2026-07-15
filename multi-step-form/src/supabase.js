import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log("URL:", supabaseUrl);
console.log("KEY LENGTH:", supabaseKey?.length);

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);