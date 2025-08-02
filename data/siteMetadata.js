/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'DreamWeebs AI次元社',
  author: 'SeOgi-Tsu',
  headerTitle: 'DreamWeebs AI次元社',
  description:
    '每日更新最新 AI 教程，从 ComfyUI 到 LoRA 训练，与萌新一起探索二次元 AI 创作的无限可能！',
  language: 'zh-cn',
  theme: 'system', // system, dark or light
  siteUrl: 'https://dreamweebs-ai.vercel.app',
  siteRepo: 'https://github.com/SeOgi-Tsu/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: '',
  email: 'your-email@example.com', // 请替换成您的邮箱
  github: 'https://github.com/SeOgi-Tsu',
  twitter: '', // 如果有的话可以填写
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  locale: 'zh-CN',
  analytics: {
    // 如果您想使用分析工具，可以在这里配置
    // 支持 Plausible, Simple Analytics, Umami, Posthog 或 Google Analytics
    umamiAnalytics: {
      umamiWebsiteId: '', // 例如: 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // 例如: tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // 例如: 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // 例如: UA-000000-2 或 G-XXXXXXX
    // },
  },
  newsletter: {
    // 支持 mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // 如果要使用，请添加 .env 文件并修改以下配置:
    // NEXT_PUBLIC_NEWSLETTER_PROVIDER=mailchimp
    // MAILCHIMP_API_KEY=
    // MAILCHIMP_API_SERVER= // 可选，默认是 us1
    // MAILCHIMP_AUDIENCE_ID=
    // 或者
    // NEXT_PUBLIC_NEWSLETTER_PROVIDER=buttondown
    // BUTTONDOWN_API_KEY=
    // 或者
    // NEXT_PUBLIC_NEWSLETTER_PROVIDER=convertkit
    // CONVERTKIT_API_KEY=
    // CONVERTKIT_FORM_ID=
    provider: 'buttondown',
  },
  comments: {
    // 如果您想使用评论系统，可以在这里配置
    // 需要在 next.config.js 文件中添加到内容安全策略
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // 支持的提供商: giscus, utterances, disqus
    giscusConfig: {
      // 访问以下链接，按照 'configuration' 部分的步骤操作
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // 支持的选项: pathname, url, title
      reactions: '1', // 表情反应: 1 = 启用 / 0 = 禁用
      // 定期向父窗口发送讨论元数据: 1 = 启用 / 0 = 禁用
      metadata: '0',
      // 主题示例: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // 深色模式主题
      darkTheme: 'transparent_dark',
      // 如果上面的主题选项设置为 'custom'
      // 请在下面提供您的自定义主题 css 文件链接
      // 示例: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // 这对应于 giscus 配置中的 `data-lang="en"`
      lang: 'zh-CN',
    },
  },
  search: {
    provider: 'kbar', // kbar 或 algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // 搜索文档的加载路径
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // Algolia 提供的应用程序 ID
    //   appId: 'R2IYF7ETH7',
    //   // 公共 API 密钥：提交是安全的
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
