# 部署故障排除指南

## 常见问题及解决方案

### 1. package-lock.json 相关问题

**错误信息：**
```
if [ ! -f "package-lock.json" ]; then
❌ package-lock.json not found!
Error: Process completed with exit code 1.
```

**解决方案：**
1. 确保 [package-lock.json](file://d:\code\python\DesktopPetByAiNew\DesktopPet的文档\DesktopByAi-Document\package-lock.json) 文件存在于项目根目录
2. 检查该文件是否已被提交到 git 仓库
3. 使用我们提供的简化版部署配置文件

**验证步骤：**
```bash
# 检查文件是否存在
ls -la package-lock.json

# 检查 git 状态
git status

# 如果文件未跟踪，添加它
git add package-lock.json
git commit -m "Add package-lock.json"
```

### 2. Node.js 版本问题

**错误信息：**
```
Error: The engine "node" is incompatible with this module
```

**解决方案：**
在 GitHub Actions 配置中指定合适的 Node.js 版本：
```yaml
- name: Setup Node
  uses: actions/setup-node@v3
  with:
    node-version: 18
```

### 3. 依赖安装失败

**错误信息：**
```
npm ERR! Cannot read property 'match' of undefined
```

**解决方案：**
使用 `npm ci` 而不是 `npm install`：
```yaml
- name: Install dependencies
  run: npm ci
```

### 4. 构建路径问题

**错误信息：**
```
Error: ENOENT: no such file or directory
```

**解决方案：**
确保构建输出路径正确：
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v2
  with:
    path: ./docs/.vitepress/dist
```

### 5. 权限问题

**错误信息：**
```
Error: Resource not accessible by integration
```

**解决方案：**
在 GitHub 仓库设置中配置正确的权限：
- Settings → Actions → General → Workflow permissions
- 选择 "Read and write permissions"

## 部署前检查清单

- [ ] [package.json](file://d:\code\python\DesktopPetByAiNew\DesktopPet的文档\DesktopByAi-Document\package.json) 和 [package-lock.json](file://d:\code\python\DesktopPetByAiNew\DesktopPet的文档\DesktopByAi-Document\package-lock.json) 文件存在
- [ ] 所有依赖已正确安装（本地测试 `npm run docs:build`）
- [ ] GitHub Actions 配置文件语法正确
- [ ] GitHub Pages 在仓库设置中已启用
- [ ] 使用的分支是 `main`（或配置中指定的分支）
- [ ] 必要的环境变量已配置

## 本地测试部署

在推送代码前，建议先在本地测试整个流程：

```bash
# 1. 清理之前的构建
rm -rf docs/.vitepress/dist

# 2. 安装依赖
npm ci

# 3. 构建项目
npm run docs:build

# 4. 预览构建结果
npm run docs:preview
```

## 获取帮助

如果问题仍然存在：
1. 查看完整的 GitHub Actions 日志
2. 检查 VitePress 官方文档
3. 在项目 Issues 中提交问题描述