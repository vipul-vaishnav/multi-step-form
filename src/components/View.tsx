import React, { FC, ReactElement, useState } from 'react'
import { IView } from './interfaces/IView'
import YourInfo from '../views/YourInfo'
import SelectPlan from '../views/SelectPlan'
import AddOns from '../views/AddOns'
import Summary from '../views/Summary'
import ThankYou from '../views/ThankYou'

const View: FC<IView> = (props): ReactElement => {
    const [on, setOn] = useState<boolean>(false)

    const ViewComponent = () => {
        switch (props.activeStep) {
            case 1:
                return <YourInfo />
            case 2:
                return <SelectPlan on={on} setOn={setOn} />
            case 3:
                return <AddOns on={on} />
            case 4:
                return <Summary />
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