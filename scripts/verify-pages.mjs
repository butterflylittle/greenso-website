import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { products, categories } from '../lib/content.ts';
import { news, newsCategories } from '../lib/news.ts';
const gallery = JSON.parse(await readFile(new URL('../lib/gallery.json', import.meta.url)));
const base = process.env.SITE_TEST_URL || 'http://localhost:3000';
const sections = ['', 'products', 'about', 'culture', 'organization', 'service', 'news', 'gallery', 'feedback', 'inquiry', 'downloads', 'site-map', 'contact'];
const paths = ['zh','en'].flatMap(locale => [
  ...sections.map(p => `/${locale}${p ? `/${p}` : ''}`),
  ...products.map(p => `/${locale}/products/${p.slug}`),
  ...news.map(n => `/${locale}/news/${n.slug}`),
  ...gallery.map(g => `/${locale}/gallery/${g.slug}`),
  ...categories.flatMap(c => [c.id, ...c.children.map(s => s.id)]).map(id => `/${locale}/products?category=${id}`),
  ...newsCategories.map(c => `/${locale}/news?category=${c.id}`),
  `/${locale}/gallery?page=2`, `/${locale}/gallery?category=certificates&page=2`,
  `/${locale}/gallery?category=staff`, `/${locale}/gallery?category=cases`,
  `/${locale}/downloads?category=files`, `/${locale}/downloads?category=help`,
  `/${locale}/products?q=GS-S2-Z1011`, `/${locale}/products?q=missing`,
]);
const failures = [];
const assets = new Set();
for (let i=0; i<paths.length; i+=6) {
  await Promise.all(paths.slice(i,i+6).map(async path => {
    const response = await fetch(new URL(path, base));
    const html = await response.text();
    if (response.status !== 200 || !/<h1[ >]/.test(html) || /Internal Server Error/.test(html)) failures.push({path,status:response.status});
    for (const match of html.matchAll(/(?:src|href)="(\/legacy\/[^"?]+|\/images\/[^"?]+)"/g)) assets.add(match[1]);
  }));
}
for (const asset of assets) {
  const response = await fetch(new URL(asset, base));
  if (!response.ok) failures.push({asset,status:response.status});
}
for (const path of ['/xx/products','/zh/toString','/zh/products/no-such-model','/en/news/no-such-news','/zh/gallery/no-such-certificate']) {
  const response = await fetch(new URL(path,base));
  if (response.status!==404) failures.push({path,expected:404,status:response.status});
}
assert.deepEqual(failures, []);
console.log(`PASS: ${paths.length} bilingual page/filter cases, ${assets.size} original image assets, and 5 not-found cases.`);
