import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Copper Puppetry Wiki",
  description: "铜偶戏游戏百科全书",
  base: '/CopperPuppetry-Wiki/',
  ignoreDeadLinks: true, // 允许死链接，页面可以后续添加
  head: [
    ['link', { rel: 'icon', href: '/CopperPuppetry-Wiki/favicon.ico' }]
  ],
  // appearance: true, // 主题切换功能暂时禁用，样式不太好看
  themeConfig: {
    // logo: '/logo.svg', // 暂时注释，后续添加 logo
    nav: [
      { text: '首页', link: '/' },
      { text: '游戏背景', link: '/lore/background' },
      { text: '设计玩法', link: '/gameplay/' },
      { text: '英雄百科', link: '/heroes/' },
      { text: '装备百科', link: '/equipment/' },
      { text: '建筑百科', link: '/structures/' }
    ],

    sidebar: {
      '/gameplay/': [
        {
          text: '设计玩法',
          items: [
            { text: '游戏概述', link: '/gameplay/' },
            { text: '核心机制', link: '/gameplay/mechanics' },
            { text: '战斗系统', link: '/gameplay/combat' },
            { text: '资源系统', link: '/gameplay/resources' },
            { text: '升级系统', link: '/gameplay/upgrade' }
          ]
        }
      ],
      '/heroes/': [
        {
          text: '英雄百科',
          items: [
            { text: '英雄概览', link: '/heroes/' },
            {
              text: '奥术师 (Arcanist)',
              collapsed: false,
              items: [
                { text: '波普尔 (Bubble)', link: '/heroes/arcanist/bubble' },
                { text: '菲尼 (Glimmer)', link: '/heroes/arcanist/glimmer' },
                { text: '咝咝 (Spark)', link: '/heroes/arcanist/spark' },
                { text: '拉斐尔 (Syrup)', link: '/heroes/arcanist/syrup' },
                { text: '卷卷 (Turner)', link: '/heroes/arcanist/turner' }
              ]
            },
            {
              text: '工匠 (Craftsman)',
              collapsed: false,
              items: [
                { text: '公输 (Artifex)', link: '/heroes/craftsman/artifex' },
                { text: '特斯拉 (Coil)', link: '/heroes/craftsman/coil' },
                { text: '丁格 (Drillbit)', link: '/heroes/craftsman/drillbit' },
                { text: '小卯 (Quickhand)', link: '/heroes/craftsman/quickhand' },
                { text: '波波 (Wrench)', link: '/heroes/craftsman/wrench' }
              ]
            },
            {
              text: '铁壁 (Iron Wall)',
              collapsed: false,
              items: [
                { text: '大贝尔 (Bell)', link: '/heroes/iron_wall/bell' },
                { text: '铿铿 (Chief)', link: '/heroes/iron_wall/chief' },
                { text: '阿磐 (Rocky)', link: '/heroes/iron_wall/rocky' },
                { text: '团团 (Tumble)', link: '/heroes/iron_wall/tumble' },
                { text: '卫斯理 (Wesley)', link: '/heroes/iron_wall/wesley' }
              ]
            },
            {
              text: '机械师 (Mechanic)',
              collapsed: false,
              items: [
                { text: '米洛 (Gyro)', link: '/heroes/mechanic/gyro' },
                { text: '卡琳 (Karin)', link: '/heroes/mechanic/karin' },
                { text: '格洛克 (Pendulum)', link: '/heroes/mechanic/pendulum' },
                { text: '杰克 (Tricky)', link: '/heroes/mechanic/tricky' },
                { text: '溜溜 (Yoyo)', link: '/heroes/mechanic/yoyo' }
              ]
            },
            {
              text: '共鸣者 (Resonator)',
              collapsed: false,
              items: [
                { text: '库克 (Clawster)', link: '/heroes/resonator/clawster' },
                { text: '掘掘 (Diggs)', link: '/heroes/resonator/diggs' },
                { text: '蜜拉 (Hive)', link: '/heroes/resonator/hive' },
                { text: '啾啾 (Melody)', link: '/heroes/resonator/melody' },
                { text: '絮絮 (Murmur)', link: '/heroes/resonator/murmur' }
              ]
            }
          ]
        }
      ],
      '/equipment/': [
        {
          text: '装备百科',
          items: [
            { text: '装备概览', link: '/equipment/' },
            { text: '掘掘的幸运罗盘', link: '/equipment/compass' },
            { text: '哨歌的共鸣笛', link: '/equipment/flute' },
            { text: '钟摆的时之碎片', link: '/equipment/fragment' },
            { text: '万用齿轮口袋', link: '/equipment/gear-pocket' },
            { text: '旋旋的舞会请柬', link: '/equipment/invitation' },
            { text: '锅盖君的绝对防御', link: '/equipment/lid' },
            { text: '毛团的线团堡垒', link: '/equipment/line-fortress' },
            { text: '流光溢彩的棱镜', link: '/equipment/prism' },
            { text: '书页的速记羽毛笔', link: '/equipment/quill-pen' },
            { text: '不稳定的欢乐扳手', link: '/equipment/wrench' }
          ]
        }
      ],
      '/structures/': [
        {
          text: '建筑百科',
          items: [
            { text: '建筑概览', link: '/structures/' },
            { text: '齿轮箭塔', link: '/structures/gear-arrow-tower' },
            { text: '镜光折射塔', link: '/structures/mirror-light-refraction-tower' },
            { text: '风暴铁砧', link: '/structures/storm-anvil' },
            { text: '维修工坊', link: '/structures/repair-workshop' },
            { text: '心源矿钻', link: '/structures/heart-source-mineral-drill' },
            { text: '铆接壁垒', link: '/structures/rivet-barrier' },
            { text: '共鸣警钟', link: '/structures/resonance-alarm-bell' },
            { text: '⚠️ 充能线圈（敌方）', link: '/structures/charging-coil' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MGPIC-2025/CopperPuppetry-Wiki' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Copper Puppetry Team'
    },

    search: false // 禁用搜索功能
  }
})

