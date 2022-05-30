import React from "react"
import contextTypes from "../types/cartContextType";

const CartContext = React.createContext<contextTypes>({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { },
  clearCart: () => { },
})

export default CartContext;