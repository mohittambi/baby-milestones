import { useEffect, useRef, useCallback } from 'react';

export function useSwipe(onSwipeLeft, onSwipeRight, { threshold = 50, allowedTime = 300 } = {}) {
  const touchStart = useRef(null);
  const touchTime = useRef(null);

  const handleTouchStart = useCallback((e) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    touchTime.current = Date.now();
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!touchStart.current) return;

    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    const elapsed = Date.now() - touchTime.current;

    if (elapsed > allowedTime) return;
    if (Math.abs(dy) > Math.abs(dx)) return;

    if (dx > threshold && onSwipeRight) {
      onSwipeRight();
    } else if (dx < -threshold && onSwipeLeft) {
      onSwipeLeft();
    }

    touchStart.current = null;
  }, [onSwipeLeft, onSwipeRight, threshold, allowedTime]);

  useEffect(() => {
    const el = document.body;
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);
}

export function useLongPress(callback, { delay = 500 } = {}) {
  const timer = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = useCallback((e) => {
    timer.current = setTimeout(() => {
      savedCallback.current(e);
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchStart: start,
    onTouchEnd: clear,
  };
}

export function usePullToRefresh(onRefresh, { threshold = 80 } = {}) {
  const startY = useRef(0);
  const pulling = useRef(false);

  useEffect(() => {
    const handleStart = (e) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY;
        pulling.current = true;
      }
    };

    const handleMove = (e) => {
      if (!pulling.current) return;
      const dy = e.touches[0].clientY - startY.current;
      if (dy > threshold) {
        pulling.current = false;
        onRefresh();
      }
    };

    const handleEnd = () => {
      pulling.current = false;
    };

    document.addEventListener('touchstart', handleStart, { passive: true });
    document.addEventListener('touchmove', handleMove, { passive: true });
    document.addEventListener('touchend', handleEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', handleStart);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [onRefresh, threshold]);
}
