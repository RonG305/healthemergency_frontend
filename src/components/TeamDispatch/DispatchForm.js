
import React from 'react';

const DispatchForm = () => {
    const profileStyles = {
      inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400",
      inputContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
      profileContainer: "rounded-lg flex flex-col w-full px-7 items-center justify-center ",
    };
    return (
      <div className={profileStyles.profileContainer}>
        <h3 className="  font-bold mt-4 text-xl text-red-500">
          Dispatch Form
        </h3>
        <div className={profileStyles.inputContainer}>
          <div>

          <label className="">Team </label>
            <select className={profileStyles.inputStyle}>
              <option>Select Team</option>
              <option>Team A</option>
              <option>Team B</option>
              <option>Team C</option>
            </select>

            
            <label className="">Emergency ID</label>
            <input className={profileStyles.inputStyle} />
  
            <label className="">Estimated Time of Arrival (ETA)</label>
            <input className={profileStyles.inputStyle} />



            <label className="">Team Leader Contact</label>
            <input className={profileStyles.inputStyle} />

            <label className="">Urgency Level </label>
            <select className={profileStyles.inputStyle}>
              <option>Select Urgency Level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
  
           
  
            <button
              className={profileStyles.inputStyle + " bg-red-500 text-white"}
            >
              Dispatch
            </button>
  
          
          </div>
        </div>
      </div>
    );
  };
  
  export default DispatchForm;
  