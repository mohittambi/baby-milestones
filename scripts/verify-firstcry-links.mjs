import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src/data/shoppingAndCare.js'), 'utf8');
const urls = [...src.matchAll(/firstcry:\s*'([^']+)'/g)].map((m) => m[1]);
const unique = [...new Set(urls)];

let failed = 0;

for (const url of unique) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (res.status >= 400) {
      console.error(`FAIL ${res.status} ${url}`);
      failed++;
    } else {
      console.log(`OK ${res.status} ${url}`);
    }
  } catch (e) {
    console.error(`FAIL ${url} — ${e.message}`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\n${failed} FirstCry URL(s) failed`);
  process.exit(1);
}
console.log(`\nAll ${unique.length} FirstCry URLs OK`);
