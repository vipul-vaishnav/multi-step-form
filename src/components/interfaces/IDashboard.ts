import { Dispatch, SetStateAction } from "react"

export interface IDashboard {
    activeStep: number
    setActiveStep: Dispatch<SetStateAction<number>>
}