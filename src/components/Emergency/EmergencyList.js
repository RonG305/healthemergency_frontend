import React, {  useState } from "react";

import NewCases from "./NewCases";
import ProceedingCases from "./ProceedingCases";
import CompletedCases from "./CompletedCases";


const EmergencyList = ({emergencies}) => {


  const [currentPage, setCurrentPage] = useState(1)


  const itemsPerPage = 8

      const emergencyStyles = {
        buttonStyle: "border border-slate-200 rounded-md px-2 py-1 mr-2 my-4"
      }


      const totalPages = Math.ceil(emergencies.length / itemsPerPage)
      const currentItems = emergencies.slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage)

      const handleNextPage = () => {
        if(currentPage < totalPages) {
          setCurrentPage(currentPage + 1)
        }
      }

      const handlePrevPage = () => {
        if(currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }

      

  return (
    <div className="md:w-1/3 w-full rounded-lg h-[90vh] border border-slate-200 p-4 my-4 ">
      <h3 className=" mb-3">Emergencies</h3>
      <div></div>

      <div className="md:grid-cols-2 lg:grid lg:grid-cols-3 gap-3 ">
        <NewCases />
        <ProceedingCases />
        <CompletedCases />
      </div>

      <div>
        <button className={emergencyStyles.buttonStyle}>New</button>
        <button className={emergencyStyles.buttonStyle}>proceeding</button>
        <button className={emergencyStyles.buttonStyle}>completed</button>
      </div>

      {currentItems.map((emergency, index) => (
            <div key={index} className=" rounded-md p-2 border border-slate-200 flex items-center justify-between mb-2 hover:bg-slate-100 hover:cursor-pointer ">
            <div>
              <p className=" text-slate-500">Victim</p>
              <p>{emergency.profile.first_name} {emergency.profile.last_name}</p>
            </div>
            <div>
              <p className=" text-slate-500">Time of occurence</p>
              <p>{emergency.report_time}</p>
            </div>
            <div>
              <p className=" text-slate-500">Location</p>
              <p>Nairobi-Thika Highway</p>
            </div>
          </div>
      ))}

      <div>
      <button onClick={handlePrevPage} className={emergencyStyles.buttonStyle}>previous</button>
        <button className={emergencyStyles.buttonStyle}>Page {currentPage} of {totalPages}</button>
        <button onClick={handleNextPage} className={emergencyStyles.buttonStyle}>Next</button>
      </div>

      
    </div>
  );
};

export default EmergencyList;
