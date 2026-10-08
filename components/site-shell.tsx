import Image from "next/image";
import Link from "next/link";
import { categories, companyPages, copy, type Locale } from "@/lib/content";
import { SiteHeader } from "./site-header";
import { SiteTools } from "./site-tools";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = copy[locale];

  return (
    <>
      <a className="skip-link" href="#main-content">{locale === "zh" ? "跳至正文" : "Skip to content"}</a>
      <SiteHeader locale={locale} />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Image src="/legacy/greenso-logo.png" alt="GreenSo" width={170} height={37} className="footer-logo" />
            <p>{t.footer.note}</p>
          </div>
          <div><strong>{t.nav.products}</strong>{categories.map(c => <Link key={c.id} href={`/${locale}/products?category=${c.id}`}>{c[locale]}</Link>)}</div>
          <div><strong>{t.nav.about}</strong>{companyPages.map(p => <Link key={p.slug} href={`/${locale}/${p.slug}`}>{p[locale]}</Link>)}<Link href={`/${locale}/news`}>{t.nav.news}</Link><Link href={`/${locale}/gallery`}>{t.nav.gallery}</Link><Link href={`/${locale}/downloads`}>{locale === "zh" ? "下载中心" : "Downloads"}</Link></div>
          <div>
            <strong>{t.nav.contact}</strong>
            <a href="tel:+8675533079977">+86 755 3307 9977</a>
            <a href="mailto:349920663@qq.com">349920663@qq.com</a>
            <span>{t.footer.address}</span>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {t.footer.rights}</span><Link href={`/${locale}/site-map`}>{locale === "zh" ? "网站地图" : "Site map"}</Link></div>
      </footer>
      <SiteTools locale={locale} />
    </>
  );
}
