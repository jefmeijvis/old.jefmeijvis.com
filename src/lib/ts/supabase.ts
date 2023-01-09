import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv'
dotenv.config()

const SUPABASE_URL : string = process.env.SUPABASE_URL ?? '';
const SUPABASE_KEY : string = process.env.SUPABASE_KEY ?? ''

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
export const config = 
{
    project : "jefmeijvis"
}