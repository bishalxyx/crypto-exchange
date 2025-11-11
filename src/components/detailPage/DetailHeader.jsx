'use client'
import React from 'react';
import { Star } from 'lucide-react'; // optional icon (can be removed)

export default function CryptoBuyCard() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            {/* Left Section */}
            <div>
                <div className="flex items-center gap-3 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z" fill="#F97316" />
                        <path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z" stroke="#E5E7EB" />
                        <path d="M34 38H14V10H34V38Z" stroke="#E5E7EB" />
                        <g clipPath="url(#clip0_2103_2244)">
                            <path d="M33.6875 23.5C33.6875 28.8503 29.3503 33.1875 24 33.1875C18.6497 33.1875 14.3125 28.8503 14.3125 23.5C14.3125 18.1497 18.6497 13.8125 24 13.8125C29.3503 13.8125 33.6875 18.1497 33.6875 23.5ZM28.1543 22.1199C28.3471 20.8309 27.3655 20.1379 26.0234 19.6757L26.4588 17.9295L25.3958 17.6646L24.9719 19.3648C24.6925 19.2951 24.4054 19.2295 24.1202 19.1644L24.5471 17.453L23.4847 17.1882L23.0491 18.9337C22.8177 18.881 22.5907 18.8289 22.3703 18.7742L22.3715 18.7687L20.9055 18.4027L20.6227 19.5379C20.6227 19.5379 21.4114 19.7187 21.3948 19.7298C21.8253 19.8373 21.9031 20.1222 21.8901 20.348L21.3941 22.3373C21.4238 22.3448 21.4623 22.3557 21.5046 22.3727C21.4692 22.3639 21.4314 22.3542 21.3923 22.3448L20.6971 25.1315C20.6445 25.2623 20.5109 25.4584 20.21 25.384C20.2206 25.3994 19.4373 25.1911 19.4373 25.1911L18.9096 26.4078L20.293 26.7526C20.5503 26.8171 20.8025 26.8846 21.0508 26.9482L20.6109 28.7143L21.6727 28.9792L22.1083 27.2318C22.3899 27.3081 22.6723 27.3814 22.9555 27.4516L22.5213 29.1908L23.5843 29.4557L24.0242 27.6929C25.8369 28.0359 27.2 27.8975 27.7737 26.2582C28.236 24.9383 27.7507 24.1769 26.797 23.6804C27.4915 23.5204 28.0147 23.0636 28.1543 22.1199ZM25.7255 25.5254C25.397 26.8453 23.1744 26.1317 22.4538 25.9528L23.0375 23.613C23.7581 23.7928 26.0688 24.1488 25.7255 25.5254ZM26.0543 22.1009C25.7545 23.3015 23.9046 22.6915 23.3045 22.542L23.8337 20.4198C24.4339 20.5693 26.3664 20.8484 26.0543 22.1009Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2103_2244">
                                <path d="M14 13.5H34V33.5H14V13.5Z" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h2 className="text-lg font-semibold text-gray-800">
                        Bitcoin (BTC/USDT)
                    </h2>
                    <Star size={18} className="text-gray-400 cursor-pointer hover:text-yellow-400" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                    <p className="text-2xl font-semibold text-gray-900">$36,319.01</p>
                    <span className="bg-green-100 text-green-600 text-sm font-medium px-2 py-0.5 rounded-md">
                        +2.34%
                    </span>
                </div>

                <div className="grid grid-cols-3 gap-6 text-sm text-gray-500">
                    <div>
                        <p>Market Cap</p>
                        <p className="text-gray-900 font-medium mt-1">$702.5B</p>
                    </div>
                    <div>
                        <p>24h Volume</p>
                        <p className="text-gray-900 font-medium mt-1">$28.2B</p>
                    </div>
                    <div>
                        <p>Circulating Supply</p>
                        <p className="text-gray-900 font-medium mt-1">19.5M BTC</p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div>
            <div className="flex  md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
                {/* Buy Input */}
                
                <div className="flex  h-11 bg-[#F9FAFB] items-center justify-between border border-gray-200 rounded-lg px-4 py-2 w-full md:w-56">
                    <div>
                        <p className="text-xs text-[#6B7280] mb-1">You Buy</p>
                        {/* <p className="text-gray-800 font-medium">BTC</p> */}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 48 48" fill="none">
                        <path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z" fill="#F97316" />
                        <path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0Z" stroke="#E5E7EB" />
                        <path d="M34 38H14V10H34V38Z" stroke="#E5E7EB" />
                        <g clipPath="url(#clip0_2103_2244)">
                            <path d="M33.6875 23.5C33.6875 28.8503 29.3503 33.1875 24 33.1875C18.6497 33.1875 14.3125 28.8503 14.3125 23.5C14.3125 18.1497 18.6497 13.8125 24 13.8125C29.3503 13.8125 33.6875 18.1497 33.6875 23.5ZM28.1543 22.1199C28.3471 20.8309 27.3655 20.1379 26.0234 19.6757L26.4588 17.9295L25.3958 17.6646L24.9719 19.3648C24.6925 19.2951 24.4054 19.2295 24.1202 19.1644L24.5471 17.453L23.4847 17.1882L23.0491 18.9337C22.8177 18.881 22.5907 18.8289 22.3703 18.7742L22.3715 18.7687L20.9055 18.4027L20.6227 19.5379C20.6227 19.5379 21.4114 19.7187 21.3948 19.7298C21.8253 19.8373 21.9031 20.1222 21.8901 20.348L21.3941 22.3373C21.4238 22.3448 21.4623 22.3557 21.5046 22.3727C21.4692 22.3639 21.4314 22.3542 21.3923 22.3448L20.6971 25.1315C20.6445 25.2623 20.5109 25.4584 20.21 25.384C20.2206 25.3994 19.4373 25.1911 19.4373 25.1911L18.9096 26.4078L20.293 26.7526C20.5503 26.8171 20.8025 26.8846 21.0508 26.9482L20.6109 28.7143L21.6727 28.9792L22.1083 27.2318C22.3899 27.3081 22.6723 27.3814 22.9555 27.4516L22.5213 29.1908L23.5843 29.4557L24.0242 27.6929C25.8369 28.0359 27.2 27.8975 27.7737 26.2582C28.236 24.9383 27.7507 24.1769 26.797 23.6804C27.4915 23.5204 28.0147 23.0636 28.1543 22.1199ZM25.7255 25.5254C25.397 26.8453 23.1744 26.1317 22.4538 25.9528L23.0375 23.613C23.7581 23.7928 26.0688 24.1488 25.7255 25.5254ZM26.0543 22.1009C25.7545 23.3015 23.9046 22.6915 23.3045 22.542L23.8337 20.4198C24.4339 20.5693 26.3664 20.8484 26.0543 22.1009Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2103_2244">
                                <path d="M14 13.5H34V33.5H14V13.5Z" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                 <div>
                {/* Spend Input */}
                <div className="flex mt-4 bg-[#F9FAFB] items-center h-11 justify-between border border-gray-200 rounded-lg px-4 py-2 w-full md:w-56">
                    <div >
                        <p className="text-xs text-[#6B7280] mb-1">You Spend</p>
                    </div>
                        <p className="text-[#6B7280] text-xs font-medium">USDT $</p>
                </div>
                
                <p className="text-xs text-right mt-2 text-gray-500 whitespace-nowrap">
                        1 BTC ≈ USD $115,714.77
                    </p>
                    </div>
                
                
                    
                
            </div>
            <div className='flex justify-end mt-6'>
                    <button className="bg-[#FF4B5C] hover:bg-[#ff2f47] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition">
                        Buy Crypto
                    </button>
                    </div>
            </div>
        </div>
    );
}
