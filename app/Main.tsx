import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section - 高级未来感设计 */}
      <div className="relative min-h-screen overflow-hidden">
        {/* 复杂背景渐变层 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/20 via-transparent to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        
        {/* 动态几何装饰 */}
        <div className="absolute -right-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-pink-500/30 to-cyan-500/30 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 h-64 w-64 animate-bounce rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-2xl [animation-duration:8s]"></div>
        
        {/* 网格纹理 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAwIDQwIG0gLTQwIDAgbCA0MCAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative flex min-h-screen items-center justify-center px-4">
          <div className="text-center">
            {/* 状态标签 */}
            <div className="mb-8 inline-flex items-center space-x-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">
              <div className="relative">
                <div className="h-3 w-3 animate-ping rounded-full bg-green-400"></div>
                <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-sm font-semibold text-transparent">
                AI Tutorial Hub • 每日更新中
              </span>
            </div>

            {/* 主标题 - 一体化设计 */}
            <div className="mb-8 space-y-4">
              <h1 className="relative text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
                {/* 背景文字 */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent blur-sm">
                  DreamWeebs
                </span>
                {/* 前景文字 */}
                <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  DreamWeebs
                </span>
                {/* 光效 */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"></div>
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl font-bold text-white/90 md:text-4xl">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI</span>
                  <span className="mx-2 text-white/70">•</span>
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">次元社</span>
                </h2>
                {/* 下划线动画 */}
                <div className="mx-auto mt-2 h-1 w-24 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* 描述文字 */}
            <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
              探索
              <span className="mx-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 text-white font-semibold shadow-lg">ComfyUI</span>
              <span className="mx-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-white font-semibold shadow-lg">LoRA训练</span>
              <span className="mx-2 rounded-lg bg-gradient-to-r from-green-500 to-yellow-500 px-3 py-1 text-white font-semibold shadow-lg">模型微调</span>
              的无限可能
            </p>

            {/* 特色功能卡片 */}
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: '🎨',
                  title: 'AI 绘画创作',
                  desc: '从 Stable Diffusion 到最新模型',
                  gradient: 'from-pink-500 to-rose-500',
                  delay: '0s'
                },
                {
                  icon: '🎬',
                  title: '视频生成技术',
                  desc: 'Runway、Pika 等前沿工具',
                  gradient: 'from-blue-500 to-cyan-500',
                  delay: '0.2s'
                },
                {
                  icon: '🧠',
                  title: '模型训练实战',
                  desc: 'LoRA、DreamBooth 深度教程',
                  gradient: 'from-purple-500 to-violet-500',
                  delay: '0.4s'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative transform rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:bg-white/20"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20 blur`}></div>
                  <div className="relative">
                    <div className="mb-4 text-4xl">{feature.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-white/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/blog"
                className="group relative inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                <span>开始学习之旅</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-30 blur"></div>
              </Link>
              
              <Link
                href="#tutorials"
                className="inline-flex items-center space-x-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                <span>查看教程</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-12 w-6 items-end justify-center rounded-full border-2 border-white/30 p-2">
            <div className="h-3 w-1 animate-pulse rounded-full bg-white"></div>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div id="tutorials" className="bg-white dark:bg-gray-900">
        {/* 最新教程区域 */}
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 dark:from-blue-900/30 dark:to-purple-900/30">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">LATEST TUTORIALS</span>
            </div>
            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-6xl dark:text-white">
              最新
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">教程</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              跟随我的学习节奏，每日更新最实用的AI技术教程
            </p>
          </div>

          {/* 教程网格 */}
          <div className="space-y-8">
            {!posts.length && (
              <div className="py-24 text-center">
                <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl">
                  <span className="text-4xl text-white">🚀</span>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">精彩内容即将到来</h3>
                <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-400">
                  我正在准备第一批高质量的AI教程，每一篇都将是精心制作的实战指南！
                </p>
              </div>
            )}
            
            {posts.slice(0, MAX_DISPLAY).map((post, index) => {
              const { slug, date, title, summary, tags } = post
              return (
                <article
                  key={slug}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-purple-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-purple-500"
                >
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
                  
                  <div className="relative flex items-start space-x-6">
                    {/* 序号 */}
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl font-black text-white shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      {/* 日期和标签 */}
                      <div className="flex flex-wrap items-center gap-3">
                        <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {formatDate(date, siteMetadata.locale)}
                        </time>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      
                      {/* 标题 */}
                      <h3 className="text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                        <Link href={`/blog/${slug}`}>{title}</Link>
                      </h3>
                      
                      {/* 摘要 */}
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{summary}</p>
                      
                      {/* 阅读更多 */}
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center space-x-2 text-lg font-semibold text-blue-600 transition-colors hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400"
                      >
                        <span>阅读完整教程</span>
                        <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* 查看更多 */}
          {posts.length > MAX_DISPLAY && (
            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
              >
                <span>查看所有教程</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Newsletter 订阅区域 */}
        {siteMetadata.newsletter?.provider && (
          <div className="border-t border-gray-200 bg-gray-50 py-20 dark:border-gray-700 dark:bg-gray-800">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl">
                <span className="text-3xl text-white">📧</span>
              </div>
              <h3 className="mb-4 text-4xl font-black text-gray-900 dark:text-white">
                加入学习社区
              </h3>
              <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                订阅获取最新AI教程、独家技巧分享和学习资源，与志同道合的创作者一起成长！
              </p>
              <NewsletterForm />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
