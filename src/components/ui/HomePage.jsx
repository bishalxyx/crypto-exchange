"use client"
import React, { useState, useEffect } from 'react';

export default function CryptoExchangeLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 23,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '53,260.20', change: '+7.2%', positive: true, color: 'bg-orange-500' },
    { name: 'Bitcoin', symbol: 'ETH', price: '53,260.20', change: '+1.8%', positive: false, color: 'bg-blue-600' },
    { name: 'Bitcoin', symbol: 'USDT', price: '53,260.20', change: '+3.54%', positive: true, color: 'bg-teal-500' },
    { name: 'Etherum', symbol: 'BNB', price: '53,260.20', change: '+3.24%', positive: true, color: 'bg-yellow-500' }
  ];

  const floatingIcons = [
    { color: 'bg-red-500', position: 'top-32 left-20' },
    { color: 'bg-blue-400', position: 'top-32 right-20' },
    { color: 'bg-pink-500', position: 'top-64 left-32' },
    { color: 'bg-yellow-400', position: 'top-80 right-32' },
    { color: 'bg-purple-500', position: 'bottom-40 left-20' },
    { color: 'bg-yellow-600', position: 'bottom-32 left-48' },
    { color: 'bg-red-400', position: 'bottom-20 right-20' },
    { color: 'bg-orange-500', position: 'top-1/2 right-16' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent transform skew-x-12"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
      </div>

      {/* Floating crypto icons */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute ${icon.position} w-16 h-16 ${icon.color} rounded-full opacity-80 blur-sm animate-pulse`}
          style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}
        ></div>
      ))}

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-6">
        <div className="text-3xl font-bold text-red-500">LOGO</div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Markets</a>
          <a href="#" className="hover:text-cyan-400 transition">Trade</a>
          <a href="#" className="hover:text-cyan-400 transition">Buy Crypto</a>
          <a href="#" className="hover:text-cyan-400 transition">Support</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-cyan-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="hover:text-cyan-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="hover:text-cyan-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </button>
          <button className="hover:text-cyan-400 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-400 overflow-hidden">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234299e1'/%3E%3C/svg%3E" alt="User" className="w-full h-full" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-12 py-20">
        <h1 className="text-6xl font-bold text-center max-w-5xl leading-tight mb-8">
          The Most Secure, Lightning-Fast, and Feature-Rich Crypto Exchange Platform
        </h1>

        <p className="text-xl mb-8">Crypto Market Starts in</p>

        {/* Countdown Timer */}
        <div className="flex gap-4 bg-gray-700/50 backdrop-blur-sm rounded-full px-12 py-6 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-xs text-gray-300 mt-1">DAYS</div>
          </div>
          <div className="text-5xl text-red-500">:</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs text-gray-300 mt-1">HOURS</div>
          </div>
          <div className="text-5xl text-red-500">:</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs text-gray-300 mt-1">MINUTES</div>
          </div>
          <div className="text-5xl text-red-500">:</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs text-gray-300 mt-1">SECONDS</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 mb-16">
          <button className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full font-semibold transition transform hover:scale-105">
            DOWNLOAD APP
          </button>
          <button className="border-2 border-red-500 hover:bg-red-500/20 px-10 py-4 rounded-full font-semibold transition transform hover:scale-105">
            TRADE CRYPTO
          </button>
        </div>

        <p className="text-sm mb-8">WE ACCEPT</p>

        {/* Crypto Cards */}
        <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${crypto.color} rounded-full`}></div>
                  <span className="text-sm text-gray-300">{crypto.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className={`w-12 h-6 ${crypto.positive ? 'text-green-500' : 'text-red-500'}`} fill="none" viewBox="0 0 80 30">
                    <path d={crypto.positive ? "M0 25 Q20 15 40 20 T80 10" : "M0 10 Q20 20 40 15 T80 25"} stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${crypto.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {crypto.change}
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold">USD {crypto.price}</div>
                </div>
                <div className="text-gray-400 text-sm">{crypto.symbol}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}