import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/content";
import { news } from "@/lib/news";
export function generateStaticParams() { return news.flatMap(n => ['zh','en'].map(locale => ({ locale, slug:n.slug }))); }
export async function generateMetadata({ params }: PageProps<"/[locale]/news/[slug]">): Promise<Metadata> { const { locale,slug }=await params; const item=news.find(n=>n.slug===slug);return item&&isLocale(locale)?{title:item.title[locale]}:{}; }
export default async function NewsDetail({ params }: PageProps<"/[locale]/news/[slug]">) {
 const { locale,slug }=await params; if(!isLocale(locale)) notFound();const item=news.find(n=>n.slug===slug);if(!item) notFound(); const zh=locale==='zh';const index=news.indexOf(item);
 return <><section className="article-header"><div className="container"><nav className="breadcrumb"><Link href={`/${locale}`}>{zh?'首页':'Home'}</Link><span>/</span><Link href={`/${locale}/news`}>{zh?'新闻中心':'News'}</Link></nav><div className="kicker">NEWS ARCHIVE / <time dateTime={item.date}>{item.date}</time></div><h1>{item.title[locale]}</h1></div></section><article className="article-body container"><div className="article-meta">{zh?'内容摘要':'Article summary'}<span>{item.date}</span></div><div>{item.paragraphs[locale].map(p=><p key={p}>{p}</p>)}<p className="archive-note">{zh?'本文为历史资讯摘要，保留原始发布日期。':'This is a summary of an archived article, retaining its original publication date.'}</p><a className="text-link" href={`https://www.greenso.com.cn/${zh?'cn':'en'}/new/${item.slug}.html`} target="_blank" rel="noreferrer">{zh?'阅读官网原文':'Read the original article'} <span>↗</span></a></div></article><div className="container adjacent-links">{news[index+1]?<Link href={`/${locale}/news/${news[index+1].slug}`}><small>{zh?'上一篇':'Previous'}</small>{news[index+1].title[locale]}</Link>:<span/>}<Link href={`/${locale}/news`}>{zh?'返回列表':'All news'}</Link>{news[index-1]?<Link href={`/${locale}/news/${news[index-1].slug}`}><small>{zh?'下一篇':'Next'}</small>{news[index-1].title[locale]}</Link>:<span/>}</div></>;
}
