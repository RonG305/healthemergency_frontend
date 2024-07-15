import React from 'react'
import { HiOutlineCubeTransparent } from "react-icons/hi";

const NewCases = () => {
  return (
    <div>
          <div className=" rounded-md border border-slate-200 p-4 h-[100px] mb-2 ">
            <span >
                <HiOutlineCubeTransparent 
                    className=' text-red-600'
                    size={20}
                     />
                <p>New</p>
            </span>
            
            <h3 className=' text-2xl font-extrabold'>41</h3>
        </div>
    </div>
  )
}

export default NewCases