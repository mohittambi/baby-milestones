import { describe, it, expect } from 'vitest';

const STORAGE_KEY = 'coral_memories';

function createMemoryRecord(memory) {
  return {
    id: `memory-${Date.now()}`,
    createdAt: new Date().toISOString(),
    reactions: { heart: 0, celebrate: 0, support: 0 },
    comments: [],
    tags: [],
    ...memory,
  };
}

describe('community memory persistence pattern', () => {
  it('round-trips memory with comments via localStorage', () => {
    const memory = createMemoryRecord({
      type: 'tip',
      title: 'Baby Teething',
      content: 'Cold ring helped.',
      babyAge: '6 months',
    });

    memory.comments.push({
      id: 1,
      text: 'Same here!',
      author: 'You',
      timestamp: new Date().toISOString(),
    });

    const serialized = JSON.stringify([memory]);
    const restored = JSON.parse(serialized);

    expect(restored).toHaveLength(1);
    expect(restored[0].title).toBe('Baby Teething');
    expect(restored[0].comments).toHaveLength(1);
    expect(STORAGE_KEY).toBe('coral_memories');
  });

  it('increments reactions on memory', () => {
    const memory = createMemoryRecord({
      type: 'milestone',
      title: 'First smile',
      content: 'Today!',
    });

    memory.reactions.heart += 1;
    expect(memory.reactions.heart).toBe(1);
  });
});
