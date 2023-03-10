import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

import { AuthContext } from '../contexts/AuthContext';

export const CartContext = createContext()



const CartProvider = ({children}) => {

  const {authState} = useContext(AuthContext)

  const user = authState.user;
  let getDataLocalStorage = localStorage.getItem(`cart-items-${user}`)

  useEffect(() => {
    if(authState.isAuthenticated){
      getDataLocalStorage = localStorage.getItem(`cart-items-${authState.user}`)
    } else {
      getDataLocalStorage = localStorage.getItem(`cart-items`)
    }
    setCart(getDataLocalStorage ? JSON.parse(getDataLocalStorage) : [])
  }, [authState.user])
  

  const [cart, setCart] = useState(
    getDataLocalStorage ? JSON.parse(getDataLocalStorage) : []
  )

  const [itemAmount, setItemAmount] = useState(0)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])

  useEffect(() => {
    const json = JSON.stringify(cart);
    authState.user ? localStorage.setItem(`cart-items-${user}`, json) : localStorage.setItem(`cart-items`, json)
  }, [cart])

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
      toast.success('Added +1!', {
        icon: "🤌🏼"
      })

    } else {
      setCart([...cart, newItem]);
      toast.success('Product Added To Cart!', {
        icon: "🤟🏻"
      })

    }
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
    toast.error('Deleted product from cart!', {
      icon: "🌚"
    })
  }

  const clearCart = () => {
    setCart([])
    toast.warning('Cart cleared!!', {
      icon: "🫡"
    })
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
        subtractAmount, 
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
    )
  }
  
  export default CartProvider;