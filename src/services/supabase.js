import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export function isConfigured() {
  return Boolean(supabase);
}

export function isHistoryConfigured() {
  return Boolean(supabase);
}

export async function fetchData() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('app_data')
    .select('data, updated_at')
    .eq('id', 1)
    .single();

  if (error) throw error;
  const appData = data?.data;
  if (!appData || Object.keys(appData).length === 0) return null;
  return appData;
}

export async function saveData(appData) {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('app_data')
    .update({ data: appData, updated_at: new Date().toISOString() })
    .eq('id', 1)
    .select();

  if (error) throw error;
  return data;
}

export async function fetchHistory() {
  if (!supabase) return { versions: [] };

  const { data, error } = await supabase
    .from('versions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    console.error('Error fetching history:', error);
    return { versions: [] };
  }

  return { versions: data || [] };
}

export async function saveHistory({ versions }) {
  if (!supabase || !versions.length) return null;

  const newest = versions[0];
  const { error } = await supabase
    .from('versions')
    .upsert({
      id: newest.id,
      created_at: newest.timestamp || newest.created_at,
      summary: newest.summary,
      snapshot: newest.snapshot,
    }, { onConflict: 'id' });

  if (error) {
    console.error('Error saving version:', error);
    return null;
  }

  return { success: true };
}

export function subscribeToChanges(onDataChange) {
  if (!supabase) return () => {};

  const channel = supabase
    .channel('app-data-changes')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'app_data' },
      (payload) => {
        onDataChange(payload.new.data);
      }
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}
