'use client'
import React, { useState } from 'react'
import { ChevronDown, Copy, Info } from 'lucide-react'
import SelectCryptoModal from './SelectCryptoModal'
import SelectNetworkModal from './SelectNetworkModal'

// import SelectCrypto from '../SelectCryptoModal'

export default function DepositStep() {
    const [showNetworkModal, setShowNetworkModal] = useState(false);
    const [showCryptoModal,setShowCryptoModal]=useState(false);
    const [copyAdress,setcopyAdress]=useState(false);
//   const [selectedCrypto, setSelectedCrypto] = useState('Select Crypto');
  const deposits = [
    { date: '13/03/24 - 20:54:29', coin: 'BTC', amount: '1.2', record: '16asfv6...hbdu12rex' },
    { date: '13/03/24 - 20:54:29', coin: 'BTC', amount: '1.2', record: '16asfv6...hbdu12rex' },
    { date: '13/03/24 - 20:54:29', coin: 'BTC', amount: '1.2', record: '16asfv6...hbdu12rex' },
    { date: '13/03/24 - 20:54:29', coin: 'BTC', amount: '1.2', record: '16asfv6...hbdu12rex' },
  ]

  const [selectedCrypto, setSelectedCrypto] = useState('Select Crypto')
  const [selectedNetwork, setSelectedNetwork] = useState('Select Network you want to deposit through')

  return (
    <div className=" bg-[#F7F7F7]      md:px-16">
      {/* === Deposit Steps === */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6 text-gray-800">Deposit Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: 1, title: 'Copy the wallet address', desc: 'Select crypto, network & copy address.' },
            { step: 2, title: 'Confirm Address', desc: 'Paste address on other exchange.' },
            { step: 3, title: 'Transfer Confirmation', desc: 'Await blockchain confirmation for transfer.' },
            { step: 4, title: 'Successful Deposit', desc: 'FalconX will send assets to wallet.' },
          ].map((item) => (
            <div
              key={item.step}
              className="flex flex-col border rounded-xl py-4 px-4 bg-white hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#FF3E54] text-white text-sm w-6 h-6 flex items-center justify-center rounded-full font-semibold">
                  {item.step}
                </span>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
     <div className='mt-6 bg-white rounded-2xl shadow-sm p-6 '>
      {/* === Verification Section === */}
      {selectedNetwork==='Select Network you want to deposit through'?
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Complete the Verification for Deposit!
          </h2>
          <button className="bg-[#FF3E54] text-white text-sm font-medium px-4 py-2 rounded-md mb-6 hover:bg-[#e13549] transition">
            Verify
          </button>
          </div>:""}

          {/* Select Crypto */}
          <div className="mb-6 flex">
            <div className=''>
                  <div className={` h-8 w-8 p-1.5 rounded-sm ${selectedCrypto==='Select Crypto'?'bg-black':'bg-red-600'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M18.125 11.8908C18.1242 10.2325 16.0142 8.955 13.125 8.79333V4.99166C13.1242 2.83916 10.3 1.875 7.5 1.875C4.7 1.875 1.87583 2.83833 1.875 4.99166V14.175C1.875 16.3275 4.7 17.2917 7.5 17.2917C7.78917 17.2917 8.08584 17.265 8.38084 17.2358C9.45917 17.8383 10.9817 18.125 12.5 18.125C15.2992 18.125 18.125 17.1608 18.125 15.0083V11.8908C18.125 11.8917 18.125 11.8917 18.125 11.8908ZM16.875 11.8925C16.875 12.7742 15.0042 13.76 12.5 13.76C9.99583 13.76 8.125 12.7742 8.125 11.8925C8.125 11.5692 8.38084 11.2325 8.82334 10.935C8.83834 10.9267 8.85002 10.915 8.86419 10.9058C9.63419 10.4058 10.9442 10.025 12.5 10.025C15.0042 10.025 16.875 11.0108 16.875 11.8925ZM11.875 7.94169C11.875 8.31752 11.545 8.63164 11.2308 8.85081C10.0717 8.98831 9.07084 9.31252 8.32001 9.76919C8.05334 9.79169 7.78498 9.80835 7.50081 9.80835C5.14415 9.80835 3.12581 8.78169 3.12581 7.94169V7.06502C4.20998 7.77502 5.85748 8.11 7.50081 8.11C9.14415 8.11 10.7916 7.77502 11.8758 7.06502V7.94169H11.875ZM3.125 9.87417C4.1275 10.5525 5.60334 10.9767 7.07418 11.0467C6.94751 11.3142 6.875 11.5958 6.875 11.8917C6.875 11.8917 6.875 11.8917 6.875 11.8925V12.8992C4.79833 12.74 3.125 11.8242 3.125 11.0592V9.87417ZM7.5 3.125C9.65083 3.125 11.875 3.82336 11.875 4.99252C11.875 6.20586 9.62083 6.86 7.5 6.86C5.37917 6.86 3.125 6.20586 3.125 4.99252C3.125 3.82336 5.34917 3.125 7.5 3.125ZM3.125 14.175V12.9908C4.0825 13.6383 5.47 14.0542 6.875 14.1508V15.0083C6.875 15.3875 6.96667 15.7275 7.12667 16.0342C5.09917 15.9584 3.125 15.2758 3.125 14.175ZM12.5 16.875C11.1508 16.875 9.77334 16.6 8.93417 16.1067C8.43501 15.8133 8.12581 15.4433 8.12581 15.0083V13.8967C9.14081 14.585 10.6958 15.01 12.5008 15.01C14.3058 15.01 15.8608 14.585 16.8758 13.8967V15.0083C16.875 16.1767 14.6508 16.875 12.5 16.875Z" fill="white"/>
</svg>
</div>
            <div className='w-[1] bg-red-500 h-[194] ml-4 -mt-3 mb-2'></div>
            <div className={` h-8 w-8 p-1.5 rounded-sm ${selectedNetwork==='Select Network you want to deposit through'?'bg-black':'bg-red-600'}`}>
            <svg   xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M18.125 7.5V5C18.125 2.985 17.015 1.875 15 1.875H5C2.985 1.875 1.875 2.985 1.875 5V7.5C1.875 8.63833 2.24093 9.47667 2.9126 10C2.24093 10.5233 1.875 11.3617 1.875 12.5V15C1.875 17.015 2.985 18.125 5 18.125H15C17.015 18.125 18.125 17.015 18.125 15V12.5C18.125 11.3617 17.7591 10.5233 17.0874 10C17.7591 9.47667 18.125 8.63833 18.125 7.5ZM16.875 12.5V15C16.875 16.3142 16.3142 16.875 15 16.875H5C3.68583 16.875 3.125 16.3142 3.125 15V12.5C3.125 11.1858 3.68583 10.625 5 10.625H15C16.3142 10.625 16.875 11.1858 16.875 12.5ZM5 9.375C3.68583 9.375 3.125 8.81417 3.125 7.5V5C3.125 3.68583 3.68583 3.125 5 3.125H15C16.3142 3.125 16.875 3.68583 16.875 5V7.5C16.875 8.81417 16.3142 9.375 15 9.375H5ZM12.9167 6.25997C12.9167 6.71997 12.5433 7.0933 12.0833 7.0933C11.6233 7.0933 11.25 6.71997 11.25 6.25997C11.25 5.79997 11.6233 5.42664 12.0833 5.42664C12.5433 5.42664 12.9167 5.79997 12.9167 6.25997ZM15.4167 6.25997C15.4167 6.71997 15.0433 7.0933 14.5833 7.0933C14.1233 7.0933 13.75 6.71997 13.75 6.25997C13.75 5.79997 14.1233 5.42664 14.5833 5.42664C15.0433 5.42664 15.4167 5.79997 15.4167 6.25997ZM11.25 13.75C11.25 13.29 11.6233 12.9167 12.0833 12.9167C12.5433 12.9167 12.9167 13.29 12.9167 13.75C12.9167 14.21 12.5433 14.5833 12.0833 14.5833C11.6233 14.5833 11.25 14.21 11.25 13.75ZM13.75 13.75C13.75 13.29 14.1233 12.9167 14.5833 12.9167C15.0433 12.9167 15.4167 13.29 15.4167 13.75C15.4167 14.21 15.0433 14.5833 14.5833 14.5833C14.1233 14.5833 13.75 14.21 13.75 13.75Z" fill="white"/>
</svg>
</div>

<div className='w-[1] bg-red-500 h-[194] ml-4 -mt-3 mb-2'></div>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M0 12C0 6.34315 0 3.51472 1.75736 1.75736C3.51472 0 6.34315 0 12 0H20C25.6569 0 28.4853 0 30.2426 1.75736C32 3.51472 32 6.34315 32 12V20C32 25.6569 32 28.4853 30.2426 30.2426C28.4853 32 25.6569 32 20 32H12C6.34315 32 3.51472 32 1.75736 30.2426C0 28.4853 0 25.6569 0 20V12Z" fill="#23262F"/>
<path d="M21.3125 24.125H14.0208C12.2067 24.125 11.2083 23.1267 11.2083 21.3125V14.0208C11.2083 12.2067 12.2067 11.2083 14.0208 11.2083H21.3125C23.1267 11.2083 24.125 12.2067 24.125 14.0208V21.3125C24.125 23.1267 23.1267 24.125 21.3125 24.125ZM14.0208 12.4583C12.9108 12.4583 12.4583 12.9108 12.4583 14.0208V21.3125C12.4583 22.4225 12.9108 22.875 14.0208 22.875H21.3125C22.4225 22.875 22.875 22.4225 22.875 21.3125V14.0208C22.875 12.9108 22.4225 12.4583 21.3125 12.4583H14.0208ZM9.125 18.5V10.6875C9.125 9.5775 9.5775 9.125 10.6875 9.125H18.5C18.845 9.125 19.125 8.845 19.125 8.5C19.125 8.155 18.845 7.875 18.5 7.875H10.6875C8.87333 7.875 7.875 8.87333 7.875 10.6875V18.5C7.875 18.845 8.155 19.125 8.5 19.125C8.845 19.125 9.125 18.845 9.125 18.5Z" fill="white"/>
</svg>
            </div>
            <div className=''>
            <div className=''>
            <label className="ml-3   text-lg font-medium text-black mb-2 block">Select Crypto</label>
            <div className='flex '>
            
            <div className="relative ml-3">
              <button onClick={()=>setShowCryptoModal(!showCryptoModal)} className="w-2xl border rounded-md px-4 py-2 flex justify-between items-center text-black bg-white">
                <span>💰 {selectedCrypto}</span>
                <ChevronDown size={18} />
              </button>
            </div>
            </div>
          </div>
           {showCryptoModal && (
        <SelectCryptoModal
          onClose={() => setShowCryptoModal(false)} // close modal
          onSelect={(network) => {
            setSelectedCrypto(network)
            // setSelectedNetwork(network);
            setShowCryptoModal(false)
          }}/>)}

          {/* Select Network */}
          <div className="mb-6 ml-3 mt-35">
            <label className="text-lg font-medium text-gray-700 mb-2 block">Select Network</label>
            <div className="relative">
              <button onClick={()=>setShowNetworkModal(!showNetworkModal)} className="w-full border rounded-md px-4 py-2 flex justify-between items-center text-gray-400 bg-white">
                <span>
                  {selectedNetwork}
                </span>
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
           {showNetworkModal && (
        <SelectNetworkModal
          onClose={() => setShowNetworkModal(false)} // close modal
          onSelect={(network) => {
            // setSelectedCrypto(network)
            setSelectedNetwork(network);
            setShowNetworkModal(false)
          }}/>)}
          {selectedNetwork==='Select Network you want to deposit through'?<button className="mt-37 ml-3 flex items-center gap-2 text-black font-medium hover:text-[#e13549] transition">
             Copy Wallet Address
           
          </button>:!copyAdress?<><h1 className='mt-38 ml-3'>Deposit Address</h1><div className='mt-6 rounded-2xl ml-3 p-6 bg-[#F7F7F7]'>
            <h1 className='text-black font-medium text-lg'>Click here to Generate your wallet Address!</h1>
            <p className='mt-4 mb-4text-sm text-gray-[#353945]'>Please generate the address below to deposit your <br /> cryptocurrency using the network. You can either copy <br /> the address or scan the QR code for convenience.</p>
          <div className="w-full bg-white border border-gray-200 rounded-lg flex items-center justify-between px-4 py-2 h-12 shadow-sm">
  <span className="text-gray-500 text-sm">
    Click here to Generate Address!
  </span>
  <button onClick={()=>setcopyAdress(!copyAdress)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs px-3 py-1.5 rounded-md transition">
    Generate Address
  </button>
</div>


            </div></>:<><h1 className='mt-38 ml-3'>Copy Wallet Address</h1><div className='mt-6 rounded-2xl ml-3 p-6 bg-[#F7F7F7]'>
            <h1 className='text-black font-medium text-lg'>Toncoin(TON) address is published!</h1>
            <p className='mt-4 mb-4text-sm text-gray-[#353945]'>Please use the address below to deposit your <br /> cryptocurrency using the TONCOIN network. You can <br /> either copy the address or scan the QR code for <br /> convenience.</p>
          <div className="w-full bg-white border border-gray-200 rounded-lg flex items-center justify-between px-4 py-2 h-12 shadow-sm">
  <span className="text-gray-500 text-sm">
    TPdBs4gzVawph92jsR2toaqdBs4gzVwph92j2t
  </span>
  <button className="bg-gray-100 flex  hover:bg-gray-200 text-gray-700 font-medium text-xs px-3 py-1.5 rounded-md transition">
    <span className='ml-1'><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M10.7188 12.6875H5.61458C4.34467 12.6875 3.64583 11.9887 3.64583 10.7188V5.61458C3.64583 4.34467 4.34467 3.64583 5.61458 3.64583H10.7188C11.9887 3.64583 12.6875 4.34467 12.6875 5.61458V10.7188C12.6875 11.9887 11.9887 12.6875 10.7188 12.6875ZM5.61458 4.52083C4.83758 4.52083 4.52083 4.83758 4.52083 5.61458V10.7188C4.52083 11.4957 4.83758 11.8125 5.61458 11.8125H10.7188C11.4957 11.8125 11.8125 11.4957 11.8125 10.7188V5.61458C11.8125 4.83758 11.4957 4.52083 10.7188 4.52083H5.61458ZM2.1875 8.75V3.28125C2.1875 2.50425 2.50425 2.1875 3.28125 2.1875H8.75C8.9915 2.1875 9.1875 1.9915 9.1875 1.75C9.1875 1.5085 8.9915 1.3125 8.75 1.3125H3.28125C2.01133 1.3125 1.3125 2.01133 1.3125 3.28125V8.75C1.3125 8.9915 1.5085 9.1875 1.75 9.1875C1.9915 9.1875 2.1875 8.9915 2.1875 8.75Z" fill="#353945"/>
</svg></span>copy
  </button>
</div>


            </div></>}
          
        </div>
        
        

        {/* Tips Section */}
        <div className="md:w-1/3 mr-30 ml-20 border-gray-200 md:pl-6 pt-4 md:pt-0">
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
<path d="M7.46289 0.00374856C5.47389 -0.0592514 3.61302 0.673868 2.19702 2.05087C0.780021 3.42787 0 5.27482 0 7.25082C0 9.00582 0.742996 10.7278 2.271 12.5138C3.013 13.3818 3.5 14.0288 3.5 15.0728V15.7508C3.5 17.9938 5.00798 19.5008 7.25098 19.5008C9.49398 19.5008 11.001 17.9938 11.001 15.7508V15.0677C11.001 14.0097 11.492 13.3598 12.186 12.5548C13.351 11.2028 14.538 9.50773 14.499 7.18173C14.436 3.33373 11.2789 0.112749 7.46289 0.00374856ZM7.25 18.0008C5.841 18.0008 5 17.1598 5 15.7508V15.5008H9.50098V15.7508C9.50098 17.1598 8.659 18.0008 7.25 18.0008ZM11.0491 11.5758C10.4361 12.2868 9.87095 13.0168 9.62695 14.0008H8V11.0619L9.78003 9.28183C10.073 8.98882 10.073 8.51379 9.78003 8.22079C9.48703 7.92779 9.01199 7.92779 8.71899 8.22079L7.24902 9.69076L5.77905 8.22079C5.48605 7.92779 5.01102 7.92779 4.71802 8.22079C4.42502 8.51379 4.42502 8.98882 4.71802 9.28183L6.49805 11.0619V14.0008H4.8689C4.6249 13.0318 4.05991 12.2989 3.40991 11.5389C2.12291 10.0359 1.49805 8.63282 1.49805 7.25082C1.49805 5.68382 2.11697 4.2188 3.24097 3.1268C4.32397 2.0748 5.74007 1.50082 7.24707 1.50082C7.30407 1.50082 7.36097 1.50177 7.41797 1.50277C10.443 1.58977 12.9461 4.1479 12.9971 7.2059C13.0291 9.0289 12.0301 10.4378 11.0491 11.5758Z" fill="#18191D"/>
</svg>
            <h3 className="font-semibold text-gray-800 text-sm">Tips</h3>
          </div>
          <div className='border-1 border-black mt-6 mb-6'></div>
          <p className="text-[#777E90] text-sm leading-relaxed">
            For the safety of your funds, our customer support team may contact you by phone to confirm your withdrawal 
          </p>
          <p className='mt-6 text-[#777E90]'>For the safety of your funds, our customer support team may contact you by phone to confirm your withdrawal </p>
        </div>
        </div>
      
      </div>

      {/* === Deposit Records === */}
      <section className="mt-6 bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Last 4 Deposit Records</h2>
          <button className="bg-[#FF3E54] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#e13549] transition">
            Deposit History
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-600">
            <thead className=''>
              <tr className="text-left bg-[#E6E8EC] rounded-2xl">
                <th className="py-3 px-4 font-medium text-gray-700">Date/Time</th>
                <th className="py-3 px-4 font-medium text-gray-700">Coin</th>
                <th className="py-3 px-4 font-medium text-gray-700">Amount</th>
                <th className="py-3 px-4 font-medium text-gray-700">Blockchain Record</th>
                <th className="py-3 px-4 font-medium text-gray-700">Remarks</th>
                <th className="py-3 px-4 font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((row, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{row.date}</td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-800">{row.coin}</span>
                    <p className="text-xs text-gray-400">Bitcoin</p>
                  </td>
                  <td className="py-3 px-4">{row.amount}</td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    {row.record} <Copy size={14} className="text-gray-500 cursor-pointer hover:text-gray-800" />
                  </td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">
                    <button className="text-[#FF3E54] border border-[#FF3E54] rounded-md px-3 py-1 text-xs hover:bg-[#FF3E54] hover:text-white transition">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
