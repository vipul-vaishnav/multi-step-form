import React, { FC, ReactElement } from 'react'
import { IButton } from './interfaces/IButton'

const Button: FC<IButton> = (props): ReactElement => {
    const {
        disabled = false,
        label,
        variant = "contained",
        onClick = () => { }
    } = props

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${variant === "contained" ? "bg-primary text-white" : "bg-transparent text-[#999]"} px-6 py-3 rounded-lg ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}>
            {label}
        </button>
    )
}

export default Button