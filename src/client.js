import { createClient } from "@supabase/supabase-js";
const URL = "https://redbzjzjyqxumkwifzvo.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZGJ6anpqeXF4dW1rd2lmenZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5MjE4MjksImV4cCI6MjAwMTQ5NzgyOX0.nutmbiOrQigVPZF2KUkRm19umVXxojzFp6ij2Hoa-Ew";
export const supabase = createClient(URL, API_KEY);