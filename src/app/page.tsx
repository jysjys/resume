'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import avatar from '../../public/avatar.jpeg'

interface ResumeData {
  basicInfo: {
    name: string
    gender: string
    age: number
    phone: string
    email: string
    major: string
    position: string
    photoUrl?: string
  }
  education: Array<{
    school: string
    major: string
    startDate: string
    endDate: string
  }>
  experience: Array<{
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
  }>
  skills: Array<{
    category: string
    items: string[]
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
  }>
}

export default function ResumePage() {
  const [theme, setTheme] = useState('cupcake')
  const [resumeData, ] = useState<ResumeData>({
    basicInfo: {
      name: '',
      gender: '',
      age: 0,
      phone: '',
      email: '',
      major: '',
      position: '',
      photoUrl: avatar.src
    },
    education: [],
    experience: [],
    skills: [
      {
        category: '前端技术',
        items: ['Vue', 'React', 'Next.js', 'Express']
      },
      {
        category: '后端技术',
        items: ['Spring Boot', 'MySQL']
      }
    ],
    projects: []
  })

  // 主题切换函数
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // 初始化主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'cupcake'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  // 保存主题到本地存储
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* 主题切换器 */}
      <div className="flex justify-end mb-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1 gap-1 normal-case">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
            <span className="hidden md:inline">主题</span>
            <svg width="12px" height="12px" className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </div>
          <div tabIndex={0} className="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl">
            <div className="grid grid-cols-1 gap-3">
              <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2" data-set-theme="light" data-act-class="outline" onClick={() => handleThemeChange('light')}>
                <div data-theme="light" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">light</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>
                        <div className="bg-secondary w-2 rounded"></div>
                        <div className="bg-accent w-2 rounded"></div>
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2" data-set-theme="dark" data-act-class="outline" onClick={() => handleThemeChange('dark')}>
                <div data-theme="dark" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">dark</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>
                        <div className="bg-secondary w-2 rounded"></div>
                        <div className="bg-accent w-2 rounded"></div>
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2" data-set-theme="cupcake" data-act-class="outline" onClick={() => handleThemeChange('cupcake')}>
                <div data-theme="cupcake" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">cupcake</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>
                        <div className="bg-secondary w-2 rounded"></div>
                        <div className="bg-accent w-2 rounded"></div>
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2" data-set-theme="synthwave" data-act-class="outline" onClick={() => handleThemeChange('synthwave')}>
                <div data-theme="synthwave" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">synthwave</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>
                        <div className="bg-secondary w-2 rounded"></div>
                        <div className="bg-accent w-2 rounded"></div>
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2" data-set-theme="retro" data-act-class="outline" onClick={() => handleThemeChange('retro')}>
                <div data-theme="retro" className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">retro</div>
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>
                        <div className="bg-secondary w-2 rounded"></div>
                        <div className="bg-accent w-2 rounded"></div>
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 基本信息部分 */}
      <section className="mb-8 bg-base-200 p-8 rounded-xl shadow-lg border border-base-300 hover:border-primary/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-primary before:rounded-full">基本信息</h2>
        <div className="flex gap-8 flex-col md:flex-row">
          {/* 照片上传区域 - 添加 print-avatar 类 */}
          <div className="w-48 h-48 bg-base-100 rounded-xl flex items-center justify-center border-2 border-dashed border-base-300 hover:border-primary transition-all duration-300 cursor-pointer group print-avatar">
            {resumeData.basicInfo.photoUrl ? (
              <Image
                width={200}
                height={200}
                src={resumeData.basicInfo.photoUrl}
                alt="个人照片"
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="text-center text-base-content/50 group-hover:text-primary transition-colors duration-300">
                <p>点击上传照片</p>
                <p className="text-sm mt-2">(建议尺寸: 200x200)</p>
              </div>
            )}
          </div>

          {/* 个人信息表单 */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group p-3 rounded-lg bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors duration-300">姓名</label>
              <div className="mt-1 text-base-content font-medium">姜玉双</div>
            </div>
            <div className="group p-3 rounded-lg bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors duration-300">性别</label>
              <div className="mt-1 text-base-content font-medium">男</div>
            </div>
            <div className="group p-3 rounded-lg bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors duration-300">年龄</label>
              <div className="mt-1 text-base-content font-medium">31</div>
            </div>
            <div className="group p-3 rounded-lg bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors duration-300">手机/微信</label>
              <div className="mt-1 text-base-content font-medium">16619917440</div>
            </div>
            <div className="group p-3 rounded-lg bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors duration-300">邮箱</label>
              <div className="mt-1 text-base-content font-medium">double.jys@gmail.com</div>
            </div>
            <div className="group p-3 rounded-lg bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              <label className="block text-sm font-medium text-base-content/70 group-hover:text-primary transition-colors duration-300">期望岗位</label>
              <div className="mt-1 text-base-content font-medium">全栈偏前端</div>
            </div>
          </div>
        </div>
      </section>

      {/* 教育经历部分 */}
      <section className="mb-8 bg-base-200 p-8 rounded-xl shadow-lg border border-base-300 hover:border-primary/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-primary before:rounded-full">教育经历</h2>
        <div className="p-4 rounded-lg bg-base-100 hover:bg-primary/5 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-base-content">绥化学院</h3>
              <p className="text-base-content/70">计算机科学与技术</p>
            </div>
            <div className="text-sm text-base-content/60 md:text-right">
              2013 - 2017
            </div>
          </div>
        </div>
      </section>

      {/* 工作经验部分 */}
      <section className="mb-8 bg-base-200 p-8 rounded-xl shadow-lg border border-base-300 hover:border-primary/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-primary before:rounded-full">工作经历</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-base-100 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-base-content">北银金科</h3>
                <p className="text-base-content/70">前端开发工程师</p>
              </div>
              <div className="text-sm text-base-content/60 md:text-right">
                2023 - 至今
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-base-100 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-base-content">恒生电子</h3>
                <p className="text-base-content/70">前端开发工程师</p>
              </div>
              <div className="text-sm text-base-content/60 md:text-right">
                2021 - 2023
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-base-100 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-base-content">精友科技有限公司</h3>
                <p className="text-base-content/70">前端开发工程师</p>
              </div>
              <div className="text-sm text-base-content/60 md:text-right">
                2018 - 2021
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目经历部分 - 添加 print-projects 类 */}
      <section className="mb-8 bg-base-200 p-8 rounded-xl shadow-lg border border-base-300 hover:border-primary/30 transition-all duration-300 print-projects">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-primary before:rounded-full">项目经历</h2>
        <div className="space-y-6">
          {/* 项目1：CRM系统 */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-primary">对公客户关系CRM系统</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {['Qiankun', 'SpringBoot', 'ECharts', 'Nginx'].map((tech, index) => (
                  <span key={index} className="badge badge-primary badge-outline">{tech}</span>
                ))}
              </div>
              <div className="space-y-4">
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" /> 
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目描述
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <p>采用微前端架构，实现业务模块解耦与独立部署，基座应用集成统一登录鉴权、菜单管理、全局状态共享及ECharts数据可视化看板</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    技术亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>基于 Qiankun 搭建主子应用架构，实现独立开发、部署与运行时隔离</li>
                      <li>集成 MinIO 作为文档存储中台，实现文件分类管理与权限控制（读写/下载）</li>
                      <li>分析构建产物，通过 SplitChunksPlugin 拆分公共依赖（如Vue/Lodash）</li>
                      <li>对接 kkFileView 服务，支持Office/PDF/图片等50+格式的在线预览</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 项目2：党建平台 */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-primary">SaaS党建平台</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {['Umi', 'Ant Design', 'React Hooks', 'JSON Schema'].map((tech, index) => (
                  <span key={index} className="badge badge-primary badge-outline">{tech}</span>
                ))}
              </div>
              <div className="space-y-4">
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目描述
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <p>为30+地方政府提供党员管理、组织生活等全流程数字化解决方案</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    技术亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>动态表单引擎：通过JSON Schema配置渲染表单，支持50+字段类型，减少前端硬编码70%</li>
                      <li>权限组件实现RBAC模型，按钮级控制精度</li>
                      <li>采用React Hooks优化代码复用率，抽离useAuth、useTable等公共Hook</li>
                    </ul>
                    {/* <div className="mt-4 text-success font-medium">
                      成果：项目交付周期缩短25%，获2022年省级数字政务创新案例奖
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 项目3：AI 智能财报助手 */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-primary">AI 智能财报助手</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {['Next.js', 'TailwindCSS', 'DaisyUI', 'Supabase'].map((tech, index) => (
                  <span key={index} className="badge badge-primary badge-outline">{tech}</span>
                ))}
              </div>
              <div className="space-y-4">
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目描述
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <p>基于 AI 的实时内容创作与管理平台，支持多用户协作与智能推荐</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>采用 LangChain.js 构建对话链，优化复杂 AI 任务（如多步骤内容生成）的交互流程</li>
                      <li>基于 ECharts D3.js实现交互式财务图表，支持流式数据增量更新，实时反映财务趋势变化</li>
                      <li>结合SupabaseAuth实现基于角色的财务报表访问控制，确保敏感财务数据仅对授权用户可见</li>
                      <li>采用 Server-Sent Events (SSE) 实现实时财务数据流式推送，确保大规模报表（10万+行）无卡顿加载</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 项目4：精友系统 */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-primary">精友系统</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {['Vue', 'H5'].map((tech, index) => (
                  <span key={index} className="badge badge-primary badge-outline">{tech}</span>
                ))}
              </div>
              <div className="space-y-4">
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目描述
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <p>基于Vue的高性能数据管理平台，支持海量数据展示与精细化权限控制</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>封装统一埋点SDK，自动采集页面PV、按钮点击、接口异常等数据，使用requestIdleCallback异步上报埋点数据，避免影响主线程性能</li>
                      <li>基于xlsx库实现前端Excel解析，支持数据校验与错误提示</li>
                      <li>基于 Promise 封装 的通用弹窗组件，支持 链式调用，简化交互逻辑</li>
                      <li>采用 Pinia 替代 Vuex，实现模块化状态管理，配合 Composition API 提升代码可维护性</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}