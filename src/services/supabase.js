import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hzgdzfliqqugbbuemvxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z2R6ZmxpcXF1Z2JidWVtdnhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2NTYzNDUsImV4cCI6MjEwMDIzMjM0NX0.APG_ZpC257ymO5sQ7PrEIi9Ku9xLSqLEnu2CsmGwEIc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
