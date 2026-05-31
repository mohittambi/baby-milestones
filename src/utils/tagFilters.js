/**
 * Shared tag filter utilities for Community sections.
 */

/** @param {string} tag */
export function formatTagLabel(tag) {
  if (tag === 'blw') return 'BLW';
  if (tag === 'first-foods') return 'First foods';
  return tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * @template T
 * @param {T[]} items
 * @param {(item: T) => string[] | undefined} getTags
 * @param {{ max?: number, allLabel?: string }} [options]
 */
export function buildTagOptions(items, getTags, options = {}) {
  const { max = 16, allLabel = 'All tags' } = options;
  const counts = new Map();

  for (const item of items) {
    for (const tag of getTags(item) ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, max);

  return [
    { id: 'all', label: allLabel },
    ...sorted.map(([id, count]) => ({ id, label: formatTagLabel(id), count })),
  ];
}

/** @param {string[] | undefined} tags @param {string} tagId */
export function matchesTag(tags, tagId) {
  if (!tagId || tagId === 'all') return true;
  return (tags ?? []).includes(tagId);
}
