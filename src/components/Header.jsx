"use client"
import Link from "next/link";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
export default function Header({text}) {
  const [isSearch,setIsSearch]=useState(false);
  return (
    <header>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">
        
        <div className="flex items-center -ml-18">
          <span className="text-2xl text-[#EF443B] font-bold">LOGO</span>
        </div>

    
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/buyCrypto" className={`text-${text} hover:text-red-400`}>Buy Crypto</Link>
          <Link href="/markets" className={`text-${text} hover:text-red-400`}>Markets</Link>
          <Link href="/trade" className={`text-${text} hover:text-red-400`}>Trade</Link>
          <Link href="/support" className={`text-${text} hover:text-red-400`}>Support</Link>
        </nav>

        <div className="flex items-center space-x-4">
    
          <div className="hidden md:flex items-center bg-white/10 px-3 py-1 rounded-full">
          {isSearch&&
            <input
              type="text"
              placeholder="Search..." 
              className="bg-transparent text-sm focus:outline-none placeholder-gray-300 text-white"
            />
          }
            <svg className={`w-4 h-4 text-${text}  ml-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24" onClick={()=>setIsSearch(!isSearch)}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className={`p-2  rounded-full text-${text}  hover:bg-white/10 transition`}>
          <TbWorld />
          </button>
          {/* Dark Mode Toggle */}
          <button className="p-2 rounded-full  hover:bg-white/10 transition">
            <svg className={`w-5 h-5 text-${text} `} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-8.485h1M3.515 12.515h1M16.95 7.05l.707-.707M6.343 17.657l.707-.707M16.95 16.95l.707.707M6.343 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
            </svg>
          </button>
        
          {/* Login / Signup */}
          <button className="bg-[#FF3E54] hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
            Login / Sign up
          </button>
          

        </div>
      </div>
    </header>
  )
}