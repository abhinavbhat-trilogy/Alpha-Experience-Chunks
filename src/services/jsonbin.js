const JSONBIN_API_URL = 'https://api.jsonbin.io/v3/b';
const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;
const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
const HISTORY_BIN_ID = import.meta.env.VITE_JSONBIN_HISTORY_BIN_ID;

export async function fetchData() {
  if (!API_KEY || !BIN_ID) {
    console.warn('JSONBin not configured, using localStorage fallback');
    return null;
  }

  try {
    const response = await fetch(`${JSONBIN_API_URL}/${BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const result = await response.json();
    return result.record;
  } catch (error) {
    console.error('Error fetching from JSONBin:', error);
    throw error;
  }
}

export async function saveData(data) {
  if (!API_KEY || !BIN_ID) {
    console.warn('JSONBin not configured, using localStorage fallback');
    return null;
  }

  try {
    const response = await fetch(`${JSONBIN_API_URL}/${BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to save: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving to JSONBin:', error);
    throw error;
  }
}

export function isConfigured() {
  return Boolean(API_KEY && BIN_ID);
}

export function isHistoryConfigured() {
  return Boolean(API_KEY && HISTORY_BIN_ID);
}

export async function fetchHistory() {
  if (!API_KEY || !HISTORY_BIN_ID) return { versions: [] };

  try {
    const response = await fetch(`${JSONBIN_API_URL}/${HISTORY_BIN_ID}/latest`, {
      headers: { 'X-Master-Key': API_KEY },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch history: ${response.status}`);
    }

    const result = await response.json();
    return result.record || { versions: [] };
  } catch (error) {
    console.error('Error fetching history from JSONBin:', error);
    return { versions: [] };
  }
}

export async function saveHistory(historyData) {
  if (!API_KEY || !HISTORY_BIN_ID) return null;

  try {
    const response = await fetch(`${JSONBIN_API_URL}/${HISTORY_BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
      body: JSON.stringify(historyData),
    });

    if (!response.ok) {
      throw new Error(`Failed to save history: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving history to JSONBin:', error);
    return null;
  }
}
