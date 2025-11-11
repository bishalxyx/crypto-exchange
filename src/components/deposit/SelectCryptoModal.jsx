'use client'
import { useState } from 'react'
import { X, Search, Info } from 'lucide-react'

export default function SelectCryptoModal({onClose, onSelect}) {
  const [search, setSearch] = useState('');
  

  const networks = [
    { name: 'TRX', desc: 'Tron(TRC20)', arrival: '≈ 1m 44s', fee: '0.8 USDT (~0.80 USD)' },
    { name: 'BSC', desc: 'BNB Smart Chain(BEP20)', arrival: '≈ 1m 19s', fee: '0 USDT (~0.00 USD)' },
    { name: 'TONCOIN', desc: 'Toncoin(TON)', arrival: '≈ 2m 50s', fee: '0 USDT (~0.00 USD)' },
    { name: 'ARB', desc: 'Arbitrum One(ARB)', arrival: '≈ 0m 57s', fee: '0.15 USDT (~0.15 USD)' },
    { name: 'ETH', desc: 'Ethereum(ERC20)', arrival: '≈ 5m 18s', fee: '3.8 USDT (~3.80 USD)' },
  ]

  const filtered = networks.filter((n) =>
    n.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white w-[90%] md:w-[600px] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Please Select a Deposit Network
          </h2>
          <button onClick={onClose} className="text-gray-500 cursor-pointer hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* Alert */}
        <div className="bg-amber-50 text-amber-800 text-sm flex items-start gap-3 px-6 py-3 border-b">
          <Info size={18} className="mt-[2px]" />
          <p>
            Make sure your selected crypto and deposit network match, or assets
            may be lost.
          </p>
        </div>

        {/* Search */}
        <div className="px-6 py-4 border-b">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search network"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Filter buttons */}
          <div className="flex items-center gap-2 mt-4 text-sm">
            <span className="text-gray-500">Sort by:</span>
            <button className="px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-50">
              Most popular
            </button>
            <button className="px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-50">
              Fastest
            </button>
            <button className="px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-50">
              Less confirmations
            </button>
          </div>
        </div>

        {/* Network List */}
        <div className="max-h-[350px] overflow-y-auto px-6 py-4 space-y-4">
          {filtered.map((item) => (
            <div
            onClick={() => onSelect(item.name)}
              key={item.name}
              className="flex items-center justify-between border-b pb-3 hover:bg-gray-50 rounded-lg transition cursor-pointer px-2"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p>
                  Expected Arrival <span className="font-medium">{item.arrival}</span>
                </p>
                <p className="text-gray-500">
                  Fee: <span className="font-medium">{item.fee}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
