import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro, EmptyState } from "@/components/page-intro";
import { isLocale } from "@/lib/content";
import { news, newsCategories } from "@/lib/news";
export async function generateMetadata({ params }: PageProps<"/[locale]/news">): Promise<Metadata> { const { locale } = await params; return { title: locale === "zh" ? "新闻中心" : "News" }; }
export default async function NewsPage({ params, searchParams }: PageProps<"/[locale]/news">) {
 const { locale } = await params; if (!isLocale(locale)) notFound(); const zh = locale === "zh";
 const query = await searchParams; const category = typeof query.category === 'string' ? query.category : 'all'; if (!newsCategories.some(c => c.id === category)) notFound(); const entries = news.filter(item => category === 'all' || item.category === category);
 return <><PageIntro locale={locale} eyebrow="NEWS / INSIGHTS & UPDATES" title={zh ? "资讯与行业观察。" : "Insights from our industry."} description={zh ? "公司动态、行业新闻与科技资讯。" : "Company updates, industry news and technology insights."} />
 <nav className="section-nav" aria-label={zh ? "新闻分类" : "News categories"}><div className="container">{newsCategories.map(c => <Link key={c.id} aria-current={category === c.id ? 'page' : undefined} href={`/${locale}/news?category=${c.id}`}>{c[locale]}</Link>)}</div></nav>
 <section className="section"><div className="container"><div className="section-heading"><div><div className="kicker">NEWS ARCHIVE</div><h2>{newsCategories.find(c => c.id === category)?.[locale]}</h2></div><span className="subtle-note">{zh ? "按原始发布日期收录" : "Listed by original publication date"}</span></div>{entries.length ? <div className="news-list">{entries.map((item,i) => <Link className="news-row" href={`/${locale}/news/${item.slug}`} key={item.slug}><time dateTime={item.date}>{item.date}</time><div><span className="eyebrow">{newsCategories.find(c => c.id === item.category)?.[locale] || (zh ? "新闻中心" : "News")}</span><h2>{item.title[locale]}</h2><p>{item.paragraphs[locale][0]}</p></div><span className="circle-arrow" aria-hidden="true">↗</span></Link>)}</div> : <EmptyState locale={locale} title={zh ? "本栏目暂无资讯" : "No articles in this category"} />}</div></section></>;
}
