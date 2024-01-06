import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "开源青年文案归档站",
  lastUpdated: true,
  description: "文章合为时而著，歌诗合为事而作",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '所有文案',
        items: [
          { text: '中美科技战后，中国如何建设自己的Linux 操作系统？', link: '/script-all' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/izhouliren/kyqn.xyz' }
    ]
  }
})
