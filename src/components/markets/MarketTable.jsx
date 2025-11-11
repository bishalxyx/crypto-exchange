'use client'
import { useState } from 'react';
import Logo from '../../../utils/images/Market Charts (1).png'
import Logo1 from '../../../utils/images/Market Charts.png'
import Image from 'next/image';
import Link from 'next/link';
const marketData = [
    { pair: 'BTC/USDT', name: 'Bitcoin', price: '$65,230.56', change: '+8.88%', cap: '$1,149,301,700,874', volume: '$37,169,951,326', base: '638,587 BTC', trend: 'up' },
    { pair: 'ETH/USDT', name: 'Ethereum', price: '$2,540.74', change: '+1.32%', cap: '$283,122,954,710', volume: '$14,986,278,893', base: '6,351,195 ETH', trend: 'up' },
    { pair: 'Tron/USDT', name: 'Tron', price: '$0.1637', change: '-2.08%', cap: '$14,154,817,051', volume: '$37,169,951,326', base: '638,587 TRX', trend: 'down' },
    { pair: 'BNB/USDT', name: 'Binance Coin', price: '$593.40', change: '-0.03%', cap: '$86,563,297,643', volume: '$37,169,951,326', base: '898,587 BNB', trend: 'neutral' },
    { pair: 'XRP/USDT', name: 'Ripple', price: '$0.5256', change: '+1.06%', cap: '$29,437,532,642', volume: '$37,169,951,326', base: '638,587 XRP', trend: 'up' },
    { pair: 'DOGE/USDT', name: 'Dogecoin', price: '$0.1453', change: '-1.64%', cap: '$21,324,662,756', volume: '$37,169,951,326', base: '638,587 DOGE', trend: 'down' },
    { pair: 'LTC/USDT', name: 'Litecoin', price: '$70.92', change: '+0.20%', cap: '$5,321,168,478', volume: '$37,169,951,326', base: '638,587 LTC', trend: 'up' },
    { pair: 'ONT/USDT', name: 'Ontology Token', price: '$56,878.27', change: '-0.23%', cap: '$158,621,084', volume: '$37,169,951,326', base: '638,587 ONT', trend: 'down' },
    { pair: 'ADA/USDT', name: 'Cardano', price: '$0.3391', change: '-3.11%', cap: '$11,862,872,392', volume: '$37,169,951,326', base: '638,587 ADA', trend: 'down' },
    { pair: 'ZIL/USDT', name: 'Zilliqa', price: '$0.01406', change: '+4.43%', cap: '$268,485,123', volume: '$37,169,951,326', base: '638,587 ZIL', trend: 'up' },
];

export default function MarketTable() {
    const [search, setSearch] = useState('');

    const filtered = marketData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.pair.toLowerCase().includes(search.toLowerCase())
    );

    const Button = ({ label, active }) => (
        <button
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${active
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
        >
            {label}
        </button>
    );

    const TrendLine = ({ trend }) => {
        const path =
            trend === 'up'
                ? Logo1
                : Logo

        return (
            <Image src={path} height={24} width={77} alt='logo' />
        );
    };

    return (
        <div className="p-6 bg-[#F7F7F7] mr-26 -mt-35  min-h-screen">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Markets</h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center justify-between mb-5">
                <div className="flex flex-wrap gap-2">
                    <Button label="All" active />
                    <Button label="New Listings" />
                    <Button label="Favorites" />
                    <Button label="Spot" />
                    <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm">
                        <option>USDT</option>
                        <option>BTC</option>
                        <option>ETH</option>
                    </select>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm w-56"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto   border border-gray-100">
                <table className="w-full text-sm">
                    <thead className="text-gray-500  text-left bg-white border-b">
                        <tr>
                            <th className="px-4 py-3">Pair</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">24h Change</th>
                            <th className="px-4 py-3">Market Cap</th>
                            <th className="px-4 py-3">24h Volume</th>
                            <th className="px-4 py-3">Chart</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((coin, i) => (
                            <tr
                                key={i}
                                className={`${i % 2 === 0 ? 'bg-[#F7F7F7]' : 'bg-white'
                                    } border-b last:border-none hover:bg-gray-50 transition`}
                            >

                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-100" />
                                        <div>
                                            <p className="font-medium text-gray-800">{coin.pair}</p>
                                            <p className="text-gray-400 text-xs">{coin.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-800">{coin.price}</td>
                                <td
                                    className={`px-4 py-3 font-medium ${coin.change.includes('-')
                                            ? 'text-red-500'
                                            : 'text-green-500'
                                        }`}
                                >
                                    {coin.change}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{coin.cap}</td>
                                <td className="px-4 py-3 text-gray-700">
                                    <p>{coin.volume}</p>
                                    <p className="text-xs text-gray-400">{coin.base}</p>
                                </td>
                                <td className="px-4 py-3">
                                    <TrendLine trend={coin.trend} />
                                </td>
                                <td className="px-4 py-3 flex gap-2">
                                    <Link href={`/details/${coin.name}`}>
                                    <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-xs hover:bg-gray-100">
                                        Details
                                    </button>
                                    </Link>
                                    <button className="px-3 py-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-600">
                                        Trade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 gap-2">
                <button className="px-2 py-1 rounded bg-gray-200 text-xs">{'<'}</button>
                {[1, 2, 3].map((n) => (
                    <button
                        key={n}
                        className={`px-3 py-1 rounded text-xs font-medium ${n === 1 ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
                            }`}
                    >
                        {n}
                    </button>
                ))}
                <span className="text-gray-400 text-sm">...</span>
                <button className="px-2 py-1 rounded bg-gray-200 text-xs">{'>'}</button>
            </div>
        </div>
    );
}
