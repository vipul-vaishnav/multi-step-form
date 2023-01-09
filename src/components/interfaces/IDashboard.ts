import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'
import { StatusType } from '../../types/StatusType'

export interface IDashboard {
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  formData: SubscriptionFormData
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
  setStepStatus: Dispatch<SetStateAction<StatusType[]>>
}
