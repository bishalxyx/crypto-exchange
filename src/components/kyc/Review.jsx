'use client'
import { useState } from 'react'
import { User, IdCard, ClipboardCheck, CheckCircle, Calendar, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../utils/images/31.png'
export default function Review() {
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
                  className={`w-10  ${step.id!==1?'mt-10':''} h-10 flex items-center justify-center rounded-full border 
                    
                      bg-red-500 text-white border-red-500`
                    
                  }
                >
                  {step.icon}
                </div>

                <div className="ml-4 w-40">
                  <h3
                    className={`text-sm  font-semibold ${step.id!==1?'mt-10':''} 
                      text-red-500
                }]`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>

                {/* Line Connector */}
                 {step.id!==4&&
                  <div className={`absolute left-5 top-10 h-24 ${step.id!==1 ||step.id==4?'mt-12':'mt-2'}  w-[1px] bg-red-600`}></div>}
                
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex flex-col ml-40 w-full mr-12  bg-white px-4 mt-8">
      {/* Step indicator */}
      <p className="text-sm text-gray-500 ">Step 4/4</p>

      {/* Title */}
      <h1 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">
        Your request is currently under review
      </h1>
      <p className="text-gray-500 text-sm mt-1 mb-10 ">
        Please wait for confirmation
      </p>

      {/* Hourglass Image */}
      <div className="  w-full flex flex-col items-center h-24 mb-8">
        <div className='-ml-70'>
        <Image
          src={Logo}
          alt="Under review"
          height={113}
          width={113}
          priority
          className="object-contain  "
        />
        </div>

      {/* Description text */}
      <p className="w-full text-gray-600 text-base leading-relaxed mb-21">
        Your submitted documents are currently under review to verify your identity. 
        This process may <br /> take some time depending on the volume of requests. We will 
        notify you once your verification is <br />  complete. Thank you for your patience 
        as we work to ensure the security of your account.
      </p>

      {/* Contact button */}
      <button className="bg-red-500 w-46 -ml-70 text-white px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-red-600 transition">
        Contact Us
      </button>
      </div>
    </div>
        </div>
        
        
      </div>
      
    </div>
  )
}
