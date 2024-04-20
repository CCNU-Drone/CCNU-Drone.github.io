import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CCNU-Drone",
  description: "华中师范大学无人机协会",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习资源', items: [
          {
            text: 'level1',
            link: '/level1/手动启动'
          }
        ]
      },
      { text: '协会成员', link: '/markdown-examples' },
      { text: '关于我们', link: '/about' }
    ],

    sidebar:
    {
      '/level1/': [
        {
          text: 'level1',
          items:
            [
              { text: '手动启动', link: 'level1/手动启动' },
              { text: '航模锂电池知识点', link: 'level1/航模锂电池知识点' },
              { text: 'PC地面站MP接入图传教程', link: 'level1/PC地面站MP接入图传教程' },
              { text: 'PC端安装仿真开发环境', link: 'level1/PC端安装仿真开发环境' },
              { text: 'PC设置飞机遥测转发与视频回传', link: 'level1/PC设置飞机遥测转发与视频回传' },
            ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CCNU-Drone/CCNU-Drone.github.io' }
    ]
  }
})
