import React from 'react'
// import  Login  from '../../../components/Login'
import Header from "../../../components/Header"
import LoginHeader from '../../../components/LoginHeader'
import Cta from '../../../components/Cta'
import Footer from '../../../components/Footer'
import EmailVerify from '../../../components/Email-Verify'
const page = () => {
  return (
    <>
    <div className='shadow-lg'>
    <Header text="black"/>
    </div>
    <LoginHeader/>
    
    <EmailVerify/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default page