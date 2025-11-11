import React from 'react'
import StepIndicator from './StepIndicator'

const SucessSell = () => {
  return (
    <>
        <StepIndicator paymentDetails={true} selectCryptoComplete={true} enterAmountComplete
            ={true} bankDetailsComplete={true}/>
    <div className="  p-4 md:p-12">
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
        <div className="flex-1 -mt-12 p-4 md:p-8 ">
            <div className='flex flex-col items-center'>
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            
           
           <div className='bg-[#F7F7F7] p-4 w-[810] rounded-2xl'>
            <div className='flex justify-center items-center'>
            <h1 className='font-bold text-3xl text-[#58BD7D] mr-2 text-center '>Success </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<rect width="30" height="30" rx="15" fill="#58BD7D"/>
<path d="M11 14.9997L13.6667 17.6663L19 12.333" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
            <p className='text-md text-center mt-2'>You successfully bought 1.356 <span className='text-[#58BD7D]'>BTC</span> for Rockie!</p>
            <div className='bg-white w-full rounded-2xl'>
                <div className='flex justify-between p-4'>
                    <p className='text-base'>Status</p>
                    <p className='text-[#58BD7D] mr-20'>Completed</p>
                </div>
                <hr />
                <div className='flex justify-between p-4'>
                    <p className='text-base'>Transaction ID</p>
                    <p className='text-base'>0msx836930...87r398 ID</p>
                </div>
            </div>
           </div>
          </div>
        <div className='bg-[#F7F7F7] p-6 mt-4 rounded-2xl w-[810]'>
            <h1 className='font-bold text-2xl'>Payment Details</h1>
            <div className='p-2 mt-8'>
               <h1 className='text-base font-semibold mb-3'>Bank account</h1>
               <div className='flex justify-between'>
                <p className='text-sm  mb-3 mt-3'>Account name</p>
                <div className='flex'>
                                    <p className='text-sm  mb-2 mr-1'>Veum Cecilia</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" fill="#18191D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.9996 4C13.5188 4 12.1895 4.6424 11.2725 5.66691C10.9042 6.07844 10.272 6.11346 9.86044 5.74513C9.44891 5.37681 9.41389 4.74461 9.78222 4.33309C11.0625 2.9026 12.9263 2 14.9996 2C18.8656 2 21.9996 5.13401 21.9996 9C21.9996 11.0733 21.097 12.937 19.6665 14.2173C19.255 14.5857 18.6228 14.5507 18.2544 14.1391C17.8861 13.7276 17.9211 13.0954 18.3327 12.7271C19.3572 11.8101 19.9996 10.4807 19.9996 9C19.9996 6.23858 17.761 4 14.9996 4Z" fill="#18191D"/>
</svg>
                </div>

               </div>
               
               <hr />
              <div className='flex justify-between'>
                <p className='text-sm  mb-3 mt-3'>Account number</p>
                <div className='flex'>
                                    <p className='text-sm  mb-2 mr-1'>548422222221</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" fill="#18191D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.9996 4C13.5188 4 12.1895 4.6424 11.2725 5.66691C10.9042 6.07844 10.272 6.11346 9.86044 5.74513C9.44891 5.37681 9.41389 4.74461 9.78222 4.33309C11.0625 2.9026 12.9263 2 14.9996 2C18.8656 2 21.9996 5.13401 21.9996 9C21.9996 11.0733 21.097 12.937 19.6665 14.2173C19.255 14.5857 18.6228 14.5507 18.2544 14.1391C17.8861 13.7276 17.9211 13.0954 18.3327 12.7271C19.3572 11.8101 19.9996 10.4807 19.9996 9C19.9996 6.23858 17.761 4 14.9996 4Z" fill="#18191D"/>
</svg>
                </div>

               </div>
               
               <hr /><div className='flex justify-between'>
                <p className='text-sm  mb-3 mt-3'>Address</p>
                <div className='flex'>
                                    <p className='text-sm  mb-2 mr-1'>079 Dariana Knoll, CA</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" fill="#18191D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.9996 4C13.5188 4 12.1895 4.6424 11.2725 5.66691C10.9042 6.07844 10.272 6.11346 9.86044 5.74513C9.44891 5.37681 9.41389 4.74461 9.78222 4.33309C11.0625 2.9026 12.9263 2 14.9996 2C18.8656 2 21.9996 5.13401 21.9996 9C21.9996 11.0733 21.097 12.937 19.6665 14.2173C19.255 14.5857 18.6228 14.5507 18.2544 14.1391C17.8861 13.7276 17.9211 13.0954 18.3327 12.7271C19.3572 11.8101 19.9996 10.4807 19.9996 9C19.9996 6.23858 17.761 4 14.9996 4Z" fill="#18191D"/>
</svg>
                </div>

               </div>
               
               <hr /><div className='flex justify-between'>
                <p className='text-sm  mb-3 mt-3'>SWIFT Code</p>
                <div className='flex'>
                                    <p className='text-sm  mb-2 mr-1'>UI8</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" fill="#18191D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.9996 4C13.5188 4 12.1895 4.6424 11.2725 5.66691C10.9042 6.07844 10.272 6.11346 9.86044 5.74513C9.44891 5.37681 9.41389 4.74461 9.78222 4.33309C11.0625 2.9026 12.9263 2 14.9996 2C18.8656 2 21.9996 5.13401 21.9996 9C21.9996 11.0733 21.097 12.937 19.6665 14.2173C19.255 14.5857 18.6228 14.5507 18.2544 14.1391C17.8861 13.7276 17.9211 13.0954 18.3327 12.7271C19.3572 11.8101 19.9996 10.4807 19.9996 9C19.9996 6.23858 17.761 4 14.9996 4Z" fill="#18191D"/>
</svg>
                </div>

               </div>
               
               <hr />
               <div className='flex justify-between'>
                <p className='text-sm  mb-3 mt-3'>Bank Address</p>
                <div className='flex'>
                                    <p className='text-sm  mb-2 mr-1'>55416 Powlowski Spring, CA</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20ZM9 22C12.866 22 16 18.866 16 15C16 11.134 12.866 8 9 8C5.13401 8 2 11.134 2 15C2 18.866 5.13401 22 9 22Z" fill="#18191D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.9996 4C13.5188 4 12.1895 4.6424 11.2725 5.66691C10.9042 6.07844 10.272 6.11346 9.86044 5.74513C9.44891 5.37681 9.41389 4.74461 9.78222 4.33309C11.0625 2.9026 12.9263 2 14.9996 2C18.8656 2 21.9996 5.13401 21.9996 9C21.9996 11.0733 21.097 12.937 19.6665 14.2173C19.255 14.5857 18.6228 14.5507 18.2544 14.1391C17.8861 13.7276 17.9211 13.0954 18.3327 12.7271C19.3572 11.8101 19.9996 10.4807 19.9996 9C19.9996 6.23858 17.761 4 14.9996 4Z" fill="#18191D"/>
</svg>
                </div>

               </div>
               
               <hr />
               <p className='text-base font-semibold mt-8'>Reference Code </p>
               <p className='text-sm mt-3'>You MUST include the Reference Code in your deposit in order to credit your account! </p><p>Reference Code:</p> 
               <div className='bg-white w-full h-12 text-center p-3 mt-3'>BLUTUKHY34PB</div>
               <div className='flex justify-between mt-8'>
                 <button className="w-89 h-11   bg-white cursor-pointer  text-[#FF3E54] font-bold rounded-full border-1 border-[#FF3E54] text-sm ">
                    Tradel
                  </button> <button className="w-89 h-11 bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold rounded-full shadow-lg transition-colors text-sm ">
                    Wallet
                  </button>
               </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SucessSell