'use client'
import { useState } from 'react'
// import { User, IdCard, ClipboardCheck, CheckCircle, Link } from 'lucide-react'
import Logo from '../../../utils/images/29.png'
import Image from 'next/image'
import Link from 'next/link'


export default function KycVerification() {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = [
    { id: 1, name: 'Personal Information', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17.625 2.25H6.375C3.715 2.25 2.25 3.715 2.25 6.375V17.625C2.25 20.285 3.715 21.75 6.375 21.75H17.625C20.285 21.75 21.75 20.285 21.75 17.625V6.375C21.75 3.715 20.285 2.25 17.625 2.25ZM17.25 20.25H6.75V19.87C6.75 19.037 7.00504 16.3199 10.29 16.3199H13.71C16.995 16.3199 17.25 19.037 17.25 19.87V20.25ZM20.25 17.625C20.25 19.031 19.787 19.817 18.75 20.111V19.87C18.75 17.54 17.43 14.8199 13.71 14.8199H10.29C6.57004 14.8199 5.25 17.541 5.25 19.87V20.111C4.213 19.817 3.75 19.03 3.75 17.625V6.375C3.75 4.535 4.535 3.75 6.375 3.75H17.625C19.465 3.75 20.25 4.535 20.25 6.375V17.625ZM12.0081 6.25C9.94106 6.25 8.25806 7.932 8.25806 10C8.25806 12.068 9.94106 13.75 12.0081 13.75C14.0751 13.75 15.7581 12.068 15.7581 10C15.7581 7.932 14.0751 6.25 12.0081 6.25ZM12.0081 12.25C10.7681 12.25 9.75806 11.241 9.75806 10C9.75806 8.759 10.7681 7.75 12.0081 7.75C13.2481 7.75 14.2581 8.759 14.2581 10C14.2581 11.241 13.2481 12.25 12.0081 12.25Z" fill="white"/>
</svg> },
    { id: 2, name: 'ID Verification', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
<path d="M6.75598 8.30005C5.43298 8.30005 4.35699 7.22302 4.35699 5.90002C4.35699 4.57702 5.43298 3.5 6.75598 3.5C8.07898 3.5 9.15601 4.57702 9.15601 5.90002C9.15601 7.22302 8.07898 8.30005 6.75598 8.30005ZM6.75598 5C6.25998 5 5.85699 5.40402 5.85699 5.90002C5.85699 6.39602 6.25998 6.80005 6.75598 6.80005C7.25198 6.80005 7.65601 6.39602 7.65601 5.90002C7.65601 5.40402 7.25198 5 6.75598 5ZM9.75 13C9.336 13 9 12.664 9 12.25V11.947C9 11.227 8.50303 10.5 7.39203 10.5H6.10901C4.99801 10.5 4.50098 11.227 4.50098 11.947V12.25C4.50098 12.664 4.16498 13 3.75098 13C3.33698 13 3.00098 12.664 3.00098 12.25V11.947C3.00098 10.483 4.06801 9 6.10901 9H7.39203C9.43303 9 10.5 10.482 10.5 11.947V12.25C10.5 12.664 10.164 13 9.75 13ZM15.75 16.5H3.75C1.332 16.5 0 15.168 0 12.75V3.75C0 1.332 1.332 0 3.75 0H15.75C18.168 0 19.5 1.332 19.5 3.75V12.75C19.5 15.168 18.168 16.5 15.75 16.5ZM3.75 1.5C2.173 1.5 1.5 2.173 1.5 3.75V12.75C1.5 14.327 2.173 15 3.75 15H15.75C17.327 15 18 14.327 18 12.75V3.75C18 2.173 17.327 1.5 15.75 1.5H3.75ZM16.5 6.18799C16.5 5.77399 16.164 5.43799 15.75 5.43799H11.75C11.336 5.43799 11 5.77399 11 6.18799C11 6.60199 11.336 6.93799 11.75 6.93799H15.75C16.164 6.93799 16.5 6.60199 16.5 6.18799ZM16.45 10.25C16.45 9.836 16.114 9.5 15.7 9.5H12.7C12.286 9.5 11.95 9.836 11.95 10.25C11.95 10.664 12.286 11 12.7 11H15.7C16.114 11 16.45 10.664 16.45 10.25Z" fill="#18191D"/>
</svg> },
    { id: 3, name: 'Review', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.375 0H4.125C1.465 0 0 1.465 0 4.125V15.375C0 18.035 1.465 19.5 4.125 19.5H15.375C18.035 19.5 19.5 18.035 19.5 15.375V4.125C19.5 1.465 18.035 0 15.375 0ZM18 15.375C18 17.215 17.215 18 15.375 18H4.125C2.285 18 1.5 17.215 1.5 15.375V4.125C1.5 2.285 2.285 1.5 4.125 1.5H15.375C17.215 1.5 18 2.285 18 4.125V15.375ZM15 7.25C15 7.664 14.664 8 14.25 8H10.25C9.836 8 9.5 7.664 9.5 7.25C9.5 6.836 9.836 6.5 10.25 6.5H14.25C14.664 6.5 15 6.836 15 7.25ZM15 12.25C15 12.664 14.664 13 14.25 13H10.25C9.836 13 9.5 12.664 9.5 12.25C9.5 11.836 9.836 11.5 10.25 11.5H14.25C14.664 11.5 15 11.836 15 12.25ZM7.78003 6.05298C8.07303 6.34598 8.07303 6.82101 7.78003 7.11401L6.44702 8.44702C6.30102 8.59302 6.10899 8.66699 5.91699 8.66699C5.72599 8.66699 5.53296 8.594 5.38696 8.448L4.71997 7.78101C4.42697 7.48801 4.42697 7.01297 4.71997 6.71997C5.01297 6.42797 5.48701 6.42697 5.78101 6.71997L5.91797 6.85699L6.72095 6.05402C7.01295 5.76002 7.48703 5.75998 7.78003 6.05298ZM7.78003 11.053C8.07303 11.346 8.07303 11.821 7.78003 12.114L6.44702 13.447C6.30102 13.593 6.10899 13.667 5.91699 13.667C5.72599 13.667 5.53296 13.594 5.38696 13.448L4.71997 12.781C4.42697 12.488 4.42697 12.013 4.71997 11.72C5.01297 11.428 5.48701 11.427 5.78101 11.72L5.91797 11.857L6.72095 11.054C7.01295 10.76 7.48703 10.76 7.78003 11.053Z" fill="#18191D"/>
</svg> },
    { id: 4, name: 'Done', icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M10.75 0C4.822 0 0 4.823 0 10.75C0 16.677 4.822 21.5 10.75 21.5C16.678 21.5 21.5 16.677 21.5 10.75C21.5 4.823 16.678 0 10.75 0ZM10.75 20C5.649 20 1.5 15.851 1.5 10.75C1.5 5.649 5.649 1.5 10.75 1.5C15.851 1.5 20 5.649 20 10.75C20 15.851 15.851 20 10.75 20ZM14.78 7.88599C15.073 8.17899 15.073 8.65402 14.78 8.94702L10.113 13.614C9.96701 13.76 9.77501 13.834 9.58301 13.834C9.39101 13.834 9.19901 13.761 9.05301 13.614L6.72 11.281C6.427 10.988 6.427 10.513 6.72 10.22C7.013 9.92697 7.48801 9.92697 7.78101 10.22L9.58401 12.023L13.72 7.88702C14.013 7.59402 14.487 7.59399 14.78 7.88599Z" fill="#18191D"/>
</svg> },
  ]

  return (
    <div className="   ml-26 w-full mt-19 mr-35   ">
      <div className=" w-full bg-white rounded-2xl shadow-2xl shadow-[#0D0F1629]  p-6">
        {/* Step Progress */}
        <h2 className="text-2xl font-medium text-center text-black mb-6">
          KYC Verification Steps
        </h2>

        <div className="flex justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="">
               <div className='flex  items-center'>
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-md mb-2 transition ${
                  step.id === currentStep
                    ? 'bg-black text-white'
                    : 'bg-[#F7F7F7] text-gray-500'
                }`}
              >
                {step.icon}
              </div>
              <div className={ `${step.id!==4?'ml-2  border-1 border-[#353945] w-30 h-0 mr-2':''}`}></div>
              </div> 
              <p
                className={`text-xs font-medium 
                  'text-[#353945]' '
                `}
              >
                {step.name}
              </p>
            </div>
            
          ))}
        </div>
        </div>

        {/* Privilege Card */}
          
       <div className="relative mt-8 shadow-2xl shadow-[#0D0F1629] w-full h-32 bg-gray-50 rounded-xl border border-gray-200  p-5 mb-8 flex items-start gap-4 overflow-visible">
  {/* Badge Image */}
  <div className="relative w-[168] h-[168] ">
    <Image
      src={Logo}
      alt="logo"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* Text Content */}
  <div className=''>
    <p className="text-gray-700 font-medium mb-2">
      After passing the ID verification, you will be entitled to the below privileges:
    </p>
    <ul className="list-disc ml-5 text-gray-800">
      <li>Increase 24-hour withdrawal limit to 200 BTC</li>
      <li>Fiat-Crypto Purchases</li>
    </ul>
  </div>
</div>

        

        {/* Notes Section */}
        <div className="space-y-3 mt-18 text-gray-600 text-sm ">
          <p className='mb-12'>
            • You can verify with{' '}
            <span className="font-semibold text-red-500">
              ID Card, Driving Licence and Passport.
            </span>
          </p>
          <p className='mb-12'>
            • Please make sure that the info provided is identical to your ID info, and these
            informations cannot be altered once the ID verification is approved.
          </p>
          <p className='mb-12'>
            • We only collect your personal information for the sole purpose of identity
            verification. We are committed to ensuring the highest level of security for your
            information, utilizing advanced encryption and protection protocols to safeguard your
            privacy.
          </p>
          <p className='mb-12'>
            • The audit results will be sent to your Email in <b>1–3 working days.</b> Please check
            your mailbox.
          </p>
        </div>

        {/* Button */}
       <div className="flex justify-center mt-16 relative ">
      <Link href="/dashboard/kycVerification/personalInformation">
        <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-medium px-10 py-3 rounded-md flex items-center gap-2 transition">
          Start
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
          >
            <path
              d="M0.749779 15.5017C0.557779 15.5017 0.36575 15.4288 0.21975 15.2818C-0.07325 14.9888 -0.07325 14.5137 0.21975 14.2207L6.68972 7.75076L0.21975 1.28079C-0.07325 0.987785 -0.07325 0.51275 0.21975 0.21975C0.51275 -0.07325 0.987785 -0.07325 1.28079 0.21975L8.28079 7.21975C8.57379 7.51275 8.57379 7.98779 8.28079 8.28079L1.28079 15.2808C1.13379 15.4288 0.941779 15.5017 0.749779 15.5017Z"
              fill="#FCFCFD"
            />
          </svg>
        </button>
      </Link>
    </div>
      </div>
    
  )
}
