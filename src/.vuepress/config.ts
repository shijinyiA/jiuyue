import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { viteBundler } from '@vuepress/bundler-vite';
import path from 'path';

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "神奇九月",
  description: "欢迎来到坏九月的个人空间~",

  theme: hopeTheme({
    // 主题配置
    logo: '/images/tx.jpg',
    navbar: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about.html' },
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
