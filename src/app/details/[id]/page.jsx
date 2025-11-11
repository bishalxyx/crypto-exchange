'use client'
import React from 'react'
import Header from '../../../components/Header'
import CryptoBuyCard from '../../../components/detailPage/DetailHeader'
import TradingMarketChart from '../../../components/detailPage/TradingMarket'
import CryptoDashboard from '../../../components/detailPage/MarketStatistic'
import AboutCoin from '../../../components/detailPage/AboutCoin'
import MarketTable from '../../../components/markets/MarketTable'
import Footer from '../../../components/Footer'

const Page = () => {
  return (
    <>
      {/* HEADER */}
      <div className="bg-white">
        <Header text="black" />
      </div>

      {/* MAIN CONTENT */}
      <main className="bg-[#F7F7F7] px-6 md:px-10 lg:px-20 py-8 space-y-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Markets</span>
          <span>{'>'}</span>
          <span className="text-[#FF3E54] font-medium">BTC/USDT</span>
        </div>

        {/* Top Section - Buy Card & Chart */}
        <CryptoBuyCard />
        <TradingMarketChart />

        {/* Market Stats Section */}
        <CryptoDashboard />

        {/* About Coin Section */}
        <AboutCoin />

        {/* Market Table Section */}
        <section className="pt-10 ml-30  mt-30">
          <MarketTable />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default Page
