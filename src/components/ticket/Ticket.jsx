'use client'
import { useState } from 'react'
import { ChevronDown, Copy } from 'lucide-react'

export default function TicketHistory() {
  const [selectedCoin, setSelectedCoin] = useState('Coins')

  const deposits = Array(10).fill({
    date: '13/03/24 - 20:54:29',
    coin: 'BTC',
    fullName: 'Bitcoin',
    amount: '1.2',
    record: '16asfzv6...hbdu12rex',
    remarks: '-',
  })

  return (
    <div className="min-w-6xl ml-6 mr-6 mx-auto p-6 bg-white rounded-2xl shadow-sm">
      {/* Header */}
      <div className=" mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">
          Tickets
        </h2>
        <p className='text-base text-[#353945]'>View all your submitted tickets and their statuses.</p>

          </div>
        {/* Filters */}
        <div className="flex flex-wrap justify-between mb-4">
            <div className='flex bg-[#F7F7F7]'>
          <select className="  px-3 py-2 text-gray-600 text-sm focus:outline-none">
            <option>9/30/2024</option>
          </select>
          

          <select className="  px-3 py-2 text-gray-600 text-sm focus:outline-none">
            <option>9/30/2024</option>
          </select>
          <p className='mt-1 ml-2'>|</p>
          <select
            className="  px-3 py-2 text-gray-600 text-sm focus:outline-none"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
          >
            <option>Coins</option>
            <option>BTC</option>
            <option>ETH</option>
          </select>
          </div>

          <button className="bg-red-500 flex hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
<path d="M12.17 14.4225C11.8858 14.8108 11.3808 15 10.625 15H3.125C1.81083 15 1.25 14.4392 1.25 13.125V3.125C1.25 1.81083 1.81083 1.25 3.125 1.25H7.5V3.125C7.5 5.14 8.61 6.25 10.625 6.25H12.5V8.125C12.5 8.47 12.78 8.75 13.125 8.75C13.47 8.75 13.75 8.47 13.75 8.125V5.625C13.75 5.45917 13.6842 5.3 13.5667 5.18333L8.56669 0.183334C8.44919 0.0658343 8.29083 0 8.125 0H3.125C1.11 0 0 1.11 0 3.125V13.125C0 15.14 1.11 16.25 3.125 16.25H10.625C11.7908 16.25 12.6508 15.8842 13.1791 15.1608C13.3825 14.8825 13.3226 14.4917 13.0442 14.2875C12.7642 14.0825 12.3742 14.145 12.17 14.4225ZM8.75 3.125V2.13417L11.6158 5H10.625C9.31083 5 8.75 4.43917 8.75 3.125ZM16.9 11.9L15.2334 13.5667C15.1117 13.6883 14.9517 13.75 14.7917 13.75C14.6317 13.75 14.4716 13.6892 14.35 13.5667C14.1058 13.3225 14.1058 12.9267 14.35 12.6825L14.95 12.0825H8.95833C8.61333 12.0825 8.33333 11.8025 8.33333 11.4575C8.33333 11.1125 8.61333 10.8325 8.95833 10.8325H14.9491L14.3492 10.2325C14.105 9.98834 14.105 9.5925 14.3492 9.34834C14.5933 9.10417 14.9892 9.10417 15.2334 9.34834L16.9 11.015C16.9575 11.0725 17.0032 11.1417 17.0349 11.2183C17.0982 11.3708 17.0982 11.5433 17.0349 11.6958C17.0032 11.7733 16.9575 11.8425 16.9 11.9Z" fill="white"/>
</svg>
            New Ticket
          </button>
        </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-[#E6E8EC] text-gray-700">
            <tr>
              <th className="py-3 px-4 font-semibold">Last Modified Date</th>
              <th className="py-3 px-4 font-semibold">ID</th>
              <th className="py-3 px-4 font-semibold">Title</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Rate</th>
              <th className="py-3 px-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((item, i) => (
              <tr
                key={i}
                className={`border-b hover:bg-gray-50 transition ${
                  i % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F7]'
                }`}
              >
                <td className="py-3 px-4 text-gray-700">{item.date}</td>
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {item.coin}
                  <div className="text-xs text-gray-500">{item.fullName}</div>
                </td>
                <td className="py-3 px-4 text-gray-700">{item.amount}</td>
                <td className="py-3 px-4 text-gray-700 flex items-center gap-2">
                  <Copy className="w-4 h-4 text-gray-500 cursor-pointer" />
                  <span>{item.record}</span>
                </td>
                <td className="py-3 px-4 text-gray-500">{item.remarks}</td>
                <td className="py-3 px-4">
                  <button className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 transition">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-5 text-gray-600">
        <button className="px-2 py-1 rounded hover:bg-gray-100">{'<'}</button>
        <button className="px-2 py-1 rounded bg-gray-100 font-medium">1</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">3</button>
        <span>...</span>
        <button className="px-2 py-1 rounded hover:bg-gray-100">30</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">{'>'}</button>
      </div>
    </div>
  )
}
