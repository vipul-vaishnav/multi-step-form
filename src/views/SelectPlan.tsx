import React, { useState } from 'react'
import { CardData } from './../data/CardData';
import Card from '../components/Card';
import Switch from '../components/Switch';

const SelectPlan = () => {
    const [on, setOn] = useState<boolean>(false)


    return (
        <div className="w-full my-16">
            <section className="flex items-center justify-between gap-4">
                {CardData.map((item, idx) => {
                    return <Card key={idx} icon={item.icon} price={on ? item.price.yearly : item.price.monthly} title={item.title} on={on} />
                })}
            </section>

            <section className="mt-8 p-6 rounded-2xl bg-[#333]">
                <div className="flex items-center justify-center gap-6">
                    <h4 className={`${on ? "text-[#999]" : "text-white"}`}>Monthly</h4>
                    <Switch on={on} setOn={setOn} />
                    <h4 className={`${on ? "text-white" : "text-[#999]"}`}>Yearly</h4>
                </div>
            </section>
        </div>
    )
}

export default SelectPlan