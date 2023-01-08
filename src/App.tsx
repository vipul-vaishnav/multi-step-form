import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(1)

  return (
    <div className="bg-secondary h-screen text-base text-white w-full">
      <main className="w-full flex justify-start h-full">
        <aside className={`${sidebarCollapsed ? "w-20" : "w-64"} overflow-y-auto h-screen border-r border-[#333] p-6`}>
          <Sidebar sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} activeStep={activeStep} setActiveStep={setActiveStep} />
        </aside>
        <article className="flex-1 p-6 overflow-auto">
          <Dashboard activeStep={activeStep} />
        </article>
      </main>
    </div >
  )
}

export default App