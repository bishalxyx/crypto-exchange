import React from 'react'
import Sidebar from '../../../components/deposit/Sidebar'
import Header from '../../../components/Header'
import Cta from '../../../components/Cta'
import Footer from '../../../components/Footer'
const layout = ({children}) => {
  return (
    <>
     <div className='bg-[#F7F7F7]'>
        <div className='bg-white'>
        <Header text='black'/>
        </div>
        <div className='mt-6 flex '>
        <Sidebar/>
        {children}
        </div>
        <Cta/>
        <Footer/>
        </div>
        </>
  )
}

export default layout