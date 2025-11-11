'use client'
import { useState } from "react";
import Image from "next/image";
import ConfirmPayment from "./ConfirmPayment";
import Sucess from "./Sucess";
import ExchangeCard from "./ExchangeCard";
import StepIndicator from "./StepIndicator";



const cryptoData = [
  { id: 1, name: "USDT", symbol: "Tether USD", price: "$2,605.95", change: "+6.04%", color: "text-green-500", icon: "/icons/btc.png" },
  { id: 2, name: "Ethereum", symbol: "Tether USD", price: "$2,605.95", change: "-5.03%", color: "text-red-500", icon: "/icons/eth.png" },
  { id: 3, name: "Tether", symbol: "Tether USD", price: "$2,605.95", change: "+6.04%", color: "text-green-500", icon: "/icons/usdt.png" },
  { id: 4, name: "Binance", symbol: "BNB", price: "$2,605.95", change: "+6.04%", color: "text-green-500", icon: "/icons/bnb.png" },
  { id: 5, name: "Binance", symbol: "BNB", price: "$2,605.95", change: "-0.04%", color: "text-red-500", icon: "/icons/bnb.png" },
  { id: 6, name: "Tether", symbol: "Tether USD", price: "$2,605.95", change: "+6.04%", color: "text-green-500", icon: "/icons/usdt.png" },
  { id: 7, name: "Solana", symbol: "Tether USD", price: "$2,605.95", change: "-6.09%", color: "text-red-500", icon: "/icons/sol.png" },
  { id: 8, name: "Cardano", symbol: "Tether USD", price: "$2,605.95", change: "+6.04%", color: "text-green-500", icon: "/icons/ada.png" },
  { id: 9, name: "Binance", symbol: "BNB", price: "$2,605.95", change: "+8.09%", color: "text-green-500", icon: "/icons/bnb.png" },
  { id: 10, name: "XRP", symbol: "Tether USD", price: "$2,605.95", change: "+6.04%", color: "text-green-500", icon: "/icons/xrp.png" },
];

export default function SelectCrypto() {
  const [selected, setSelected] = useState(null);
  const [sellCrypto,setSellCrypto]=useState("sell");

  return (
    <div className=" w-full bg-white flex justify-center items-start p-6 md:p-10">
         <div className="w-full max-w-5xl">
     
        
        {sellCrypto==='sell'?
        <>
        <StepIndicator selectCrypto={true}/>
        <div className="bg-white  overflow-hidden">
         
          <div className="p-6 bg-[#F7F7F7] rounded-2xl mb-12 flex justify-between   border-b border-gray-200 ">
            <div className="-mb-7,">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Select Crypto
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              Which Crypto Do You Want To <br /> Search?
            </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 -mt-7">
              
              <div className="relative w-full md:w-2/3 ">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-96 h-12 rounded-xl bg-white border border-[#B1B5C3] pl-10 pr-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                
                <svg
                  className="absolute left-3 top-3.5 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width={20}
                  height={20}
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
                  />
                </svg>
              </div>

              {/* Dropdown */}
              <div className="border h-12 bg-white border-gray-300 rounded-xl px-4 py-2 text-gray-800 font-medium flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                USD
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="p-6 rounded-2xl border-1 overflow-y-auto" style={{ maxHeight: "400px" }}>
            <h3 className="text-lg font-semibold mb-4">Select Crypto</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-gray-500 text-sm border-b">
                  <th className="py-2 font-medium">#</th>
                  <th className="py-2 font-medium">Name</th>
                  <th className="py-2 font-medium">Price</th>
                  <th className="py-2 font-medium text-right">24%</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((coin) => (
                  <tr
                    key={coin.id}
                    onClick={() => setSelected(coin.id)}
                    className={`cursor-pointer rounded-xl transition-all ${
                      selected === coin.id
                        ? "bg-indigo-50 border border-indigo-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="py-3 pl-2">{coin.id}</td>
                    <td className="py-3 flex items-center gap-3">
                      <Image
                        src={coin.icon}
                        alt={coin.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{coin.name}</p>
                        <p className="text-sm text-gray-500">{coin.symbol}</p>
                      </div>
                    </td>
                    <td className="py-3">{coin.price}</td>
                    <td className={`py-3 text-right font-medium ${coin.color}`}>
                      {coin.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Section */}
          <div className="border-t border-gray-200 p-6 flex justify-end bg-white rounded-b-2xl">
            <button onClick={()=>setSellCrypto('confirmPayment')} className="bg-red-500 text-white font-semibold px-10 py-3 rounded-full hover:bg-red-600 transition-all cursor-pointer">
              Continue
            </button>
          </div>
          </div>
          </>:
    <ExchangeCard />
  }

        </div>
     
    </div>
  );
}
