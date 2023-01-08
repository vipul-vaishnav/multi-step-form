import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

export interface IDashboard {
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  formData: SubscriptionFormData
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
}
