import React, { FC, ReactElement } from 'react'
import Input from '../components/Input'
import { InputData } from '../data/InputData'
import { IYourInfo } from './interfaces/IYourInfo'

const YourInfo: FC<IYourInfo> = (props): ReactElement => {
    const { formData, setFormData } = props

    const genValue = (arg: "text" | "email" | "tel") => {
        switch (arg) {
            case "text":
                return formData.name
            case "email":
                return formData.email
            case "tel":
                return formData.phone
            default:
                return ""
        }
    }

    return (
        <form className="w-full my-8">
            {InputData.map((el, idx) => {
                return <Input value={genValue(el.type)} id={el.id} key={idx} label={el.label} type={el.type} placeholder={el.placeholder} setFormData={setFormData} />
            })}
        </form>
    )
}

export default YourInfo