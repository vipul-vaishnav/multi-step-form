import React, { FC, ReactElement, useEffect, useState } from 'react'
import { IDashboard } from './interfaces/IDashboard'
import Button from './Button'
import View from './View'
import { toast } from 'react-hot-toast'
import Header from './Header';
import { HeaderData } from '../data/HeaderData'

const Dashboard: FC<IDashboard> = (props): ReactElement => {
    const { activeStep, setActiveStep } = props

    const headerData = HeaderData.find(el => el.viewNumber === activeStep)

    const handleBackClick = () => {
        setActiveStep((prev) => {
            if (prev === 1) return prev
            else return prev - 1
        })
    }

    const handleNextClick = () => {
        setActiveStep((prev) => {
            if (prev === 4) return prev
            else return prev + 1
        })
    }

    const handleSubmit = () => {
        setActiveStep(100)
        toast.success("Subscription successful!", { className: "bg-primary text-white" })
    }

    return (
        <div>
            {activeStep !== 100 && <Header title={headerData?.title || "Lorem ipsum dolor"} description={headerData?.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit."} />}

            <View activeStep={activeStep} />

            {activeStep !== 100 && <div className="my-12">
                {activeStep !== 1 && <Button onClick={handleBackClick} label='Go Back' variant='text' />}
                {activeStep !== 4 && < Button onClick={handleNextClick} label='Next Step' variant='contained' />}
                {activeStep === 4 && <Button onClick={handleSubmit} label='Confirm' variant='contained' />}
            </div>}
        </div>
    )
}

export default Dashboard