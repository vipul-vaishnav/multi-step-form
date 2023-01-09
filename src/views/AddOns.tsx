import React, { FC, ReactElement, useEffect } from 'react'
import Tile from '../components/Tile'
import { TileData } from '../data/TileData'
import { IAddOns } from './interfaces/IAddOns'

const AddOns: FC<IAddOns> = (props): ReactElement => {
    const { on, formData, setFormData } = props

    return (
        <div className="w-full my-12">
            <section>
                {TileData.map((item, idx) => {
                    return <Tile key={idx} title={item.title} description={item.description} price={item.price} on={on} formData={formData} setFormData={setFormData} />
                })}
            </section>
        </div>
    )
}

export default AddOns