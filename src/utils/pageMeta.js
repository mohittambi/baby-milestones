const DEFAULT = {
  title: 'Coral — Baby Milestones & Mom Community',
  description: 'from a mom to new age moms — milestones, recipes, tips, and memories for parents.',
  image: 'https://coral.app/og-default.png',
  url: typeof window !== 'undefined' ? window.location.href : '',
};

function setMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function applyPageMeta(meta = {}) {
  const title = meta.title ? `${meta.title} | Coral` : DEFAULT.title;
  const description = meta.description || DEFAULT.description;
  const image = meta.image || DEFAULT.image;
  const url = meta.url || DEFAULT.url;

  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', meta.title || 'Coral Community');
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:type', meta.type || 'website');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title || 'Coral Community');
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);
}

export function resetPageMeta() {
  applyPageMeta({});
}
