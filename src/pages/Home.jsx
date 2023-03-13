import { useContext, useState } from "react";

import { ProductContext } from "../contexts/ProductContext";
import { SidebarContext } from "../contexts/SidebarContext";

import Product from '../components/Product';

import { InfinitySpin } from 'react-loader-spinner'

const Home = () => {

  const {products, isLoading} = useContext(ProductContext);
  const {handleClose} = useContext(SidebarContext)


  const [filterInput, setFilterInput] = useState('')
    
  const handleFilterInput = ({target}) => {
    const {value} = target
    setFilterInput(value);
  }

  let filterProducts = []

  if (filterInput.length >0) {
    filterProducts = [...products].filter(product => 
      product.title.toLowerCase().includes(filterInput.toLowerCase()))
  }
    return (
      <>
        {isLoading ? (
          <div className="h-screen flex justify-center items-center">
            <InfinitySpin color='#222222'/>
          </div>
        ) : (
          
          <div onClick={handleClose} className="h-full py-12">
            <section className="py-16">
              <div className="container mx-auto">
                <div className="flex justify-center items-center py-12">
                  <input className="w-56 px-2 h-8 border-b border-red-500" 
                    value={filterInput} 
                    onChange={handleFilterInput} 
                    type="text" 
                    placeholder="Search product..." 
                  />
                </div>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 
                lg:grid-cols-4 xl:grid-cols-5 gap-[30px] 
                max-w-sm mx-auto md:max-w-none md:mx-0 "
                >
                  {
                    (  filterProducts.length !== 0 ? (
                      filterProducts.map((product) => {

                        return <Product product={product} key={product.id} />;}
                      
                    )) : (
                      products.map((product) => {

                        return <Product product={product} key={product.id} />;

                  })))
                  }
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
  
  export default Home;