import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar';

gsap.registerPlugin(SplitText, SplitText);
const App = () => {
  return (
    <main>
      <Navbar/>
    </main>
  )
}

export default App