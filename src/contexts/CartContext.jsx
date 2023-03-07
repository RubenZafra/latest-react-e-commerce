import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

    return (
      <CartContext.Provider value={'this is the cart context'}>
        {children}
      </CartContext.Provider>
    )
  }
  
  export default CartProvider;