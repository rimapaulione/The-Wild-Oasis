import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tpwvprhksnqyghvijdjv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwd3Zwcmhrc25xeWdodmlqZGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NjI1MDcsImV4cCI6MjAxOTQzODUwN30.meTg5uKujlQbzOGVTXcykuHndx9lDQG0cvW_Tcz35RA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
