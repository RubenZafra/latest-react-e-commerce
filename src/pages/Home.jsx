import { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
import { SidebarContext } from "../contexts/SidebarContext";

import Product from '../components/Product';

import {InfinitySpin  } from 'react-loader-spinner'

const Home = () => {

  const {products, isLoading} = useContext(ProductContext);
  const {handleClose} = useContext(SidebarContext)

  // const filteredProducts = products.filter(item => 
  //   item.category === "men's clothing" || item.category === "women's clothing")
    
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
                <div
                  className="grid grid-cols-1 md:grid-cols-2 
                lg:grid-cols-4 xl:grid-cols-5 gap-[30px] 
                max-w-sm mx-auto md:max-w-none md:mx-0 "
                >
                  {products.map((product) => {
                    return <Product product={product} key={product.id} />;
                  })}
                </div>
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
  
  export default Home;