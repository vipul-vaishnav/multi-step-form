import React, { FC, ReactElement } from 'react'
import { IHeader } from './interfaces/IHeader'

const Header: FC<IHeader> = (props): ReactElement => {
    const { title, description } = props

    return (
        <header>
            <h1 className="text-4xl font-extrabold mb-5">{title}</h1>
            <p className="text-[#999]">{description}</p>
        </header>
    )
}

export default Header