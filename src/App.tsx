import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { Toaster } from "react-hot-toast"
import { SubscriptionFormData } from './types/SubscriptionFormData'
import { StatusType } from './types/StatusType'

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(1)
  const [stepStatus, setStepStatus] = useState<StatusType[]>([
    { stepNumber: 1, isCompleted: false },
    { stepNumber: 2, isCompleted: false },
    { stepNumber: 3, isCompleted: false },
    { stepNumber: 4, isCompleted: false },
  ])

  const [formData, setFormData] = useState<SubscriptionFormData>({
    name: "",
    email: "",
    phone: "",
    plan: undefined,
    addOns: []
  })

  return (
    <div className="bg-secondary h-screen text-base text-white w-full">
      <main className="w-full flex justify-start h-full">
        <aside className={`${sidebarCollapsed ? "w-20" : "w-64"} overflow-y-auto h-screen border-r border-[#333] p-6`}>
          <Sidebar sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} activeStep={activeStep} setActiveStep={setActiveStep} stepStatus={stepStatus} />
        </aside>
        <article className="flex-1 p-6 overflow-auto">
          <Dashboard activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData} setStepStatus={setStepStatus} />
        </article>
      </main>
      <Toaster />
    </div >
  )
}

export default App