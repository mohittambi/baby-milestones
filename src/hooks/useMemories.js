import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'coral_memories';

/** @type {import('../types/community').Memory[]} */
const SEED_MEMORIES = [
  {
    id: 'memory-seed-teething',
    type: 'tip',
    title: 'Baby Teething — What Worked for Us',
    content:
      'Cold teething rings + a little chamomile tea dabbed on gums were our lifesaver. Frozen washcloth knots helped on rough nights too.',
    babyAge: '6 months',
    tags: ['teething', 'remedies'],
    createdAt: '2026-05-28T10:00:00.000Z',
    reactions: { heart: 5, celebrate: 2, support: 3 },
    comments: [
      {
        id: 1,
        text: 'Trying the frozen washcloth tonight!',
        author: 'NewMom23',
        timestamp: '2026-05-29T14:00:00.000Z',
      },
    ],
  },
  {
    id: 'memory-seed-smile',
    type: 'milestone',
    title: 'First Real Smile',
    content: 'She smiled at her dad during tummy time today — we both cried a little.',
    babyAge: '2 months',
    tags: ['milestone', 'smile'],
    createdAt: '2026-05-25T09:00:00.000Z',
    reactions: { heart: 8, celebrate: 4, support: 1 },
    comments: [],
  },
];

function loadMemories() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    /* use seed */
  }
  return SEED_MEMORIES;
}

/**
 * @param {Partial<import('../types/community').Memory>} memory
 * @returns {import('../types/community').Memory}
 */
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

export function useMemories() {
  const [memories, setMemories] = useState(loadMemories);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  }, [memories]);

  /** @param {Omit<import('../types/community').Memory, 'id' | 'createdAt' | 'reactions' | 'comments'> & { tags?: string[] }} memory */
  const addMemory = useCallback((memory) => {
    setMemories((prev) => [createMemoryRecord(memory), ...prev]);
  }, []);

  /** @param {string} memoryId @param {string} text @param {string} [author] */
  const addComment = useCallback((memoryId, text, author = 'You') => {
    setMemories((prev) =>
      prev.map((m) =>
        m.id === memoryId
          ? {
              ...m,
              comments: [
                ...m.comments,
                {
                  id: Date.now(),
                  text,
                  author,
                  timestamp: new Date().toISOString(),
                },
              ],
            }
          : m
      )
    );
  }, []);

  /** @param {string} memoryId @param {'heart' | 'celebrate' | 'support'} reactionType */
  const reactToMemory = useCallback((memoryId, reactionType) => {
    setMemories((prev) =>
      prev.map((m) =>
        m.id === memoryId
          ? {
              ...m,
              reactions: {
                ...m.reactions,
                [reactionType]: m.reactions[reactionType] + 1,
              },
            }
          : m
      )
    );
  }, []);

  const deleteMemory = useCallback((memoryId) => {
    setMemories((prev) => prev.filter((m) => m.id !== memoryId));
  }, []);

  return { memories, addMemory, addComment, reactToMemory, deleteMemory };
}
