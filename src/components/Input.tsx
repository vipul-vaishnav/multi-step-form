import React, { FC, ReactElement } from 'react'
import { IInput } from './interfaces/IInput'

const Input: FC<IInput> = (props): ReactElement => {
    const { label, type, placeholder } = props

    return (
        <div className="my-6">
            <label className='max-w-fit block mb-2 text-primary' htmlFor={`label-${label}`}>{label}</label>
            <input className="w-full rounded-lg px-3 py-2 border-white border-2 bg-white text-secondary outline-none focus:border-primary placeholder-[#999]" type={type} id={`label-${label}`} placeholder={placeholder} autoComplete="off" />
        </div>
    )
}

export default Input