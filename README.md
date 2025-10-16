# Copper Puppetry Wiki

> 铜傀奇谭 - 游戏百科全书

🎮 这是 Copper Puppetry 游戏的官方 Wiki 站点，使用 VitePress 构建，采用赛博朋克风格设计。

## 🌐 在线访问

访问 Wiki：[https://yourusername.github.io/CopperPuppetry-Wiki/](https://yourusername.github.io/CopperPuppetry-Wiki/)

## 📚 内容板块

- **🎯 设计玩法**：游戏核心机制、战斗系统、资源管理
- **🤖 英雄百科**：25+ 铜傀英雄详解，技能和搭配攻略
- **⚔️ 装备百科**：装备属性、强化建议、搭配推荐
- **🏗️ 建筑百科**：建筑功能、布局策略、升级技巧

## 🚀 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

然后访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run docs:build
```

### 预览生产版本

```bash
npm run docs:preview
```

## 📦 技术栈

- **框架**：[VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- **部署**：GitHub Pages
- **风格**：赛博朋克 + 蒸汽朋克混合主题

## 🎨 主题特色

- 🔥 橙铜色主色调，致敬蒸汽朋克美学
- ✨ 赛博朋克风格的霓虹效果和动画
- 🌙 深色主题优化
- 📱 响应式设计，完美支持移动端
- 🔍 内置全文搜索功能

## 📂 项目结构

```
CopperPuppetry-Wiki/
├── .vitepress/
│   ├── config.mjs          # VitePress 配置
│   └── theme/
│       ├── index.js        # 主题入口
│       └── custom.css      # 自定义样式
├── index.md                # 首页
├── gameplay/               # 玩法介绍
├── heroes/                 # 英雄百科
├── equipment/              # 装备百科
├── structures/             # 建筑百科
└── package.json
```

## 🔧 配置说明

### 修改站点信息

编辑 `.vitepress/config.mjs`：

```js
export default defineConfig({
  title: "Copper Puppetry Wiki",  // 站点标题
  description: "铜傀奇谭游戏百科全书",  // 站点描述
  base: '/CopperPuppetry-Wiki/',  // 修改为你的仓库名
  // ...
})
```

### 修改导航栏

在 `config.mjs` 中的 `themeConfig.nav` 部分：

```js
nav: [
  { text: '首页', link: '/' },
  { text: '设计玩法', link: '/gameplay/' },
  // 添加更多导航项...
]
```

### 自定义样式

编辑 `.vitepress/theme/custom.css` 来修改主题颜色和样式。

## 🚀 部署到 GitHub Pages

### 方法一：自动部署（推荐）

1. 确保 `.github/workflows/deploy.yml` 文件存在
2. 在 GitHub 仓库设置中：
   - 进入 `Settings` > `Pages`
   - Source 选择 `GitHub Actions`
3. 推送代码到 `main` 分支，自动触发部署

### 方法二：手动部署

```bash
npm run deploy
```

## 📝 贡献指南

欢迎贡献内容和改进！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 添加新内容

- **新英雄**：在 `heroes/[职业]/[英雄名].md` 创建文件
- **新装备**：在 `equipment/[装备名].md` 创建文件
- **新建筑**：在 `structures/[建筑名].md` 创建文件

记得在 `.vitepress/config.mjs` 的 sidebar 中添加链接。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🎮 关于游戏

Copper Puppetry（铜傀奇谭）是一款融合塔防与卡牌策略的蒸汽朋克题材游戏。在齿轮与蒸汽驱动的奇幻世界中，召唤并指挥你的铜傀军团，抵御未知的敌人入侵！

## 📧 联系方式

- **游戏官网**：[待添加]
- **Discord 社区**：[待添加]
- **问题反馈**：[GitHub Issues](https://github.com/yourusername/CopperPuppetry-Wiki/issues)

---

<div align="center">

**⚡ 铸造传奇，守护世界 ⚡**

由 ❤️ 和 ⚙️ 驱动

</div>

