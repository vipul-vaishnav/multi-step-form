import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

export interface IView {
  activeStep: number
  formData: SubscriptionFormData
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
}
