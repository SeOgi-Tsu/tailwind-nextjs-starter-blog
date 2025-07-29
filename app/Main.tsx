import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* 英雄区域 - 全新设计 */}
      <div className="relative overflow-hidden">
        {/* 背景渐变效果 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative space-y-2 pb-8 pt-6 md:space-y-5 md:pt-10 lg:pt-16">
          {/* 标题区域 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-75"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full text-sm">
                  🚀 每周更新 AI 前沿
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 mb-4">
              <span className="block">探索人工智能的</span>
              <span className="block bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                无限可能
              </span>
            </h1>
            
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 max-w-2xl">
              {siteMetadata.description || '深入浅出解析 AI 技术，分享最新研究成果、实用工具和行业洞察'}
            </p>

            {/* 快速导航按钮 */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Link
                href="/blog"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md hover:shadow-xl"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  浏览所有文章
                </span>
                <span className="relative invisible">浏览所有文章</span>
              </Link>

              <Link
                href="/tags"
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span className="text-gray-600 dark:text-gray-300">
                  🏷️ 探索标签
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 最新文章区域 */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            最新文章
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        {/* 文章列表 */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && '暂无文章'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post
            return (
              <li key={slug} className="py-8 group">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">发布时间</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                        >
                          {title}
                        </Link>
                      </h3>
                      
                      <div className="flex flex-wrap mt-2">
                        {tags?.map((tag) => (
                          <Tag 
                            key={tag} 
                            text={tag} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
                    
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300"
                        aria-label={`阅读更多关于 "${title}"`}
                      >
                        阅读更多
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {/* 查看更多文章 */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300"
            aria-label="查看所有文章"
          >
            查看所有文章
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      {/* 订阅区域 */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-12">
          <div className="w-full max-w-2xl">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                📬 订阅 AI 周刊
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                每周获取精选的 AI 技术文章和行业动态
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
