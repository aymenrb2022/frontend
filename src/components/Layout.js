import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    
   <>
      <Header/>
      <Outlet/>
      <Footer/>
      <ToastContainer/>
   </>
  )
}

export default Layout