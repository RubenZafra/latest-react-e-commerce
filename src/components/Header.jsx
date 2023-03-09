import { useContext, useState, useEffect } from "react";

import {SidebarContext} from '../contexts/SidebarContext'
import {CartContext} from '../contexts/CartContext'

import {BsBag} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Logo from '../img/ollo-logo.avif'

const Header = () => {

  const [isActive, setIsActive] = useState(false)

  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })
  

    return (
      <header className={`${isActive ? ' bg-slate-600 py-4 shadow-md' : 'bg-black py-6 '} fixed w-full z-10
       transition-all`}>
        <div className="container flex mx-auto items-center justify-between h-full">
          <Link to={'/'}>
            <div>
              <img className="w-[250px]" src={Logo} alt="" />
            </div>
          </Link>
          <div onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer flex relative
          max-w-[50px]"
          >
            <BsBag className="text-2xl font-semibold text-white"/>
            <div className="bg-pink-300 absolute -right-2 -bottom-2 
            text-[12px] w-[18px] h-[18px] text-white rounded-full
            flex justify-center items-center">{itemAmount}</div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header;