'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../utils/images/img (2).png'
import Logo1 from '../../../utils/images/img (3).png'
import Logo2 from '../../../utils/images/img (4).png'

export default function AboutCoin() {
  const news = [
    {
      source: "CoinDesk • 2 hours ago",
      title: "Bitcoin Surges Past $36K as Institutional Adoption Continues",
      description:
        "Bitcoin’s price has continued its upward trajectory, breaking through the $36,000 resistance level amid growing institutional interest.",
      image: Logo,
    },
    {
      source: "Bloomberg • 5 hours ago",
      title: "SEC Commissioner Hints at Potential Bitcoin ETF Approval",
      description:
        "A commissioner at the Securities and Exchange Commission has suggested that a Bitcoin ETF approval might be on the horizon.",
      image: Logo1,
    },
    {
      source: "Decrypt • 1 day ago",
      title: "Bitcoin Mining Difficulty Reaches All-Time High Following Halving",
      description:
        "Bitcoin’s mining difficulty has adjusted to a new record high as miners continue to compete despite reduced block rewards.",
      image: Logo2,
    },
  ]

  return (
    <div className="w-full">
      {/* ABOUT BITCOIN SECTION */}
      <section className="bg-[#F7F7F7] px-5 md:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          
          {/* LEFT: DESCRIPTION */}
          <div className="flex-1">
            <h1 className="font-bold text-xl md:text-2xl mb-4">About Bitcoin</h1>

            <p className="text-gray-800 leading-relaxed mb-5 text-sm md:text-base">
              Bitcoin (BTC) is the first decentralized cryptocurrency, released as
              open-source software in 2009 by an anonymous person or group known as
              Satoshi Nakamoto. It operates on a peer-to-peer network without the need
              for intermediaries and isn't managed by any central authority, making it
              the world's first truly decentralized digital currency.
            </p>

            <p className="text-gray-800 leading-relaxed mb-6 text-sm md:text-base">
              Bitcoin transactions are verified by network nodes through cryptography
              and recorded in a public distributed ledger called a blockchain. Bitcoin
              is created as a reward for a process known as mining, which involves
              adding transaction records to Bitcoin’s public ledger.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3">
              {["Layer-1", "Store of Value", "Digital Gold", "Proof of Work"].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: RESOURCES & DISCLAIMER */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-4">Resources</h2>
              <ul className="space-y-3 text-sm md:text-base">
                {[
                  { icon: "🌐", label: "Official Website" },
                  { icon: "📄", label: "Whitepaper" },
                  { icon: "💻", label: "GitHub Repository" },
                  { icon: "🔍", label: "Block Explorer" },
                  { icon: "🐦", label: "Twitter" },
                ].map((link, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 cursor-pointer"
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* DISCLAIMER */}
            <div className="bg-gray-100 text-gray-700 text-xs md:text-sm p-4 rounded-lg mt-6 md:mt-8">
              <strong>Risk Disclaimer:</strong> Digital asset prices are subject to
              high market risk and price volatility. The value of your investment can
              go down or up, and you may not get back the amount invested. You are
              solely responsible for your investment decisions and should only invest
              what you can afford to lose.
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="bg-white  text-gray-900 px-5 md:px-10 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Latest News & Announcements
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border"
              >
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs md:text-sm text-gray-500">{item.source}</p>
                  <h3 className="font-semibold text-base md:text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
