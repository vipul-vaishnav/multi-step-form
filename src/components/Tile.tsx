import React, { FC, ReactElement } from 'react'
import { ITile } from './interfaces/ITile'
import { toast } from 'react-hot-toast'

const Tile: FC<ITile> = (props): ReactElement => {
    const { title, price, description, on, formData, setFormData } = props

    const isAddOnSelected = formData.addOns.find(item => item.title === title)

    const handleTileClick = () => {
        if (formData.addOns.find(item => item.title === title)) {
            const newAddOnsArray = formData.addOns.filter(item => item.title !== title)

            setFormData(prev => {
                return { ...prev, addOns: newAddOnsArray }
            })

            toast.success(title + " Addon removed", { className: "bg-primary text-white" })
        } else {
            const newAddOnsArray = [...formData.addOns, { title, price: on ? price.yearly : price.monthly }]

            setFormData(prev => {
                return { ...prev, addOns: newAddOnsArray }
            })

            toast.success(title + " Addon added", { className: "bg-primary text-white" })
        }
    }

    return (
        <button onClick={handleTileClick} className={`w-full border ${isAddOnSelected ? "border-primary bg-primary bg-opacity-10" : "border-[#333]"} my-4 rounded-lg p-6 cursor-pointer hover:border-primary flex items-center justify-between text-left`}>
            <section className="flex items-center gap-6">
                <div>
                    <div className={`w-5 h-5 border ${isAddOnSelected ? "border-primary bg-primary" : "border-[#333]"} rounded-md grid place-content-center`}>
                        {isAddOnSelected && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>}
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
                <h6 className="text-[#999]">+${on ? price.yearly : price.monthly}/{on ? "yr" : "mo"}</h6>
            </section>
        </button>
    )
}

export default Tile