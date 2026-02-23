import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/DesktopByAi-Document/',
  title: "DesktopPetByAi",
  description: "DesktopPetByAi Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始', link: '/comeFrom' },
      { text: '部署', link: '/deployment' }
    ],

    sidebar: [
      {
        text: 'DesktopPetByAi使用&开发',
        items: [
          { text: 'DesktopPetByAi', link: '/comeFrom' },
          { text: 'DesktopPetByAi使用', link: '/start' },
          { text:'探索更多功能',link:'/more'},
          { text: 'DesktopPetByAi开发', link: '/develop' },
          { text: '部署指南', link: '/deployment' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cjz-wr/DesktopPetByAi' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 DesktopPetByAi'
    },

    editLink: {
      pattern: 'https://github.com/cjz-wr/DesktopPetByAi/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  lastUpdated: true,
  cleanUrls: true
})