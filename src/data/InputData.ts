import { InputType } from '../types/InputType'

export const InputData: InputType[] = [
  {
    label: 'Name',
    id: 'name',
    type: 'text',
    placeholder: 'e.g. Stephan King'
  },
  {
    label: 'Email Address',
    id: 'email',
    type: 'email',
    placeholder: 'e.g. stephanking@lorem.com'
  },
  {
    label: 'Phone Number',
    id: 'phone',
    type: 'tel',
    placeholder: 'e.g. +1 234 567 890'
  }
]
