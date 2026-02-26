import { createClient } from '@supabase/supabase-js'

// Server-side only Supabase client using service role key
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)
