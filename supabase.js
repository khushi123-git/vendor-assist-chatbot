import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


const supabaseUrl = 'https://biibpkmrulenfvamhxsm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpaWJwa21ydWxlbmZ2YW1oeHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzU3MzcsImV4cCI6MjA2OTExMTczN30.dR5cIlXpe39TKo7KexoEKhR3TbPu-8x7GKcochLNoT0';
export const supabase = createClient(supabaseUrl, supabaseKey)
