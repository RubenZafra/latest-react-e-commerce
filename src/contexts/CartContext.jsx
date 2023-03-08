import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  const addToCart = (product, id) => {

    const newItem = {...product, amount: 1}

    const cartItem = cart.find(item => {
      return item.id === id;
    })

    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id){
          return {...item, amount: cartItem.amount + 1};
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem]);
    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const addAmount = (id) => {
    const cartItem = cart.find(item => item.id === id)
    addToCart(cartItem, id);
  }

  const subtractAmount = (id) => {
    const cartItem = cart.find(item=> item.id === id)
    if(cartItem) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount -1}
        }else{
          return item;
        }
      })
      setCart(newCart)
    } 
     
      if(cartItem.amount < 2) {
        removeFromCart(id);
      }
    
  }

  return (
    <CartContext.Provider 
      value={{
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        addAmount, 
        subtractAmount
      }}
    >
      {children}
    </CartContext.Provider>
    )
  }
  
  export default CartProvider;