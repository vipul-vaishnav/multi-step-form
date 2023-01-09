import { Dispatch, SetStateAction } from 'react'

export interface IStep {
  stepNumber: number
  stepTitle: string
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  sidebarCollapsed: boolean
  completed: boolean
  isPreviousStepCompleted: boolean | undefined
}
