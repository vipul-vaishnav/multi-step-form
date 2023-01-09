import { Dispatch, SetStateAction } from 'react'
import { StatusType } from '../../types/StatusType'

export interface ISidebar {
  sidebarCollapsed: boolean
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  stepStatus: StatusType[]
}
