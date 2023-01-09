import React, { FC, ReactElement } from 'react'
import { ISummary } from './interfaces/ISummary'

const Summary: FC<ISummary> = (props): ReactElement => {
    const { on, formData } = props

    return (
        <div className="w-full my-8">
            {on ? "yearly" : "monthly"}
            <br />
            {"PLAN: " + formData.plan?.title + " " + formData.plan?.price}
            <br />
            <br />
            {"ADDONS:"}
            <ul>
                {formData.addOns.map((item, idx) => {
                    return <div key={idx}>
                        {item.title + " " + item.price}
                    </div>
                })}
            </ul>
        </div>
    )
}

export default Summary