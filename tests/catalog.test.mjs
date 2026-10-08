import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts } from '../lib/catalog.ts';
import { products } from '../lib/content.ts';

test('catalog combines category selection with case-insensitive model search', () => {
  assert.deepEqual(filterProducts(products, 'dimmers', ' gs-s2-b1011 ').map(p => p.model), ['GS-S2-B1011']);
  assert.deepEqual(filterProducts(products, 'linear', ''), []);
  assert.deepEqual(filterProducts(products, 'dimmers', 'unknown-model'), []);
  assert.equal(filterProducts(products, 'all', '调光器').length, 2);
  assert.equal(filterProducts(products, 'triac', '').length, 2);
});
