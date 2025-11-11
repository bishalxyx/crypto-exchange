"use client"
import Image from 'next/image';
import Logo from '../../utils/images/Group.png'
import Logo1 from '../../utils/images/Group (1).png'
import Logo2 from '../../utils/images/Group (2).png'
import Logo3 from '../../utils/images/Group (3).png'
import Logo4 from '../../utils/images/Group (4).png'
import Logo5 from '../../utils/images/Group (5).png'
import Logo6 from '../../utils/images/Group (6).png'
import Logo7 from '../../utils/images/Group (7).png'
import Header from './Header';
import { useState } from 'react';


export default function HeroSection() {
   const [timeLeft, setTimeLeft] = useState({
      days: 2,
      hours: 12,
      minutes: 23,
      seconds: 35
    });
    const cryptoData = [
    {
      icon: '₿',
      name: 'Bitcoin',
      price: 'USD 53,260.20',
      symbol: 'BTC',
      change: 7.2,
      chartColor: '#10b981',
      chartPath: 'M0,30 L20,25 L40,28 L60,20 L80,15 L100,10 L120,8'
    },
    {
      icon: '♦',
      name: 'Bitcoin',
      price: 'USD 53,260.20',
      symbol: 'ETH',
      change: -1.8,
      chartColor: '#ef4444',
      chartPath: 'M0,15 L20,18 L40,20 L60,25 L80,22 L100,28 L120,30'
    },
    {
      icon: '₮',
      name: 'Bitcoin',
      price: 'USD 53,260.20',
      symbol: 'USDT',
      change: 3.54,
      chartColor: '#10b981',
      chartPath: 'M0,25 L20,22 L40,24 L60,18 L80,20 L100,12 L120,10'
    },
    {
      icon: '◆',
      name: 'Ethereum',
      price: 'USD 53,260.20',
      symbol: 'BNB',
      change: 3.24,
      chartColor: '#10b981',
      chartPath: 'M0,28 L20,25 L40,26 L60,22 L80,18 L100,15 L120,12'
    }
  ];

  
  return (
    <section className="background-container bg-cover bg-center text-white text-center ">
      <Header/>
      <div className='px-28 py-20'>
      <Image className='absolute left-70 top-20' src={Logo} height={84} width={84} alt='Logo' priority />
      <Image className='absolute right-70 top-20' src={Logo1} height={88} width={88} alt='Logo' priority />
      <Image className='absolute left-75 top-65' src={Logo2} height={84} width={84} alt='Logo' priority />
      <Image className='absolute right-80 top-65' src={Logo3} height={104} width={104} alt='Logo' priority />
      <Image className='absolute left-70 top-140' src={Logo4} height={73} width={73} alt='Logo' priority />
      <Image className='absolute left-120 top-140' src={Logo5} height={104} width={104} alt='Logo' priority />

      <Image className='absolute right-100 top-140' src={Logo6} height={73} width={73} alt='Logo' priority />
      <Image className='absolute right-50 top-140' src={Logo7} height={73} width={73} alt='Logo' priority />


      <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
        The Most Secure, Lightning-Fast,
        <br />
        and Feature-Rich Crypto
        <br/>
         Exchange Platform
      </h1>
     <div className='flex justify-center items-center flex-col'>
      
      <p className="mt-6 mb-5 font-medium text-gray-300">
        Crypto Market Starts in
      </p>
    
<div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-full px-12 py-4 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xs text-gray-700 uppercase">Days</div>
          </div>
          <div className="text-3xl text-red-500">:</div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs text-gray-700 uppercase">Hours</div>
          </div>
          <div className="text-3xl text-red-500">:</div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs text-gray-700 uppercase">Minutes</div>
          </div>
          <div className="text-3xl text-red-500">:</div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs text-gray-700 uppercase">Seconds</div>
          </div>
        </div>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-[#FF4C61]  px-6 py-3 rounded-full font-bold hover:bg-[#ff6677]">
          DOWNLOAD APP
        </button>
        <button className="border border-[#FF4C61] px-6 py-3 rounded-full font-bold hover:bg-[#FF4C61]">
          TRADE CRYPTO
        </button>
      </div>
      </div>
      </div>
       {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptoData.map((crypto, index) => (
            <div key={index}>
              {crypto.icon}
              </div>
          ))}
        </div>
      </div>
    </div> */}
    </section>
  );
}
