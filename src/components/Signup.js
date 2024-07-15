import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const signupStyles = {
    inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400",
    inputContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    signupContainer: "rounded-lg flex flex-col w-full px-7 items-center justify-center ",
  };
  return (
    <div className={signupStyles.signupContainer}>
      <h3 className="  font-bold mt-4 text-xl text-red-500">
        Create your account
      </h3>
      <div className={signupStyles.inputContainer}>
        <div>
          <label className="">Username</label>
          <input className={signupStyles.inputStyle} />

          <label className="">First name</label>
          <input className={signupStyles.inputStyle} />

          <label className="">Last name</label>
          <input className={signupStyles.inputStyle} />

          <label className="">Email address</label>
          <input className={signupStyles.inputStyle} />

          <label className="">Enter password</label>
          <input className={signupStyles.inputStyle} />

          <label className="">Re enter password</label>
          <input className={signupStyles.inputStyle} />

          <button
            className={signupStyles.inputStyle + " bg-red-500 text-white"}
          >
            Register
          </button>

          <Link className=' text-red-500' to={'/'}> Have an account?  Login </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
