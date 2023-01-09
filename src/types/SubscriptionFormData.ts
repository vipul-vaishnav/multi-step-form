export type Plan = {
  title: string
  price: number
}

export type AddOn = {
  title: string
  price: number
}

export type SubscriptionFormData = {
  name: string
  email: string
  phone: string
  plan?: Plan
  addOns?: AddOn[]
}
