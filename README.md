# Copper Puppetry Wiki

铜偶戏游戏百科全书

这是 Copper Puppetry（铜偶戏）游戏的官方 Wiki 站点，使用 VitePress 构建，采用赛博朋克风格设计。

## 在线访问

访问地址：[https://mgpic-2025.github.io/CopperPuppetry-Wiki/](https://mgpic-2025.github.io/CopperPuppetry-Wiki/)

## 内容板块

这个 Wiki 包含了游戏的完整资料：

- **设计玩法** - 游戏核心机制、战斗系统、资源管理
- **英雄百科** - 25+ 个铜偶英雄的详细介绍，包括技能和搭配攻略
- **装备百科** - 装备属性、强化建议、搭配推荐
- **建筑百科** - 建筑功能、布局策略、升级技巧

## 本地开发

如果你想在本地运行和编辑这个 Wiki，按照下面的步骤操作。

### 安装依赖

首先安装项目需要的依赖包：

```bash
npm install
```

### 启动开发服务器

运行开发服务器，支持热重载：

```bash
npm run docs:dev
```

启动后访问 `http://localhost:5173` 就能看到网站了。

### 构建生产版本

如果要构建用于部署的生产版本：

```bash
npm run docs:build
```

构建后的文件会在 `.vitepress/dist` 目录中。

### 预览生产版本

构建完成后可以本地预览：

```bash
npm run docs:preview
```

## 技术栈

- **框架**：[VitePress](https://vitepress.dev/) - 基于 Vite 和 Vue 的静态站点生成器
- **部署**：GitHub Pages

## 主题特色

我们设计了一个独特的主题来配合游戏的蒸汽朋克风格：

- 霓虹光效和流畅的动画效果
- 深色主题优化，看起来更有质感
- 完美支持移动端浏览

## 项目结构

```
CopperPuppetry-Wiki/
├── .vitepress/
│   ├── config.mjs          # VitePress 配置文件
│   └── theme/
│       ├── index.js        # 主题入口
│       └── custom.css      # 自定义样式
├── index.md                # 网站首页
├── gameplay/               # 玩法介绍相关页面
├── heroes/                 # 英雄百科相关页面
├── equipment/              # 装备百科相关页面
├── structures/             # 建筑百科相关页面
└── package.json            # 项目依赖配置
```

## 如何修改配置

### 修改站点基本信息

编辑 `.vitepress/config.mjs` 文件：

```js
export default defineConfig({
  title: "Copper Puppetry Wiki",           // 网站标题
  description: "铜偶戏游戏百科全书",        // 网站描述
  base: '/CopperPuppetry-Wiki/',          // 仓库名称（部署路径）
  // ...
})
```

### 修改导航栏

在 `config.mjs` 中找到 `themeConfig.nav` 部分：

```js
nav: [
  { text: '首页', link: '/' },
  { text: '设计玩法', link: '/gameplay/' },
  // 可以在这里添加更多导航项
]
```

### 自定义样式

如果你想调整网站的颜色、字体等样式，编辑 `.vitepress/theme/custom.css` 文件。

## 部署到 GitHub Pages

本项目使用 **GitHub Actions** 自动部署，无需手动构建和推送。

### 添加新内容

如果你想添加新的页面：

- **添加新英雄**：在 `heroes/[职业名]/[英雄名].md` 创建文件，参考已有的英雄页面格式
- **添加新装备**：在 `equipment/[装备名].md` 创建文件
- **添加新建筑**：在 `structures/[建筑名].md` 创建文件

别忘了在 `.vitepress/config.mjs` 的 sidebar 中添加对应的链接，这样新页面才能在侧边栏中显示。

## 许可证

本项目采用 MIT 许可证。详细内容请查看 LICENSE 文件。

## 关于游戏

Copper Puppetry（铜偶戏）是一款融合了塔防和卡牌策略的游戏。

### 游戏背景

在齿轮与蒸汽交织的世界中，曾经辉煌的**铜曜王朝**在神秘的"大休眠"事件中陷入沉睡。王朝的科技遗产——拥有灵性的铜偶们——散落各地，等待被唤醒。

你将扮演能够唤醒铜偶的指挥者，召唤这些带着往日记忆的机械生命，探索大休眠的真相，重铸铜曜王朝的辉煌。

### 游戏特色

- **塔防 × 卡牌融合**：使用精炼铜锭召唤铜偶英雄，在战场上布局和战斗
- **五大职业体系**：奥术师、工匠、铁壁、机械师、共鸣者
- **25+ 铜偶英雄**：每个英雄都有独特的技能和背景故事
- **建筑系统**：重建铜曜王朝的古老建筑，构筑防线
- **蒸汽朋克风格**：齿轮、铜器、蒸汽与魔法的奇妙融合

---

**唤醒沉睡，重铸辉煌**

在大休眠的废墟上，唤醒你的铜偶伙伴
