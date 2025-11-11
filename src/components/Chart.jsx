"use client"
import React from "react";
import { useState } from "react";
import Chart1 from "../../utils/images/Chart.png"
import Chart2 from "../../utils/images/Chart (2).png"
import Image from "next/image";
const coins = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$56,623.54",
    change: "+1.45%",
    changeColor: "text-green-500",
    marketCap: "$880,423,640,582",
    graph:Chart1
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$56,623.54",
    change: "-5.12%",
    changeColor: "text-red-500",
    marketCap: "$880,423,640,582",
    graph: Chart2,
  },
  {
    id: 3,
    name: "Binance",
    symbol: "BNB",
    price: "$56,623.54",
    change: "-3.75%",
    changeColor: "text-red-500",
    marketCap: "$880,423,640,582",
    graph: Chart2,
  },
  {
    id: 4,
    name: "Tether",
    symbol: "USDT",
    price: "$56,623.54",
    change: "+1.45%",
    changeColor: "text-green-500",
    marketCap: "$880,423,640,582",
    graph: Chart1,
  },
  {
    id: 5,
    name: "Solana",
    symbol: "SOL",
    price: "$56,623.54",
    change: "+1.45%",
    changeColor: "text-green-500",
    marketCap: "$880,423,640,582",
    graph: Chart2,
  },
  {
    id: 6,
    name: "XRP",
    symbol: "XRP",
    price: "$56,623.54",
    change: "-2.22%",
    changeColor: "text-red-500",
    marketCap: "$880,423,640,582",
    graph: Chart1,
  },
  {
    id: 7,
    name: "Cardano",
    symbol: "ADA",
    price: "$56,623.54",
    change: "+0.8%",
    changeColor: "text-green-500",
    marketCap: "$880,423,640,582",
    graph: Chart1,
  },
  {
    id: 8,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$56,623.54",
    change: "+1.41%",
    changeColor: "text-green-500",
    marketCap: "$880,423,640,582",
    graph: Chart2,
  },
];

export default function MarketUpdate() {
  const [search, setSearch] = useState("");

  return (
    <section className="px-6 md:px-16 py-12 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900 ">Market Update</h2>
        <p className="hover:underline">See All Coins</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-between  mb-4 text-sm font-medium">
        <div className="flex justify-center gap-4">
        <button className="bg-red-500 text-white px-4 py-1 rounded-full">
          View All
        </button>
        <button className="text-black hover:text-gray-900">Metaverse</button>
        <button className="text-black hover:text-gray-900">Entertainment</button>
        <button className="text-black hover:text-gray-900">Energy</button>
        <button className="text-black hover:text-gray-900">NFT</button>
        <button className="text-black hover:text-gray-900">Gaming</button>
        <button className="text-black hover:text-gray-900">Music</button>
        </div>
        <div>
          <input
          type="text"
          placeholder="Search Coin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm"
        />
        </div>
  </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Last Price</th>
              <th className="py-3 px-4">24h %</th>
              <th className="py-3 px-4">Market Cap</th>
              <th className="py-3 px-4">Last 7 Days</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((coin) =>
                coin.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((coin) => (
                <tr
                  key={coin.id}
                  className="border-t hover:bg-gray-50 text-sm"
                >
                  <td className="py-3 px-4">{coin.id}</td>
                  <td className="py-3 px-4 font-medium">
                    {coin.name} <span className="text-gray-500">{coin.symbol}</span>
                  </td>
                  <td className="py-3 px-4">{coin.price}</td>
                  <td className={`py-3 px-4 font-medium ${coin.changeColor}`}>
                    {coin.change}
                  </td>
                  <td className="py-3 px-4">{coin.marketCap}</td>
                  <td className="py-3 px-4">
  {typeof coin.graph === "string" ? (
    coin.graph
  ) : (
    <Image src={coin.graph} alt="logo" className="h-8 w-auto" />
  )}
</td>
                  <td className="py-3 px-4">
                    <button className="bg-gray-100 hover:bg-red-500 hover:text-white text-gray-700 px-4 py-1 rounded-lg">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
