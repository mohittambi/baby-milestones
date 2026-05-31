/**
 * Fetch captions from @avira.ig (public profile API) and write raw JSON for curation.
 * Run: node scripts/scrape-instagram-recipes.mjs
 *
 * Uses curl — Node fetch gets blocked by Instagram (SecFetch policy).
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src/data');
const USERNAME = process.env.IG_USERNAME || 'avira.ig';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function fetchProfile(username) {
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`;
  const raw = execSync(
    `curl -sL -A "${UA}" -H "X-IG-App-ID: 936619743392459" "${url}"`,
    { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
  );
  return JSON.parse(raw);
}

function extractPosts(data) {
  return (data?.data?.user?.edge_owner_to_timeline_media?.edges ?? []).map(({ node }) => ({
    shortcode: node.shortcode,
    url: `https://www.instagram.com/p/${node.shortcode}/`,
    caption: node.edge_media_to_caption?.edges?.[0]?.node?.text ?? '',
    timestamp: node.taken_at_timestamp,
  }));
}

function isRecipeCaption(caption) {
  return /recipe|porridge|puree|purée|khichdi|oats|apple|broccoli|sooji|sweet potato|solids|baby food/i.test(caption);
}

const profile = fetchProfile(USERNAME);
const posts = extractPosts(profile);
const recipePosts = posts.filter((p) => isRecipeCaption(p.caption));

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'instagram-recipes-raw.json');
writeFileSync(
  outPath,
  JSON.stringify(
    {
      scrapedAt: new Date().toISOString(),
      username: USERNAME,
      totalPosts: posts.length,
      recipePosts: recipePosts.length,
      posts: recipePosts,
    },
    null,
    2
  )
);

console.log(`Saved ${recipePosts.length} recipe posts → ${outPath}`);
