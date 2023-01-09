import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

export interface ISummary {
  on: boolean
  setOn: Dispatch<SetStateAction<boolean>>
  formData: SubscriptionFormData
}
