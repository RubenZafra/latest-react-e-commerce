import { useContext } from "react";

import {SidebarContext} from '../contexts/SidebarContext'

import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
    return (
      <header className="bg-pink-200">
        <div>Header</div>
        <div onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer">
          <BsBag className="text-2xl"/>
        </div>
      </header>
    )
  }
  
  export default Header;