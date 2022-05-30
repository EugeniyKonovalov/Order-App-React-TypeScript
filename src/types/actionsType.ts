import { itemTypes } from "./cartContextType"

export enum cartActionsType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  CLEAR = "CLEAR"
}

interface addAction {
  type: cartActionsType.ADD
  item: itemTypes
}
interface removeAction {
  type: cartActionsType.REMOVE
  id: string
}
interface clearAction {
  type: cartActionsType.CLEAR
}


export type cartActions = addAction | removeAction | clearAction