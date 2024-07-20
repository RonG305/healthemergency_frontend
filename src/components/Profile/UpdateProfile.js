import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../apiConfig";

const UpdateProfile = () => {
  const profileStyles = {
    inputStyle: "px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400 font-semibold",
    inputContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    profileContainer: "rounded-lg flex flex-col w-full px-7 items-center justify-center my-3",
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    date_of_birth: "",
    gender: "",
    blood_group: "",
    alergies: "",
    medical_condition: "",
    emergency_contact1: "",
    relationship1: "",
    emergency_contact2: "",
    relationship2: "",
    physical_address: "",
    phone_number: "",
  });

  const navigate = useNavigate();
  const params = useParams()


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/accounts/get_profile/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        if (response.ok) {
          const profileData = await response.json();
          setFormData(profileData); 
        } else {
          throw new Error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setErrorMessage("Failed to fetch profile data");
      }
    };
    fetchProfileData();
  }, [params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/accounts/update_profile/${params.id}/`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (response.ok) {
        setSuccessMessage("Profile updated successfully");
        setErrorMessage("");
        setTimeout(() => {
          navigate("/emergency_alert");
        }, 3000);
      } else {
        const data = await response.json();
        setErrorMessage(data.detail || "Server error while updating profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("An error occurred while trying to update profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  return (
    <div className={profileStyles.profileContainer}>
      <h3 className="font-bold mt-4 text-xl text-red-500">Update your profile</h3>
      <div className={profileStyles.inputContainer}>
        {successMessage && (
          <p className="rounded-md px-2 py-1 text-sm text-green-600 bg-green-300 w-full">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="rounded-md px-2 py-1 text-sm text-red-600 bg-red-300 w-full">
            {errorMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
              className={profileStyles.inputStyle}
            />

            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className={profileStyles.inputStyle}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>Blood Group Type</label>
            <select
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              required
              className={profileStyles.inputStyle}
            >
              <option value="">Select blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="I don't know">I don't know</option>
            </select>

            <label>Allergies</label>
            <textarea
              name="alergies"
              value={formData.alergies}
              onChange={handleChange}
              className={profileStyles.inputStyle}
              rows={5}
              cols={10}
            />

            <label>Medical Condition</label>
            <input
              name="medical_condition"
              value={formData.medical_condition}
              onChange={handleChange}
              className={profileStyles.inputStyle}
            />

            <div className="flex gap-2 items-center justify-center">
              <div>
                <label>Emergency Contact 1</label>
                <input
                  name="emergency_contact1"
                  value={formData.emergency_contact1}
                  onChange={handleChange}
                  className={profileStyles.inputStyle}
                />
              </div>

              <div>
                <label>Relationship</label>
                <input
                  name="relationship1"
                  value={formData.relationship1}
                  onChange={handleChange}
                  className={profileStyles.inputStyle}
                />
              </div>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <div>
                <label>Emergency Contact 2</label>
                <input
                  name="emergency_contact2"
                  value={formData.emergency_contact2}
                  onChange={handleChange}
                  className={profileStyles.inputStyle}
                />
              </div>

              <div>
                <label>Relationship</label>
                <input
                  name="relationship2"
                  value={formData.relationship2}
                  onChange={handleChange}
                  className={profileStyles.inputStyle}
                />
              </div>
            </div>

            <label>Address</label>
            <input
              name="physical_address"
              value={formData.physical_address}
              onChange={handleChange}
              className={profileStyles.inputStyle}
            />

            <label>Phone Number</label>
            <input
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className={profileStyles.inputStyle}
            />

            <button
              type="submit"
              className={profileStyles.inputStyle + " bg-red-500 text-white"}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save and continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
