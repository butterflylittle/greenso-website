import type { MetadataRoute } from "next";
import gallery from "@/lib/gallery.json";
import { news } from "@/lib/news";
import { products } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.greenso.com.cn";
  const staticPaths = ["", "/products", "/about", "/contact", "/culture", "/organization", "/service", "/news", "/gallery", "/feedback", "/inquiry", "/downloads", "/site-map"];
  return ["zh", "en"].flatMap((locale) => [
    ...staticPaths.map((path) => ({ url: `${base}/${locale}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...news.map(item => ({ url: `${base}/${locale}/news/${item.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
    ...gallery.map(item => ({ url: `${base}/${locale}/gallery/${item.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
    ...products.map((product) => ({ url: `${base}/${locale}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ]);
}
