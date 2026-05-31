import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public/images/shop');

const categories = {
  skincare: { bg: '#FFF0F3', color: '#E88A93', icon: '🧴' },
  feeding: { bg: '#EEF5FF', color: '#7EB3E8', icon: '🍼' },
  travel: { bg: '#F5F0FF', color: '#A78BCA', icon: '🚗' },
  clothing: { bg: '#FFF0E8', color: '#F5A572', icon: '👕' },
  hygiene: { bg: '#F0FFF4', color: '#7BC88F', icon: '🧼' },
  gear: { bg: '#EEF5FF', color: '#6B9BD1', icon: '🎒' },
};

const products = [
  { file: 'sebamed-lotion', label: 'Lotion', category: 'skincare' },
  { file: 'sebamed-rash', label: 'Rash cream', category: 'skincare' },
  { file: 'sebamed-shampoo', label: 'Shampoo', category: 'skincare' },
  { file: 'sebamed-wash', label: 'Gentle wash', category: 'skincare' },
  { file: 'sterilizer', label: 'Sterilizer', category: 'feeding' },
  { file: 'breast-pump', label: 'Breast pump', category: 'feeding' },
  { file: 'carrier', label: 'Carrier', category: 'travel' },
  { file: 'diaper-bag', label: 'Diaper bag', category: 'travel' },
  { file: 'bottle-brush', label: 'Brush set', category: 'hygiene' },
  { file: 'pram', label: 'Pram', category: 'travel' },
  { file: 'play-gym', label: 'Play gym', category: 'gear' },
  { file: 'stroller', label: 'Stroller', category: 'travel' },
  { file: 'pacifier', label: 'Pacifier', category: 'feeding' },
];

function svg({ bg, color, icon, label }) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 144 144">
  <rect width="144" height="144" rx="12" fill="${bg}"/>
  <rect x="8" y="8" width="128" height="88" rx="8" fill="#fff" opacity="0.85"/>
  <text x="72" y="58" text-anchor="middle" font-size="36">${icon}</text>
  <text x="72" y="118" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="${color}">${esc(label)}</text>
</svg>`;
}

mkdirSync(outDir, { recursive: true });
for (const p of products) {
  const cat = categories[p.category];
  const path = join(outDir, `${p.file}.svg`);
  writeFileSync(path, svg({ ...cat, icon: cat.icon, label: p.label }));
  console.log('wrote', path);
}
