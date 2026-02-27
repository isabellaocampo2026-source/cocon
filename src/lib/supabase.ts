import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy-initialized Supabase client (avoids build-time crash when env vars are missing)
let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
    if (!_supabase) {
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL
        const key = process.env.SUPABASE_SERVICE_ROLE_KEY

        if (!url || !key) {
            console.warn('⚠️ Missing Supabase environment variables. Database features will be disabled.')
            return null as any
        }

        _supabase = createClient(url, key)
    }
    return _supabase
}
