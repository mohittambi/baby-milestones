import milestones from '../src/data/milestones.js';
import diyActivities from '../src/data/diyActivities.js';

const REQUIRED = ['physical', 'emotional', 'activities', 'watchFor', 'pros', 'cons'];
let failed = 0;

function fail(msg) {
  console.error(`FAIL: ${msg}`);
  failed++;
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

if (milestones.length !== 36) {
  fail(`Expected 36 months, got ${milestones.length}`);
} else {
  ok('36 milestone months present');
}

const months = milestones.map((m) => m.month);
if (new Set(months).size !== months.length) {
  fail('Duplicate month values in milestones');
} else {
  ok('Unique month values');
}

const allIds = [];
for (const m of milestones) {
  for (const key of REQUIRED) {
    if (!m[key] || m[key].length === 0) {
      fail(`Month ${m.month} missing or empty: ${key}`);
    }
  }
  for (const item of [...m.physical, ...m.emotional]) {
    if (!item.id) fail(`Month ${m.month} milestone missing id`);
    allIds.push(item.id);
  }
}

if (new Set(allIds).size !== allIds.length) {
  fail('Duplicate milestone ids across months');
} else {
  ok(`${allIds.length} unique milestone ids`);
}

const diyMonths = new Set(diyActivities.map((d) => d.month));
for (let m = 1; m <= 36; m++) {
  if (!diyMonths.has(m)) {
    fail(`Missing DIY activities for month ${m}`);
  }
}
if (failed === 0) {
  ok('DIY activities for all 36 months');
}

const m4 = milestones.find((m) => m.month === 4);
const m5 = milestones.find((m) => m.month === 5);
const spotChecks = [
  [m4?.title, 'The Explorer'],
  [m4?.physical[0]?.text, 'Rolls from tummy to back'],
  [m4?.activities.some((a) => a.name === 'Rolling Practice'), true],
  [m4?.watchFor[0], "Doesn't watch things as they move"],
  [m4?.pros[0]?.includes('play partner'), true],
  [m4?.cons.some((c) => c.includes('4-month sleep regression')), true],
  [m5?.title, 'Getting Stronger'],
  [m4?.physical[0]?.id !== m5?.physical[0]?.id, true],
];

for (const [actual, expected] of spotChecks) {
  if (actual !== expected) {
    fail(`Timeline spot-check failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}
if (failed === 0) {
  ok('Month 4/5 timeline content spot-checks');
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed.`);
  process.exit(1);
}

console.log('\nAll milestone data integrity checks passed.');
