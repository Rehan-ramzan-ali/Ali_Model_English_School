import React from 'react'
import Header from './Component/header'
import Hero from './Component/Hero'
import HomePage from './pages/Home'
import Footer from './pages/Footer'
import FloatingSocials from './Component/icon'
import Navbar from './Component/Navibar'
import RouterPage from './RouterPage'
import Programme from './Expentfile/Programing'

const App = () => {
  return (
    <div>
      
      <Header/>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <RouterPage/>
      {/* <Programme/> */}
      {/* <HomePage/> */}
      <FloatingSocials/>
      <Footer/>
    </div>
  )
}

export default App
