import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import { Clients } from './Components/Clients'
import Community from './Components/Community'
import About from './Components/About'

export const App = () => {
  return (
   <>
   <Header/>
   <HeroSection/>
   <Clients/>
   <Community/>
   <About/>
   </>
  )
}
export default App
