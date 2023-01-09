import React, { FC, ReactElement } from 'react'
import { ICard } from './interfaces/ICard'
import Arcade from './icons/Arcade'
import Advance from './icons/Advance'
import Pro from './icons/Pro'
import { Plan } from '../types/SubscriptionFormData'
import { toast } from 'react-hot-toast'

const Card: FC<ICard> = (props): ReactElement => {
    const { icon, price, title, on, setFormData, formData } = props
    const selected = formData.plan?.title === title

    const genIcon = () => {
        switch (icon) {
            case "arcade":
                return <Arcade />
            case "advance":
                return <Advance />
            case "pro":
                return <Pro />
            default:
                return <></>
        }
    }

    const handleCardClick = () => {
        const selectedPlan: Plan = { title, price: on ? price.yearly : price.monthly }

        setFormData((prev) => {
            return { ...prev, plan: selectedPlan }
        })

        toast.success("You have selected " + title, { className: "bg-primary text-white" })
    }

    return (
        <button onClick={handleCardClick} className={`w-full border rounded-lg p-5 cursor-pointer hover:border-primary text-left ${selected ? "border-primary bg-primary bg-opacity-10" : "border-[#333]"}`}>
            <section>
                {genIcon()}
            </section>

            <section className="mt-16">
                <h2 className="text-primary text-lg font-bold mb-4">{title}</h2>
                <p className="text-[#999]">
                    ${on ? price.yearly : price.monthly}/{on ? "yr" : "mo"}
                </p>
                {on && <p className="mt-4 text-sm">
                    2 months free
                </p>}
            </section>
        </button>
    )
}

export default Card