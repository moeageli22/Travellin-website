import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zeeimyqduvannrxhevws.supabase.co";
const supabaseAnonKey = "sb_publishable_7G4Xyr48CXq-4Yq8n-udjw_spmISndL";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
