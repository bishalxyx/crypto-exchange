"use client"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
// import Register from '../components/Register'
import RegisterPage from "../components/Register";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password, rememberMe });
  };
  const [isLogin,setIsLogin]=useState(true);

  return (
    <>
    {isLogin?<div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl  p-8">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-400"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="12345"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer accent-red-500"
              />
              <span className="text-sm text-gray-700">Remember Me</span>
            </label>
            <Link href='/login/forgot-password'>
            <button className="text-sm cursor-pointer text-red-500 hover:text-red-600 font-medium">
              Forgot Password?
            </button>
            </Link>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition duration-200 shadow-sm"
          >
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 text-center text-sm text-gray-500">
          Or login with
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700 font-medium">Continue With Google</span>
          </button>

          {/* Facebook Button */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200">
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-gray-700 font-medium">Continue With Facebook</span>
          </button>
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Not A Member?{" "}
          {/* <Link > */}
          <button onClick={()=>setIsLogin(!isLogin)} className="text-red-500 cursor-pointer hover:text-red-600 font-semibold">
            Register
          </button>
          {/* </Link> */}
        </p>
      </div>
    </div>:<RegisterPage setIsLogin={setIsLogin} isLogin={isLogin}/>}
    
    </>
  );
}