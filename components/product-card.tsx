import Link from "next/link";
import { localized, type Locale, type Product } from "@/lib/content";
import { ProductVisual } from "./product-visual";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <Link className="product-card" href={`/${locale}/products/${product.slug}`}>
      <div className="product-card-visual"><ProductVisual kind={product.kind} compact /><span className="product-card-visual__note">{locale === "zh" ? "产品示意" : "Illustration"}</span></div>
      <div className="eyebrow">{localized(product.category, locale)}</div>
      <h3>{product.model}</h3>
      <p>{localized(product.name, locale)}</p>
      <span className="text-link">{locale === "zh" ? "查看产品" : "View product"} <span>↗</span></span>
    </Link>
  );
}
