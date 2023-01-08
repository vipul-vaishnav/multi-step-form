import { Dispatch, SetStateAction } from 'react'

export interface ISelectPlan {
  on: boolean
  setOn: Dispatch<SetStateAction<boolean>>
}
