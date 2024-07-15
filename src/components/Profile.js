import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const profileStyles = {
    inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400",
    inputContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    profileContainer: "rounded-lg flex flex-col w-full px-7 items-center justify-center ",
  };
  return (
    <div className={profileStyles.profileContainer}>
      <h3 className="  font-bold mt-4 text-xl text-red-500">
        Set up your profile
      </h3>
      <div className={profileStyles.inputContainer}>
        <div>
          <label className="">Full Name</label>
          <input className={profileStyles.inputStyle} />

          <label className="">Date of Birth</label>
          <input className={profileStyles.inputStyle} />

          <label className="">Gender</label>
          <select className={profileStyles.inputStyle}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <label className="">Blood Group Type</label>
          <select className={profileStyles.inputStyle}>
            <option>Select boold type</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
            <option>I don't know</option>
          </select>


          <label className="">Allergies</label>
          <textarea 
            className={profileStyles.inputStyle}
            rows={5}
            cols={10}
             >

          </textarea>

          <label className="">Medical condition</label>
          <input className={profileStyles.inputStyle} />

        <div className=" flex gap-2 items-center justify-center">
            <div>
            <label className="">Emergency contact 1</label>
            <input className={profileStyles.inputStyle} />
            </div>

            <div>
            <p>Relationship</p>
            <input className={profileStyles.inputStyle} />
            </div>
           
           

        </div>
          

        <div className=" flex gap-2 items-center justify-center">
            <div>
            <label className="">Emergency contact 2</label>
            <input className={profileStyles.inputStyle} />
            </div>

            <div>
            <p>Relationship</p>
            <input className={profileStyles.inputStyle} />
            </div>
           
           

        </div>

          

          <label className="">Address</label>
          <input className={profileStyles.inputStyle} />

          <label className="">Your phone number</label>
          <input className={profileStyles.inputStyle} />

         

          

          

          <button
            className={profileStyles.inputStyle + " bg-red-500 text-white"}
          >
            Save and continue
          </button>

        
        </div>
      </div>
    </div>
  );
};

export default Profile;
