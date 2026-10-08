import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/content";
import { SiteShell } from "@/components/site-shell";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d3f32",
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL("https://www.greenso.com.cn"),
    title: {
      default: locale === "zh" ? "绿硕科技 | LED 驱动与调光控制" : "GreenSo Technology | LED Drivers & Dimmers",
      template: "%s | GreenSo Technology",
    },
    description: locale === "zh"
      ? "绿硕科技专注 LED 驱动电源与调光控制，为照明客户提供稳定可靠的产品方案。"
      : "GreenSo develops LED drivers and dimming controls for residential, hospitality and commercial lighting applications.",
    icons: { icon: "/legacy/greenso-logo.png" },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body><SiteShell locale={locale}>{children}</SiteShell></body>
    </html>
  );
}
