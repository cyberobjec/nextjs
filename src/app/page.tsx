import Link from 'next/link'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          欢迎来到仪表盘
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          管理您的任务、追踪分析数据，并通过我们强大的仪表板保持井井有条。
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          开始体验
        </Link>
      </div>
    </div>
  )
}

export default Home
