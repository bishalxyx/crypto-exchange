
// import React, { useState } from 'react'
import Header from '../../components/Header'
import BuyCrypto from '../../components/BuyCrypto'
import Cta from "../../components/Cta";
import Footer from '../../components/Footer'
import ConfirmPayment from '../../components/ConfirmPayment';
const page = () => {
  // const [buyCrypto,setBuyCrypto]=useState("buycrypto");
  return (
    <div className='bg-[#F7F7F7]'>
    <Header text="black"/>
    <BuyCrypto/>
    
    <Cta/>
    <Footer/>
    </div>
  )
}

export default page