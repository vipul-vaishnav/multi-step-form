import React, { FC, ReactElement } from 'react'
import { IHeader } from './interfaces/IHeader'

const Header: FC<IHeader> = (props): ReactElement => {
    const { title, description } = props

    return (
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

export default Header