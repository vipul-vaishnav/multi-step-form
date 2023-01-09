import React, { FC, ReactElement } from 'react'
import { ISummary } from './interfaces/ISummary'

const Summary: FC<ISummary> = (props): ReactElement => {
    const { on, formData } = props

    const { name, plan, addOns } = formData

    const genTotalAmount = () => {
        let amount = 0

        amount += plan?.price || 0

        addOns.forEach(item => {
            amount += item.price
        })

        return amount
    }

    return (
        <div className="w-full my-8">
            <h1 className="mb-6 py-3 px-6 bg-primary bg-opacity-10 border border-primary rounded-full max-w-fit text-primary">{name}</h1>
            <main className="bg-[#333] w-full p-6 rounded-xl mb-6">
                <section className="flex items-center justify-between">
                    <section>
                        <h2 className="font-bold text-lg text-primary">{plan?.title} ({on ? "Yearly" : "Monthly"})</h2>
                        <div>
                            <button className="underline text-[#999] hover:text-primary hover:opacity-50">change</button>
                        </div>
                    </section>
                    <section>
                        <h2 className="font-bold text-lg text-primary">
                            ${plan?.price}/{on ? "yr" : "mo"}
                        </h2>
                    </section>
                </section>
                <div className="w-full h-[1px] bg-[#999] my-6"></div>
                <section className="flex flex-col w-full gap-3">
                    {addOns.map((item, idx) => {
                        return <div key={idx} className="flex items-center justify-between">
                            <h2 className="text-[#999]">{item.title}</h2>
                            <h2 className="text-[#999]">+${item.price}/{on ? "yr" : "mo"}</h2>
                        </div>
                    })}
                </section>
            </main>
            <section className="px-6 text-[#999] flex items-center justify-between">
                <h2>Total (per {on ? "year" : "month"})</h2>
                <h2 className="font-bold text-2xl text-primary">${genTotalAmount()}/{on ? "yr" : "mo"}</h2>
            </section>
        </div>
    )
}

export default Summary