import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'coral_helpful_tips';

function loadHelpful() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    /* ignore */
  }
  return {};
}

export function useHelpfulTips() {
  const [helpful, setHelpful] = useState(loadHelpful);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(helpful));
  }, [helpful]);

  const markHelpful = useCallback((tipId) => {
    setHelpful((prev) => ({
      ...prev,
      [tipId]: (prev[tipId] || 0) + 1,
    }));
  }, []);

  const getCount = useCallback((tipId) => helpful[tipId] || 0, [helpful]);

  return { markHelpful, getCount };
}
