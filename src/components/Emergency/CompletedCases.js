import React from "react";
import { BiCheckShield } from "react-icons/bi";

const CompletedCases = () => {
  return (
    <div>
    <div className=" rounded-md border border-slate-200 p-4 h-[100px] mb-2 ">
      <span>
        <BiCheckShield 
        className="text-green-300" 
        size={20}
        />
        <p>completed</p>
      </span>

      <h3 className=" text-2xl font-extrabold">41</h3>
    </div>
    </div>
  );
};

export default CompletedCases;
