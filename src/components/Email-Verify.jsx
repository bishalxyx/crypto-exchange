"use client"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function EmailVerify() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center  px-4 py-8 ">
      <div className="w-full min-w-[670] -mt-80  max-w-md bg-white rounded-2xl  p-8 shadow-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Login To Logo
          </h1>
          <p className="text-gray-600">
            Enter Verification Code S*******@gmail.com
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Email/Mobile Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email Verification Code
            </label>
            <div className="bg-white rounded-lg border border-gray-200 px-6 py-4 flex items-center justify-between">
          {/* Input Field */}
          <input
            type="text"
            placeholder="6- digit code"
            maxLength={6}
            className="flex-1 text-gray-400 placeholder:text-gray-400 focus:outline-none text-base"
          />

          {/* Resend Code Button */}
          <button
            
            className="text-red-500 hover:text-red-600 font-medium text-base whitespace-nowrap transition"
          >
            Resend Code
          </button>
        </div>
          </div>

          {/* Password Input */}
         

          {/* Remember Me & Forgot Password */}
         
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition duration-200 shadow-sm"
          >
            Submit
          </button>
        </div>


      </div>
    </div>
  );
}