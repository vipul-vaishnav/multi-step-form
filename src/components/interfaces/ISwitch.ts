import { Dispatch, SetStateAction } from 'react'

export interface ISwitch {
  on: boolean
  setOn: Dispatch<SetStateAction<boolean>>
}
