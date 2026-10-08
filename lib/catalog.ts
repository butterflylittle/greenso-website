import type { Product } from './content';

export function filterProducts(products: Product[], category: string, query: string) {
  const needle = query.trim().toLocaleLowerCase();
  return products.filter(product =>
    (category === 'all' || product.categoryId === category || product.subcategoryId === category) &&
    [product.model, product.name.zh, product.name.en, product.category.zh, product.category.en].join(' ').toLocaleLowerCase().includes(needle)
  );
}
