import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';


const App = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      {/* <div className='h-dvh bg-black'></div> */}
      <About />
      <Art />
    </main>
  )
}

export default App