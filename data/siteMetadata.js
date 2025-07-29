'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

interface Post {
  slug: string
  date: string
  title: string
  summary?: string
  tags: string[]
}

interface MainProps {
  posts: Post[]
}

export default function Main({ posts }: MainProps) {
  return (
    <>
      {/* Hero Section - 英雄区域 */}
      <div className="relative min-h-screen bg-anime-gradient-soft overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">🌸</div>
          <div className="absolute top-32 right-20 text-3xl animate-float opacity-40" style={{animationDelay: '1s'}}>✨</div>
          <div className="absolute bottom-40 left-20 text-5xl animate-float opacity-50" style={{animationDelay: '2s'}}>💫</div>
          <div className="absolute bottom-20 right-32 text-4xl animate-float opacity-60" style={{animationDelay: '3s'}}>🎀</div>
          <div className="absolute top-1/4 left-1/4 text-2xl animate-sparkle opacity-30" style={{animationDelay: '0.5s'}}>⭐</div>
          <div className="absolute top-3/4 right-1/4 text-3xl animate-sparkle opacity-40" style={{animationDelay: '1.5s'}}>💖</div>
          <div className="absolute top-1/2 left-10 text-2xl animate-sparkle opacity-35" style={{animationDelay: '2.5s'}}>🌟</div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-16">
          <div className="text-center max-w-5xl mx-auto animate-slide-up">
            {/* 可爱的头像区域 */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-anime-gradient rounded-full flex items-center justify-center animate-bounce-slow shadow-anime-glow">
                  <span className="text-6xl">🤖</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-anime-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-sm">✨</span>
                </div>
              </div>
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-anime-dark-800 dark:text-anime-light-500">
              <div className="mb-2">
                <span className="bg-anime-gradient bg-clip-text text-transparent">
                  {siteMetadata.headerTitle}
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-medium">
                🌸 次元社 🌸
              </div>
            </h1>

            {/* 副标题 */}
            <p className="text-lg md:text-xl text-anime-dark-700 dark:text-anime-light-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              <span className="font-medium text-anime-purple-500">每日更新最新 AI 教程</span>
              <br />
              从 ComfyUI 到 LoRA 训练，与萌新一起探索二次元 AI 创作的无限可能 ✨
              <br />
              <span className="text-anime-pink-500">让我们一起用AI画出心中的理想乡吧！</span>
            </p>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/blog"
                className="bg-anime-gradient text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 shadow-anime-glow hover:shadow-anime-glow-lg"
              >
                🚀 开始学习 AI 绘画
              </Link>
              <Link
                href="/tags"
                className="bg-white dark:bg-anime-dark-800 text-anime-purple-500 dark:text-anime-purple-400 border-2 border-anime-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-anime-purple-500 hover:text-white dark:hover:bg-anime-purple-500 transition-all transform hover:scale-105"
              >
                📖 浏览萌新教程
              </Link>
            </div>

            {/* 统计信息 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/80 dark:bg-anime-dark-800/80 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-anime-pink-200 dark:border-anime-pink-800">
                <div className="text-2xl font-bold text-anime-pink-500">100+</div>
                <div className="text-sm text-anime-dark-600 dark:text-anime-light-400">AI 教程</div>
              </div>
              <div className="bg-white/80 dark:bg-anime-dark-800/80 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-anime-blue-200 dark:border-anime-blue-800">
                <div className="text-2xl font-bold text-anime-blue-500">1000+</div>
                <div className="text-sm text-anime-dark-600 dark:text-anime-light-400">创作作品</div>
              </div>
              <div className="bg-white/80 dark:bg-anime-dark-800/80 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-anime-purple-200 dark:border-anime-purple-800">
                <div className="text-2xl font-bold text-anime-purple-500">500+</div>
                <div className="text-sm text-anime-dark-600 dark:text-anime-light-400">活跃用户</div>
              </div>
              <div className="bg-white/80 dark:bg-anime-dark-800/80 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-anime-yellow-200 dark:border-anime-yellow-800">
                <div className="text-2xl font-bold text-anime-yellow-400">24/7</div>
                <div className="text-sm text-anime-dark-600 dark:text-anime-light-400">在线支持</div>
              </div>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-anime-purple-500 text-sm mb-2">向下滚动查看更多</span>
            <div className="w-6 h-10 border-2 border-anime-pink-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-anime-pink-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 博客文章列表区域 */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
        <div className="space-y-2 pb-8 pt-16 md:space-y-5">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-anime-gradient bg-clip-text text-transparent">
              🌟 最新 AI 学习记录 🌟
            </h2>
            <p className="text-anime-dark-600 dark:text-anime-light-400 max-w-2xl mx-auto">
              记录我的AI学习历程，分享每一个发现和收获
            </p>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">还没有发布任何文章</p>
            </div>
          )}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100 hover:text-anime-pink-500 dark:hover:text-anime-pink-400 transition-colors"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap mt-3">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-anime-pink-500 hover:text-anime-pink-600 dark:hover:text-anime-pink-400 transition-colors"
                          aria-label={`Read more: "${title}"`}
                        >
                          阅读更多 &rarr;
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

      {/* 查看更多按钮 */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center pt-6 pb-8 bg-white dark:bg-gray-900">
          <Link
            href="/blog"
            className="bg-anime-gradient text-white px-8 py-3 rounded-full font-semibold hover:shadow-anime-glow transition-all transform hover:scale-105"
          >
            查看所有文章 →
          </Link>
        </div>
      )}

      {/* 订阅区域 */}
      {siteMetadata.newsletter?.provider && (
        <div className="bg-anime-gradient-soft py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white/80 dark:bg-anime-dark-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-anime-pink-200 dark:border-anime-pink-800">
              <h3 className="text-2xl font-bold mb-4 bg-anime-gradient bg-clip-text text-transparent">
                🌸 加入我们的大家庭 🌸
              </h3>
              <p className="text-anime-dark-600 dark:text-anime-light-400 mb-6">
                订阅周刊，第一时间获取最新的 AI 二次元创作教程和技巧！
              </p>
              <NewsletterForm />
              <p className="text-xs text-anime-purple-500 mt-3">
                我们承诺不会发送垃圾邮件，只分享最有价值的内容
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
