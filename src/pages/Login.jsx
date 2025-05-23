import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginImg from '../assets/login.jpeg'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-4 sm:p-28 bg-[#4b4b4b] flex items-center justify-center min-h-screen">
      <div className="border-4 border-blue-500 p-4 sm:p-8 flex flex-col sm:flex-row justify-between h-auto sm:h-[600px] w-full sm:w-[1200px] shadow-xl">
        <div className="pr-0 sm:pr-3 mb-8 sm:mb-36 flex flex-auto flex-col justify-between">
          <div>
            <h2 className="text-yellow-400 text-center text-xl font-bold border-b border-yellow-400 pb-2 mb-6">
              Log In
            </h2>
            <label className="text-white block mb-1">User Id</label>
            <input
              type="text"
              placeholder="4-15 char; allow number"
              className="w-full p-2 bg-[#3d3d3d] text-white rounded mb-4"
            />

            <label className="text-white block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="8-20 char"
                className="w-full p-2 bg-[#3d3d3d] text-white rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <p className="text-white text-sm mt-3">
              Do not have an account?
              <span className="text-red-400 cursor-pointer ml-1">Signup</span>
            </p>

            <p className="text-white text-sm underline mt-2 cursor-pointer">
              Forgot password?
            </p>
          </div>

          <div className="flex justify-end mt-4 sm:mt-0">
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-black w-full sm:w-[734px] flex items-center justify-center overflow-hidden">
          <img 
            src={loginImg} 
            alt="Login" 
            className="w-full h-full object-cover max-h-[300px] sm:max-h-[600px]"
          />
        </div>
      </div>

      <p className="absolute top-2 sm:top-[-1.875rem] text-white text-sm">
        If you encounter issues, please contact
        <span className="text-red-500 ml-1">Online CS</span>
      </p>
    </div>
  );
}
