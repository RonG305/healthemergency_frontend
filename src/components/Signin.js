import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const signupStyles = {
    inputStyle: " px-2 py-2 rounded-md w-full border border-slate-300 mb-2 outline-red-400",
    inputContainer: "flex flex-col w-full px-3 md:w-[400px] md:h-[400px] mb-2 text-sm my-2 w-full",
    signupContainer: "rounded-lg flex flex-col w-full px-7 items-center justify-center ",
  };
  return (
    <div className={signupStyles.signupContainer}>
      <h3 className="  font-bold mt-4 text-xl text-red-500">
        Login to account
      </h3>
      <div className={signupStyles.inputContainer}>
        <div>
          <label className="">Username</label>
          <input className={signupStyles.inputStyle} />

         

          <label className="">Enter password</label>
          <input className={signupStyles.inputStyle} />

          

          <button
            href="/profile_setup"
            className={signupStyles.inputStyle + " bg-red-500 text-white"}
          >
            Login
          </button>

          <Link className=' text-red-500 ' to={'/register'}>Don't have an account?  Register </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
