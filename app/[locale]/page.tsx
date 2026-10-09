import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { categories, isLocale, products } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? { title: "LED Drivers & Dimming Controls | GreenSo Technology", description: "GreenSo develops dependable LED drivers and dimming controls for lighting brands and project customers." }
    : { title: "LED 驱动与调光控制 | GreenSo Technology", description: "绿硕科技专注 LED 驱动电源与调光控制，为照明品牌和工程客户提供稳定的产品方案。" };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const zh = locale === "zh";

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-meta">
            <span>01 / LIGHTING CONTROL</span>
            <span>SHENZHEN, CN</span>
            <span>EST. 2010</span>
          </div>
          <div className="hero-grid">
            <p className="hero-index">GREENSO®<br />CONTROL SYSTEMS</p>
            <h1 id="hero-title">{zh ? <>精准控光，<br /><em>让空间焕发生机。</em></> : <>Precision control.<br /><em>Light comes alive.</em></>}</h1>
            <div className="hero-intro">
              <p>{zh ? "以可靠的 LED 驱动与调光技术，连接每一道光与生活。" : "Dependable LED drivers and dimming technology. Bringing every space to life."}</p>
              <a className="scroll-link" href="#company">{zh ? "向下探索" : "Explore below"}<span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <figure className="hero-media">
            <Image className="hero-image" src="/images/lighting-architecture.png" alt="" fill sizes="(max-width: 640px) 100vw, 92vw" preload />
            <figcaption>
              <span>{zh ? "建筑照明 / 概念场景" : "ARCHITECTURAL LIGHTING / CONCEPT"}</span>
              <span>GREENSO / 2026</span>
            </figcaption>
          </figure>
          <div className="hero-links">
            <Link href={`/${locale}/products`}><span>01</span><strong>{zh ? "探索产品" : "Explore products"}</strong><span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/contact`}><span>02</span><strong>{zh ? "寻找照明方案" : "Find your solution"}</strong><span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <div className="brand-statement"><span>BETTER CONTROL.</span><strong>BETTER LIGHT.</strong></div>

      <section id="company" className="section company-section">
        <div className="container">
          <div className="company-heading">
            <div className="kicker">02 / COMPANY</div>
            <h2>{zh ? <>专注光的背后，<br />成就空间的无限可能。</> : <>Behind every light.<br />Beyond the ordinary.</>}</h2>
            <div className="company-description">
              <p>{zh ? "自 2010 年起，绿硕科技持续深耕 LED 驱动电源与调光控制。从电路研发到精密制造，我们让稳定、舒适的光，走进住宅、酒店与商业空间。" : "Since 2010, GreenSo has focused on LED drivers and dimming controls. From circuit design to manufacturing, we bring dependable, comfortable light to homes, hospitality and commercial spaces."}</p>
              <Link className="text-link" href={`/${locale}/about`}>{zh ? "走进绿硕" : "Discover GreenSo"}<span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="number-grid">
            <div><span>01</span><strong>2010</strong><small>{zh ? "绿硕科技成立" : "Year founded"}</small></div>
            <div><span>02</span><strong>150+</strong><small>{zh ? "专业员工" : "Skilled employees"}</small></div>
            <div><span>03</span><strong>10+</strong><small>{zh ? "年研发经验" : "Years of engineering"}</small></div>
            <div><span>04</span><strong>15%</strong><small>{zh ? "技术与品控团队" : "Engineering & QC"}</small></div>
          </div>
        </div>
      </section>

      <section className="business-section">
        <figure className="business-image">
          <Image src="/legacy/factory.png" alt={zh ? "绿硕科技厂区" : "GreenSo manufacturing campus"} fill sizes="(max-width: 800px) 100vw, 58vw" />
          <figcaption>GREENSO TECHNOLOGY / SHENZHEN</figcaption>
        </figure>
        <div className="business-copy">
          <div className="kicker kicker--light">03 / ENGINEERING</div>
          <h2>{zh ? <>从设计的第一步，<br />到可靠的每一件。</> : <>Designed with purpose.<br />Built for reliability.</>}</h2>
          <p>{zh ? "研发与制造一体化，让每个细节都经得起验证。以持续的质量改善，支持标准产品与 OEM/ODM 项目。" : "Integrated engineering and manufacturing, with attention to every detail. Continuous quality improvement supports standard products and OEM/ODM programs."}</p>
          <div className="business-capabilities">
            {[zh ? "电路与结构设计" : "Electrical & mechanical design", zh ? "EMC 与可靠性验证" : "EMC & reliability validation", zh ? "全流程品质控制" : "End-to-end quality control"].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}<span aria-hidden="true">↗</span></div>)}
          </div>
          <Link className="text-link" href={`/${locale}/service`}>{zh ? "了解研发制造" : "Explore our capabilities"}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section product-section">
        <div className="container">
          <div className="section-heading">
            <div><div className="kicker">04 / PRODUCTS</div><h2>{zh ? "精准驱动，自在调光。" : "Power with precision. Dim with ease."}</h2></div>
            <Link className="text-link" href={`/${locale}/products`}>{zh ? "全部产品" : "All products"}<span aria-hidden="true">↗</span></Link>
          </div>
          <div className="product-grid product-grid--two">{products.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}</div>
          <div className="product-families"><span>{zh ? "05 / 产品系列" : "05 / PRODUCT FAMILIES"}</span><div>{categories.map((category, index) => <Link key={category.en} href={`/${locale}/products?category=${category.id}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{zh ? category.zh : category.en}</strong><span aria-hidden="true">↗</span></Link>)}</div></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div className="kicker kicker--light">05 / CONTACT</div>
          <h2>{zh ? <>下一束光，<br />从一次对话开始。</> : <>Your next bright idea<br />starts here.</>}</h2>
          <div><p>{zh ? "与我们聊聊您的产品选型、应用需求或定制项目。" : "Let’s talk about your next product, application or custom project."}</p><Link className="contact-arrow" href={`/${locale}/contact`}>{zh ? "开始沟通" : "Start a conversation"}<span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
