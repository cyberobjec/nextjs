import Link from 'next/link'
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            仪表盘
          </h1>
          <p className="text-lg text-gray-600 mt-3">
            欢迎来到您的仪表盘，这里是您的任务、项目和分析数据的中心。
          </p>
        </div>
        {/* 仪表盘内容 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 任务卡片 */}
          <Link
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
            href="dashboard/tasks"
          >
            <div className="">
              <h2>任务</h2>
              <span>任务列表</span>
            </div>
            <p>查看管理您的任务列表</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
