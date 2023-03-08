import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();


const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setIsLoading(false)
        setProducts(data);
      } catch(err) {
        setError(err)
        console.log(error);
      }
    };
    fetchProducts();
  }, [error])
  
    return (
      <ProductContext.Provider value={{products, isLoading}}>
        {children}
      </ProductContext.Provider>
    )
  }
  
  export default ProductProvider;