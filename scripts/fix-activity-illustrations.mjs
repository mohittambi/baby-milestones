/**
 * Replace emoji in ActivityIllustration SVG text nodes with image elements.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { emojiToIconKey } from '../src/utils/iconRegistry.js';

const path = join(dirname(fileURLToPath(import.meta.url)), '../src/components/ActivityIllustration.jsx');
let text = readFileSync(path, 'utf8');

const emojiInText = /<text([^>]*)>([^<]*[\u{1F300}-\u{1FAFF}\u2600-\u27BF][^<]*)<\/text>/gu;

text = text.replace(emojiInText, (match, attrs, content) => {
  const emoji = content.trim();
  if (!emoji || emoji.includes('cm')) return match;
  const key = emojiToIconKey(emoji);
  const sizeMatch = attrs.match(/fontSize="(\d+)"/);
  const xMatch = attrs.match(/x="([^"]+)"/);
  const yMatch = attrs.match(/y="([^"]+)"/);
  const size = sizeMatch ? Number(sizeMatch[1]) * 1.4 : 16;
  const x = xMatch ? xMatch[1] : '0';
  const y = yMatch ? yMatch[1] : '0';
  const ax = attrs.includes('textAnchor="middle"') ? Number(x) - size / 2 : Number(x);
  const ay = Number(y) - size * 0.85;
  return `<image href="/images/emojis/${key}.png" x="${ax}" y="${ay}" width="${size}" height="${size}" />`;
});

if (!text.includes('resolveIconSrc')) {
  text = `import { resolveIconSrc } from '../utils/iconRegistry';\n\n${text}`;
}

writeFileSync(path, text);
console.log('ActivityIllustration emoji text nodes replaced');
