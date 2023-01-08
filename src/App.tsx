import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { Toaster } from "react-hot-toast"
import { SubscriptionFormData } from './types/SubscriptionFormData'

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(1)

  const [formData, setFormData] = useState<SubscriptionFormData>({
    name: "Vipul",
    email: "vipul@email.com",
    phone: "+91 1234567890",
    plan: undefined,
    addOns: undefined
  })

  return (
    <div className="bg-secondary h-screen text-base text-white w-full">
      <main className="w-full flex justify-start h-full">
        <aside className={`${sidebarCollapsed ? "w-20" : "w-64"} overflow-y-auto h-screen border-r border-[#333] p-6`}>
          <Sidebar sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} activeStep={activeStep} setActiveStep={setActiveStep} />
        </aside>
        <article className="flex-1 p-6 overflow-auto">
          <Dashboard activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData} />
        </article>
      </main>
      <Toaster />
    </div >
  )
}

export default App