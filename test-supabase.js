const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://duwmdlxbxafgshgnrajp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1d21kbHhieGFmZ3NoZ25yYWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MTU5MDcsImV4cCI6MjA2NzE5MTkwN30.3GKXlZZiGIc4o3B0fjO2oCoD-YiUlt2EF1fTH5XUdRo';
const supabase = createClient(supabaseUrl, supabaseKey);

async function testQueries() {
  const { data: users, error: usersError } = await supabase.from('users').select('*');
  const { data: matches, error: matchesError } = await supabase.from('matches').select('*');
  const { data: meetings, error: meetingsError } = await supabase.from('meetings').select('*');
  console.log({ users: users?.length, matches: matches?.length, meetings: meetings?.length, usersError, matchesError, meetingsError });
}

testQueries();