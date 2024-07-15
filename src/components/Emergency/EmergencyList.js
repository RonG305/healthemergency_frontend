import React from "react";

import NewCases from "./NewCases";
import ProceedingCases from "./ProceedingCases";
import CompletedCases from "./CompletedCases";

const EmergencyList = () => {

    const emergencies = [
        { id: 'RGT 464T', time: '10:56 AM', location: 'Nairobi-Thika Highway' },
        { id: 'ABC 123X', time: '12:30 PM', location: 'Mombasa Road' },
        { id: 'XYZ 789Z', time: '3:45 PM', location: 'Kisumu Expressway' },
        { id: 'JKL 456Y', time: '5:15 PM', location: 'Eldoret Bypass' },
        { id: 'PQR 321W', time: '8:00 AM', location: 'Naivasha Highway' },
        { id: 'LMN 654V', time: '1:20 PM', location: 'Meru Turnpike' },
        { id: 'GHI 987U', time: '4:10 PM', location: 'Kitale Thoroughfare' },
        { id: 'DEF 654S', time: '6:45 AM', location: 'Nakuru Freeway' },
      ];

      const emergencyStyles = {
        buttonStyle: "border border-slate-200 rounded-md px-2 py-1 mr-2 my-4"
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

      {emergencies.map(() => (
            <div className=" rounded-md p-2 border border-slate-200 flex items-center justify-between mb-2 hover:bg-slate-100 hover:cursor-pointer ">
            <div>
              <p className=" text-slate-500">ID</p>
              <p>RGT 464T</p>
            </div>
            <div>
              <p className=" text-slate-500">Time of occurence</p>
              <p>10:56 AM</p>
            </div>
            <div>
              <p className=" text-slate-500">Location</p>
              <p>Nairobi-Thika Highway</p>
            </div>
          </div>
      ))}

      <div>
      <button className={emergencyStyles.buttonStyle}>previous</button>
        <button className={emergencyStyles.buttonStyle}>1 / 8 </button>
        <button className={emergencyStyles.buttonStyle}>Next</button>
      </div>

      
    </div>
  );
};

export default EmergencyList;
