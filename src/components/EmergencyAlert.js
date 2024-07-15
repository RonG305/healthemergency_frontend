import React from 'react'

const EmergencyAlert = () => {

    const alertStyles = {
        inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400",
        alertContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
        profileContainer: "rounded-lg flex flex-col  w-full px-7 items-center justify-center ",
        profileHeader: "font-bold text-red-500 text-xl my-4"
      };


  return (
    <div className={alertStyles.profileContainer}>
        <div className={alertStyles.alertContainer}>
        <h2 className={alertStyles.profileHeader}>Emergency Alert</h2>
      <p>If you are in an emergency, press the button below to send an alert to the nearest hospital.</p>
      <button className=" bg-red-500 text-white rounded-md p-2 my-4">
        Send Emergency Alert
      </button>
        </div>
      
     
    </div>
  )
}

export default EmergencyAlert