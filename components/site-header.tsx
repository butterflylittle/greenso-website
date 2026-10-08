"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, companyPages, copy, type Locale } from "@/lib/content";

export function SiteHeader({ locale }: { locale: Locale }) {
  const path = usePathname();
  const t = copy[locale];
  const zh = locale === "zh";
  const other = zh ? "en" : "zh";
  const links = [
    { href: `/${locale}`, label: t.nav.home, children: [] },
    { href: `/${locale}/about`, label: t.nav.about, children: companyPages.map(p => ({ href: `/${locale}/${p.slug}`, label: p[locale] })) },
    { href: `/${locale}/products`, label: t.nav.products, children: categories.map(c => ({ href: `/${locale}/products?category=${c.id}`, label: c[locale] })) },
    { href: `/${locale}/news`, label: t.nav.news, children: [] },
    { href: `/${locale}/gallery`, label: t.nav.gallery, children: [] },
    { href: `/${locale}/feedback`, label: t.nav.feedback, children: [] },
    { href: `/${locale}/contact`, label: t.nav.contact, children: [] },
  ];
  const active = (href: string) => href === `/${locale}` ? path === href : path === href || path.startsWith(`${href}/`) || (href.endsWith('/about') && companyPages.some(p => path === `/${locale}/${p.slug}`));
  return <header className="site-header" id="top"><div className="container nav-wrap">
    <Link href={`/${locale}`} className="brand" aria-label={zh ? "绿硕科技首页" : "GreenSo home"}><Image src="/legacy/greenso-logo.png" alt="GreenSo" width={189} height={41} /></Link>
    <nav className="desktop-nav" aria-label={zh ? "主导航" : "Main navigation"}>{links.map(item => <div className="nav-item" key={item.href}><Link href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>{item.children.length > 0 && <div className="nav-dropdown">{item.children.map(child => <Link href={child.href} key={child.href}>{child.label}<span aria-hidden="true">↗</span></Link>)}</div>}</div>)}</nav>
    <div className="header-tools"><a className="language-link" href={path.replace(/^\/(zh|en)(?=\/|$)/, `/${other}`)} hrefLang={other === "zh" ? "zh-CN" : "en"} aria-label={zh ? "Switch to English" : "切换至中文"} onClick={event => { if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) { event.preventDefault(); window.location.assign(event.currentTarget.href + window.location.search + window.location.hash); } }}>{zh ? "EN" : "中文"}<span aria-hidden="true">↗</span></a>
    <details className="mobile-menu" key={path}><summary aria-label={zh ? "导航菜单" : "Navigation menu"}><span /><span /></summary><nav aria-label={zh ? "移动导航" : "Mobile navigation"}>{links.map(item => <a key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}<span aria-hidden="true">↗</span></a>)}</nav></details></div>
  </div></header>;
}
