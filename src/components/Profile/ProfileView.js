import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";
import { FiEdit } from "react-icons/fi";
import { IoAddCircleSharp } from "react-icons/io5";

const ProfileView = () => {
  const profileStyles = {
    inputStyle:
      " px-2 py-2 rounded-md w-full bg-red-50 font-semibold border-slate-300 mb-2 outline-red-400 font-semibold",
    inputContainer:
      "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    profileContainer:
      "rounded-lg flex flex-col w-full px-7 h-fit items-center justify-center my-3 ",
  };

  const [profile, setProfile] =  useState({})
  const [hasProfile, setHasProfile] = useState(false)

  useEffect(() => {
    const fetchUserProfile = async() => {
        try{
            const response = await fetch(`${API_BASE_URL}/api/accounts/get_profile/`, {
              method: "GET",
              headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
              }
            })
            
            if(response.ok) {
              const data = await response.json()
              setProfile(data)
              setHasProfile(true)
              console.log(data)
            } else {
              setHasProfile(false)
            }
            
        } catch(error) {
            console.log("An error occured while fetching profile details")
        }
      }
    
    fetchUserProfile()
  }, [])

  return (
    <div className={profileStyles.profileContainer}>
      <h3 className="font-bold mt-4 text-xl text-red-500"> profile</h3>
      <div className={profileStyles.inputContainer}>
        <section className="rounded-md w-full h-[20vh] p-4 bg-red-200 ">

          {hasProfile ? (
              <Link to={`/update_profile/${profile.id}`} className="flex flex-col items-end border float-right border-dotted w-fit text-white rounded-lg p-3 bg-red-500 cursor-pointer border-slate-500">
              <FiEdit size={20} />
              <p>update profile</p>
              </Link>
          ) : (
            <Link to={`/profile_setup`} className="flex flex-col items-end border border-dotted w-fit text-white rounded-lg p-3 bg-red-500 cursor-pointer border-slate-500">
            <IoAddCircleSharp size={20} />
            <p>add profile</p>
            </Link>
          )}

          
          
        </section>

        <div className=" my-5">
          <p className=" font-semibold text-base py-2">Personal Information</p>
          <div>
            <p>Full Name</p>
            <p className={profileStyles.inputStyle}>{profile.first_name} {profile.last_name} </p>
          </div>

          <div>
            <p>Date of Birth</p>
            <p className={profileStyles.inputStyle}>{profile.date_of_birth}</p>
          </div>

          <div>
            <p>Gender</p>
            <p className={profileStyles.inputStyle}>{profile.gender}</p>
          </div>

          <div>
            <p>Blood Group</p>
            <p className={profileStyles.inputStyle}>{profile.blood_group}</p>
          </div>
        </div>

        <div className=" my-5">
          <p className=" font-semibold text-base py-2">Medical Information</p>
          <div>
            <p>Allergies</p>
            <p className={profileStyles.inputStyle}>{profile.alergies}</p>
          </div>

          <div>
            <p>Medical Condition</p>
            <p className={profileStyles.inputStyle}>{profile.medical_condition}</p>
          </div>
        </div>

        <div className=" my-5">
          <p className=" font-semibold text-base my-2">Contact Information</p>
          <div className="flex gap-2 justify-between">
            <div>
              <label>Emergency Contact 1</label>
              <p className={profileStyles.inputStyle}> {profile.emergency_contact1}</p>
            </div>

            <div>
              <label>Relationship1</label>
              <p className={profileStyles.inputStyle}>{profile.relationship1}</p>
            </div>
          </div>

          <div className="flex gap-2  justify-between">
            <div>
              <label>Emergency Contact 2</label>
              <p className={profileStyles.inputStyle}> {profile.emergency_contact2}</p>
            </div>

            <div>
              <label>Relationship2</label>
              <p className={profileStyles.inputStyle}>{profile.relationship2}</p>
            </div>
          </div>
        </div>


        <div className=" my-5">
          <p className=" font-semibold text-base py-2">Address</p>
          <div>
            <p>Physical Address</p>
            <p className={profileStyles.inputStyle}>{profile.physical_address}</p>
          </div>

          <div>
            <p>Phone Number</p>
            <p className={profileStyles.inputStyle}>{profile.phone_number}</p>
          </div>
        </div>

        <Link to={`/emergency_alert`} className=" rounded-md px-2 py-2 text-center text-white font-semibold bg-red-500 w-full mb-4">Back</Link>
      </div>

    
    </div>
  );
};

export default ProfileView;
