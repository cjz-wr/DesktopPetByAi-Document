import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/DesktopPetByAi-Document/',
  title: "DesktopPetByAi",
  description: "DesktopPetByAi Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始', link: '/comeFrom' }
    ],

    sidebar: [
      {
        text: 'DesktopPetByAi使用&开发',
        items: [
          { text: 'DesktopPetByAi', link: '/comeFrom' },
          { text: 'DesktopPetByAi使用', link: '/start' },
          { text:'探索更多功能',link:'/more'},
          { text: 'DesktopPetByAi开发', link: '/develop' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cjz-wr/DesktopPetByAi' }
    ]
  },
})