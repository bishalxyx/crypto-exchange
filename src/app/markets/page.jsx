
// import React, { useState } from 'react'
import Header from '../../components/Header'
import BuyCrypto from '../../components/BuyCrypto'
import Cta from "../../components/Cta";
import Footer from '../../components/Footer'
import ConfirmPayment from '../../components/ConfirmPayment';
import MarketDashboard from '../../components/markets/MarketData';
import MarketTable from '../../components/markets/MarketTable';
const page = () => {
  // const [buyCrypto,setBuyCrypto]=useState("buycrypto");
  return (
    <div className='bg-[#F7F7F7]'>
      <div className='bg-white'>
    <Header text="black"/>
    </div>
    <div className='pt-14 pl-27 '>
    <MarketDashboard/>
    <MarketTable/>
    </div>
    <Cta/>
    <Footer/>
    </div>
  )
}

export default page