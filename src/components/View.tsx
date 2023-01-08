import React, { FC, ReactElement } from 'react'
import { IView } from './interfaces/IView'
import YourInfo from '../views/YourInfo'
import SelectPlan from '../views/SelectPlan'
import AddOns from '../views/AddOns'
import Summary from '../views/Summary'
import ThankYou from '../views/ThankYou'

const View: FC<IView> = (props): ReactElement => {

    const ViewComponent = () => {
        switch (props.activeStep) {
            case 1:
                return <YourInfo />
            case 2:
                return <SelectPlan />
            case 3:
                return <AddOns />
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