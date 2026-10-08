export const newsCategories = [
  { id: "all", zh: "全部资讯", en: "All news" },
  { id: "company", zh: "公司新闻", en: "Company news" },
  { id: "department", zh: "部门新闻", en: "Department news" },
  { id: "industry", zh: "行业新闻", en: "Industry news" },
  { id: "technology", zh: "科技创新", en: "Technology" },
];

// The legacy site's Chinese and English articles differ; retain each locale's subject.
export const news = [
  {
    slug: "new-69-188", date: "2017-05-03", category: "general",
    title: { zh: "OLED市场大门已打开 企业应该如何入局？", en: "Special events in March" },
    paragraphs: {
      zh: ["2017 年国际新型显示技术展聚焦 OLED 的柔性、触控与曲面显示能力。文章讨论其在高端手机、可穿戴设备和车载电子领域的应用机会。", "面向车载市场，稳定性与技术要求更高。文章认为，参与企业需要同时关注产能、良品率、下游应用和产品质量，以把握市场发展机会。"],
      en: ["This archived announcement describes FRIWO’s participation in two German industry events during March 2017: Medical Device Meetings in Stuttgart and the Battery Experts Forum in Aschaffenburg.", "The events brought together medical-technology suppliers, engineers and battery specialists for business meetings, exhibitions and technical discussions."],
    },
  },
  {
    slug: "new-39-130", date: "2017-05-03", category: "company",
    title: { zh: "【G20公报】新常态、新空间、新挑战，LED产业进入深度整合周期", en: "MEDTEC Europe: Meeting point of the European medical industry" },
    paragraphs: {
      zh: ["该文回顾 2017 年 1 月在深圳举行的 G20 LED 照明峰会 CEO 会议，讨论产业整合、原材料成本、细分应用与制造升级。", "会议关注从通用照明走向差异化灯具与智能化产品的转型。电源企业的发展方向包括集成化、数字化控制，以及与上下游协作提升效率、品质和成本竞争力。", "文章也讨论了自动化生产、海外市场开拓与企业持续盈利能力。这些内容反映的是文章发布时的行业判断。"],
      en: ["The original article covers MEDTEC Europe, held in Stuttgart on 4–6 April 2017, and FRIWO’s participation in its exhibition and technical program.", "It describes the FIT-one demonstrator, combining a power supply, contactless charging, battery management and data communication in a mobile monitor system. The example illustrates potential medical applications for inductive energy transfer."],
    },
  },
  {
    slug: "new-4-342", date: "2017-03-09", category: "general",
    title: { zh: "2017年LED行情整体向上，产业链供求前紧后松", en: "Minimum shelf-life for storing electronic devices" },
    paragraphs: {
      zh: ["文章记录 2017 年高工 LED 春茗会上对产业走势的讨论：当时芯片与驱动 IC 供应偏紧，原材料上涨给电源和封装企业带来成本压力。", "与会企业认为，随着新增产能释放，供应可能改善。品质、研发效率、供应链管理与制造自动化，被视为企业应对竞争的重要能力。"],
      en: ["This technical archive examines how aluminum electrolytic capacitors affect the storage life of electronic devices. Temperature, humidity, seal condition and electrolyte composition influence behavior during long periods without power.", "The article also discusses changes to capacitor oxide films and the importance of following component manufacturers’ handling and reconditioning instructions. Storage guidance must be checked against the specific device and its current documentation."],
    },
  },
  {
    slug: "the-oil-price", date: "2016-01-09", category: "industry",
    title: { zh: "迎来生存大挑战 探寻LED电源行业未来的增长点", en: "IST patent targets efficient LED and OLED driver control" },
    paragraphs: {
      zh: ["文章讨论 LED 电源行业在价格竞争下的发展空间，重点包括智能照明控制、驱动方案集成与上下游协作。", "随着调光调色和智能家居需求增长，电源企业需要关注控制系统与通信接口的协同。产品小型化、成本优化以及更高集成度，也被认为是技术演进的重要方向。"],
      en: ["The original report describes a UK patent awarded to Integrated System Technologies for controlling LED and OLED power supplies. Its dynamic-headroom approach adjusts supply voltage to the connected lighting load.", "The report explains the intended benefits for driver efficiency, current regulation, dimming and output ripple. It also discusses the application of the technology within IST’s iDrive range."],
    },
  },
];
