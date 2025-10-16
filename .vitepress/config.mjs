import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Copper Puppetry Wiki",
  description: "铜傀奇谭游戏百科全书",
  base: '/CopperPuppetry-Wiki/',
  ignoreDeadLinks: true, // 允许死链接，页面可以后续添加
  head: [
    // ['link', { rel: 'icon', href: '/CopperPuppetry-Wiki/favicon.ico' }] // 暂时注释，后续添加 favicon
  ],
  themeConfig: {
    // logo: '/logo.svg', // 暂时注释，后续添加 logo
    nav: [
      { text: '首页', link: '/' },
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
                { text: 'Bubble - 泡泡', link: '/heroes/arcanist/bubble' },
                { text: 'Glimmer - 微光', link: '/heroes/arcanist/glimmer' },
                { text: 'Spark - 火花', link: '/heroes/arcanist/spark' },
                { text: 'Syrup - 糖浆', link: '/heroes/arcanist/syrup' },
                { text: 'Turner - 特纳', link: '/heroes/arcanist/turner' }
              ]
            },
            {
              text: '工匠 (Craftsman)',
              collapsed: false,
              items: [
                { text: 'Artifex - 工匠', link: '/heroes/craftsman/artifex' },
                { text: 'Coil - 线圈', link: '/heroes/craftsman/coil' },
                { text: 'Drillbit - 钻头', link: '/heroes/craftsman/drillbit' },
                { text: 'Quickhand - 快手', link: '/heroes/craftsman/quickhand' },
                { text: 'Wrench - 扳手', link: '/heroes/craftsman/wrench' }
              ]
            },
            {
              text: '铁壁 (Iron Wall)',
              collapsed: false,
              items: [
                { text: 'Bell - 钟铃', link: '/heroes/iron_wall/bell' },
                { text: 'Chief - 酋长', link: '/heroes/iron_wall/chief' },
                { text: 'Rocky - 洛基', link: '/heroes/iron_wall/rocky' },
                { text: 'Tumble - 翻滚', link: '/heroes/iron_wall/tumble' },
                { text: 'Wesley - 韦斯利', link: '/heroes/iron_wall/wesley' }
              ]
            },
            {
              text: '机械师 (Mechanic)',
              collapsed: false,
              items: [
                { text: 'Gyro - 陀螺', link: '/heroes/mechanic/gyro' },
                { text: 'Karin - 卡琳', link: '/heroes/mechanic/karin' },
                { text: 'Pendulum - 钟摆', link: '/heroes/mechanic/pendulum' },
                { text: 'Tricky - 诡计', link: '/heroes/mechanic/tricky' },
                { text: 'Yoyo - 溜溜球', link: '/heroes/mechanic/yoyo' }
              ]
            },
            {
              text: '共鸣者 (Resonator)',
              collapsed: false,
              items: [
                { text: 'Clawster - 爪蟹', link: '/heroes/resonator/clawster' },
                { text: 'Diggs - 迪格斯', link: '/heroes/resonator/diggs' },
                { text: 'Hive - 蜂巢', link: '/heroes/resonator/hive' },
                { text: 'Melody - 旋律', link: '/heroes/resonator/melody' },
                { text: 'Murmur - 低语', link: '/heroes/resonator/murmur' }
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
            { text: '指南针 (Compass)', link: '/equipment/compass' },
            { text: '长笛 (Flute)', link: '/equipment/flute' },
            { text: '碎片 (Fragment)', link: '/equipment/fragment' },
            { text: '齿轮口袋 (Gear Pocket)', link: '/equipment/gear-pocket' },
            { text: '邀请函 (Invitation)', link: '/equipment/invitation' },
            { text: '盖子 (Lid)', link: '/equipment/lid' },
            { text: '线型要塞 (Line Fortress)', link: '/equipment/line-fortress' },
            { text: '棱镜 (Prism)', link: '/equipment/prism' },
            { text: '鹅毛笔 (Quill Pen)', link: '/equipment/quill-pen' },
            { text: '扳手 (Wrench)', link: '/equipment/wrench' }
          ]
        }
      ],
      '/structures/': [
        {
          text: '建筑百科',
          items: [
            { text: '建筑概览', link: '/structures/' },
            { text: '自动装填炮 (Automatic Loading Gun)', link: '/structures/automatic-loading-gun' },
            { text: '充能线圈 (Charging Coil)', link: '/structures/charging-coil' },
            { text: '齿轮箭塔 (Gear Arrow Tower)', link: '/structures/gear-arrow-tower' },
            { text: '心源矿钻 (Heart Source Mineral Drill)', link: '/structures/heart-source-mineral-drill' },
            { text: '镜光折射塔 (Mirror Light Refraction Tower)', link: '/structures/mirror-light-refraction-tower' },
            { text: '维修车间 (Repair Workshop)', link: '/structures/repair-workshop' },
            { text: '共振警铃 (Resonance Alarm Bell)', link: '/structures/resonance-alarm-bell' },
            { text: '铆钉屏障 (Rivet Barrier)', link: '/structures/rivet-barrier' },
            { text: '蒸汽矿车 (Steam Mining Car)', link: '/structures/steam-mining-car' },
            { text: '风暴铁砧 (Storm Anvil)', link: '/structures/storm-anvil' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/CopperPuppetry-Wiki' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Copper Puppetry Team'
    },

    search: {
      provider: 'local'
    }
  }
})

