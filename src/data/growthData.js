// WHO Child Growth Standards — approximate 15th–85th percentile (kg, cm)
// Educational reference only; individual curves vary. Source: WHO 2006 charts.

const WEIGHT_ANCHORS = {
  girls: {
    1: { low: 3.4, high: 5.0 },
    4: { low: 5.6, high: 7.3 },
    6: { low: 6.4, high: 8.2 },
    12: { low: 7.8, high: 10.2 },
    18: { low: 8.8, high: 11.5 },
    24: { low: 10.2, high: 13.6 },
    36: { low: 11.5, high: 15.5 },
  },
  boys: {
    1: { low: 3.6, high: 5.3 },
    4: { low: 6.2, high: 7.9 },
    6: { low: 7.1, high: 9.0 },
    12: { low: 8.6, high: 11.3 },
    18: { low: 9.6, high: 12.6 },
    24: { low: 11.0, high: 14.5 },
    36: { low: 12.5, high: 16.5 },
  },
};

const HEIGHT_ANCHORS = {
  girls: {
    1: { low: 50, high: 55 },
    6: { low: 62, high: 68 },
    12: { low: 69, high: 76 },
    24: { low: 80, high: 88 },
    36: { low: 88, high: 97 },
  },
  boys: {
    1: { low: 51, high: 56 },
    6: { low: 64, high: 70 },
    12: { low: 71, high: 78 },
    24: { low: 82, high: 90 },
    36: { low: 90, high: 99 },
  },
};

const HEAD_ANCHORS = {
  girls: {
    1: { low: 34, high: 37 },
    6: { low: 40, high: 44 },
    12: { low: 43, high: 47 },
    24: { low: 46, high: 49 },
  },
  boys: {
    1: { low: 35, high: 38 },
    6: { low: 41, high: 45 },
    12: { low: 44, high: 48 },
    24: { low: 47, high: 50 },
  },
};

function interpolateAnchors(anchors, month) {
  const keys = Object.keys(anchors).map(Number).sort((a, b) => a - b);
  const m = Math.max(1, Math.min(36, month));
  if (anchors[m]) return anchors[m];
  let lower = keys[0];
  let upper = keys[keys.length - 1];
  for (let i = 0; i < keys.length - 1; i++) {
    if (m >= keys[i] && m <= keys[i + 1]) {
      lower = keys[i];
      upper = keys[i + 1];
      break;
    }
  }
  const t = (m - lower) / (upper - lower);
  const a = anchors[lower];
  const b = anchors[upper];
  return {
    low: +(a.low + t * (b.low - a.low)).toFixed(1),
    high: +(a.high + t * (b.high - a.high)).toFixed(1),
  };
}

export function getWeightRange(month, gender = 'girls') {
  const g = gender === 'boy' ? 'boys' : 'girls';
  return interpolateAnchors(WEIGHT_ANCHORS[g], month);
}

export function getHeightRange(month, gender = 'girls') {
  const g = gender === 'boy' ? 'boys' : 'girls';
  return interpolateAnchors(HEIGHT_ANCHORS[g], month);
}

export function getHeadRange(month, gender = 'girls') {
  const g = gender === 'boy' ? 'boys' : 'girls';
  return interpolateAnchors(HEAD_ANCHORS[g], Math.min(month, 24));
}

export function kgToLbs(kg) {
  return (kg * 2.20462).toFixed(1);
}

// Sleep needs by month (approximate, AAP/WHO-informed ranges)
export const sleepNeedsByMonth = {
  1: { total: '14–17', naps: '4–5', nightStretch: '2–4 hours', awake: '45–60 min' },
  2: { total: '14–17', naps: '4–5', nightStretch: '3–5 hours', awake: '45–75 min' },
  3: { total: '14–17', naps: '4–5', nightStretch: '4–5 hours', awake: '60–90 min' },
  4: { total: '12–16', naps: '3–4', nightStretch: '4–6 hours', awake: '75–120 min' },
  5: { total: '12–16', naps: '3–4', nightStretch: '5–7 hours', awake: '90–150 min' },
  6: { total: '12–16', naps: '3', nightStretch: '6–8 hours', awake: '2–2.5 hours' },
  9: { total: '12–15', naps: '2–3', nightStretch: '6–9 hours', awake: '2.5–3 hours' },
  12: { total: '12–14', naps: '2', nightStretch: '8–10 hours', awake: '3–4 hours' },
  18: { total: '11–14', naps: '1–2', nightStretch: '10–11 hours', awake: '4–6 hours' },
  24: { total: '11–14', naps: '1', nightStretch: '10–12 hours', awake: '5–6 hours' },
  36: { total: '10–13', naps: '0–1', nightStretch: '10–12 hours', awake: '5–7 hours' },
};

export function getSleepNeeds(month) {
  if (!month) return sleepNeedsByMonth[4];
  const keys = Object.keys(sleepNeedsByMonth).map(Number).sort((a, b) => a - b);
  if (sleepNeedsByMonth[month]) return sleepNeedsByMonth[month];
  let lower = keys[0];
  let upper = keys[keys.length - 1];
  for (let i = 0; i < keys.length - 1; i++) {
    if (month >= keys[i] && month <= keys[i + 1]) {
      lower = keys[i];
      upper = keys[i + 1];
      break;
    }
  }
  return sleepNeedsByMonth[lower] || sleepNeedsByMonth[4];
}
