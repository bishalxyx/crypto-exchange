'use client'
import React, { useState } from 'react'
import { Eye, EyeOff } from "lucide-react";
const ResetPassword = () => {
     const [showPassword, setShowPassword] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full min-w-[670]  max-w-md min-h-[756] bg-white rounded-2xl shadow-md  p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Login To Logo
          </h1>
          <p className="text-[#18191D]">
            Welcome back! Reset Password <br/>to Start Trading
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-400 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div>
          <p className='text-xs text-[#777E90]'>✓ 8 to 128 characters</p>
          <p className='text-xs text-[#777E90]'>✓ At least 1 number</p>
          <p className='text-xs text-[#777E90]'>✓ At least 1 upper case letter</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Passoword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-400 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

        

         

          {/* Login Button */}
          <button
            // onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition duration-200 shadow-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword