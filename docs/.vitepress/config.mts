import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/DesktopPetByAi-Document/',
  title: "DesktopPetByAi",
  description: "DesktopPetByAi Documentation",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/cjz-wr/DesktopPetByAi-Document/edit/main/docs/:path',
      // 可选：自定义链接显示的文本，默认是 "Edit this page"
      text: '在 GitHub 上编辑此页'
    },

    
    
    lastUpdatedText: '最后更新时间',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '开始', link: '/comeFrom' }
    ],

    sidebar: [
      {
        text: 'DesktopPetByAi使用&开发',
        items: [
          { text: '关于DesktopPetByAi', link: '/comeFrom' },
          { text: 'DesktopPetByAi的配置文件', link: '/other' },
          { text: 'DesktopPetByAi使用', link: '/start' },
          { text:'探索更多功能',link:'/more'},
          { text: 'DesktopPetByAi开发', link: '/develop' },
          { text: 'skill开发', link: '/skills' },
          { text: 'py脚本(插件)开发', link: '/py' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cjz-wr/DesktopPetByAi' }
    ]
  },
})