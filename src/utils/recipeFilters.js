import { AGE_FILTERS } from './tipFilters';
import { matchesTag } from './tagFilters';

export { AGE_FILTERS };

/** @param {import('../types/community').Recipe} recipe */
export function recipeMatchesAge(recipe, filterId) {
  const filter = AGE_FILTERS.find((f) => f.id === filterId);
  if (!filter || filterId === 'all') return true;
  const min = recipe.ageMinMonths ?? 6;
  return min >= filter.min && min <= filter.max;
}

/** @param {import('../types/community').Recipe} recipe */
export function filterRecipe(recipe, { age, tag }) {
  return recipeMatchesAge(recipe, age) && matchesTag(recipe.tags, tag);
}
