import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import { Clients } from './Components/Clients'
import Community from './Components/Community'

export const App = () => {
  return (
   <>
   <Header/>
   <HeroSection/>
   <Clients/>
   <Community/>
   </>
  )
}
export default App
