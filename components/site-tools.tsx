"use client";
import { useState } from "react";
import type { Locale } from "@/lib/content";

export function SiteTools({ locale }: { locale: Locale }) {
  const [message, setMessage] = useState("");
  const zh = locale === "zh";
  async function share() {
    try {
      if (navigator.share) await navigator.share({ title: document.title, url: location.href });
      else { await navigator.clipboard.writeText(location.href); setMessage(zh ? "链接已复制" : "Link copied"); }
    } catch (error) { if (!(error instanceof DOMException && error.name === "AbortError")) setMessage(zh ? "请复制浏览器地址分享" : "Copy the address from your browser to share"); }
  }
  return <div className="site-tools"><span role="status">{message}</span><button type="button" onClick={share} aria-label={zh ? "分享页面" : "Share page"}>↗</button><a href="tel:+8613590165029" aria-label={zh ? "拨打联系电话" : "Call GreenSo"}>☎</a><a href="#top" aria-label={zh ? "返回顶部" : "Back to top"}>↑</a></div>;
}
