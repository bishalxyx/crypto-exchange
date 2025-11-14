'use client';
import { useState } from 'react';
import { Bell, Wallet, ShieldAlert, ArrowDownCircle, AlertTriangle, Newspaper, Gift } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function NotificationsPage() {
  const [filters, setFilters] = useState(['Security', 'Deposit', 'Withdrawals', 'News']);

  const allFilters = ['Security', 'Wallet', 'Trade', 'Deposit', 'Withdrawals', 'News'];
  const [expanded, setExpanded] = useState(null); // store which card is expanded

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  const toggleFilter = (filter) => {
    setFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const selectAll = () => setFilters(allFilters);
  const deselectAll = () => setFilters([]);

  const notifications = [
    {
      id: 1,
      icon: <ShieldAlert className="text-green-600 w-5 h-5" />,
      title: 'Transaction Confirmed',
      date: '2021-03-10 • 20:19:15',
      content:
        'Your Bitcoin transaction of 0.5 BTC has been successfully confirmed. you can see full detail on history page.',
      category: 'Deposit',
    },
    {
      id: 2,
      icon: <Gift className="text-pink-500 w-5 h-5" />,
      title: 'Referral Bonus Earned',
      date: '2021-03-10 • 20:19:15',
      content:
        "Congratulations! You've earned a referral bonus. Thank you for inviting your friends! Check your account balance for the updated amount.",
      category: 'Wallet',
    },
    {
      id: 3,
      icon: <Bell className="text-yellow-500 w-5 h-5" />,
      title: 'New Login Request Detected',
      date: '2021-03-10 • 20:19:15',
      content:
        "We've detected a new login request from an unrecognized device or location. If this was you, no action is needed. If not, please secure your account.",
      category: 'Security',
    },
    {
      id: 4,
      icon: <ArrowDownCircle className="text-gray-500 w-5 h-5" />,
      title: 'System Downtime Alert',
      date: '2021-03-10 • 20:19:15',
      content:
        'Our platform will be temporarily unavailable due to unexpected server issues. We are working to restore services as quickly as possible. Thank you for your patience. Our platform will be temporarily unavailable due to unexpected server issues. We are working to restore services as quickly as possible. Thank you for your patience.',
      category: 'News',
    },
    {
      id: 5,
      icon: <AlertTriangle className="text-yellow-600 w-5 h-5" />,
      title: 'Margin Call Alert',
      date: '2021-03-10 • 20:19:15',
      content:
        "Your account’s margin level has dropped below the required threshold of 30%, and you are at risk of liquidation. To maintain your open positions, please add funds to your account or reduce your exposure. Failure to do so may result in automatic liquidation of your positions to cover the shortfall.",
      category: 'Trade',
    },
  ];

  return (
    <div className="ml-6 min-w-6xl bg-white px-8 mb-13  rounded-2xl py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-10">Notifications</h1>

      <div className="flex flex-col md:flex-row gap-1 ">
        {/* Left Side – Notifications */}
        <div className="flex-1 space-y-4">
          {notifications.map((note) => {
        const isExpanded = expanded === note.id;
        return (
          <div
            key={note.id}
            className="flex items-start max-w-2xl gap-4 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="flex-shrink-0 mt-1">{note.icon}</div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between mb-2 items-center gap-2">
                <div className='flex mb-2 items-center gap-2'>
                <h3 className="font-semibold text-gray-800">{note.title}</h3>
                <span className="text-red-500 text-xs">●</span>
                </div>
                <button
                onClick={() => toggleExpand(note.id)}
                className="flex items-center gap-1 mt-2 text-xs text-blue-600 hover:underline"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    <ChevronDown size={14} />
                  </>
                )}
              </button>
              </div>

              <p className="text-xs text-gray-400 mb-3">{note.date}</p>

              <p
                className={`text-sm text-gray-600 transition-all duration-200 ${
                  isExpanded ? 'line-clamp-none' : 'line-clamp-2'
                }`}
              >
                {note.content}
              </p>

              {/* Expand/Collapse Button */}
             
            </div>
          </div>
        );
      })}

          <div className="flex justify-center mt-6">
            <button className="px-5 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100 transition">
              Load more
            </button>
          </div>
        </div>

        {/* Right Side – Filters */}
        <div className="md:w-64 w-90 h-72 mr-30  md:pl-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-800 font-medium">Filters</h2>
            <div className="flex gap-2">
              <button onClick={selectAll} className="text-xs px-2 py-1 border rounded hover:bg-gray-100">
                Select all
              </button>
              <button onClick={deselectAll} className="text-xs px-2 py-1 border rounded hover:bg-gray-100">
                Deselect all
              </button>
            </div>
          </div>

          <div className="border-t-2 border-[#353945#3] pt-3 space-y-2">
            {allFilters.map((filter) => (
              <label key={filter} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={filters.includes(filter)}
                  onChange={() => toggleFilter(filter)}
                  className="accent-red-500"
                />
                {filter}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
