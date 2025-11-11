'use client'
import React from "react";

export default function CryptoDashboard() {
  return (
    <div className=" bg-gray-50 p-6 md:p-10">
      {/* GRID STATS SECTION */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* 24h Price Range */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm font-medium mb-2">24h Price Range</h3>
          <div className="flex justify-between items-center">
            <span className="font-semibold">$35,901.88</span>
            <div className="relative w-40 h-1 bg-gray-200 rounded-full mx-2">
              <div className="absolute left-1/2 top-0 w-3 h-3 bg-red-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <span className="font-semibold">$36,842.15</span>
          </div>
        </div>

        {/* All-Time High */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm font-medium mb-2">All-Time High</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">$69,044.77</p>
              <p className="text-gray-400 text-sm">Nov 10, 2021</p>
            </div>
            <span className="text-red-500 font-semibold">-47.4%</span>
          </div>
        </div>

        {/* Market Dominance */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Market Dominance</h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-tr from-orange-400 to-gray-100 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700">
              Bitcoin dominates <span className="font-semibold">51%</span> of the total cryptocurrency market cap
            </p>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        {/* Trading Pairs */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm font-medium mb-3">Trading Pairs</h3>
          <div className="grid grid-cols-2 gap-3">
            {["BTC/USDT", "BTC/USD", "BTC/ETH"].map((pair, i) => (
              <div key={i} className="border rounded-xl py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                {pair}
              </div>
            ))}
            <div className="border rounded-xl py-2 text-center text-sm font-medium text-blue-600 cursor-pointer">
              +246 more <span className="text-gray-400 block text-xs">View all</span>
            </div>
          </div>
        </div>

        {/* Supply Metrics */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm font-medium mb-3">Supply Metrics</h3>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between"><span>Circulating Supply:</span> <span className="font-semibold">19.5M BTC</span></p>
            <p className="flex justify-between"><span>Total Supply:</span> <span className="font-semibold">19.5M BTC</span></p>
            <p className="flex justify-between"><span>Max Supply:</span> <span className="font-semibold">21M BTC</span></p>
            <div className="mt-2">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: "92.8%" }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">92.8% of max supply issued</p>
            </div>
          </div>
        </div>

        {/* Network Fees */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="text-gray-500 text-sm font-medium mb-3">Network Fees</h3>
          <div className="text-sm space-y-2">
            <p className="flex justify-between"><span>Average Transaction Fee:</span> <span className="font-semibold">$2.31</span></p>
            <p className="flex justify-between"><span>Median Transaction Fee:</span> <span className="font-semibold">$1.15</span></p>
            <div className="mt-3 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-md">Low</span>
              <span className="text-gray-500 text-xs">Network congestion is currently low</span>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER BOOK */}
      <div className="bg-white rounded-2xl shadow mt-8 p-5">
        <h3 className="font-semibold text-lg mb-3">Order Book</h3>
        <div className="grid grid-cols-2 text-sm text-gray-500 border-b pb-2">
          <div className="grid grid-cols-3">
            <span>Price (USDT)</span>
            <span>Amount (BTC)</span>
            <span>Total</span>
          </div>
          <div className="grid grid-cols-3">
            <span>Price (USDT)</span>
            <span>Amount (BTC)</span>
            <span>Total</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mt-2">
          {/* BUY ORDERS */}
          <div className="divide-y">
            {[
              { price: "36,315.02", amt: "0.3250", total: "11,802.38" },
              { price: "36,310.45", amt: "0.1120", total: "4,066.77" },
              { price: "36,305.78", amt: "0.5500", total: "19,968.18" },
              { price: "36,300.12", amt: "0.2340", total: "8,494.23" },
              { price: "36,295.67", amt: "0.8900", total: "32,303.15" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-3 py-1 text-green-600">
                <span>{item.price}</span>
                <span>{item.amt}</span>
                <span>{item.total}</span>
              </div>
            ))}
          </div>

          {/* SELL ORDERS */}
          <div className="divide-y">
            {[
              { price: "36,320.15", amt: "0.2150", total: "7,808.83" },
              { price: "36,325.80", amt: "0.3600", total: "13,077.29" },
              { price: "36,330.42", amt: "0.1800", total: "6,539.48" },
              { price: "36,335.91", amt: "0.4250", total: "15,442.76" },
              { price: "36,340.25", amt: "0.6700", total: "24,347.97" },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-3 py-1 text-red-500">
                <span>{item.price}</span>
                <span>{item.amt}</span>
                <span>{item.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
