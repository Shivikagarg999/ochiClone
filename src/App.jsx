import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Main from './components/Main'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
   <div className='w-full bg-zinc-900 min-h-screen text-white'>
    <Navbar/>
    <Landing/>
    <Marquee/>
    <Main/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Footer/>
   </div>
  )
}

export default App