'use client'
import React, { useState } from 'react';
import Sucess from './Sucess';

const StepIndicator = ({ label, isActive, isCompleted }) => (
  <div className="flex items-center gap-2 md:gap-3">
    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center `}>
      {isCompleted&&<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<rect width="16" height="16" rx="8" fill="#58BD7D"/>
<path d="M4 7.99967L6.66667 10.6663L12 5.33301" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}
{isActive&&<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<circle cx="8" cy="8" r="7.3" fill="#F7F7F7" stroke="#58BD7D" strokeWidth="1.4"/>
<circle cx="8" cy="8" r="4" fill="#58BD7D"/>
</svg>}
    </div>
    <span className={`text-xs md:text-sm font-medium ${
      isActive ? 'text-gray-900' : 'text-black'
    }`}>
      {label}
    </span>
  </div>
);


export default function ConfirmPayment({buyCrypto,setBuyCrypto}) {
  const [payAmount, setPayAmount] = useState('3,000,000');
  const [receiveAmount, setReceiveAmount] = useState('0.00207026');
  const [payCurrency, setPayCurrency] = useState('VND');
  const [receiveCurrency, setReceiveCurrency] = useState('BTC');

  const handleSwap = () => {
    const tempAmount = payAmount;
    const tempCurrency = payCurrency;
    setPayAmount(receiveAmount);
    setPayCurrency(receiveCurrency);
    setReceiveAmount(tempAmount);
    setReceiveCurrency(tempCurrency);
  };

  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row  max-w-7xl mx-auto">
        {/* Sidebar */}
        {/* <div className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-4 md:p-6">
          <div className="flex lg:flex-col gap-2">
            <div className="flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 border-red-500 rounded-r">
              <span className="text-red-500 font-medium text-sm md:text-base">Buy Crypto</span>
            </div>
            <div className="flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded cursor-pointer">
              <span className="text-gray-700 font-medium text-sm md:text-base">Sell Crypto</span>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
    {buyCrypto==='confirmPayment'?<div className="  p-4 md:p-12">
        <div className="flex-1 p-4 md:p-8 -mt-8 ">
            <div className='flex flex-col items-center'>
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-12 overflow-x-auto pb-2">
              <StepIndicator label="Select currency" isCompleted={true} />
              <div className="w-8 md:w-16 lg:w-24 h-px bg-gray-300 flex-shrink-0" />
              <StepIndicator label="Confirm Payment" isActive={true} />
              
              <div className="w-8 md:w-16 lg:w-24 h-px bg-gray-300 flex-shrink-0" />
              <StepIndicator label="Payment Details" isActive={false} />
            </div>
           
           <div className='bg-[#F7F7F7] p-4 w-[810] rounded-2xl'>
            <h1 className='font-bold text-2xl'>Confirm Information </h1>
            <p className='text-md'>You are about to Receive 1.356 BTC for Bitcloud bank</p>
            <div className='flex justify-between p-4'>
                <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="20" fill="#2E72D2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M25.833 14.1667H14.1663C13.2459 14.1667 12.4997 14.9129 12.4997 15.8333V24.1667C12.4997 25.0871 13.2459 25.8333 14.1663 25.8333H25.833C26.7535 25.8333 27.4997 25.0871 27.4997 24.1667V15.8333C27.4997 14.9129 26.7535 14.1667 25.833 14.1667ZM14.1663 12.5C12.3254 12.5 10.833 13.9924 10.833 15.8333V24.1667C10.833 26.0076 12.3254 27.5 14.1663 27.5H25.833C27.674 27.5 29.1663 26.0076 29.1663 24.1667V15.8333C29.1663 13.9924 27.674 12.5 25.833 12.5H14.1663Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.833 19.9997C20.833 17.6985 22.6985 15.833 24.9997 15.833H28.333C28.7932 15.833 29.1663 16.2061 29.1663 16.6663C29.1663 17.1266 28.7932 17.4997 28.333 17.4997H24.9997C23.619 17.4997 22.4997 18.619 22.4997 19.9997C22.4997 21.3804 23.619 22.4997 24.9997 22.4997H28.333C28.7932 22.4997 29.1663 22.8728 29.1663 23.333C29.1663 23.7932 28.7932 24.1663 28.333 24.1663H24.9997C22.6985 24.1663 20.833 22.3009 20.833 19.9997Z" fill="white"/>
<path d="M25.8337 20.0003C25.8337 20.4606 25.4606 20.8337 25.0003 20.8337C24.5401 20.8337 24.167 20.4606 24.167 20.0003C24.167 19.5401 24.5401 19.167 25.0003 19.167C25.4606 19.167 25.8337 19.5401 25.8337 20.0003Z" fill="white"/>
</svg>
<div>
    <h1 className='ml-1'>Pay</h1>
    <p className='ml-1'>3.000.000 VND</p>
</div>
</div>
<div className='flex '>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<rect width="40" height="40" rx="20" fill="#58BD7D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M25.833 14.1667H14.1663C13.2459 14.1667 12.4997 14.9129 12.4997 15.8333V24.1667C12.4997 25.0871 13.2459 25.8333 14.1663 25.8333H25.833C26.7535 25.8333 27.4997 25.0871 27.4997 24.1667V15.8333C27.4997 14.9129 26.7535 14.1667 25.833 14.1667ZM14.1663 12.5C12.3254 12.5 10.833 13.9924 10.833 15.8333V24.1667C10.833 26.0076 12.3254 27.5 14.1663 27.5H25.833C27.674 27.5 29.1663 26.0076 29.1663 24.1667V15.8333C29.1663 13.9924 27.674 12.5 25.833 12.5H14.1663Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.833 19.9997C20.833 17.6985 22.6985 15.833 24.9997 15.833H28.333C28.7932 15.833 29.1663 16.2061 29.1663 16.6663C29.1663 17.1266 28.7932 17.4997 28.333 17.4997H24.9997C23.619 17.4997 22.4997 18.619 22.4997 19.9997C22.4997 21.3804 23.619 22.4997 24.9997 22.4997H28.333C28.7932 22.4997 29.1663 22.8728 29.1663 23.333C29.1663 23.7932 28.7932 24.1663 28.333 24.1663H24.9997C22.6985 24.1663 20.833 22.3009 20.833 19.9997Z" fill="white"/>
<path d="M25.8337 20.0003C25.8337 20.4606 25.4606 20.8337 25.0003 20.8337C24.5401 20.8337 24.167 20.4606 24.167 20.0003C24.167 19.5401 24.5401 19.167 25.0003 19.167C25.4606 19.167 25.8337 19.5401 25.8337 20.0003Z" fill="white"/>
</svg>
<div>
    <h1 className='ml-1'>Get</h1>
    <p className='ml-1'>0.00207026 BTC</p>
</div>
</div>
<div className='flex'>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M16.6216 0.85942C18.7283 -0.286473 21.2721 -0.286474 23.3787 0.85942L35.5915 7.50256C37.8671 8.74033 39.2836 11.1233 39.2836 13.7137V26.2863C39.2836 28.8767 37.8671 31.2597 35.5915 32.4974L23.3787 39.1406C21.2721 40.2865 18.7283 40.2865 16.6216 39.1406L4.40883 32.4974C2.1333 31.2597 0.716797 28.8767 0.716797 26.2863L0.716797 13.7137C0.716797 11.1233 2.1333 8.74033 4.40882 7.50256L16.6216 0.85942Z" fill="#3772FF"/>
<path d="M23.5752 10.417C28.1775 10.417 31.909 14.1478 31.9092 18.75C31.9092 23.3524 28.1776 27.084 23.5752 27.084C23.3742 27.084 23.175 27.0736 22.9775 27.0596C22.8865 27.0732 22.7945 27.084 22.7012 27.084H13.9424L18.2871 25.1904C16.4281 23.6621 15.2422 21.3445 15.2422 18.75C15.2424 14.1479 18.9731 10.4172 23.5752 10.417Z" fill="white"/>
</svg>
<div>
    <h1 className='ml-1'>For <br />Company</h1>
    
</div>
</div>


            </div>
           </div>
          </div>
        <div className='bg-[#F7F7F7] p-6 mt-4 rounded-2xl w-[810]'>
            <h1 className='font-bold text-2xl'>Payment Details</h1>
            <div className='p-2 mt-8'>
               <h1 className='text-base mb-3'>Bank account</h1>
               <p className='text-sm font-bold mb-2'>Account name</p>
               <input type="text" placeholder='Veum Cecilia' className='w-full bg-white px-6 py-4 pr-36 border-2 border-[#E5E5E5] rounded-xl text-xl font-semibold text-gray-900 focus:outline-none focus:border-[#3772FF] transition-colors'/>
               <p className='text-sm font-bold mb-2 mt-3'>Account number</p>
               <input type="text" placeholder='Veum Cecilia' className='w-full px-6 bg-white py-4 pr-36 border-2 border-[#E5E5E5] rounded-xl text-xl font-semibold text-gray-900 focus:outline-none focus:border-[#3772FF] transition-colors'/>
               <p className='text-sm font-bold mb-2 mt-3'>Address</p>
               <input type="text" placeholder='Veum Cecilia' className='w-full px-6 bg-white py-4 pr-36 border-2 border-[#E5E5E5] rounded-xl text-xl font-semibold text-gray-900 focus:outline-none focus:border-[#3772FF] transition-colors'/>
               <p className='text-sm font-bold mb-2 mt-3'>Swift code</p>
               <input type="text" placeholder='Veum Cecilia' className='w-full px-6 bg-white py-4 pr-36 border-2 border-[#E5E5E5] rounded-xl text-xl font-semibold text-gray-900 focus:outline-none focus:border-[#3772FF] transition-colors'/>
               <p className='text-sm font-bold mb-2 mt-3'>Bank address</p>
               <input type="text" placeholder='Veum Cecilia' className='w-full px-6 bg-white py-4 pr-36 border-2 border-[#E5E5E5] rounded-xl text-xl font-semibold text-gray-900 focus:outline-none focus:border-[#3772FF] transition-colors'/>
               <h1 className='text-base mt-8 font-semibold '>Reference code</h1>
               <p className='text-sm mt-3'>You MUST include the Reference Code in your deposit in order to credit your account! </p>
               <p className='text-sm mb-2'>Reference Code: </p>
               <div className='bg-white w-full h-12 text-center p-3'>BLUTUKHY34PB</div>
               <div className='flex justify-between mt-8'>
                 <button onClick={()=>setBuyCrypto("buycrypto")} className="w-89 h-11   bg-white cursor-pointer  text-black font-bold rounded-full border-1 border-[#353945] text-sm ">
                    Cancel
                  </button> <button onClick={()=>setBuyCrypto("success")} className="w-89 h-11 bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold rounded-full shadow-lg transition-colors text-sm ">
                    Continue
                  </button>
               </div>
            </div>
        </div>
        </div>
        </div>
        </div>:<Sucess/>}
      </div>
    
    </>
  );
}