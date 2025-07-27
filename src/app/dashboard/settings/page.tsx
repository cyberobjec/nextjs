import Link from 'next/link'

const Settings = () => {
  return (
    <div className="main-bg">
      <div className="metric-card">
        <h1 className="title-text">设置</h1>
        <p className="doc-fonts">
          自定义你的账户设置、个人资料和通知。请从侧边栏选择一个选项开始。
        </p>

        {/* 拼写修正：felx -> flex */}
        <div className="flex space-x-12">
          {/* 拼写修正：rpunded -> rounded，p6 -> p-6 */}
          <div className="w-1/4 bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              侧边栏
            </h2>

            {/* 用 ul/li 语义化；space-y-4 给纵向间距 */}
            <ul className="flex flex-col space-y-4">
              <li className="list-none">
                <Link
                  href="/dashboard/settings/account"
                  className="block text-gray-600 bg-blue-300 py-3 px-4 rounded-md hover:bg-blue-400 hover:text-white"
                >
                  账户设置
                </Link>
              </li>

              <li className="list-none">
                <Link
                  href="/dashboard/settings/profile"
                  className="block text-gray-600 bg-blue-300 py-3 px-4 rounded-md hover:bg-blue-400 hover:text-white"
                >
                  个人资料
                </Link>
              </li>

              <li className="list-none">
                <Link
                  href="/dashboard/settings/notification"
                  className="block text-gray-600 bg-blue-300 py-3 px-4 rounded-md hover:bg-blue-400 hover:text-white"
                >
                  通知设置
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
