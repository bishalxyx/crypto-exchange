'use client'
import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full min-w-[670] max-w-md min-h-[756] bg-white rounded-2xl shadow-md  p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Login To Logo
          </h1>
          <p className="text-gray-600">
            Welcome back! Log In now to start trading
          </p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Email/Mobile Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email/Mobile No
            </label>
            <input
              type="text"
              placeholder="Email id | Phone No"
              
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-400"
            />
          </div>

          {/* Password Input */}
        

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                // checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer accent-red-500"
              />
              <span className="text-sm text-gray-700">Remember Me</span>
            </label>
            {/* <button className="text-sm text-red-500 hover:text-red-600 font-medium">
              Forgot Password?
            </button> */}
          </div>

          {/* Login Button */}
          <button
            // onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition duration-200 shadow-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login