import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animate-blob animation-delay-2000 absolute -right-4 top-0 h-72 w-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        </div>

        <div className="relative space-y-2 pb-8 pt-6 md:space-y-5 md:pt-10 lg:pt-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-75 blur-lg"></div>
                <div className="relative rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 text-sm font-bold text-white">
                  🚀 每周更新 AI 前沿
                </div>
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              <span className="block">探索人工智能的</span>
              <span className="block bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                无限可能
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description ||
                '深入浅出解析 AI 技术，分享最新研究成果、实用工具和行业洞察'}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/blog"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-500 px-6 py-3 font-medium text-white shadow-md transition duration-300 ease-out hover:shadow-xl"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-500 text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center text-purple-500 transition-all duration-300 group-hover:translate-x-full">
                  浏览所有文章
                </span>
                <span className="invisible relative">浏览所有文章</span>
              </Link>

              <Link
                href="/tags"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 px-6 py-3 font-medium transition duration-300 ease-out hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <span className="text-gray-600 dark:text-gray-300">🏷️ 探索标签</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            最新文章
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && '暂无文章'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="group py-8">
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
                          className="text-gray-900 transition-colors duration-300 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400"
                        >
                          {title}
                        </Link>
                      </h3>

                      <div className="mt-2 flex flex-wrap">
                        {tags?.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>

                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>

                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="inline-flex items-center text-purple-600 transition-colors duration-300 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                        aria-label={`阅读更多关于 "${title}"`}
                      >
                        阅读更多
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
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

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-600 transition-colors duration-300 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
            aria-label="查看所有文章"
          >
            查看所有文章
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-12">
          <div className="w-full max-w-2xl">
            <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-900">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                📬 订阅 AI 周刊
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
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
