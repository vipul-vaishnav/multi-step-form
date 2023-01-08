import React, { FC, ReactElement } from 'react'
import { ITile } from './interfaces/ITile'

const Tile: FC<ITile> = (props): ReactElement => {
    const { title, price, description, on } = props

    return (
        <div className='w-full border border-[#333] my-4 rounded-lg p-6 cursor-pointer hover:border-primary hover:bg-primary hover:bg-opacity-10'>
            <section>
                <div></div>
                <div>
                    <h6>
                        {title}
                    </h6>
                    <p>
                        {description}
                    </p>
                </div>
            </section>
            <section>
                <h6>+${price}/{on ? "yr" : "mo"}</h6>
            </section>
        </div>
    )
}

export default Tile