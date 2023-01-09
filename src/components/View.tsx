import React, { FC, ReactElement, useState } from 'react'
import { IView } from './interfaces/IView'
import YourInfo from '../views/YourInfo'
import SelectPlan from '../views/SelectPlan'
import AddOns from '../views/AddOns'
import Summary from '../views/Summary'
import ThankYou from '../views/ThankYou'

const View: FC<IView> = (props): ReactElement => {
    const [on, setOn] = useState<boolean>(false)
    const { activeStep, formData, setFormData } = props

    const ViewComponent = () => {
        switch (activeStep) {
            case 1:
                return <YourInfo formData={formData} setFormData={setFormData} />
            case 2:
                return <SelectPlan on={on} setOn={setOn} formData={formData} setFormData={setFormData} />
            case 3:
                return <AddOns on={on} formData={formData} setFormData={setFormData} />
            case 4:
                return <Summary on={on} />
            default:
                return <ThankYou />
        }
    }


    return (
        <div className="w-full h-full flex items-center justify-center">
            {ViewComponent()}
        </div>
    )
}

export default View