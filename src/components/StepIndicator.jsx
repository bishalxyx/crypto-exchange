import React from 'react'

const StepIndicator = ({selectCrypto=false,enterAmount=false,bankDetails=false,paymentDetails=false,selectCryptoComplete=false,enterAmountComplete=false,bankDetailsComplete=false,paymentDetailsComplete=false}) => {
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
    // console.log(enterAmount,selectCrypto);
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 mb-10">
          <StepIndicator label="Select crypto" isActive={selectCrypto} isCompleted={selectCryptoComplete} />
          <div className="w-10 md:w-16 h-px bg-gray-300" />
          <StepIndicator label="Enter Amount" isActive={enterAmount} isCompleted={enterAmountComplete}/>
          <div className="w-10 md:w-16 h-px bg-gray-300" />
          <StepIndicator label="Bank Details" isActive={bankDetails} isCompleted={bankDetailsComplete} />
          <div className="w-10 md:w-16 h-px bg-gray-300" />
          <StepIndicator label="Payment Details" isActive={paymentDetails} isCompleted={paymentDetailsComplete} />
        </div>
  )
}

export default StepIndicator