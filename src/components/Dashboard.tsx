import React, { FC, ReactElement, useEffect, useState } from 'react'
import { IDashboard } from './interfaces/IDashboard'
import Button from './Button'

const Dashboard: FC<IDashboard> = (props): ReactElement => {
    const { activeStep, setActiveStep } = props

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
        console.log("FORM submission successfully")
    }

    return (
        <div>
            <div>
                <p className="text-2xl">
                    {activeStep}
                </p>
            </div>

            <div className="my-12">
                {activeStep !== 1 && <Button onClick={handleBackClick} label='Go Back' variant='text' />}
                {activeStep !== 4 && <Button onClick={handleNextClick} label='Next Step' variant='contained' />}
                {activeStep === 4 && <Button onClick={handleSubmit} label='Confirm' variant='contained' />}
            </div>
        </div>
    )
}

export default Dashboard