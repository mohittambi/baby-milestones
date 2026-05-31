export const AGE_FILTERS = [
  { id: 'all', label: 'All ages', min: 0, max: 36 },
  { id: '0-3', label: '0–3 mo', min: 0, max: 3 },
  { id: '4-6', label: '4–6 mo', min: 4, max: 6 },
  { id: '7-9', label: '7–9 mo', min: 7, max: 9 },
  { id: '10-12', label: '10–12 mo', min: 10, max: 12 },
  { id: '12+', label: '12+ mo', min: 12, max: 36 },
];

/** @param {import('../types/community').ParentingTip} tip */
export function tipMatchesAge(tip, filterId) {
  const filter = AGE_FILTERS.find((f) => f.id === filterId);
  if (!filter || filterId === 'all') return true;
  const tipMin = tip.ageMinMonths ?? 0;
  const tipMax = tip.ageMaxMonths ?? 36;
  return tipMin <= filter.max && tipMax >= filter.min;
}
