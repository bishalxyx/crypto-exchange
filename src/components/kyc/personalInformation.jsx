'use client'
import { useState } from 'react'
import { User, IdCard, ClipboardCheck, CheckCircle, Calendar, Globe } from 'lucide-react'
import Link from 'next/link'
export default function PersonalInformation() {
  const [currentStep, setCurrentStep] = useState(1)

  const steps = [
    { id: 1, title: 'Personal Information', desc: 'Submit your information', icon: <User className="w-5 h-5" /> },
    { id: 2, title: 'ID Verification', desc: 'Upload documents', icon: <IdCard className="w-5 h-5" /> },
    { id: 3, title: 'Review', desc: 'Confirm your information', icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: 4, title: 'Done', desc: 'Wait for confirmation', icon: <CheckCircle className="w-5 h-5" /> },
  ]

  return (
    <div className="ml-28 mr-28 w-full    mt-8 bg-gray-50  py-10 px-5">
      <div className="bg-white w-full  rounded-2xl shadow-sm border overflow-hidden">
        <div className='ml-13 mt-13'>
          <h2 className="text-2xl font-medium text-gray-800 mb-1">KYC Verification</h2>
          <p className="text-[#777E90] text-base mb-6">
            This process takes only a few minutes to complete
          </p>
          <hr className='mr-20  bg-[#777E90]'/>
          </div>
        {/* Left Sidebar */}
        <div className='flex'>
        <div className="w-72 h-[639] ml-13 rounded-lg mt-4 bg-gradient-to-b from-pink-50 to-white p-8 border-r hidden md:block">
          <div className="-mt-5">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-start mt-17">
                <div
                  className={`w-10  ${step.id!==1?'mt-10':''} h-10 flex items-center justify-center rounded-full border ${
                    currentStep === step.id
                      ? 'bg-red-500 text-white border-red-500'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {step.icon}
                </div>

                <div className="ml-4 w-40">
                  <h3
                    className={`text-sm  font-semibold ${step.id!==1?'mt-10':''} ${
                      currentStep === step.id ? 'text-red-500' : 'text-gray-800'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>

                {/* Line Connector */}
                 {step.id!==4&&
                  <div className={`absolute left-5 top-10 h-24 ${step.id!==1 ||step.id==4?'mt-12':'mt-2'}  w-[1px] bg-gray-300`}></div>}
                
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-8 ml-22">
          {/* Step Header */}
          <p className="text-sm text-gray-500 mb-1 mt-11">Step {currentStep}/4</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Verify Your Identity</h2>
          <p className="text-gray-500 text-sm mb-6">
            Fill in the required fields with your personal information
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div>
              <label className="text-sm text-gray-600">First name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  defaultValue="Lucas"
                  className="w-full border rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Last name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  defaultValue="Bennett"
                  className="w-full border rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Your country</label>
              <div className="relative mt-1">
                <Globe className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                <select className="w-full border rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Canada</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Date of birth</label>
              <div className="relative mt-1">
                <Calendar className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                <input
                  type="date"
                  defaultValue="2002-11-22"
                  className="w-full border rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </form> 
          </div>
        </div>
        <div className="flex justify-end ">
            <button
  onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
  className="flex w-44 h-14 justify-center items-center gap-2 text-gray-600 text-sm font-medium rounded-lg hover:text-gray-800 transition"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 9 16" fill="none">
<path d="M7.74978 15.5008C7.55778 15.5008 7.36575 15.4278 7.21975 15.2808L0.21975 8.28079C-0.07325 7.98779 -0.07325 7.51275 0.21975 7.21975L7.21975 0.21975C7.51275 -0.07325 7.98779 -0.07325 8.28079 0.21975C8.57379 0.51275 8.57379 0.987785 8.28079 1.28079L1.81081 7.75076L8.28079 14.2207C8.57379 14.5137 8.57379 14.9888 8.28079 15.2818C8.13379 15.4278 7.94178 15.5008 7.74978 15.5008Z" fill="#353945"/>
</svg>
  <span>Back</span>    
</button>
<Link href='/dashboard/kycVerification/personalInformation/idVerification'>
            <button
              onClick={() => setCurrentStep((s) => Math.min(4, s + 1))}
              className="bg-red-500 w-45 h-14 mr-20 hover:bg-red-600 mb-14 text-white px-8 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              <p className='ml-9'>Next</p> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
<path d="M0.749779 15.5017C0.557779 15.5017 0.36575 15.4288 0.21975 15.2818C-0.07325 14.9888 -0.07325 14.5137 0.21975 14.2207L6.68972 7.75076L0.21975 1.28079C-0.07325 0.987785 -0.07325 0.51275 0.21975 0.21975C0.51275 -0.07325 0.987785 -0.07325 1.28079 0.21975L8.28079 7.21975C8.57379 7.51275 8.57379 7.98779 8.28079 8.28079L1.28079 15.2808C1.13379 15.4288 0.941779 15.5017 0.749779 15.5017Z" fill="#FCFCFD"/>
</svg>
            </button>
            </Link>
        </div>
        
      </div>
      
    </div>
  )
}
