import React from 'react'
import Login from '../../../components/forgot-password/Login'
import Header from '../../../components/Header'
import LoginHeader from '../../../components/LoginHeader'
import Cta from '../../../components/Cta'
import Footer from '../../../components/Footer'
import ResetPassword from '../../../components/forgot-password/ResetPassword'

const page = () => {
  return (
    <>
    <div className='shadow-lg'>
    <Header text="black"/>
    </div>
    <LoginHeader/>
    
    <ResetPassword/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default page