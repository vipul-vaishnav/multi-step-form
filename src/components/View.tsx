import React, { FC, ReactElement, useEffect, useState } from 'react'
import { IView } from './interfaces/IView'
import YourInfo from '../views/YourInfo'
import SelectPlan from '../views/SelectPlan'
import AddOns from '../views/AddOns'
import Summary from '../views/Summary'
import ThankYou from '../views/ThankYou'
import { TileData } from '../data/TileData'

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
                return <Summary on={on} formData={formData} />
            default:
                return <ThankYou />
        }
    }

    useEffect(() => {
        const newData = formData.addOns.map(item => {
            const addOn = TileData.find(x => x.title === item.title)!
            return { title: item.title, price: on ? addOn?.price.yearly : addOn?.price.monthly }
        })

        setFormData(prev => {
            return { ...prev, addOns: newData }
        })
    }, [on])


    return (
        <div className="w-full h-full flex items-center justify-center">
            {ViewComponent()}
        </div>
    )
}

export default View