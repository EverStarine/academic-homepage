# EverStarine 个人学术主页

个人学术主页的独立源码仓库，首次发布于 2026-10-11。

## 备份内容

`dist/` 包含可直接托管的网站文件：

- 首页、个人介绍、主要研究、教学计划、参与活动、学术发表和工程项目页面。
- 当前的武陵风格布局、样式、标识和背景插画。
- 分析学 3 卷、代数学 5 卷，共 8 份 PDF；在线阅读和下载链接均保留。
- EverStarine 姓名和 GitHub 链接；学术邮箱留空。
- 主导航下划线滑动，发表、教学、活动分类底板带斜切边移动，切换内容轻滑入场；遵循系统减少动态效果偏好。

网站采用静态 HTML、CSS 和 JavaScript，页面之间使用 hash 路由。无需构建、数据库或 ChatGPT 账号即可在其他静态托管平台运行；字体使用 Google Fonts，字体服务不可用时使用本地后备字体。

## 当前用途

本仓库已公开，并通过 GitHub Pages 提供独立于 ChatGPT 订阅的网站访问。

GitHub Pages：<https://everstarine.github.io/academic-homepage/>

原 OpenAI Sites 站点：<https://wuling-academic-study-1011.pretty-grass-6439.chatgpt.site/>。此次发布没有修改该站点。

`main` 分支保留 `dist/` 源码与资源；`gh-pages` 分支将相同文件放在根目录供 Pages 发布，并使用 `.nojekyll` 保持静态文件原样。GitHub 自动发布推送到 `gh-pages` 的更新；只修改 `main` 或本地文件不会更新线上页面。

本仓库不包含 Sites 托管标识、本地工作记录、部署凭据、书籍 TeX 源文件或重复压缩包。

## 预览与恢复

下载或克隆本仓库后，使用任意静态文件服务器，以 `dist/` 为网站根目录即可预览。也可以将 `dist/` 内的全部文件连同原有目录结构上传到静态网站托管服务。

PDF 位于 `dist/assets/pdf/`，卷册信息和下载地址定义在 `dist/books.js`。更新 PDF 时需同步检查该文件中的页数、文件大小和日期。

初始快照源版本：`782b61656abdf1df1afd51c3ef957df676a91842`。

分析学 PDF 最近核对于 2026-10-11，三卷分别为 975、474、395 页。第三卷已更新为当天的 PDF，并移除了旧版提示。
