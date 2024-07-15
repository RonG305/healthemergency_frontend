import React from 'react'
import { HiOutlineViewGrid } from "react-icons/hi";
import { TbAlertTriangle } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Sidebar = ({showSidebar, handleShowSidebar}) => {
    const sidebarStyles = {
        sideLink: "flex items-center gap-2 font-semibold my-2"
    }
  return (
    <div className={` rounded-lg border border-slate-200 mx-2 my-2 p-4 w-fit h-[90vh] fixed z-50 bg-white ${showSidebar ? "block" : "hidden"}   `}>
        <div className=' flex items-center gap-2'>
            <h3 className=' text-xl font-extrabold text-red-500 bg-red-200 rounded-md px-2 py-1 '>e-emergency</h3>
            <RxCross2 
                className=' md:hidden' 
                size={20} 
                onClick={handleShowSidebar}
                />
        </div>
        <h3 className={sidebarStyles.sideLink}><HiOutlineViewGrid size={20} />Dashboard</h3>
        <Link to={`/main/emergencies`} className={sidebarStyles.sideLink}><TbAlertTriangle className='text-red-500' size={20} />Emergencies</Link>

        
    </div>
  )
}

export default Sidebar