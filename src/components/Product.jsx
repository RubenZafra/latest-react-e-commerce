import { useContext } from "react";

import { Link } from "react-router-dom";

import {BsPlus, BsEyeFill} from 'react-icons/bs'

const Product = ({product}) => {

  console.log({product})

  const {category, image, price, title, id} = product;
    return (
      <div>
        <div className="border border-[#e4e4e4] h-[300px] 
        mb-4 relative overflow-hidden group transition">
          <div className="w-full h-full flex justify-center items-center">
            <div>
              <img src={image} alt="" />
            </div>
          </div>   
        </div>
        <div>1</div>
      </div>
    )
  }
  
  export default Product;