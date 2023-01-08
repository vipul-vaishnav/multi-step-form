import React, { FC, ReactElement } from 'react'
import { ICard } from './interfaces/ICard'
import Arcade from './icons/Arcade'
import Advance from './icons/Advance'
import Pro from './icons/Pro'

const Card: FC<ICard> = (props): ReactElement => {
    const { icon, price, title, on } = props

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

    return (
        <div className="w-full border border-[#333] rounded-lg p-5 cursor-pointer hover:border-primary hover:bg-primary hover:bg-opacity-10">
            <section>
                {genIcon()}
            </section>

            <section className="mt-16">
                <h2 className="text-primary text-lg font-bold mb-4">{title}</h2>
                <p className="text-[#999]">
                    ${price}/{on ? "yr" : "mo"}
                </p>
                {on && <p className="mt-4 text-sm">
                    2 months free
                </p>}
            </section>
        </div>
    )
}

export default Card