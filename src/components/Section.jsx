import Image from 'next/image';
import React from 'react'
import Logo from "../../utils/images/IMG (1).png"
// import { Card, CardContent } from "@/components/ui/card";

export default function Section() {
  return (
    <section className=" py-16 px-6 md:px-20 bg-[#F7F7F7]">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-gray-500 mt-2 max-w-2xl">
          Company has a variety of features that make it the best place to start trading
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Features */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start bg-white/90 gap-4 p-6 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
              📊
            </div>
            <div className="p-0">
              <h3 className="font-semibold text-gray-900">Manage your portfolio</h3>
              <p className="text-gray-500 text-sm">
                Buy and sell popular digital currencies, keep track of them in one place.
              </p>
            </div>
          </div>

          
          <div className="flex items-start bg-[#F7F7F7] gap-4 p-6 ">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              📅
            </div>
            <div className="p-0">
              <h3 className="font-semibold text-gray-900">Recurring buys</h3>
              <p className="text-gray-500 text-sm">
                Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.
              </p>
            </div>
          </div>

        
          <div className="flex items-start gap-4 p-6 ">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              📱
            </div>
            <div className="p-0">
              <h3 className="font-semibold text-gray-900">Mobile apps</h3>
              <p className="text-gray-500 text-sm">
                Stay on top of the markets with the Coinbase app for Android or iOS.
              </p>
            </div>
          </div>
        </div>

        
        <Image src={Logo} alt='Logo' height={500} width={600}/>
      </div>
    </section>
  );
}
