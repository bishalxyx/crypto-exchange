'use client'
import Image from 'next/image';
import React from 'react';
import Logo1 from '../../../utils/images/Market Charts (3).png'
import Logo2 from '../../../utils/images/Market Charts.png'
const data = {
  ethGasPrice: 3.011588451,
  ethPriceUSD: 0.144,
  tradingVolume: 165.12,
  tradingChange: -24.71,
  trendingSectors: [
    { name: 'Memes', change: '+8.88%' },
    { name: 'AI', change: '+8.88%' },
    { name: 'Gaming (GameFi)', change: '+8.88%' },
    { name: 'RWA', change: '+8.88%' },
  ],
  topGainers: [
    { name: 'AAVE', price: '$45.56', change: '+8.88%' },
    { name: 'ANT', price: '$302.74', change: '+7.23%' },
    { name: 'ECA', price: '$0.24', change: '+6.59%' },
    { name: 'GAS', price: '$1.81', change: '+4.63%' },
  ],
  trending: [
    { name: 'NEO', price: '$223.15', change: '+0.17%' },
    { name: 'BTC', price: '$65,000', change: '+0.02%' },
    { name: 'RAP', price: '$35.18', change: '-4.21%' },
    { name: 'LEO', price: '$84.56', change: '+0.15%' },
  ],
  newListings: [
    { name: 'SNGLS', price: '$2.19', change: '-0.16%' },
    { name: 'STAK', price: '$0.015', change: '+2.12%' },
    { name: 'TNC', price: '$0.34', change: '+3.15%' },
    { name: 'PRL', price: '$1.51', change: '-0.18%' },
  ],
};

const MarketDashboard = () => {
  const Card = ({ title, children }) => (
    <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 flex-1">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <span className="text-sm text-gray-400 cursor-pointer">More ›</span>
      </div>
      {children}
    </div>
  );

  const Row = ({ name, price, change }) => (
    <div className="flex justify-between items-center text-sm py-2 border-b last:border-none">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-100 rounded-full" />
        <span className="font-medium">{name}</span>
      </div>
      <div className="text-gray-600">{price}</div>
      <div className={`font-medium ${change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change}</div>
    </div>
  );

  return (
    <div className="p-6 mr-26 bg-[#F7F7F7] min-h-screen flex flex-col gap-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Market Data */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-gray-800 mb-10">Market Data</h2>
          <div className="flex flex-col gap-4">
            <div className='flex justify-between'>
            <div>
              <p className="text-sm text-gray-500">Current ETH Gas Price</p>
              <p className="font-semibold text-gray-800">
                {data.ethGasPrice} <span className="text-gray-400">={data.ethPriceUSD} USD</span>
              </p>
              <p className="text-gray-400 text-sm">Gwei</p>
            </div>
            <Image src={Logo1} height={40} width={140} alt='logo'/>
            </div>
            <div className='flex justify-between mt-10 mb-10'>
            <div>
              <p className="text-sm text-gray-500">Trading Volume</p>
              <p className="font-semibold text-gray-800">
                {data.tradingVolume}B USDT{' '}
                <span className="text-red-500 text-sm">{data.tradingChange}%</span>
              </p>
            </div>
            <Image src={Logo2} height={40} width={140} alt='logo'/>
            </div>
          </div>
        </div>

        {/* Trending Sectors */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Trending Sectors</h2>
          <div className="divide-y">
            {data.trendingSectors.map((sector, idx) => (
              <div key={idx} className="flex justify-between py-2">
                <span>{sector.name}</span>
                <span className="text-green-500 font-medium">{sector.change} ↑</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 mt-12 md:grid-cols-3 gap-6">
        <Card title="Top Gainers">
          {data.topGainers.map((item, idx) => (
            <Row key={idx} {...item} />
          ))}
        </Card>
        <Card title="Trending">
          {data.trending.map((item, idx) => (
            <Row key={idx} {...item} />
          ))}
        </Card>
        <Card title="New Listings">
          {data.newListings.map((item, idx) => (
            <Row key={idx} {...item} />
          ))}
        </Card>
      </div>
    </div>
  );
};

export default MarketDashboard;
