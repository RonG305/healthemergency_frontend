import React from 'react'
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = ({handleShowSidebar}) => {
  return (
    <div className=' h-[70px] bg-slate-100 px-4 py-2 shadow-md fixed w-full shadow-slate-300 flex items-center '>
        <HiBars3BottomLeft 
        size={25}
        onClick={handleShowSidebar}
        
        />
    </div>
  )
}

export default Navbar