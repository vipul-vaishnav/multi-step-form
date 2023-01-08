import { Dispatch, SetStateAction } from 'react'

export interface IStep {
  stepNumber: number
  stepTitle: string
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  stepComplete: boolean
  sidebarCollapsed: boolean
}
