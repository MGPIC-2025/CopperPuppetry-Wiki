# 部署指南

本文档将指导你如何将 Copper Puppetry Wiki 部署到 GitHub Pages。

## 🚀 快速开始

### 前置要求

- Git
- Node.js 18+ 或 20+（推荐）
- GitHub 账号
- GitHub 仓库

## 📝 部署步骤

### 步骤 1：准备仓库

1. **创建 GitHub 仓库**
   - 仓库名：`CopperPuppetry-Wiki`（或你喜欢的名字）
   - 设置为 Public

2. **克隆本地仓库**
   ```bash
   git clone https://github.com/yourusername/CopperPuppetry-Wiki.git
   cd CopperPuppetry-Wiki
   ```

### 步骤 2：修改配置

1. **更新 base 路径**
   
   编辑 `.vitepress/config.mjs`：
   ```js
   export default defineConfig({
     // ...
     base: '/CopperPuppetry-Wiki/',  // 修改为你的仓库名
     // ...
   })
   ```

2. **更新 README.md 中的链接**
   
   将所有 `yourusername` 替换为你的 GitHub 用户名。

### 步骤 3：安装依赖

```bash
npm install
```

### 步骤 4：本地测试

```bash
# 开发模式
npm run docs:dev

# 构建测试
npm run docs:build
npm run docs:preview
```

访问 `http://localhost:5173` 确认一切正常。

### 步骤 5：配置 GitHub Pages

1. 推送代码到 GitHub：
   ```bash
   git add .
   git commit -m "Initial commit: Setup VitePress Wiki"
   git push origin main
   ```

2. 在 GitHub 仓库中设置 Pages：
   - 进入仓库 `Settings`
   - 点击左侧 `Pages`
   - 在 `Source` 下选择 **`GitHub Actions`**

### 步骤 6：自动部署

代码推送后，GitHub Actions 会自动：
1. 安装依赖
2. 构建网站
3. 部署到 GitHub Pages

查看部署状态：
- 进入仓库的 `Actions` 标签页
- 查看 workflow 运行状态

### 步骤 7：访问网站

部署成功后，访问：
```
https://yourusername.github.io/CopperPuppetry-Wiki/
```

## 🔧 高级配置

### 自定义域名

1. **购买域名**（如 `copperpuppetry.com`）

2. **配置 DNS**
   
   添加以下 DNS 记录：
   ```
   Type: CNAME
   Name: www (或 @)
   Value: yourusername.github.io
   ```

3. **在仓库中配置**
   
   创建 `public/CNAME` 文件：
   ```
   www.copperpuppetry.com
   ```

4. **更新 config.mjs**
   ```js
   export default defineConfig({
     base: '/',  // 自定义域名时改为 /
     // ...
   })
   ```

5. **在 GitHub Settings > Pages 中设置自定义域名**

### 环境变量

如果需要使用环境变量，可以在 GitHub 仓库设置：
1. `Settings` > `Secrets and variables` > `Actions`
2. 添加 `Repository secrets`

### 构建优化

在 `.vitepress/config.mjs` 中：

```js
export default defineConfig({
  // ...
  vite: {
    build: {
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          manualChunks: {
            // 手动分割代码块
          }
        }
      }
    }
  }
})
```

## 🐛 常见问题

### 问题 1：404 页面

**症状**：访问网站显示 404

**解决方案**：
1. 确认 `base` 配置正确
2. 检查 GitHub Pages 设置是否选择了 GitHub Actions
3. 查看 Actions 是否成功运行

### 问题 2：样式不加载

**症状**：网站内容显示但没有样式

**解决方案**：
1. 检查 `base` 路径配置
2. 清空浏览器缓存
3. 重新构建并部署

### 问题 3：图片不显示

**症状**：Markdown 中的图片无法加载

**解决方案**：
1. 图片放在 `public` 文件夹中
2. 使用绝对路径：`/CopperPuppetry-Wiki/images/xxx.png`
3. 或使用相对路径：`./images/xxx.png`

### 问题 4：构建失败

**症状**：GitHub Actions 构建失败

**解决方案**：
1. 查看 Actions 日志确定错误
2. 本地运行 `npm run docs:build` 检查
3. 确保 `package.json` 和依赖正确

### 问题 5：部署后内容未更新

**解决方案**：
1. 清空浏览器缓存（Ctrl+Shift+R）
2. 等待 CDN 刷新（可能需要几分钟）
3. 确认代码已推送到 main 分支

## 📊 性能优化

### 1. 图片优化
- 使用 WebP 格式
- 压缩图片大小
- 使用适当的尺寸

### 2. 代码分割
- VitePress 自动进行代码分割
- 可以手动配置 `manualChunks`

### 3. 缓存策略
- GitHub Pages 自动设置缓存头
- 使用版本化的资源名称

### 4. 搜索优化
- VitePress 的本地搜索已经很快
- 对于大型 Wiki 可考虑 Algolia

## 🔄 更新流程

### 日常更新

1. 本地修改内容
2. 测试：`npm run docs:dev`
3. 提交：
   ```bash
   git add .
   git commit -m "更新内容描述"
   git push
   ```
4. 自动部署

### 版本发布

```bash
# 打标签
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## 🛡️ 备份建议

1. **定期备份**
   - Git 本身就是备份
   - 可以额外备份到其他平台

2. **多分支策略**
   ```
   main - 生产环境
   develop - 开发环境
   feature/* - 功能分支
   ```

3. **内容备份**
   - 定期导出 Markdown 文件
   - 备份图片资源

## 📚 相关资源

- [VitePress 官方文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Markdown 语法](https://www.markdownguide.org/)

## 💬 获取帮助

遇到问题？

1. 查看本文档的常见问题部分
2. 查看 [VitePress 文档](https://vitepress.dev/)
3. 在仓库中提 [Issue](https://github.com/yourusername/CopperPuppetry-Wiki/issues)

---

祝你部署顺利！如果有任何问题，欢迎提 Issue。

**⚡ Happy Deploying! ⚡**

