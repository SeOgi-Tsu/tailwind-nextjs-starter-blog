import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section - 未来感设计 */}
      <div className="relative overflow-hidden">
        {/* 背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        
        {/* 几何装饰元素 */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative space-y-8 pb-12 pt-16 md:space-y-10 md:pb-16 md:pt-20">
          {/* 主标题区域 */}
          <div className="text-center space-y-6">
            {/* Logo/Brand */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">AI Tutorial Hub</span>
            </div>
            
            {/* 主标题 */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Dream</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Weebs
              </span>
            </h1>
            
            {/* 副标题 */}
            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300 md:text-xl">
              🚀 每日更新的 AI 教程博客，专注于 
              <span className="font-semibold text-blue-600 dark:text-blue-400">ComfyUI</span>、
              <span className="font-semibold text-purple-600 dark:text-purple-400">LoRA训练</span>、
              <span className="font-semibold text-pink-600 dark:text-pink-400">模型微调</span> 
              等前沿技术分享
            </p>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                { icon: '🎨', text: 'AI绘画', color: 'from-pink-500 to-rose-500' },
                { icon: '🎬', text: '视频生成', color: 'from-blue-500 to-cyan-500' },
                { icon: '🧠', text: '模型训练', color: 'from-purple-500 to-violet-500' },
                { icon: '⚡', text: 'ComfyUI', color: 'from-green-500 to-emerald-500' },
                { icon: '🔮', text: 'LoRA', color: 'from-orange-500 to-yellow-500' }
              ].map((tag, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r ${tag.color} text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <span>{tag.icon}</span>
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 最新教程区域 */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-6 pb-8 pt-12">
          {/* 区域标题 */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                🔥 最新教程
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              Daily Update
            </span>
          </div>
          
          {/* 学习进度提示 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                  📚
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  开始你的 AI 学习之旅
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  从零基础到进阶，跟随我的学习记录一起探索AI创作的无限可能。每篇教程都经过实践验证，确保你能跟着一步步完成。
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>持续更新中</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>实战向教程</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 文章列表 */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && (
            <div className="py-24 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                精彩内容即将到来
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                我正在准备第一批高质量的AI教程，敬请期待！
              </p>
            </div>
          )}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8 group">
                <article>
                  <div className="space-y-3 xl:grid xl:grid-cols-4 xl:items-start xl:space-y-0">
                    {/* 日期标签 */}
                    <div className="xl:col-span-1">
                      <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:animate-pulse"></div>
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </div>
                    </div>
                    
                    {/* 文章内容 */}
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          >
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-3">
                        {summary}
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                          aria-label={`Read more: "${title}"`}
                        >
                          <span>阅读完整教程</span>
                          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 查看更多 */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>查看所有教程</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}

      {/* Newsletter 订阅区域 */}
      {siteMetadata.newsletter?.provider && (
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4">
                <span className="text-2xl text-white">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                订阅获取最新教程
              </h3>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                第一时间获取最新的AI教程、技巧分享和学习资源，加入我们的学习社区！
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
