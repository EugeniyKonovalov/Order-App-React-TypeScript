
export interface itemTypes {
  id: string
  name: string,
  amount: number,
  price: number
}


export interface cartStateTypes {
  items: itemTypes[],
  totalAmount: number

}


interface contextTypes {
  items: itemTypes[],
  totalAmount: number
  addItem: (item: itemTypes) => void,
  removeItem: (id: string) => void,
  clearCart: () => void,
}
export default contextTypes;







