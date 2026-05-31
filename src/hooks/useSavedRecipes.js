import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'coral_saved_recipes';

function loadSaved() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
    /* ignore */
  }
  return [];
}

export function useSavedRecipes() {
  const [savedIds, setSavedIds] = useState(loadSaved);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  const saveRecipe = useCallback((id) => {
    setSavedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const unsaveRecipe = useCallback((id) => {
    setSavedIds((prev) => prev.filter((x) => x !== id));
  }, []);

  const isSaved = useCallback((id) => savedIds.includes(id), [savedIds]);

  return { savedIds, saveRecipe, unsaveRecipe, isSaved };
}
