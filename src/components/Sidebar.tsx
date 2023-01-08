import React, { FC, ReactElement, useState } from 'react'
import { ISidebar } from './interfaces/ISidebar'
import { StepData } from '../data/StepData'
import Step from './Step';
import { StepType } from '../types/StepType';

const Sidebar: FC<ISidebar> = (props): ReactElement => {
    const { sidebarCollapsed, setSidebarCollapsed, activeStep, setActiveStep } = props

    const handleSidebarCollapseState = () => {
        setSidebarCollapsed(prev => !prev)
    }

    return (
        <div>
            <div className="font-bold flex items-center justify-start text-primary gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>

                {!sidebarCollapsed && <h1 className="text-2xl tracking-wider">Form.</h1>}
            </div>

            <section className="my-8">
                <div className={"w-full text-" + `${!sidebarCollapsed ? "right" : "left"}`}>
                    <button onClick={handleSidebarCollapseState} className={`text-primary max-w-fit`}>
                        {!sidebarCollapsed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>}
                    </button>
                </div>


                <div className="mt-6 flex flex-col gap-6">
                    {StepData.map((el: StepType, idx) => {
                        return <Step key={idx} stepTitle={el.stepTitle} stepNumber={el.stepNumber} activeStep={activeStep} setActiveStep={setActiveStep} stepComplete={false} sidebarCollapsed={sidebarCollapsed} />
                    })}
                </div>
            </section >
        </div >
    )
}

export default Sidebar