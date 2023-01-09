import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

export interface IAddOns {
  on: boolean
  formData: SubscriptionFormData
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
}
