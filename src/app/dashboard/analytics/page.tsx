const metrics = [
  {
    title: '总销售额',
    value: '$120,000',
    change: '+12%',
    isPositive: true,
  },
  {
    title: '活跃用户',
    value: '1,200',
    change: '-8%',
    isPositive: false,
  },
  {
    title: '网站访问量',
    value: '8,500',
    change: '+5%',
    isPositive: true,
  },
  {
    title: '新注册用户',
    value: '350',
    change: '+18%',
    isPositive: true,
  },
]

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">数据分析</h1>
      {/* Overview Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={
              `flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ` +
              (metric.isPositive ? 'border-green-500' : 'border-red-500')
            }
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                {metric.title}
              </h3>
              <p className="text-lg text-gray-600 mt-2">{metric.value}</p>
            </div>
            <div className="text-right">
              <p
                className={`text-sm mt-2 ${
                  metric.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {metric.change} {metric.isPositive ? '↑' : '↓'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">站点数据</h2>
        <div className="bg-gray-100 rounded h-72">图表 </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">站点数据</h2>
        <div className="bg-gray-100 rounded h-72">图表 </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">站点数据</h2>
        <div className="bg-gray-100 rounded h-72">图表 </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">最新活动</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">用户注册</h3>
              <p className="text-sm text-gray-600">新用户于 2026-02-10 注册</p>
            </div>
            <div className="text-sm text-gray-500">+100用户</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Analytics
