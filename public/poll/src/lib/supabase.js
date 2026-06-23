import { createClient } from '@supabase/supabase-js'

// Hardcoded for client-side use (anon key is safe to expose)
const supabaseUrl = 'https://tajftdwlkoljbkzxcrun.supabase.co'
const supabaseKey = 'sb_publishable_OzMWmXlwQNtGcG6bwxfPdA_o8RoX9py'

export const supabase = createClient(supabaseUrl, supabaseKey)
