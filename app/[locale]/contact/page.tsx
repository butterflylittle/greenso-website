import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { contact, isLocale } from "@/lib/content";
export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> { const { locale } = await params; return { title: locale === "zh" ? "联系我们" : "Contact" }; }
export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
 const { locale } = await params; if (!isLocale(locale)) notFound(); const zh = locale === "zh";
 return <><PageIntro locale={locale} eyebrow="CONTACT / LET’S TALK" title={zh ? "让合作，从这里开始。" : "Let’s make the connection."} description={zh ? "产品选型、项目需求或合作咨询，欢迎联系绿硕。" : "Connect with GreenSo for product selection, project requirements and cooperation."} image />
 <section className="section"><div className="container contact-editorial"><div><div className="kicker">GREENSO / SHENZHEN</div><h2 className="editorial-title">{contact.company[locale]}</h2><p>{zh ? contact.address : contact.addressEn}</p><a className="text-link" href={`https://map.baidu.com/search/${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer">{zh ? "在地图中查看" : "View on map"}<span className="circle-arrow">↗</span></a></div>
 <dl className="contact-details"><div><dt>{zh ? "联系人" : "Contact person"}</dt><dd>{contact.person[locale]}</dd></div><div><dt>{zh ? "联系电话" : "Telephone"}</dt><dd><a href="tel:+8675533079977">{contact.phone}</a></dd></div><div><dt>{zh ? "手机" : "Mobile"}</dt><dd><a href="tel:+8613590165029">{contact.mobile}</a></dd></div><div><dt>{zh ? "电子邮箱" : "Email"}</dt><dd><a href={`mailto:${contact.email}`}>{contact.email} ↗</a></dd></div><div><dt>{zh ? "传真" : "Fax"}</dt><dd>{contact.fax}</dd></div></dl></div></section>
 <section className="cta-section"><div className="container cta-card"><div><div className="kicker">GET IN TOUCH</div><h2>{zh ? "留下需求，继续沟通。" : "Tell us what you need."}</h2><p>{zh ? "通过在线留言或产品订购入口，与我们取得联系。" : "Reach us through online feedback or a product inquiry."}</p></div><div className="button-row"><Link className="button button--primary" href={`/${locale}/feedback`}>{zh ? "在线留言" : "Leave a message"} ↗</Link><Link className="button button--ghost" href={`/${locale}/inquiry`}>{zh ? "在线订购" : "Product inquiry"} ↗</Link></div></div></section></>;
}
