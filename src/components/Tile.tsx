import React, { FC, ReactElement } from 'react'
import { ITile } from './interfaces/ITile'

const Tile: FC<ITile> = (props): ReactElement => {
    const { title, price, description, on } = props

    return (
        <div className='w-full border border-[#333] my-4 rounded-lg p-6 cursor-pointer hover:border-primary hover:bg-primary hover:bg-opacity-10 flex items-center justify-between'>
            <section className="flex items-center gap-6">
                <div>
                    <div className="w-5 h-5 border border-primary rounded-md bg-primary grid place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                </div>
                <div>
                    <h6 className="text-primary font-bold">
                        {title}
                    </h6>
                    <p className="text-sm mt-1 text-[#999]">
                        {description}
                    </p>
                </div>
            </section>
            <section>
                <h6 className="text-[#999]">+${price}/{on ? "yr" : "mo"}</h6>
            </section>
        </div>
    )
}

export default Tile