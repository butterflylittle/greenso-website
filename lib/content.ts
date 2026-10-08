export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const copy = {
  zh: {
    nav: { home: "首页", products: "产品中心", capabilities: "服务优势", about: "公司简介", contact: "联系我们", news: "新闻中心", gallery: "公司相册", feedback: "在线留言" },
    footer: {
      note: "专注 LED 驱动与调光控制，为全球照明客户提供稳定、合规的产品方案。",
      address: "深圳市龙华新区观澜镇大富工业区鹏龙蟠高科技园A栋",
      rights: "绿硕科技。保留所有权利。",
    },
  },
  en: {
    nav: { home: "Home", products: "Products", capabilities: "Our service", about: "Company", contact: "Contact", news: "News", gallery: "Gallery", feedback: "Feedback" },
    footer: {
      note: "LED drivers and dimming controls engineered for dependable lighting applications worldwide.",
      address: "Building A, Penglongpan Hi-tech Park, Dafu Industrial Zone, Guanlan, Longhua, Shenzhen, China",
      rights: "GreenSo Technology. All rights reserved.",
    },
  },
} as const;

export type Product = {
  slug: string;
  kind: "dimmer" | "driver";
  categoryId: string;
  subcategoryId: string;
  model: string;
  category: { zh: string; en: string };
  name: { zh: string; en: string };
  summary: { zh: string; en: string };
  specs: Array<{ label: { zh: string; en: string }; value: string }>;
};

export const products: Product[] = [
  {
    slug: "gs-s2-b1011",
    kind: "dimmer",
    categoryId: "dimmers",
    subcategoryId: "triac",
    model: "GS-S2-B1011",
    category: { zh: "美规调光器", en: "US Standard Dimmer" },
    name: { zh: "前沿切相可控硅调光器", en: "Leading-edge TRIAC Dimmer" },
    summary: {
      zh: "适用于 LED、CFL 与白炽灯负载的 120V 调光控制，支持单控与三路安装。",
      en: "120V dimming control for LED, CFL and incandescent loads with single-pole and 3-way compatibility.",
    },
    specs: [
      { label: { zh: "输入电压", en: "Input voltage" }, value: "120VAC" },
      { label: { zh: "输入频率", en: "Input frequency" }, value: "50/60Hz" },
      { label: { zh: "输出电压", en: "Output voltage" }, value: "120VAC / Phase-cut modulation" },
      { label: { zh: "输出通道", en: "Configuration" }, value: "Single-Pole / 3-Way" },
      { label: { zh: "最大输出电流（典型值）", en: "Max. output current (typical)" }, value: "≤ 5A" },
      { label: { zh: "LED / CFL 最大负载", en: "Max. LED / CFL load" }, value: "300W @ 120VAC" },
      { label: { zh: "白炽灯最大负载", en: "Max. incandescent load" }, value: "600W @ 120VAC" },
      { label: { zh: "最小负载功率", en: "Minimum load" }, value: "≥ 3W" },
    ],
  },
  {
    slug: "gs-s2-z1011",
    kind: "dimmer",
    categoryId: "dimmers",
    subcategoryId: "triac",
    model: "GS-S2-Z1011",
    category: { zh: "美规调光器", en: "US Standard Dimmer" },
    name: { zh: "滑动式可控硅调光器", en: "Leading-edge TRIAC Slider Dimmer" },
    summary: {
      zh: "面向北美住宅、酒店与商业空间的墙壁式调光控制方案。",
      en: "A wall-mounted dimming solution for residential, hospitality and commercial projects in North America.",
    },
    specs: [
      { label: { zh: "输入电压", en: "Input voltage" }, value: "120VAC" },
      { label: { zh: "输入频率", en: "Input frequency" }, value: "50/60Hz" },
      { label: { zh: "输出电压", en: "Output voltage" }, value: "120VAC / Phase-cut modulation" },
      { label: { zh: "输出通道", en: "Configuration" }, value: "Single-Pole / 3-Way" },
      { label: { zh: "最大输出电流（典型值）", en: "Max. output current (typical)" }, value: "≤ 5A" },
      { label: { zh: "LED / CFL 最大负载", en: "Max. LED / CFL load" }, value: "300W @ 120VAC" },
      { label: { zh: "白炽灯最大负载", en: "Max. incandescent load" }, value: "600W @ 120VAC" },
      { label: { zh: "最小负载功率", en: "Minimum load" }, value: "≥ 3W" },
    ],
  },
];

export const categories = [
  { id: "dimmers", kind: "dimmer" as const, zh: "美规调光器", en: "US Standard Dimmers", noteZh: "120V 前沿切相调光，支持单控与三路安装。", noteEn: "120V leading-edge dimming with single-pole and 3-way installation.", children: [{ id: "triac", zh: "可控硅调光器", en: "TRIAC dimmers" }] },
  { id: "linear", kind: "driver" as const, zh: "美规线条灯电源系列", en: "Linear LED Drivers", noteZh: "面向线性照明的隔离与非隔离电源系列。", noteEn: "Isolated and non-isolated power supplies for linear lighting.", children: [{ id: "linear-non-isolated", zh: "美规非隔离线条灯电源", en: "Non-isolated linear drivers" }, { id: "linear-isolated", zh: "美规隔离线条灯电源", en: "Isolated linear drivers" }] },
  { id: "built-in", kind: "driver" as const, zh: "内置电源", en: "Built-in Drivers", noteZh: "用于灯具集成的隔离与非隔离驱动电源。", noteEn: "Isolated and non-isolated drivers for luminaire integration.", children: [{ id: "built-in-non-isolated", zh: "非隔离内置电源", en: "Non-isolated built-in drivers" }, { id: "built-in-isolated", zh: "隔离内置电源", en: "Isolated built-in drivers" }] },
  { id: "flicker-free", kind: "driver" as const, zh: "室内无频闪电源", en: "Flicker-free Drivers", noteZh: "全电压与单电压系列，服务室内照明应用。", noteEn: "Full-voltage and single-voltage series for indoor lighting.", children: [{ id: "flicker-full", zh: "全电压系列", en: "Full-voltage series" }, { id: "flicker-single", zh: "单电压系列", en: "Single-voltage series" }] },
  { id: "panel", kind: "driver" as const, zh: "室内常规面板灯电源", en: "Panel Light Drivers", noteZh: "适配面板灯的全电压与单电压驱动系列。", noteEn: "Full-voltage and single-voltage power supplies for panel lights.", children: [{ id: "panel-full", zh: "全电压系列", en: "Full-voltage series" }, { id: "panel-single", zh: "单电压系列", en: "Single-voltage series" }] },
];

export const contact = {
  company: { zh: "深圳市绿硕科技有限公司", en: "Shenzhen GreenSuccess Technology Co., Ltd." },
  person: { zh: "艾亚南", en: "Ya Nan Ai (Alan)" },
  phone: "+86 755 3307 9977", mobile: "+86 135 9016 5029", fax: "+86 755 3358 0890", email: "349920663@qq.com",
  address: copy.zh.footer.address,
  addressEn: copy.en.footer.address,
};

export const companyPages = [
  { slug: "about", zh: "公司简介", en: "Company profile" },
  { slug: "culture", zh: "企业文化", en: "Our culture" },
  { slug: "organization", zh: "企业架构", en: "Organization" },
  { slug: "service", zh: "服务优势", en: "Our service" },
];

export function localized<T extends { zh: string; en: string }>(value: T, locale: Locale) {
  return value[locale];
}
