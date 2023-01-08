import React, { FC, ReactElement } from 'react'
import { IDashboard } from './interfaces/IDashboard'

const Dashboard: FC<IDashboard> = (props): ReactElement => {
    const { activeStep } = props

    return (
        <div>
            <h1>Dashboard</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum dolores in error! Error corporis dicta natus odit rem velit.</p>

            <div className="mt-4">
                <p className="text-2xl">
                    {activeStep}
                </p>
            </div>
        </div>
    )
}

export default Dashboard