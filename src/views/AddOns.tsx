import React, { FC, ReactElement } from 'react'
import Tile from '../components/Tile'
import { TileData } from '../data/TileData'
import { IAddOns } from './interfaces/IAddOns'

const AddOns: FC<IAddOns> = (props): ReactElement => {
    const { on } = props

    return (
        <div className="w-full my-12">
            <section>
                {TileData.map((item, idx) => {
                    return <Tile key={idx} title={item.title} description={item.description} price={on ? item.price.yearly : item.price.monthly} on={on} />
                })}
            </section>
        </div>
    )
}

export default AddOns