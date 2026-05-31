import { MEMORY_TYPES } from './communityHelpers';
import { matchesTag } from './tagFilters';

export const MEMORY_TYPE_FILTERS = [
  { id: 'all', label: 'All posts' },
  ...MEMORY_TYPES.map((t) => ({ id: t.id, label: t.label })),
];

/** @param {import('../types/community').Memory} memory */
export function filterMemory(memory, { type, tag }) {
  const typeOk = !type || type === 'all' || memory.type === type;
  const tagOk = matchesTag(memory.tags, tag);
  return typeOk && tagOk;
}
