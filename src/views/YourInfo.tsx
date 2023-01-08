import React from 'react'
import Input from '../components/Input'
import { InputData } from '../data/InputData'

const YourInfo = () => {
    return (
        <form className="w-full my-8">
            {InputData.map((el, idx) => {
                return <Input key={idx} label={el.label} type={el.type} placeholder={el.placeholder} />
            })}
        </form>
    )
}

export default YourInfo