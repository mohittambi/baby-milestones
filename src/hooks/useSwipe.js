import { useState, useRef, useCallback } from 'react';

const SWIPE_THRESHOLD = 100;

/**
 * Touch/mouse swipe detection for recipe cards.
 * @param {() => void} [onSwipeLeft]
 * @param {() => void} [onSwipeRight]
 */
export function useSwipe(onSwipeLeft, onSwipeRight) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const draggingRef = useRef(false);

  const onStart = useCallback((clientX) => {
    startX.current = clientX;
    draggingRef.current = true;
    setIsDragging(true);
  }, []);

  const onMove = useCallback((clientX) => {
    if (!draggingRef.current) return;
    setOffset(clientX - startX.current);
  }, []);

  const onEnd = useCallback(() => {
    if (!draggingRef.current) return;
    setOffset((prev) => {
      if (prev > SWIPE_THRESHOLD) onSwipeRight?.();
      else if (prev < -SWIPE_THRESHOLD) onSwipeLeft?.();
      return 0;
    });
    draggingRef.current = false;
    setIsDragging(false);
  }, [onSwipeLeft, onSwipeRight]);

  const handlers = {
    onTouchStart: (e) => onStart(e.touches[0].clientX),
    onTouchMove: (e) => onMove(e.touches[0].clientX),
    onTouchEnd: onEnd,
    onMouseDown: (e) => {
      e.preventDefault();
      onStart(e.clientX);
    },
    onMouseMove: (e) => {
      if (isDragging) onMove(e.clientX);
    },
    onMouseUp: onEnd,
    onMouseLeave: () => {
      if (draggingRef.current) onEnd();
    },
  };

  return { offset, isDragging, handlers };
}
