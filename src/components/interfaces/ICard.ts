import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

interface Price {
  monthly: number
  yearly: number
}

export interface ICard {
  icon: 'arcade' | 'advance' | 'pro'
  title: string
  price: Price
  on: boolean
  formData: SubscriptionFormData
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
}
