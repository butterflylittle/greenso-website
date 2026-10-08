import Image from "next/image";
import Link from "next/link";
import { companyPages, type Locale } from "@/lib/content";

export function PageIntro({ locale, eyebrow, title, description, image = false }: { locale: Locale; eyebrow: string; title: string; description: string; image?: boolean }) {
  return <section className={`subpage-hero ${image ? "subpage-hero--image" : ""}`}>
    {image && <Image src="/images/lighting-architecture.png" alt="" fill sizes="100vw" />}
    <div className="container"><div className="subpage-breadcrumb"><Link href={`/${locale}`}>{locale === "zh" ? "首页" : "Home"}</Link><span>/</span><span>{title}</span></div><div className="kicker">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>
  </section>;
}

export function CompanyNav({ locale, current }: { locale: Locale; current: string }) {
  return <nav className="section-nav" aria-label={locale === "zh" ? "公司栏目" : "Company sections"}><div className="container">{companyPages.map(page => <Link key={page.slug} aria-current={current === page.slug ? "page" : undefined} href={`/${locale}/${page.slug}`}>{page[locale]}</Link>)}</div></nav>;
}

export function EmptyState({ locale, title, description }: { locale: Locale; title?: string; description?: string }) {
  return <div className="empty-state"><span className="empty-state__mark" aria-hidden="true">↗</span><h2>{title || (locale === "zh" ? "暂无公开资料" : "No published resources")}</h2><p>{description || (locale === "zh" ? "欢迎联系我们，获取相关产品与服务信息。" : "Contact our team for product information and support.")}</p><Link className="text-link" href={`/${locale}/contact`}>{locale === "zh" ? "联系绿硕" : "Contact GreenSo"}<span aria-hidden="true">↗</span></Link></div>;
}
