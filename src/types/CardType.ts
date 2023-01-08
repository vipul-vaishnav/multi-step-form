export type Price = {
  monthly: number
  yearly: number
}

export type CardType = {
  icon: 'arcade' | 'advance' | 'pro'
  title: string
  price: Price
}
