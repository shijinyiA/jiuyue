import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { viteBundler } from '@vuepress/bundler-vite';
import path from 'path';

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "锦衣&Docs",
  description: "锦衣&Docs",

  theme: hopeTheme({
    // 主题配置
    logo: 'https://dl3.img.timecdn.cn/2024/08/27/b_9fdf0b456d4d03b5215842c3d792b6ba.jpg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about.html' },
      {
        text: 'GitHub',
        link: 'https://github.com/shijinyiA',
        target: '_blank',
        rel: 'noopener noreferrer',
        ariaLabel: 'GitHub'
      }
    ],
    sidebar: [
      // 侧边栏配置
    ],
    search: true,
    lastUpdated: true,
    contributors: true,
  }),

  bundler: viteBundler(),

  enhanceAppFiles: [
    path.resolve(__dirname, './styles/index.scss')  // 引入自定义样式
  ],

  plugins: [
    [
      "md-enhance",
      {
        container: true,
        align: true,
      },
    ],
  ],

  // 如果使用 PWA，可以启用预加载
  // shouldPrefetch: false,
});
