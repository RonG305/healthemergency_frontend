import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";


const Signin = () => {
  const signupStyles = {
    inputStyle:
      " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400 font-semibold",
    inputContainer:
      "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    signupContainer:
      "rounded-lg flex flex-col w-full px-7 items-center justify-center mt-3 ",
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
      const response = await fetch(`${API_BASE_URL}/api/accounts/login/`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {

        const data = await response.json()
        console.log(data)
        localStorage.setItem("access_token", data.access_token)


        setSuccessMessage("Login successful");
        setErrorMessage("");
        const timer = setTimeout(() => {
          navigate("/emergency_alert");
          return () => clearTimeout(timer);
        }, 3000);
      } else {
        setSuccessMessage("");
        const data = await response.json();
        setErrorMessage(data.detail || "Server error while signing in");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("An error occurred while trying to login");
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
    <div className={signupStyles.signupContainer}>
      <h3 className="font-bold mt-4 text-xl text-red-500">Login to account</h3>
      <div className={signupStyles.inputContainer}>
        {successMessage && (
          <p className="rounded-md px-2 py-2 text-sm text-green-700 bg-green-200 w-full">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="rounded-md px-2 py-2 text-sm text-red-600 bg-red-300 w-full">
            {errorMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={signupStyles.inputStyle}
              required
            />

            <label>Enter password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={signupStyles.inputStyle}
              required
            />

            <button
              type="submit"
              className={signupStyles.inputStyle + " bg-red-500 text-white"}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <Link className="text-red-500" to={"/register"}>
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
