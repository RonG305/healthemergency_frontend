import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import { API_BASE_URL } from "../apiConfig";
import BtnLoader from "./BtnLoader";

const EmergencyAlert = () => {
  const alertStyles = {
    inputStyle:
      "px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400 my-3 font-semibold",
    alertContainer:
      "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2",
    profileContainer:
      "rounded-lg flex flex-col w-full px-7 items-center justify-center",
    profileHeader: "font-bold text-red-500 text-xl my-4",
  };

  const emergencyStyles = {
    buttonStyle: "border border-slate-200 rounded-md px-2 py-1 mr-2 my-4",
    settingsCardStyle:
      "w-28 h-fit rounded-md  shadow-md shadow-slate-200 p-3 absolute bg-white top-12 right-0",
  };

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    emergency_type: "",
    profile: {},
    report_time: ""
  })
  const [profile, setProfile] = useState({})


  const handleShowCard = () => {
    setShow(!show);
  };


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name]: value
    })
    
  }

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
             
              console.log(data)
            } else {
           
            }
            
        } catch(error) {
            console.log("An error occured while fetching profile details")
        }
      }
    
    fetchUserProfile()
  }, [])






  const sendEmergencyAlert = async() => {
    navigator.geolocation.getCurrentPosition(
      async(position)=> {
        const {latitude, longitude} = position.coords;
        const timestamp = position.timestamp;


        

        const date = new Date(timestamp);

        const formattedTime = date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });

        console.log(timestamp); 

        console.log("Latitude", latitude)
        console.log("Logitude", longitude)
        console.log("POSITION", position)

        try {
          const response = await fetch(`${API_BASE_URL}/api/emergency/create_emeregency_alert/`, {
            method: "POST",
            headers : {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            },
  
            body: JSON.stringify({
              latitude:latitude,
              longitude:longitude,
              emergency_type:formData.emergency_type,
              profile: profile,
              report_time: formattedTime

            })
          })
  
          if(response.ok) {
            console.log("Data submited succesifully")
            navigate("/audio")
          } else {
            console.log("Server eror")
          }
        } catch(error) {
          console.log("An error occured while sending emergency alert")
        }

       
      }
    )


  }

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/accounts/logout/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (response.ok) {
        console.log("Logout successifull");
        localStorage.removeItem("access_token");
        setLoading(true);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log("An error occured while logging out", error);
    }
  };


  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={alertStyles.profileContainer}>
      <div className={alertStyles.alertContainer}>
        <div className="relative flex items-center justify-between">
          <h2 className={alertStyles.profileHeader}>Emergency Alert</h2>
          <PiDotsThreeVerticalBold
            onClick={handleShowCard}
            className="relative cursor-pointer"
            size={20}
          />

          {show && (
            <div className={emergencyStyles.settingsCardStyle}>
              <Link to={`/profile_view`}>
                <p className="flex items-center gap-2 mb-5">
                  <HiOutlineUserCircle size={20} /> Profile
                </p>
              </Link>

              {loading ? (
                <BtnLoader buttonTitle={"loading..."} />
              ) : (
                <p
                  onClick={handleLogout}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <RiLogoutCircleLine size={20} />
                  Logout
                </p>
              )}
            </div>
          )}
        </div>

        <p>
          If you are in an emergency, press the button below to send an alert to
          the nearest hospital.
        </p>

        <select
          name="emergency_type"
          onChange={handleChange}
          className={alertStyles.inputStyle}
        >
          <option value="">Select emergency type</option>
          <option value="Medical">Medical</option>
          <option value="Fire">Fire</option>
          <option value="Accident">Accident</option>
          <option value="Heart Attack">Heart Attack</option>
          <option value="Stroke">Stroke</option>
          <option value="Severe Allergic Reaction">Severe Allergic Reaction</option>
        </select>
        <button onClick={sendEmergencyAlert} className="bg-red-500 text-white rounded-md p-2 my-4">
          Send Emergency Alert
        </button>
      </div>

      {/* <div className="flex items-center justify-between">
        <Link to={`/profile_view/`} className={emergencyStyles.buttonStyle}>
          Profile
        </Link>
        <Link to={`/`} className="rounded-md bg-red-500 px-3 py-1 text-white">
          Back
        </Link>
      </div> */}
    </div>
  );
};

export default EmergencyAlert;
