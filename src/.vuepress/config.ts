import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchProPlugin } from 'vuepress-plugin-search-pro'; // 引入搜索插件
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
      { text: '开始', link: '/start.html' },
    ],
    sidebar: [
      // 侧边栏配置
    ],
    search: false, // 禁用内置搜索功能，因为我们使用了 search-pro 插件
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
    searchProPlugin({
      // 搜索插件配置
      indexContent: true,  // 启用页面内容索引
      locales: {
        '/': {
          placeholder: '搜索',  // 搜索框占位符
        },
      },
    }),
  ],

  // 如果使用 PWA，可以启用预加载
  // shouldPrefetch: false,
});