import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import { Clients } from './Components/Clients'
import Community from './Components/Community'
import About from './Components/About'
import Achievements from './Components/Achievements'

export const App = () => {
  return (
   <>
   <Header/>
   <HeroSection/>
   <Clients/>
   <Community/>
   <About/>
   <Achievements/>
   </>
  )
}
export default App
