import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';


const App = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App