const tasks = [
  {
    id: 1,
    title: '完成项目报告',
    description: '完成项目的最终报告并提交。',
    status: '进行中',
    dueDate: '2025-02-18',
  },
  {
    id: 2,
    title: '更新网站内容',
    description: '修改主页文本以反映最新更改。',
    status: '待处理',
    dueDate: '2025-02-20',
  },
  {
    id: 3,
    title: '团队会议',
    description: '与团队讨论项目里程碑和进展。',
    status: '已完成',
    dueDate: '2025-02-15',
  },
]

const Tasks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="metric-card">
        <h1>任务列表</h1>
        <section className="space-y-6">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white rounded-lg  shadow-md p-6 border-l-4"
              style={{
                borderColor:
                  task.status === '已完成'
                    ? 'green'
                    : task.status === '进行中'
                    ? 'orange'
                    : 'red',
              }}
            >
              <h2 className="text-lg font-medium">{task.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{task.description}</p>
              <p
                className="text-sm text-gray-600 mt-2 font-bold"
                style={{
                  color:
                    task.status === '已完成'
                      ? 'green'
                      : task.status === '进行中'
                      ? 'orange'
                      : 'red',
                }}
              >
                状态：{task.status}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                截止日期：{task.dueDate}
              </p>
              <div className="space-x-4">
                <button className="bg-blue-500/60 hover:bg-blue-500 text-white px-4 py-2 rounded-full">
                  编辑
                </button>
                <button className="bg-red-500/60 hover:bg-red-500 text-white px-4 py-2 rounded-full">
                  删除
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Tasks
