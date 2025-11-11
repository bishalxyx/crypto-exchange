"use client"
import React from 'react'
import Image from "next/image";

import { useState } from "react";
import Logo1 from "../../utils/images/Bitcoin Cloud.png"
import Logo2 from "../../utils/images/Bitcoin Wallet.png"
import Logo3 from "../../utils/images/Bitcoin Mining.png"

import Logo4 from "../../utils/images/Bitcoin Comparison.png"


export default function CryptoExchangePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">How It Work</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          is a production-ready library of stackable content blocks built in React Native.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "Step 1", title: "Download",img:Logo1 },
            { step: "Step 2", title: "Connect Wallet",img:Logo2 },
            { step: "Step 3", title: "Start Trading",img:Logo3 },
            { step: "Step 4", title: "Earn Money",img:Logo4 },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl "
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mb-4">
              <Image 
                   src={item.img} 
                   alt="logo" 
                   width={64}   // base size
                   height={64}  
                   priority
                   className="sm:w-[68px] sm:h-[68px] md:w-[74px] md:h-[74px] lg:w-[84px] lg:h-[84px]"
                 />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Stacks & Production-Ready Library of Stackable Content Blocks
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

