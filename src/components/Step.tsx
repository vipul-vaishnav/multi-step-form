import React, { FC, ReactElement } from 'react'
import { IStep } from './interfaces/IStep'

const Step: FC<IStep> = (props): ReactElement => {
    const { stepTitle, stepNumber, activeStep, setActiveStep, stepComplete, sidebarCollapsed } = props

    const handleClick = (arg: IStep["stepNumber"]) => setActiveStep(arg)

    return (
        <div className={`${sidebarCollapsed ? "relative" : ""}`}>
            <button onClick={() => handleClick(stepNumber)} className="w-full flex items-center justify-start gap-4">
                <section>
                    <div className={`w-7 h-7 rounded-full border grid place-content-center text-sm p-3 ${stepComplete ? "border-primary text-primary" : "border-[#333] text-[#333]"}`}>
                        {sidebarCollapsed ? <p className={`${stepComplete ? "border-primary text-primary" : "border-[#333] text-[#333]"}`}>{stepNumber}</p> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>}
                    </div>
                </section>
                {sidebarCollapsed && activeStep === stepNumber && <div className="absolute w-3 h-3 bg-primary rounded-full top-0 right-0"></div>}
                {!sidebarCollapsed && <section className="flex-1 text-left">
                    <h2 className="text-xs uppercase font-bold tracking-wider mb-1 text-[#999]">Step {stepNumber}</h2>
                    <p className={`text-${activeStep === stepNumber ? "primary" : "white"}`}>{stepTitle}</p>
                </section>}
            </button>
        </div >
    )
}

export default Step