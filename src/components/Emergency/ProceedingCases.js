import React from 'react'
import { HiOutlineChartPie } from "react-icons/hi";

const ProceedingCases = () => {
  return (
    <div>
          <div className=" rounded-md border border-slate-200 p-4 h-[100px] mb-2 ">
            <span>
                <HiOutlineChartPie
                 className=' text-orange-500'
                 size={20}
                />
                <p>Proceedings</p>
            </span>
            
            <h3 className=' text-2xl font-extrabold'>41</h3>
        </div>
    </div>
  )
}

export default ProceedingCases