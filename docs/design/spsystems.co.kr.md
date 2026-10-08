# SP Systems 视觉参考与 GreenSo 应用

来源：https://spsystems.co.kr/kr/index.php
检查日期：2026-09-29。检查了真实浏览器首屏截图、页面结构和部分 DOM 计算样式；未复制参考站素材。

## Design Map

参考站：满屏影像首屏、白色叠加文字、透明导航、半透明业务入口、圆形箭头，以及首屏之后的大幅浅灰英文标语。观察视口约 1065px；DOM 中页头为 80px，章节标签约 18.39px、颜色 #0092e2，产品标题约 20.23px，字体族 Poppins / S-CoreDream / Noto Sans KR。这些数值仅对应观察到的响应式状态。

GreenSo 应用值：
- 内容宽度：最大 1320px，桌面左右边距 56px；手机 20px。
- 首屏：至少 760px / 100svh，图片覆盖；桌面标题 48–84px，手机 37px。
- 品牌：#216345 主绿、#173a2d 制造板块、#b2d49d 深底强调、#17221d 正文。
- 留白：常规章节上下 120px，移动端 80px。
- 构图：企业介绍 1:3，制造板块 1:1，产品双列，移动端单列。
- 交互：边框渐变、箭头轻移、一次入场动画；遵从减少动态效果设置。
- 导航：桌面全导航，800px 以下原生 details 折叠菜单，语言入口始终可见。

## Taste DNA

1. **用场景建立第一印象**：照明控制的价值在于空间体验，因此让建筑灯光占满首屏，产品目录退到后续章节。依据是参考站的大幅工业背景与短标题叠加。
2. **让章节承担信息层级**：企业介绍、制造、产品、联系各占独立大区块，减少嵌套卡片；用字重、留白、背景变化区分内容。
3. **保持制造品牌的克制**：采用绿硕绿色、细线和近直角边界；不复用 SP Systems 蓝色、商标、机器人影像或业务文案。
4. **把动效限制在辅助阅读的范围**：首屏只做一次轻微入场，没有自动轮播或滚动劫持；产品与联系入口始终可直接访问。

## 首屏图像

文件：`public/images/lighting-architecture.png`。通过内置 imagegen 生成，属于建筑照明概念场景，不代表实际客户项目或厂房。

生成提示：Create a photorealistic architectural lighting photograph for a premium LED driver and dimming-control manufacturer's website hero. Wide cinematic 16:9 landscape, 1920x1080 or larger. Interior of a vast contemporary concrete art museum at blue hour, monumental rectilinear geometry, repeated vertical bronze fins on the right, precise warm-white recessed linear LED lighting along ceiling edges and floor wall seams, serene empty space, subtle polished stone floor reflections, cool charcoal and desaturated deep green shadows contrasted with warm light. Strong depth and perspective with an illuminated corridor extending toward the right. LEFT HALF is dark spacious concrete negative space with few details, suitable for large white headline overlay. Right half features the striking illuminated architectural elements. Editorial architecture photography, believable real materials, understated luxury, no people, no text, no logo, no watermark. This is a conceptual lighting application scene, not a photograph of any actual factory or client project.
