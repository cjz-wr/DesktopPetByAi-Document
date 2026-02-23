# DesktopByAi-Document

DesktopPetByAi 项目的官方文档系统，基于 VitePress 构建。

## 📚 项目简介

这是一个为 DesktopPetByAi 桌面AI宠物项目提供的完整文档解决方案。文档涵盖了从入门使用到深度开发的各个方面。

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或者
yarn install
# 或者
pnpm install
```

### 本地开发

```bash
npm run docs:dev
```

启动后访问 http://localhost:5173 查看文档。

### 构建静态站点

```bash
npm run docs:build
```

构建后的静态文件位于 `docs/.vitepress/dist` 目录。

### 预览生产构建

```bash
npm run docs:preview
```

## ☁️ 部署

### GitHub Pages（推荐）

项目已配置自动部署到 GitHub Pages：

1. 在 GitHub 仓库 Settings → Pages 中启用 GitHub Actions 作为源
2. 推送代码到 `main` 分支
3. 访问 `https://[username].github.io/DesktopByAi-Document/`

### 其他平台

- **Vercel**: 直接导入仓库，自动检测配置
- **Netlify**: 导入仓库，设置构建命令为 `npm run docs:build`

详细部署指南请查看 [部署文档](./docs/deployment.md)。

## 📖 文档结构

```
docs/
├── .vitepress/          # VitePress 配置
│   └── config.mts       # 主配置文件
├── index.md             # 首页
├── comeFrom.md          # 项目介绍
├── start.md             # 快速开始指南
├── more.md              # 进阶功能
├── develop.md           # 开发指南
├── deployment.md        # 部署指南
├── api-examples.md      # API 示例
└── markdown-examples.md # Markdown 示例
```

## 🔧 技术栈

- [VitePress](https://vitepress.dev/) - 现代化的静态站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Markdown](https://markdown.com.cn/) - 轻量级标记语言

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进文档！

## 📄 许可证

MIT License