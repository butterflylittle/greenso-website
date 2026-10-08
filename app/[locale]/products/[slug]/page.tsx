import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/product-visual";
import { isLocale, localized, products } from "@/lib/content";

export function generateStaticParams() { return products.flatMap(p => ["zh", "en"].map(locale => ({ locale, slug: p.slug }))); }
export async function generateMetadata({ params }: PageProps<"/[locale]/products/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product || !isLocale(locale)) return {};
  return { title: `${product.model} · ${localized(product.name, locale)}`, description: localized(product.summary, locale) };
}
export default async function ProductDetailPage({ params }: PageProps<"/[locale]/products/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  const zh = locale === "zh";
  const index = products.indexOf(product);
  const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: product.model, description: localized(product.summary, locale), brand: { "@type": "Brand", name: "GreenSo" }, category: localized(product.category, locale) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className="product-detail"><div className="container"><nav className="breadcrumb" aria-label={zh ? "当前位置" : "Breadcrumb"}><Link href={`/${locale}`}>{zh ? "首页" : "Home"}</Link><span>/</span><Link href={`/${locale}/products?category=triac`}>{zh ? "可控硅调光器" : "TRIAC dimmers"}</Link><span>/</span><span>{product.model}</span></nav>
      <div className="product-detail__grid"><figure className="product-stage"><ProductVisual kind={product.kind} /><figcaption>{zh ? "产品示意图 · 外观以实际产品为准" : "Product illustration · Actual appearance may vary"}</figcaption></figure>
        <div className="product-detail__copy"><div className="kicker">DIMMING CONTROL / 120VAC</div><h1>{product.model}</h1><h2>{localized(product.name, locale)}</h2><p>{zh ? "采用前沿切相技术，兼容 LED、CFL 和白炽灯负载，支持单控及三路接线，适用于北美住宅、酒店客房、商业展厅与办公空间。" : "Leading-edge phase-cut control for LED, CFL and incandescent loads. Supports single-pole and 3-way wiring for homes, hotel rooms, showrooms and offices in North America."}</p><div className="product-features"><span>{zh ? "ETL 认证" : "ETL certified"}</span><span>{zh ? "3 年质保" : "3-year warranty"}</span><span>{zh ? "前沿切相" : "Leading-edge TRIAC"}</span></div><div className="product-key-specs"><div><strong>120<span>VAC</span></strong><span>{zh ? "输入电压" : "Input voltage"}</span></div><div><strong>300<span>W</span></strong><span>LED / CFL</span></div><div><strong>3<span>W</span></strong><span>{zh ? "最小负载" : "Minimum load"}</span></div></div><div className="button-row"><Link className="button button--primary" href={`/${locale}/inquiry?product=${product.model}`}>{zh ? "在线订购 / 询价" : "Product inquiry"} ↗</Link><a className="button button--ghost" href="#specifications">{zh ? "查看技术参数" : "View specifications"} ↓</a></div></div>
      </div></div></section>
    <section className="section section--tint" id="specifications"><div className="container detail-lower"><div><div className="kicker">TECHNICAL DATA</div><h2>{zh ? "技术参数" : "Specifications"}</h2><p>{zh ? "输入频率自适应 50/60Hz，输出电压与输入相同，采用切相调制。选型与安装请联系技术团队。" : "Adaptive 50/60Hz input frequency. Output follows the input voltage with phase-cut modulation. Contact our team for selection and installation support."}</p></div><dl className="spec-list">{product.specs.map(spec => <div key={spec.label.en}><dt>{localized(spec.label, locale)}</dt><dd>{spec.value}</dd></div>)}</dl></div></section>
    <div className="container adjacent-links">{products[index + 1] ? <Link href={`/${locale}/products/${products[index + 1].slug}`}><small>{zh ? "上一个产品" : "Previous product"}</small>← {products[index + 1].model}</Link> : <span /> }<Link href={`/${locale}/products`}>{zh ? "返回产品中心" : "All products"}</Link>{products[index - 1] ? <Link href={`/${locale}/products/${products[index - 1].slug}`}><small>{zh ? "下一个产品" : "Next product"}</small>{products[index - 1].model} →</Link> : <span />}</div>
  </>;
}
