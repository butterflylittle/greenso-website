import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { PageIntro, EmptyState } from "@/components/page-intro";
import { filterProducts } from "@/lib/catalog";
import { categories, isLocale, products } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/[locale]/products">): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "zh" ? "产品中心" : "Products" };
}
export default async function ProductsPage({ params, searchParams }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const zh = locale === "zh";
  const query = await searchParams;
  const category = typeof query.category === "string" ? query.category : "all";
  const q = typeof query.q === "string" ? query.q.slice(0, 100) : "";
  const selected = categories.find(c => c.id === category || c.children.some(child => child.id === category));
  const child = selected?.children.find(c => c.id === category);
  if (category !== "all" && !selected) notFound();
  const title = child?.[locale] || selected?.[locale] || (zh ? "全部产品" : "All products");
  const matches = filterProducts(products, category, q);
  const categoryHref = (id: string) => `/${locale}/products?${new URLSearchParams({ category: id, ...(q ? { q } : {}) })}#catalog`;
  return <>
    <PageIntro locale={locale} eyebrow="PRODUCTS / LED POWER & CONTROL" title={zh ? "驱动每一道光。" : "Power behind every light."} description={zh ? "从美规调光器到 LED 驱动电源，围绕灯具应用选择合适的产品系列。" : "Explore dimmers and LED power supplies, organized around your lighting applications."} />
    <section className="section catalog-section" id="catalog"><div className="container catalog-layout">
      <aside className="catalog-sidebar"><div className="kicker">{zh ? "产品分类" : "PRODUCT CATEGORIES"}</div><Link className={category === 'all' ? 'is-selected' : ''} href={categoryHref('all')}>{zh ? "全部产品" : "All products"}<span>{String(products.length).padStart(2, "0")}</span></Link>{categories.map(c => <div className="catalog-category" key={c.id}><Link href={categoryHref(c.id)} className={c.id === category ? 'is-selected' : ''}>{c[locale]}<span>↗</span></Link><div>{c.children.map(sub => <Link key={sub.id} aria-current={category === sub.id ? "page" : undefined} href={categoryHref(sub.id)}>{sub[locale]}</Link>)}</div></div>)}</aside>
      <div><form className="catalog-search" action={`/${locale}/products`}><input type="hidden" name="category" value={category} /><label className="sr-only" htmlFor="product-search">{zh ? "搜索产品型号或名称" : "Search product model or name"}</label><input id="product-search" type="search" name="q" defaultValue={q} maxLength={100} placeholder={zh ? "搜索产品型号或名称" : "Search product model or name"} /><button type="submit">{zh ? "搜索" : "Search"}<span aria-hidden="true">↗</span></button></form>
        <div className="catalog-heading"><h2>{title}</h2><span>{matches.length} {zh ? "款产品" : matches.length === 1 ? "product" : "products"}</span></div>
        {selected && <p className="catalog-description">{zh ? selected.noteZh : selected.noteEn}</p>}
        {matches.length ? <div className="product-grid product-grid--two">{matches.map(p => <ProductCard product={p} locale={locale} key={p.slug} />)}</div> : <EmptyState locale={locale} title={q ? (zh ? "未找到匹配产品" : "No matching products") : (zh ? "本系列暂无公开型号" : "No models published in this series")} description={q ? (zh ? "请尝试其他型号或关键词，或清除搜索条件。" : "Try another model or keyword, or clear your search.") : (zh ? "如需本系列的选型资料、规格或供货信息，请联系绿硕。" : "Contact GreenSo for selection guidance, specifications and availability.")} />}
        {q && <Link className="text-link search-reset" href={categoryHref(category).replace(/&q=[^#]+/, '')}>{zh ? "清除搜索" : "Clear search"} ↗</Link>}
      </div>
    </div></section>
  </>;
}
