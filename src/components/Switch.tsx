import React, { FC, ReactElement, useState } from 'react'
import { ISwitch } from './interfaces/ISwitch'
import { toast } from 'react-hot-toast'

const Switch: FC<ISwitch> = (props): ReactElement => {
    const { on, setOn } = props

    const handleToggle = () => {
        setOn(prev => !prev)
        toast.success(`Price updated for ${on ? "monthly subscription" : "yearly subscription"}`, { className: "bg-primary text-white" })
    }

    return (
        <div>
            <button onClick={handleToggle} className={"px-1 transition-all duration-300 w-12 h-6 rounded-full bg-primary flex items-center" + ` ${on ? "justify-end" : "justify-start"}`}>
                <div className="w-5 h-5 bg-secondary rounded-full"></div>
            </button>
        </div>
    )
}

export default Switch