# 部署指南

本文档介绍了如何将 DesktopByAi-Document 部署到不同平台。

## GitHub Pages 部署

### 自动部署（推荐）

项目已配置 GitHub Actions，每次推送到 `main` 分支时会自动部署。

#### 配置步骤：

1. 在 GitHub 仓库中启用 Pages：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"

2. 确保 `.github/workflows/deploy.yml` 文件存在且配置正确

3. 推送代码到 `main` 分支即可自动部署

### 手动部署

如果需要手动部署：

```bash
# 构建静态文件
npm run docs:build

# 部署到 GitHub Pages（需要 gh-pages 工具）
npx gh-pages -d docs/.vitepress/dist
```

## 其他部署选项

### Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 导入您的 GitHub 仓库
3. 配置构建设置：
   - Build Command: `npm run docs:build`
   - Output Directory: `docs/.vitepress/dist`
4. 点击部署

### Netlify 部署

1. 访问 [Netlify](https://netlify.com)
2. 选择 "Import from Git"
3. 配置构建设置：
   - Build command: `npm run docs:build`
   - Publish directory: `docs/.vitepress/dist`
4. 部署站点

## 本地预览生产构建

```bash
# 构建项目
npm run docs:build

# 预览生产版本
npm run docs:preview
```

## 环境变量配置

如需配置环境变量，在 `.env` 文件中添加：

```bash
# 自定义站点配置
VITE_SITE_URL=https://your-domain.com
VITE_GA_ID=GA-XXXXXXXXX-X  # Google Analytics ID
```

## 故障排除

### 构建失败
- 检查 Node.js 版本（建议 >= 16）
- 确认所有依赖已正确安装
- 查看 GitHub Actions 日志获取详细错误信息

### 部署后页面空白
- 检查 `base` 配置是否正确
- 确认路由配置无误
- 验证静态资源路径

### 自定义域名
在仓库根目录创建 `CNAME` 文件：
```
your-custom-domain.com
```