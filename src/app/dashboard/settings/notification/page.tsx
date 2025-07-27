// app/notifications/page.tsx  或  pages/notifications.tsx
'use client' // 如果你用的是 App Router，需要加这一行

import { useRouter } from 'next/navigation'

export default function NotificationsPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      email: fd.get('email'),
      sms: fd.get('sms'),
      push: fd.get('push'),
    }
    console.log('提交的设置：', payload)
    // 这里可以调用 /api/notifications 之类
  }

  return (
    <div className="main-bg">
      <div className="metric-card max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">通知设置</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">通知选项</h2>

          <div className="space-y-4">
            {/* 电子邮件通知 */}
            <div className="flex flex-col">
              <label htmlFor="email" className="block text-gray-700">
                电子邮件通知
              </label>
              <select
                name="email"
                id="email"
                defaultValue="on"
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-md"
              >
                <option value="on">开启</option>
                <option value="off">关闭</option>
              </select>
            </div>

            {/* 短信通知 */}
            <div className="flex flex-col">
              <label htmlFor="sms" className="block text-gray-700">
                短信通知
              </label>
              <select
                name="sms"
                id="sms"
                defaultValue="on"
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-md"
              >
                <option value="on">开启</option>
                <option value="off">关闭</option>
              </select>
            </div>

            {/* 推送通知 */}
            <div className="flex flex-col">
              <label htmlFor="push" className="block text-gray-700">
                推送通知
              </label>
              <select
                name="push"
                id="push"
                defaultValue="on"
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded-md"
              >
                <option value="on">开启</option>
                <option value="off">关闭</option>
              </select>
            </div>

            {/* 操作按钮 */}
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                保存更改
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
