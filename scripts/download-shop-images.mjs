/**
 * Downloads product images → public/images/shop/{file}.jpg
 * Run: node scripts/download-shop-images.mjs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public/images/shop');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

const fc = (id) => `https://cdn.fcglcdn.com/brainbees/images/products/438x531/${id}a.jpg`;

const items = [
  { file: 'sebamed-lotion', pageUrl: 'https://www.firstcry.com/sebamed/sebamed-baby-body-lotion-ph-5-5-vegan-400-ml/552251/product-detail' },
  { file: 'sebamed-rash', pageUrl: 'https://www.firstcry.com/sebamed/sebamed-baby-diaper-rash-cream-ph-5-5-100-ml/552253/product-detail' },
  { file: 'sebamed-shampoo', imageUrl: fc('48194'), pageUrl: 'https://www.firstcry.com/sebamed/sebamed-baby-shampoo-ph-5-5-soap-free-no-tears-150-ml/48194/product-detail' },
  { file: 'sebamed-wash', imageUrl: fc('18256737') },
  { file: 'sterilizer', imageUrl: fc('8870538') },
  { file: 'breast-pump', pageUrl: 'https://www.firstcry.com/breast-feeding/breast-pumps?scid=37&type=t1-70' },
  { file: 'carrier', pageUrl: 'https://www.firstcry.com/babyhug/baby-carriers/7/41/621' },
  { file: 'diaper-bag', imageUrl: fc('18177039') },
  { file: 'bottle-brush', pageUrl: 'https://www.amazon.in/dp/B0FQNZXVGK' },
  { file: 'pram', pageUrl: 'https://www.firstcry.com/baby-strollers-and-prams/180-degree-flat-recline?features=t2-7336&scid=44' },
  { file: 'play-gym', pageUrl: 'https://www.firstcry.com/play-gyms-and-playmats/0-3-months/3-6-months/6-9-months/9-12-months/12-18-months/18-24-months?age=0%2C1%2C2%2C3%2C4%2C5&scid=49' },
  { file: 'stroller', pageUrl: 'https://www.firstcry.com/babyhug/baby-strollers-prams/7/44/621' },
  { file: 'pacifier', pageUrl: 'https://www.amazon.in/Philips-Avent-Pacifier-SCF085-12/dp/B09P1V8RMM' },
  { file: 'dry-sheets', pageUrl: 'https://www.amazon.in/dp/B0BCVRJSSM' },
  { file: 'newborn-clothes', imageUrl: fc('19801994'), pageUrl: 'https://www.firstcry.com/babyhug/babyhug-100-cotton-woven-sleeveless-jhablas-with-stripes-and-teddy-bear-print-pack-of-3-white-orange-and-sky-blue/19801994/product-detail' },
  { file: 'bibs', pageUrl: 'https://www.firstcry.com/babyhug/babyhug-drool-bibs-printed-pack-of-5-multicolor/18149757/product-detail' },
  { file: 'walking-shoes', imageUrl: 'https://picsum.photos/seed/babyshoes/600/400' },
  { file: 'nursing-pads', imageUrl: fc('21490225'), pageUrl: 'https://www.firstcry.com/nua/nua-nursing-pads-pack-of-18-disposable-pads-soft-and-breathable-leak-protection-during-breastfeeding-discreet-and-comfortable-fit-100-toxic-free-safe-for-mom-and-baby-white/21490225/product-detail' },
  { file: 'nipple-cream', imageUrl: fc('17520908'), pageUrl: 'https://www.firstcry.com/lansinoh/lansinoh-lanolin-nipple-cream-10ml/17520908/product-detail' },
  { file: 'burp-cloths', imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=600&h=400&q=80' },
  { file: 'clothes-sizeup', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&h=400&q=80' },
];

async function fetchOgImage(pageUrl) {
  const res = await fetch(pageUrl, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  const html = await res.text();
  const m = html.match(/property="og:image"\s+content="([^"]+)"/i)
    || html.match(/content="([^"]+)"\s+property="og:image"/i);
  if (m) {
    const url = m[1].replace(/\\\//g, '/');
    if (!url.includes('India_shopping') && !url.includes('fc_logo')) return url;
  }
  const idMatch = pageUrl.match(/\/(\d+)\/product-detail/);
  if (idMatch) return fc(idMatch[1]);
  const imgMatch = html.match(/brainbees\/images\/products\/\d+x\d+\/(\d+)a\.jpg/i);
  if (imgMatch) return fc(imgMatch[1]);
  return null;
}

async function fetchAmazonImage(pageUrl) {
  const res = await fetch(pageUrl, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  const html = await res.text();
  const m = html.match(/"hiRes":"([^"]+)"/) || html.match(/"large":"([^"]+)"/);
  if (m) return m[1].replace(/\\u002F/g, '/');
  const og = html.match(/property="og:image"\s+content="([^"]+)"/i);
  if (og) return og[1];
  return null;
}

async function downloadImage(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  writeFileSync(destPath, Buffer.from(await res.arrayBuffer()));
}

mkdirSync(outDir, { recursive: true });
let ok = 0;
let fail = 0;

for (const item of items) {
  const dest = join(outDir, `${item.file}.jpg`);
  try {
    let imageUrl = item.imageUrl;
    if (!imageUrl && item.pageUrl) {
      imageUrl = item.pageUrl.includes('amazon.')
        ? await fetchAmazonImage(item.pageUrl)
        : await fetchOgImage(item.pageUrl);
    }
    if (!imageUrl) throw new Error('no image URL');
    await downloadImage(imageUrl, dest);
    console.log(`OK ${item.file}`);
    ok++;
  } catch (e) {
    console.error(`FAIL ${item.file}: ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} ok, ${fail} failed`);
process.exit(fail > 5 ? 1 : 0);
