import Link from 'next/link'

const Dashboard = () => {
  const Data = [
    {
      title: '任务',
      icon: '📄',
      link: '/dashboard/tasks',
      desc: '查看管理您的任务列表',
      bgColor: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200',
      textColor: 'text-blue-800',
      iconColor: 'text-blue-600',
    },
    {
      title: '分析',
      icon: '📊',
      link: '/dashboard/analytics',
      desc: '查看管理您的分析数据',
      bgColor: 'bg-green-100',
      hoverColor: 'hover:bg-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600',
    },
    {
      title: '设置',
      icon: '⚙️',
      link: '/dashboard/settings',
      desc: '设置个人',
      bgColor: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200',
      textColor: 'text-purple-800',
      iconColor: 'text-purple-600',
    },
    {
      title: '用户',
      icon: '👥',
      link: '/dashboard/users',
      desc: '管理您的用户',
      bgColor: 'bg-yellow-100',
      hoverColor: 'hover:bg-yellow-200',
      textColor: 'text-yellow-800',
      iconColor: 'text-yellow-600',
    },
  ]

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
          {Data.map(item => (
            <Link
              key={item.title}
              className={`${item.bgColor} ${item.hoverColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105`}
              href={item.link}
            >
              <div className="flex items-center justify-between">
                <h2 className={`text-xl font-semibold ${item.textColor}`}>
                  {item.title}
                </h2>
                <span className={`text-2xl ${item.iconColor}`}>
                  {item.icon}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
