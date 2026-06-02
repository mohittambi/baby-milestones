import { describe, it, expect } from 'vitest';
import {
  getPostpartumWeek,
  getPostpartumMonth,
  isCurrentPeriod,
  getDefaultMomMilestonePeriodId,
} from './momMilestones';
import { momMilestonePeriods } from '../data/momMilestones';

describe('momMilestones', () => {
  const birth = '2025-01-01';

  it('computes postpartum week from birth date', () => {
    const week = getPostpartumWeek(birth);
    expect(week).toBeTypeOf('number');
    expect(week).toBeGreaterThanOrEqual(0);
  });

  it('computes postpartum month from birth date', () => {
    const month = getPostpartumMonth(birth);
    expect(month).toBeTypeOf('number');
    expect(month).toBeGreaterThanOrEqual(1);
    expect(month).toBeLessThanOrEqual(12);
  });

  it('marks current period for week-based windows', () => {
    const period = momMilestonePeriods.find((p) => p.id === 'pp-weeks-0-2');
    expect(period).toBeDefined();
    expect(isCurrentPeriod(period, birth)).toBeTypeOf('boolean');
  });

  it('returns a default period id', () => {
    const id = getDefaultMomMilestonePeriodId(birth);
    expect(momMilestonePeriods.some((p) => p.id === id)).toBe(true);
  });
});
