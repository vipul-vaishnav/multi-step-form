export type Price = {
  monthly: number
  yearly: number
}

export type Plan = {
  title: string
  price: Price
}

export type AddOn = {
  title: string
  price: Price
}

export type SubscriptionFormData = {
  name: string
  email: string
  phone: string
  plan?: Plan
  addOns?: AddOn[]
}
