# 🚀 快速入门指南

5 分钟快速搭建你的 Copper Puppetry Wiki！

## ⚡ 一键启动（本地开发）

```bash
# 1. 克隆仓库
git clone https://github.com/yourusername/CopperPuppetry-Wiki.git
cd CopperPuppetry-Wiki

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run docs:dev
```

访问 `http://localhost:5173` 即可看到 Wiki！

## 📦 项目结构速览

```
CopperPuppetry-Wiki/
│
├── 📄 index.md              # 主页
│
├── 📂 gameplay/             # 玩法介绍
│   ├── index.md            # 游戏概述
│   ├── mechanics.md        # 核心机制
│   ├── combat.md           # 战斗系统
│   ├── resources.md        # 资源系统
│   └── upgrade.md          # 升级系统
│
├── 📂 heroes/               # 英雄百科
│   ├── index.md            # 英雄总览
│   ├── arcanist/           # 奥术师
│   │   └── spark.md        # 火花（示例）
│   ├── craftsman/          # 工匠
│   │   └── quickhand.md    # 快手（示例）
│   └── iron_wall/          # 铁壁
│       └── rocky.md        # 洛基（示例）
│
├── 📂 equipment/            # 装备百科
│   ├── index.md            # 装备总览
│   ├── prism.md            # 棱镜（示例）
│   └── wrench.md           # 扳手（示例）
│
├── 📂 structures/           # 建筑百科
│   ├── index.md            # 建筑总览
│   └── gear-arrow-tower.md # 齿轮箭塔（示例）
│
└── 📂 .vitepress/           # 配置
    ├── config.mjs          # 主配置
    └── theme/
        ├── index.js        # 主题入口
        └── custom.css      # 自定义样式
```

## 🎨 主要特性

### 1️⃣ 赛博朋克主题
- 🔥 橙铜色 + 青色配色
- ✨ 霓虹光效和动画
- 🌙 深色主题优化

### 2️⃣ 内容板块
- 🎯 **玩法介绍** - 5个详细页面
- 🤖 **英雄百科** - 25个英雄（已创建3个示例）
- ⚔️ **装备百科** - 10+装备（已创建2个示例）
- 🏗️ **建筑百科** - 10个建筑（已创建1个示例）

### 3️⃣ 强大功能
- 🔍 全文搜索
- 📱 响应式设计
- ⚡ 极速加载
- 📑 自动目录导航

## 📝 常用命令

```bash
# 开发模式（热重载）
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产版本
npm run docs:preview

# 部署到 GitHub Pages
npm run deploy
```

## 🎯 下一步做什么？

### 1. 自定义配置

编辑 `.vitepress/config.mjs`：

```js
export default defineConfig({
  title: "你的 Wiki 名称",           // 修改标题
  description: "你的 Wiki 描述",     // 修改描述
  base: '/你的仓库名/',              // 修改 base 路径
  // ...
})
```

### 2. 添加内容

#### 添加新英雄
```bash
# 创建文件
touch heroes/arcanist/glimmer.md

# 参考 spark.md 的格式编写内容
```

#### 添加新装备
```bash
# 创建文件
touch equipment/compass.md

# 参考 prism.md 的格式编写内容
```

#### 添加新建筑
```bash
# 创建文件  
touch structures/storm-anvil.md

# 参考 gear-arrow-tower.md 的格式编写内容
```

### 3. 更新导航

在 `.vitepress/config.mjs` 的 `sidebar` 部分添加链接：

```js
sidebar: {
  '/heroes/': [
    {
      text: '奥术师',
      items: [
        { text: 'Spark', link: '/heroes/arcanist/spark' },
        { text: 'Glimmer', link: '/heroes/arcanist/glimmer' }, // 新增
      ]
    }
  ]
}
```

### 4. 自定义样式

编辑 `.vitepress/theme/custom.css` 修改颜色、字体等。

### 5. 部署上线

参考 [DEPLOYMENT.md](./DEPLOYMENT.md) 完整部署指南。

## 🎓 学习资源

### 必读文档
- 📖 [README.md](./README.md) - 项目概述
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - 部署指南
- 🤝 [CONTRIBUTING.md](./CONTRIBUTING.md) - 贡献指南

### 外部资源
- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

## 💡 提示和技巧

### 实时预览
开发时保持 `npm run docs:dev` 运行，修改文件后浏览器会自动刷新。

### 快速导航
使用 VitePress 的搜索功能（Ctrl+K 或 Cmd+K）快速查找内容。

### 图片使用
图片放在 `public` 文件夹中：
```markdown
![图片描述](/images/hero-spark.png)
```

### 代码高亮
VitePress 支持代码高亮：
````markdown
```js
console.log('Hello World!');
```
````

### 数学公式
使用 LaTeX 语法：
```markdown
行内公式：$E=mc^2$
块级公式：$$E=mc^2$$
```

## 🐛 常见问题

### Q: 样式不显示？
A: 检查 `base` 配置是否正确，清空浏览器缓存。

### Q: 构建失败？
A: 运行 `npm install` 确保依赖完整，检查 Node.js 版本（需要 18+）。

### Q: 如何添加导航栏？
A: 在 `.vitepress/config.mjs` 的 `nav` 数组中添加。

### Q: 图片不显示？
A: 确保图片在 `public` 文件夹中，使用正确的路径。

## 📞 获取帮助

遇到问题？
1. 查看文档：README.md, DEPLOYMENT.md, CONTRIBUTING.md
2. 搜索 Issues：可能有人遇到过相同问题
3. 提 Issue：详细描述问题并附上截图
4. 查看 VitePress 文档：https://vitepress.dev/

## ✅ 检查清单

部署前确认：
- [ ] 修改了 `base` 配置
- [ ] 更新了 README.md 中的链接
- [ ] 本地测试通过
- [ ] 构建成功
- [ ] 配置了 GitHub Pages

## 🎉 完成！

恭喜！你已经掌握了基础知识，可以开始构建你的 Wiki 了！

---

**⚡ 祝你搭建愉快！⚡**

有任何问题或建议，欢迎提 Issue 或 PR！

