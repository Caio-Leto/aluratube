import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://psqanajqvfwrdikppsry.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzcWFuYWpxdmZ3cmRpa3Bwc3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDIxMDIsImV4cCI6MTk4Mzc3ODEwMn0.attYFpgmLvFRGPjwW6yrSz0NjDNKqfUzpB4K55fS8Dg"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
                
        }
    }
}