import { useState, useCallback } from 'react';

/**
 * In-memory comment thread (for non-persisted contexts).
 * Memories use useMemories.addComment instead.
 *
 * @param {import('../types/community').MemoryComment[]} [initialComments]
 */
export function useComments(initialComments = []) {
  const [comments, setComments] = useState(initialComments);

  const addComment = useCallback((text, author = 'You') => {
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        author,
        timestamp: new Date().toISOString(),
      },
    ]);
  }, []);

  return { comments, addComment };
}
