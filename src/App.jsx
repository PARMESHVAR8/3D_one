import React from 'react'
import {Routes , Route } from 'react-router-dom'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
<Route path='/' element={<HeroSection/>} />
      </Routes>
    </div>
  )
}

export default App