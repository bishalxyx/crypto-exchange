'use client'
import { useState } from 'react'
import Image from 'next/image'
import { 
  Home, Wallet, Clock, Settings, 
  LogOut, ChevronDown, ChevronUp, FileText, 
  ShieldCheck, UserCheck, Mail
} from 'lucide-react'
import Link from 'next/link'
// import ProfilePic from '../public/profile.jpg' // Replace with your image

export default function Sidebar() {
  const [walletOpen, setWalletOpen] = useState(true)
  const [historyOpen, setHistoryOpen] = useState(false)

  return (
    <aside className="w-61 h-[870]  bg-white border-r flex flex-col justify-between py-6 px-4 ">
      {/* === TOP SECTION === */}
      <div>
        {/* Profile */}
        <div className="flex items-center gap-3 px-2 mb-4">
          {/* <Image
            src={}
            alt="User profile"
            width={42}
            height={42}
            className="rounded-full"
          /> */}
          <div>
            <p className="text-sm text-gray-500">Hey 👋</p>
            <p className="font-semibold text-gray-800">Lucas Siman</p>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* === Navigation Menu === */}
        <nav className="space-y-2 text-gray-700">
          {/* Dashboard */}
          <div className="flex items-center gap-3 py-2 px-3 rounded-lg bg-gray-50 font-medium text-black cursor-pointer hover:bg-gray-100">
            <Home size={18} />
            Dashboard
          </div>

          {/* Wallet Menu */}
          <div>
            <button
              onClick={() => setWalletOpen(!walletOpen)}
              className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3 font-medium">
                <Wallet size={18} />
                Wallet
              </div>
              {walletOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {walletOpen && (
              <div className="pl-10 space-y-1 mt-1 text-sm text-gray-600">
                <p className="cursor-pointer hover:text-black">Asset</p>
                <Link href='/dashboard/deposit'>
                <p className="bg-red-50 text-red-500 font-medium px-2 py-1 rounded-md w-fit cursor-pointer">
                  Deposit
                </p>
                </Link>
                <Link href='/dashboard/withdrawal'>
                <p className="cursor-pointer hover:text-black">Withdraw</p></Link>
              </div>
            )}
          </div>

          {/* History Menu */}
          <div>
            <button
              onClick={() => setHistoryOpen(!historyOpen)}
              className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3 font-medium">
                <Clock size={18} />
                History
              </div>
              {historyOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {historyOpen && (
              <div className="pl-10 space-y-1 mt-1 text-sm text-gray-600">
                <Link href='/dashboard/depositHistory'>
                <p className="cursor-pointer hover:text-black">Deposit History</p>
                </Link>
                <Link href='/dashboard/withdrawHistory'>
                <p className="cursor-pointer hover:text-black">Withdraw History</p>
                </Link>
                <Link href='/dashboard/orderHistory'>
                <p className="cursor-pointer hover:text-black">Order History</p>
                </Link>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link href='/dashboard/kycVerification'>
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <UserCheck size={18} />
            KYC Verification
          </div>
          </Link>

          <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Mail size={18} />
            Ticketing
          </div>

          <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Settings size={18} />
            Settings
          </div>
        </nav>
      </div> 

      {/* === FOOTER SECTION === */}
      <div>
        <hr className="my-4 border-gray-200" />
        <div className="text-gray-500 text-sm mb-2">Quick Access</div>

        {/* Quick Access Icons */}
        <div className="flex justify-between bg-gray-50 px-4 py-2 rounded-xl border">
          <FileText size={18} className="cursor-pointer hover:text-black" />
          <ShieldCheck size={18} className="cursor-pointer hover:text-black" />
          <UserCheck size={18} className="cursor-pointer hover:text-black" />
          <Settings size={18} className="cursor-pointer hover:text-black" />
        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 text-red-500 mt-5 font-medium hover:text-red-600">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  )
}
