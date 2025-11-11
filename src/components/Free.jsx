import React from 'react'
import Image from 'next/image'
import Logo1 from "../../utils/images/Mobile app store badge.png"
import Logo2 from "../../utils/images/Mobile app store badge (1).png"
import Logo3 from '../../utils/images/IMG.png'
export default function Free() {
  return (
    <>
      <section className="bg-[#F7F7F7] max-w-8xl mx-auto px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className='mb-20'>
          <h3 className='mb-3'>With Cryptor Trade, you can be sure your trading skills are matched</h3>
          <h2 className="text-5xl font-bold mb-7 ">Free Your Money & Invest <br/> With</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex flex-start">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm mr-3">✓</span>
             <p> Buy, Sell, And Trade On The Go</p>

            </li>
              <div className="text-sm text-gray-500 -mt-4 ml-9 py-2">Manage your holdings from your mobile device</div>
            <li className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm mr-3">✓</span>
              Take Control Of Your Wealth <br />
            </li>
              <div className="text-sm text-gray-500 -mt-4 ml-9 py-2">Rest assured you (and only you) have access to your funds</div>
          </ul>

          {/* App Store Buttons */}
          <div className="flex space-x-4 mt-6">
            <Image 
                               src={Logo1} 
                               alt="logo" 
                               width={134}   // base size
                               height={40}  
                               priority
                               className="sm:w-[68px] sm:h-[68px] md:w-[74px] md:h-[74px] lg:w-[134px] lg:h-[40px]"
                             />
            <Image 
                               src={Logo2} 
                               alt="logo" 
                               width={134}   // base size
                               height={40}  
                               priority
                               className="sm:w-[68px] sm:h-[68px] md:w-[74px] md:h-[74px] lg:w-[134px] lg:h-[40px]"
                             />
          </div>
        </div>

        {/* QR Code / Phone Placeholder */}
        <div className="flex justify-center relative">
          <Image src={Logo3} height={512} width={618} alt='Logo3' priority/>
        </div>
      </section>
    
    </>
  )
}
