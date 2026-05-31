/**
 * Replace icon: "emoji" with icon: "slug" in data/config files.
 * Run: node scripts/migrate-data-icons.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { emojiToIconKey } from '../src/utils/iconRegistry.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const FILES = [
  'src/data/milestones.js',
  'src/data/shoppingAndCare.js',
  'src/data/sources.js',
  'src/data/travelTypeConfig.js',
  'src/components/careTypeConfig.js',
  'src/components/diyCategoryConfig.js',
  'src/components/shopCategoryConfig.js',
  'src/utils/communityHelpers.js',
  'src/pages/Community.jsx',
  'src/components/CareSection.jsx',
];

const emojiRe = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}][\uFE0F\u{200D}\u{1F3FB}-\u{1F3FF}\u{1F1E6}-\u{1F1FF}\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]*/gu;

function migrateFile(relPath) {
  const path = join(root, relPath);
  let text = readFileSync(path, 'utf8');
  let count = 0;

  text = text.replace(/icon:\s*["']([^"']+)["']/g, (match, value) => {
    if (!emojiRe.test(value) && !/[👶🏠🛒]/.test(value)) {
      emojiRe.lastIndex = 0;
      return match;
    }
    emojiRe.lastIndex = 0;
    const key = emojiToIconKey(value);
    count++;
    return `icon: "${key}"`;
  });

  emojiRe.lastIndex = 0;
  writeFileSync(path, text);
  console.log(`${relPath}: ${count} icon fields migrated`);
}

for (const f of FILES) migrateFile(f);
