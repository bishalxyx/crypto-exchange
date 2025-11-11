"use client"
import { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function RegisterPage({setIsLogin,isLogin}) {
  const [activeTab, setActiveTab] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    country: "South Korea (+82)",
    phone: "",
    referralCode: ""
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    console.log("Registration data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 xs:min-h-[300]">
      <div className="w-full min-w-[774] max-w-2xl bg-white rounded-2xl shadow-sm p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Register To Logo
          </h1>
          <p className="text-gray-600 text-base">
            Register in advance and enjoy the event benefits
          </p>
        </div>

        {/* Email/Mobile Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("email")}
            className={` py-2.5 px-6  rounded-full font-medium transition ${
              activeTab === "email"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Email
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={` py-2.5 px-6 rounded-full font-medium transition ${
              activeTab === "mobile"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Mobile
          </button>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Email/ID */}
          {activeTab==="email"?
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Email/ID
            </label>
            <input
              type="email"
              placeholder="Please fill in the email form."
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-300"
            />
          </div>
          :<><div  >
  <label className="block text-gray-800 font-semibold mb-2">
    Mobile Phone
  </label>

  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
    {/* Country Code Dropdown */}
    <div className="flex items-center bg-gray-100 px-3 border-r border-gray-300">
      <select
        className="bg-gray-100 focus:outline-none text-gray-700 text-sm font-medium"
        defaultValue="+91"
      >
        <option value="+91">+91</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
        <option value="+61">+61</option>
      </select>
    </div>

    {/* Phone Input */}
    <input
      type="tel"
      placeholder="Your Phone Number"
      className="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
    />
  </div>
</div>
</>
}

          {/* Password */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Password{" "}
              <span className="text-red-500 text-sm font-normal">
                (8 Or More Characters, Including Numbers And Special Characters)
              </span>
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Please enter a password."
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-300 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="relative mt-3">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Please re-enter your password."
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-300 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* NickName */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              NickName{" "}
              <span className="text-red-500 text-sm font-normal">
                (Excluding Special Characters)
              </span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              value={formData.nickname}
              onChange={(e) => handleChange("nickname", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-300 mt-2"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Country
            </label>
            <div className="relative">
              <select
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition appearance-none bg-white text-gray-700"
              >
                <option>South Korea (+82)</option>
                <option>United States (+1)</option>
                <option>United Kingdom (+44)</option>
                <option>India (+91)</option>
              </select>
              <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-900 font-semibold mb-1">
              Phone{" "}
              <span className="text-red-500 text-sm font-normal">
                (Enter Numbers Only)
              </span>
            </label>
            <input
              type="tel"
              placeholder="ex) 01012345678 (without '-')"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-300 mt-2"
            />
          </div>

          {/* Referral Code */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Referral Code
            </label>
            <input
              type="text"
              placeholder="Please enter your invitation code."
              value={formData.referralCode}
              onChange={(e) => handleChange("referralCode", e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition placeholder:text-gray-300"
            />
          </div>

          {/* Registration Button */}
          <button
            onClick={handleRegister}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-full transition duration-200 shadow-sm mt-8"
          >
            Registration
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already Have An Account?{" "}
          {/* <Link href="/login"> */}
          <button onClick={()=>console.log(setIsLogin(!isLogin))} className="text-red-500 cursor-pointer hover:text-red-600 font-semibold">
            Login
          </button>
          {/* </Link> */}
        </p>
      </div>
    </div>
  );
}