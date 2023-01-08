import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

export interface IInput {
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel'
  id: 'name' | 'email' | 'phone'
  value: string
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
}
