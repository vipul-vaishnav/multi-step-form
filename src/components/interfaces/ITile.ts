import { Dispatch, SetStateAction } from 'react'
import { SubscriptionFormData } from '../../types/SubscriptionFormData'

interface Price {
  monthly: number
  yearly: number
}

export interface ITile {
  title: string
  description: string
  price: Price
  on: boolean
  formData: SubscriptionFormData
  setFormData: Dispatch<SetStateAction<SubscriptionFormData>>
}
