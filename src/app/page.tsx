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
  // const handleThemeChange = (newTheme: string) => {
  //   setTheme(newTheme)
  //   document.documentElement.setAttribute('data-theme', newTheme)
  // }

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
      {/* <div className="flex justify-end mb-4">
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
      </div> */}
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
              <p className="text-base-content/70">统招本科 ｜ 计算机科学与技术</p>
            </div>
            <div className="text-sm text-base-content/60 md:text-right">
              2013 - 2017
            </div>
          </div>
        </div>
      </section>

      {/* 能力简述部分 */}
      <section className="mb-8 bg-base-200 p-8 rounded-xl shadow-lg border border-base-300 hover:border-primary/30 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 before:content-[''] before:w-2 before:h-6 before:bg-primary before:rounded-full">能力简述</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 技术能力 */}
          <div className="p-4 rounded-lg bg-base-100 hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-medium text-base-content mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              技术能力
            </h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-base-content/70">前端技术：</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Vue', 'React', 'Next.js', 'Echarts', 'Qiankun'].map((tech, index) => (
                    <span key={index} className="inline-block px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-base-content/70">后端技术：</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['MySQL', 'Node.js', 'JWT/Oauth2', 'Spring Boot', 'MyBatis'].map((tech, index) => (
                    <span key={index} className="inline-block px-2 py-0.5 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-base-content/70">工程化：</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Git', 'Webpack', 'Docker/K8s', 'Git'].map((tech, index) => (
                    <span key={index} className="inline-block px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 核心优势 */}
          <div className="p-4 rounded-lg bg-base-100 hover:bg-primary/5 transition-all duration-300">
            <h3 className="text-lg font-medium text-base-content mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              核心优势
            </h3>
            <ul className="space-y-2 text-base-content/80">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>具备微前端架构设计与实施经验，擅长大型项目架构</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>能够独立完成前后端一体化开发与接口设计</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>低代码平台开发经验，注重开发效率与代码质量</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>主导过微前端改造与系统迁移，推动多业务系统融合</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>具备团队管理经验，善于技术方案设计与推动落地</span>
              </li>
            </ul>
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
                <p className="text-base-content/70">全栈开发工程师</p>
              </div>
              <div className="text-sm text-base-content/60 md:text-right">
                2023/11 - 2025/06
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-base-100 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-base-content">恒生电子</h3>
                <p className="text-base-content/70">全栈开发工程师</p>
              </div>
              <div className="text-sm text-base-content/60 md:text-right">
                2021/11 - 2023/09
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
                2018/03 - 2021/10
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
                    <p>负责前端架构设计与团队管理，带领 5 人团队基于微前端完成业务模块解耦与独立部署。构建统一的基座应用，集成 单点登录、全局状态管理并实现 ECharts 数据可视化看板，为对公客户关系管理提供高可用、可扩展的前端支撑。</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    技术亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>基于 Qiankun 微前端架构，实现业务子系统独立开发与部署，降低发布风险，显著提升迭代效率</li>
                      <li>集成 MinIO 文档中台，统一管理文件存储，支持多角色读写与安全下载</li>
                      <li>优化构建产物，利用 Webpack SplitChunksPlugin 拆分公共依赖（Vue / Lodash 等），减少包体积并提升首屏性能</li>
                      <li>对接 kkFileView 在线预览服务，支持 Office、PDF、图片等 50+ 格式文件预览，提升用户体验与办公效率</li>
                      <li>熟练使用 Spring Boot 框架进行业务开发，并集成 Redis 实现分布式缓存，有效减少数据库访问，提升接口响应速度</li>
                      <li>基于 RabbitMQ 实现异步任务处理（如邮件发送、日志记录），解耦核心业务流程，提升系统吞吐量与用户体验</li>
                      <li>推动 前端规范化与团队协作流程建设，提升研发效率与代码质量，保障复杂系统稳定交付</li>
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
                    <p>面向 30+ 地方政府，打造 党员管理与组织生活数字化平台。以低代码方式支撑多样化政务场景，实现 快速定制、低成本交付。本人从 0 到 1 主导前端架构设计与技术选型，构建低代码平台核心能力，推动系统在多地政府稳定上线。</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    技术亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>基于 React + Umi 搭建低代码平台，从 0 到 1 完成架构设计与核心功能落地</li>
                      <li>构建低代码引擎，支持多业务场景快速配置与扩展，显著提升交付效率</li>
                      <li>设计并实现动态表单引擎，基于 JSON Schema 渲染 50+ 字段类型，减少前端硬编码约 70%</li>
                      <li>使用 React Hook 抽象 useAuth、useTable 等通用逻辑，结合 Ant Design 提升组件复用率与可维护性</li>
                      <li>实现基于 RBAC 的权限控制体系，覆盖菜单与按钮级权限，满足政务系统高安全性要求</li>
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
                {['Nextjs', 'React', 'Echarts', 'SSR'].map((tech, index) => (
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
                    <p>AI 财务报表类对话应用机器人</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>基于 Next.js + React 进行整体架构搭建，结合 SSR / SSG 提升首屏性能与 SEO 友好度</li>
                      <li>集成 Ant Design Pro 作为 UI 组件体系，配合 Tailwind CSS 定制化财务数据可视化界面</li>
                      <li>基于 React Query / SWR 实现对话消息的请求缓存与数据状态管理，保证响应实时性与可扩展性</li>
                      <li>借助 WebSocket / SSE 构建流式响应机制，实现类似 ChatGPT 的逐字输出效果，提升交互体验</li>
                      <li>集成 Chart.js / ECharts 进行财务数据可视化，支持图表与自然语言问答的联动展示</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 项目4：不良资产监控系统 */}
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-primary">不良资产监控系统</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {['Vue', 'H5', 'Pinia', 'Node'].map((tech, index) => (
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
                    <p>基于 Vue 构建的高性能数据管理平台，支持海量资产数据的可视化展示，为总行提供风险监控与业务决策支持。</p>
                  </div>
                </div>
                <div className="collapse collapse-open collapse-plus bg-base-200">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-base font-medium peer-checked:text-primary">
                    项目亮点
                  </div>
                  <div className="collapse-content text-base-content/80">
                    <ul className="list-disc list-inside space-y-2">
                      <li>封装统一埋点SDK，自动采集页面PV、按钮点击、接口异常等数据，requestIdleCallback异步上报埋点数据，避免影响主线程性能</li>
                      <li>封装 通用请求拦截器，统一处理鉴权、异常提示与重试逻辑，提升接口调用的健壮性与可维护性</li>
                      <li>基于 Promise 封装 的通用弹窗组件，支持 链式调用，简化交互逻辑</li>
                      <li>采用 Pinia 替代 Vuex，实现模块化状态管理，配合 Composition API 提升代码可维护性</li>
                      <li>在关键交互中引入 防抖/节流机制 和 批量 DOM 更新，降低渲染开销，显著改善用户体验</li>
                      <li>使用 Node.js 构建中间层服务，聚合下游多个微服务接口，为前端提供量身定制的 API，解决浏览器请求并发限制，提升页面加载性能</li>
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