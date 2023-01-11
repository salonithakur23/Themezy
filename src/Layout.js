import React from 'react'
import Header from './components/Header/Navbar'
import MainHeader from './components/MainHeader/MainNavbar'
import Fotter from './components/Footer/footer'
import {TextFooter} from './components/Footer/utill.js'

const Layout = ({children}) => {
  return (
    <>
    <MainHeader />
    <Header />
    {children}
    <Fotter TextFooter={TextFooter}/>
    </>
  )
}

export default Layout