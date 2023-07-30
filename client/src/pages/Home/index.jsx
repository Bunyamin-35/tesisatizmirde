import React from 'react'
import Navbar from '../../components/Navbar/index.jsx';
import Hero from '../../components/Hero/index.jsx';
import About from "../../components/About/index.jsx"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About />
    </div>
  )
}

export default Home;