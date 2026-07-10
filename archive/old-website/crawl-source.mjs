import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = 'http://jastarniakorab.pl';
const outputRoot = path.resolve('_source/live-site');
const queue = ['/'];
const seen = new Set();
const saved = new Map();

const textTypes = [
  'text/html',
  'text/css',
  'application/javascript',
  'text/javascript',
  'application/x-javascript',
];

function normalizeUrl(raw, base) {
  if (!raw || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) {
    return null;
  }

  try {
    const url = new URL(raw.replace(/&amp;/g, '&'), base);
    url.hash = '';
    if (url.hostname === 'www.jastarniakorab.pl') {
      url.hostname = 'jastarniakorab.pl';
    }
    if (url.origin !== origin) {
      return null;
    }
    return `${url.pathname}${url.search}`;
  } catch {
    return null;
  }
}

function localPathFor(route, contentType = '') {
  const url = new URL(route, origin);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  if (!path.extname(pathname) && contentType.includes('text/html')) {
    pathname = `${pathname}.html`;
  }

  const safe = pathname
    .split('/')
    .filter(Boolean)
    .map((part) => part.replace(/[<>:"|?*]/g, '_'));

  return path.join(outputRoot, ...safe);
}

function discoverLinks(route, text, contentType) {
  const matches = [];
  const htmlAttrs = /(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi;
  const cssUrls = /url\(\s*["']?([^"')]+)["']?\s*\)/gi;
  const jsImageRefs = /["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg|css|js|html?))["']/gi;

  if (contentType.includes('text/html')) {
    matches.push(...text.matchAll(htmlAttrs));
  }

  if (contentType.includes('text/css') || contentType.includes('javascript')) {
    matches.push(...text.matchAll(cssUrls));
    matches.push(...text.matchAll(jsImageRefs));
  }

  for (const match of matches) {
    const next = normalizeUrl(match[1], new URL(route, origin));
    if (next && !seen.has(next) && !queue.includes(next)) {
      queue.push(next);
    }
  }
}

while (queue.length > 0) {
  const route = queue.shift();
  if (seen.has(route)) continue;
  seen.add(route);

  const url = `${origin}${route}`;
  console.log(`Fetching ${url}`);

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Korab rebuild content mirror',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    console.warn(`Skipping ${url}: ${response.status} ${response.statusText}`);
    continue;
  }

  const contentType = response.headers.get('content-type') ?? '';
  const buffer = Buffer.from(await response.arrayBuffer());
  const filePath = localPathFor(route, contentType);

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, buffer);
  saved.set(route, filePath);

  if (textTypes.some((type) => contentType.includes(type))) {
    discoverLinks(route, buffer.toString('utf8'), contentType);
  }
}

console.log(`Saved ${saved.size} files to ${outputRoot}`);
