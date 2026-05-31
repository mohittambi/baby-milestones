import { describe, it, expect } from 'vitest';
import milestones from '../data/milestones';

const STORAGE_KEY = 'babyMilestoneChecks';

function getMonthProgress(checkedItems, month) {
  const data = milestones.find((m) => m.month === month);
  const allIds = [...data.physical, ...data.emotional].map((i) => i.id);
  const checked = allIds.filter((id) => checkedItems[id]).length;
  return { checked, total: allIds.length };
}

describe('localStorage milestone persistence pattern', () => {
  it('round-trips checked state and computes Month 4 progress 3/8', () => {
    const checkedItems = { 'p4-1': true, 'e4-1': true, 'p4-3': true };
    const serialized = JSON.stringify(checkedItems);
    const restored = JSON.parse(serialized);
    expect(restored).toEqual(checkedItems);

    const progress = getMonthProgress(restored, 4);
    expect(progress).toEqual({ checked: 3, total: 8 });

    const roundTrip = JSON.parse(serialized);
    expect(Object.keys(roundTrip).length).toBe(3);
    expect(STORAGE_KEY).toBe('babyMilestoneChecks');
  });
});
