import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";


const Signup = () => {
  const signupStyles = {
    inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400 font-semibold",
    inputContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    signupContainer: "rounded-lg flex flex-col w-full px-7 items-center justify-center mt-3 ",
  };

  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading]= useState(false)


  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: ""
  })

  const navigate = useNavigate()


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
        ...formData,
        [name]: value
    })
  }




  const handleSubmit = async(event) => {
    event.preventDefault()

    if(formData.password !== formData.password2) {
        setErrorMessage("Both passwords do not match, try again")
        return
    }

    setLoading(true)

    try {
        const response = await fetch(`${API_BASE_URL}/api/accounts/register/`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers : {
                "Content-Type": "application/json",
            }
        })
    
        if(response.ok) {
            console.log("Login succesifull")
            setSuccessMessage("Account created succesifully")
            setTimeout(() => {
                navigate('/')
            }, 3000);
           
        } else {
            const data = await response.json();
            setErrorMessage(data.detail || "Server error while signing in");
        }

    } catch(error) {
        console.log("An error occured while trying to login", error)
        setErrorMessage("An error occurred while trying to register");
    } finally{
        setLoading(false)
    }

  
  }

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
        <div>
        {successMessage && (
        <p className="rounded-md px-2 py-2 text-sm text-green-700 bg-green-300 w-full">
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className="rounded-md px-2 py-2 text-sm text-red-600 bg-red-300 w-full">
          {errorMessage}
        </p>
      )}
        </div>
      <h3 className="  font-bold mt-4 text-xl text-red-500">
        Create your account
      </h3>
      <div className={signupStyles.inputContainer}>
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

          <label>First name</label>
          <input 
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className={signupStyles.inputStyle}
                required
             />

          <label >Last name</label>
          <input 
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className={signupStyles.inputStyle}
                required
          />

          <label>Email address</label>
          <input 
                name="email"
                value={formData.email}
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

          <label>Re enter password</label>
          <input 
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                className={signupStyles.inputStyle}
                required
          />

          <button
            type="submit"
            className={signupStyles.inputStyle + " bg-red-500 text-white"}
          >
            {loading ? "Registering ..." : "Register"}
          </button>

         
          <Link className=' text-red-500' to={'/'}> Have an account?  Login </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
