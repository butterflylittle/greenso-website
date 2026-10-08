# GreenSo Corporate Website

GreenSo（绿硕科技）企业官网升级项目，使用 Next.js App Router 和 TypeScript 构建。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000/zh` 或 `http://localhost:3000/en`。

## 构建检查

```bash
pnpm typecheck
pnpm build
```

## 上线前需确认

- 企业法定名称与中英文名称
- 联系人、电话、邮箱和地址
- 产品原图、完整规格书与认证资料
- 正式部署环境和域名切换方案

旧站部分产品资源已经失效，当前产品示意图用于版式和内容结构验证。

## 原官网栏目对照

新版支持公司简介、企业文化、企业架构、服务优势、产品分类与搜索、新闻、相册与证书、下载、留言、订购及联系页面，均提供中英文入口。

- 页面与数据核对记录：`docs/design/greenso-subpages-audit.md`
- 分类与搜索检查：`npm test`
- 启动开发服务后的页面检查：`node scripts/verify-pages.mjs`

在线留言和订购继续使用原官网表单后台。产品订购通过原站 `ordername` 参数传递型号；新版不会显示虚假的提交成功状态。若替换原官网域名部署，需保留这些旧表单路径和后台，或先接入正式接收服务。
