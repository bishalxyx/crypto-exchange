'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

const cryptoList = [
  { id: 1, name: 'ADA', fullName: 'Cardano', amount: 100.0, value: 1523.5, icon: '/icons/ada.svg' },
  { id: 2, name: 'ETH', fullName: 'Ethereum', amount: 2.0, value: 133.5, icon: '/icons/eth.svg' },
  { id: 3, name: 'BTC', fullName: 'Bitcoin', amount: 1.0, value: 400.5, icon: '/icons/btc.svg' },
  { id: 4, name: 'DOGE', fullName: 'Dogecoin', amount: 150.0, value: 800.7, icon: '/icons/doge.svg' },
  { id: 5, name: 'NLG', fullName: 'Gulden', amount: 100.0, value: 740.3, icon: '/icons/nlg.svg' },
]

export default function SelectCryptoModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('All')
  const [search, setSearch] = useState('')

  const filteredList = cryptoList.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.fullName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-[420px] p-5 shadow-xl relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Select Crypto to Withdraw</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className="border-t border-gray-200 my-3" />

        {/* Search Bar */}
        <div className="bg-gray-100 rounded-lg flex items-center px-3 py-2">
          <input
            type="text"
            placeholder="Search crypto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 mb-3">
          {['Recent', 'All', 'Favorite'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm rounded-md border transition ${
                activeTab === tab
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Crypto List */}
        <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-1">
          {filteredList.map((crypto) => (
            <div
              key={crypto.id}
              className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-1 cursor-pointer transition"
            >
              <div className="flex items-center gap-3">
                <img src={crypto.icon} alt={crypto.name} className="w-7 h-7" />
                <div>
                  <p className="font-medium text-gray-900">{crypto.name}</p>
                  <p className="text-sm text-gray-500">{crypto.fullName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{crypto.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">= {crypto.value.toFixed(2)} USDT</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
